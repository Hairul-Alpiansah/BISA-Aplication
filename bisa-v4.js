/* =========================================================
   BISA v4 — progres terpadu, latihan sesuai modul, streak absensi,
   waktu belajar real-time, notifikasi, level berbasis progres,
   dan sinkronisasi aktivitas iframe modul.
   ========================================================= */
(() => {
  const V4 = window.BISA_MODULE_CURRICULUM || {};
  const ATTENDANCE_KEY = 'bisa_attendance_v1';
  const PASSING_SCORE = 75;
  const MODULE_CHAPTERS = 5;
  let lastInteractionAt = Date.now();
  let lastTickAt = Date.now();
  let currentConceptSubject = null;
  let notificationPanel = null;

  const isTeacher = () => (currentUser?.role || 'student') === 'teacher';
  const isStudent = () => !!currentUser && !isTeacher();
  const gradesFor = level => level === 'SMA' ? ['X','XI','XII'] : ['VII','VIII','IX'];
  const subjectsFor = (level, grade) => Object.keys(V4?.[level]?.[grade] || {});
  const chaptersFor = (level, grade, subject) => V4?.[level]?.[grade]?.[subject] || [];
  const chapterFor = (level, grade, subject, index) => chaptersFor(level, grade, subject)[index] || null;
  const topicTitle = topic => typeof topic === 'string' ? topic : topic?.title || 'Topik';
  const topicBody = topic => typeof topic === 'string' ? '' : topic?.body || '';

  const todayKey = (date = new Date()) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };
  const addDays = (date, amount) => {
    const d = new Date(date);
    d.setDate(d.getDate() + amount);
    return d;
  };
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
  const shuffle = arr => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const textOnly = html => String(html || '')
    .replace(/<br\s*\/?\s*>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const sentence = value => {
    const clean = textOnly(value);
    const first = clean.split(/(?<=[.!?])\s+/)[0] || clean;
    return first.length > 160 ? `${first.slice(0, 157)}…` : first;
  };
  const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));

  function ensureState() {
    if (!state || !isStudent()) return;
    state.openedSubtopics = Array.isArray(state.openedSubtopics) ? state.openedSubtopics : [];
    state.questionHistory = Array.isArray(state.questionHistory) ? state.questionHistory : [];
    state.studyByDate = state.studyByDate && typeof state.studyByDate === 'object' ? state.studyByDate : {};
    state.notifications = Array.isArray(state.notifications) ? state.notifications : [];
    state.notifiedAchievements = Array.isArray(state.notifiedAchievements) ? state.notifiedAchievements : [];
    state.lastStudiedAt = state.lastStudiedAt || null;
    state.lastLearning = state.lastLearning || null;
    state.streak = attendanceStreak();
    state.xp = Math.max(0, Number(state.xp || 0));
    migrateModuleCompletionsToOpenedTopics();
    saveState();
  }

  function attendanceRows() {
    try {
      const rows = JSON.parse(localStorage.getItem(ATTENDANCE_KEY) || '[]');
      return Array.isArray(rows) ? rows : [];
    } catch { return []; }
  }

  function attendanceForDate(dateKey) {
    if (!currentUser) return null;
    return attendanceRows().find(r => r.userId === currentUser.id && r.date === dateKey) || null;
  }

  function attendanceStreak() {
    if (!currentUser || isTeacher()) return 0;
    const rows = attendanceRows().filter(r => r.userId === currentUser.id && r.status === 'Hadir');
    const present = new Set(rows.map(r => r.date));
    let cursor = new Date();
    if (!present.has(todayKey(cursor))) cursor = addDays(cursor, -1);
    let count = 0;
    while (present.has(todayKey(cursor)) && count < 365) {
      count++;
      cursor = addDays(cursor, -1);
    }
    return count;
  }

  function topicKey(level, grade, subject, chapterIndex, topicIndex) {
    return `${level}|${grade}|${subject}|topic|${chapterIndex}|${topicIndex}`;
  }

  function openedTopics(level = state.level, grade = state.grade, subject = null) {
    const prefix = subject ? `${level}|${grade}|${subject}|topic|` : `${level}|${grade}|`;
    return (state.openedSubtopics || []).filter(key => String(key).startsWith(prefix) && (!subject || String(key).includes('|topic|')));
  }

  function totalTopics(level = state.level, grade = state.grade, subject = null) {
    const subjects = subject ? [subject] : subjectsFor(level, grade);
    return subjects.reduce((sum, s) => sum + chaptersFor(level, grade, s).reduce((n, c) => n + (c.topics?.length || 0), 0), 0);
  }

  function markChapterOpened(level, grade, subject, chapterIndex, source = 'module') {
    if (!isStudent()) return;
    const chapter = chapterFor(level, grade, subject, chapterIndex);
    if (!chapter) return;
    ensureState();
    const before = state.openedSubtopics.length;
    (chapter.topics || []).forEach((_, topicIndex) => {
      const key = topicKey(level, grade, subject, chapterIndex, topicIndex);
      if (!state.openedSubtopics.includes(key)) state.openedSubtopics.push(key);
    });
    state.lastLearning = {
      level, grade, subject, chapterIndex,
      title: chapter.title,
      source,
      at: new Date().toISOString()
    };
    touchStudyActivity();
    if (state.openedSubtopics.length > before) {
      addNotification('Subbab terbuka', `${chapter.title}: ${chapter.topics.length} subbab tercatat pada progres.`);
    }
    saveState();
    rerenderStudentViews();
  }

  function migrateModuleCompletionsToOpenedTopics() {
    if (!Array.isArray(state.completedLessons)) return;
    let changed = false;
    state.completedLessons.forEach(key => {
      const parts = String(key).split('|');
      const moduleAt = parts.indexOf('module');
      if (moduleAt < 0) return;
      const level = parts[0], grade = parts[1], subject = parts[2];
      const raw = parts[moduleAt + 1] || '';
      const rawParts = raw.split('-');
      const indexGuess = Number(rawParts[rawParts.length - 1]);
      const chapterIndex = Number.isFinite(indexGuess) ? indexGuess : 0;
      const chapter = chapterFor(level, grade, subject, chapterIndex);
      if (!chapter) return;
      chapter.topics.forEach((_, topicIndex) => {
        const tKey = topicKey(level, grade, subject, chapterIndex, topicIndex);
        if (!state.openedSubtopics.includes(tKey)) {
          state.openedSubtopics.push(tKey);
          changed = true;
        }
      });
    });
    if (changed) saveState();
  }

  function getQuestionCount(level = state.level, grade = state.grade, subject = null) {
    const items = state.questionHistory || [];
    return items.filter(x => x.level === level && x.grade === grade && (!subject || x.subject === subject)).length;
  }

  function averageScore(level = state.level, grade = state.grade) {
    const items = (state.questionHistory || []).filter(x => x.level === level && x.grade === grade && typeof x.correct === 'boolean');
    if (!items.length) return 0;
    return Math.round(items.filter(x => x.correct).length / items.length * 100);
  }

  function subjectProgress(level = state.level, grade = state.grade, subject = state.subject) {
    const total = totalTopics(level, grade, subject);
    const opened = openedTopics(level, grade, subject).length;
    const chapterCount = chaptersFor(level, grade, subject).length || MODULE_CHAPTERS;
    const questionTarget = chapterCount * 20;
    const questionDone = Math.min(questionTarget, getQuestionCount(level, grade, subject));
    const reading = total ? opened / total * 100 : 0;
    const practice = questionTarget ? questionDone / questionTarget * 100 : 0;
    return Math.round(reading * 0.7 + practice * 0.3);
  }

  function overallProgress(level = state.level, grade = state.grade) {
    const subjects = subjectsFor(level, grade);
    if (!subjects.length) return 0;
    return Math.round(subjects.reduce((sum, s) => sum + subjectProgress(level, grade, s), 0) / subjects.length);
  }

  getSubjectProgress = subjectProgress;
  getOverallMastery = () => overallProgress(state.level, state.grade);

  function progressLevel() {
    const progress = overallProgress();
    return clamp(1 + Math.floor(progress / 10), 1, 10);
  }

  function touchStudyActivity() {
    if (!isStudent()) return;
    lastInteractionAt = Date.now();
    state.lastStudiedAt = new Date().toISOString();
    saveState();
  }

  function addStudySeconds(seconds) {
    if (!isStudent() || seconds <= 0) return;
    const key = todayKey();
    state.studyByDate[key] = Math.max(0, Number(state.studyByDate[key] || 0)) + seconds;
    state.lastStudiedAt = new Date().toISOString();
    saveState();
  }

  function relativeTime(iso) {
    if (!iso) return 'belum belajar';
    const diff = Math.max(0, Date.now() - new Date(iso).getTime());
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'baru saja';
    if (mins < 60) return `${mins} menit lalu`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours} jam lalu`;
    const days = Math.floor(hours / 24);
    return `${days} hari lalu`;
  }

  function studySecondsLastDays(days = 7) {
    let total = 0;
    for (let i = 0; i < days; i++) total += Number(state.studyByDate[todayKey(addDays(new Date(), -i))] || 0);
    return total;
  }

  function formatDuration(seconds) {
    const totalMins = Math.floor(seconds / 60);
    const h = Math.floor(totalMins / 60);
    const m = totalMins % 60;
    if (h) return `${h}j ${m}m`;
    return `${m}m`;
  }

  function dailyTargetData() {
    const date = todayKey();
    const topics = new Set((state.openedSubtopics || []).filter(k => {
      // Topik yang baru dibuka hari ini disimpan melalui aktivitas. Untuk data migrasi lama,
      // target harian tidak dianggap selesai otomatis.
      return state.topicActivity?.[k] === date;
    }));
    const questions = (state.questionHistory || []).filter(x => x.date === date).length;
    return { topics: topics.size, questions };
  }

  function markTopicActivity(level, grade, subject, chapterIndex, topicIndex) {
    state.topicActivity = state.topicActivity && typeof state.topicActivity === 'object' ? state.topicActivity : {};
    state.topicActivity[topicKey(level, grade, subject, chapterIndex, topicIndex)] = todayKey();
  }

  const originalMarkChapterOpened = markChapterOpened;
  markChapterOpened = function(level, grade, subject, chapterIndex, source = 'module') {
    const chapter = chapterFor(level, grade, subject, chapterIndex);
    if (chapter) chapter.topics.forEach((_, i) => markTopicActivity(level, grade, subject, chapterIndex, i));
    return originalMarkChapterOpened(level, grade, subject, chapterIndex, source);
  };

  function addNotification(title, message, type = 'info') {
    if (!isStudent()) return;
    ensureState();
    const item = { id: `n_${Date.now()}_${Math.random().toString(36).slice(2,7)}`, title, message, type, at: new Date().toISOString() };
    state.notifications.unshift(item);
    state.notifications = state.notifications.slice(0, 30);
    saveState();
    const dot = document.querySelector('.notification-dot');
    if (dot) dot.style.display = '';
    toast(`${title}: ${message}`);
  }

  function ensureNotificationPanel() {
    if (notificationPanel) return notificationPanel;
    notificationPanel = document.createElement('div');
    notificationPanel.id = 'v4NotificationPanel';
    notificationPanel.className = 'v4-notification-panel';
    notificationPanel.hidden = true;
    document.body.appendChild(notificationPanel);
    return notificationPanel;
  }

  function toggleNotifications() {
    const panel = ensureNotificationPanel();
    const items = state.notifications || [];
    panel.innerHTML = `<div class="v4-notification-head"><strong>Notifikasi Belajar</strong><button type="button" id="closeNotifPanel">×</button></div>${items.length ? items.slice(0,8).map(n => `<article><strong>${escapeHtml(n.title)}</strong><p>${escapeHtml(n.message)}</p><small>${relativeTime(n.at)}</small></article>`).join('') : '<p class="empty-copy">Belum ada notifikasi.</p>'}`;
    panel.hidden = !panel.hidden;
    if (!panel.hidden) {
      const dot = document.querySelector('.notification-dot');
      if (dot) dot.style.display = 'none';
    }
    panel.querySelector('#closeNotifPanel')?.addEventListener('click', () => { panel.hidden = true; });
  }

  function achievementDefinitions() {
    const streak = attendanceStreak();
    const avg = averageScore();
    const opened = openedTopics(state.level, state.grade).length;
    const questions = getQuestionCount();
    const prog = overallProgress();
    return [
      ['first-topic','📘','Langkah Pertama','Membuka subbab pertama', opened >= 1],
      ['ten-questions','🎯','10 Soal','Mengerjakan 10 soal', questions >= 10],
      ['pass-score','⭐','Nilai Tuntas',`Rata-rata mencapai ${PASSING_SCORE}+`, avg >= PASSING_SCORE],
      ['three-streak','🔥','3 Hari Hadir','Absensi hadir 3 hari beruntun', streak >= 3],
      ['seven-streak','🏅','7 Hari Konsisten','Absensi hadir 7 hari beruntun', streak >= 7],
      ['half-progress','📈','Setengah Jalan','Mencapai progres 50%', prog >= 50],
      ['master-class','🏆','Tuntas Kelas','Mencapai progres 100%', prog >= 100]
    ];
  }

  function notifyNewAchievements() {
    if (!isStudent()) return;
    const notified = new Set(state.notifiedAchievements || []);
    achievementDefinitions().forEach(([id, icon, title, desc, unlocked]) => {
      if (unlocked && !notified.has(id)) {
        notified.add(id);
        addNotification(`${icon} Pencapaian baru`, `${title} — ${desc}`, 'success');
      }
    });
    state.notifiedAchievements = [...notified];
    saveState();
  }

  function renderLogoIdentity() {
    const avatar = document.getElementById('profileInitials');
    if (avatar) avatar.innerHTML = '<img src="assets/bisa-logo.svg" alt="Logo BISA">';
  }

  const oldRenderUserIdentity = renderUserIdentity;
  renderUserIdentity = function() {
    oldRenderUserIdentity();
    renderLogoIdentity();
  };

  renderWeekStrip = function() {
    const holder = document.getElementById('weekStrip');
    if (!holder || !isStudent()) return;
    const now = new Date();
    const day = now.getDay();
    const mondayOffset = day === 0 ? -6 : 1 - day;
    const monday = addDays(now, mondayOffset);
    const names = ['S','S','R','K','J','S','M'];
    holder.innerHTML = names.map((name, i) => {
      const date = addDays(monday, i);
      const rec = attendanceForDate(todayKey(date));
      const done = rec?.status === 'Hadir';
      return `<div class="week-day ${done ? 'done' : ''}" title="${todayKey(date)} • ${rec?.status || 'Belum absen'}"><span>${done ? '✓' : name}</span>${name}</div>`;
    }).join('');
  };

  renderDashboardSubjects = function() {
    const holder = document.getElementById('dashboardSubjects');
    if (!holder || !isStudent()) return;
    const level = state.level;
    const grade = state.grade;
    holder.innerHTML = subjectsFor(level, grade).map(subject => {
      const p = subjectProgress(level, grade, subject);
      return `<button class="subject-card" data-v4-subject="${escapeHtml(subject)}"><div><div class="subject-top"><div class="subject-symbol ${subjectClass(subject)}">${subjectIcon(subject)}</div><span class="progress-badge">${p}%</span></div><h3>${escapeHtml(subject)}</h3><p>${escapeHtml(chaptersFor(level, grade, subject)[0]?.desc || 'Materi interaktif sesuai kelas.')}</p></div><div class="subject-progress"><div class="progress-track"><span style="width:${p}%"></span></div></div></button>`;
    }).join('');
    holder.querySelectorAll('[data-v4-subject]').forEach(btn => btn.addEventListener('click', () => {
      state.subject = btn.dataset.v4Subject;
      state.lastLearning = { level, grade, subject: state.subject, chapterIndex: 0, title: chaptersFor(level, grade, state.subject)[0]?.title || state.subject, source: 'dashboard', at: new Date().toISOString() };
      touchStudyActivity();
      saveState();
      setView('learn');
    }));
  };


  renderRecommendations = function() {
    const holder = document.getElementById('recommendationList');
    if (!holder || !isStudent()) return;
    const recs = [
      ['✦','Kuis Cepat 50 Soal','Campuran acak sesuai kelas aktif','practice'],
      ['◎','Perkuat Konsep','50 soal fokus pada satu bab','practice'],
      ['↗','Lihat Progres','Pantau subbab, nilai, dan waktu belajar','progress']
    ];
    holder.innerHTML = recs.map(r=>`<button class="recommendation-item" data-rec-view="${r[3]}"><span class="mini-icon">${r[0]}</span><span><strong>${r[1]}</strong><small>${r[2]}</small></span><span>›</span></button>`).join('');
    holder.querySelectorAll('[data-rec-view]').forEach(btn=>btn.addEventListener('click',()=>setView(btn.dataset.recView)));
  };

  renderContinueCard = function() {
    const holder = document.getElementById('continueLearningCard');
    if (!holder || !isStudent()) return;
    const last = state.lastLearning || {
      level: state.level, grade: state.grade, subject: state.subject, chapterIndex: 0,
      title: chaptersFor(state.level, state.grade, state.subject)[0]?.title || state.subject
    };
    const chapter = chapterFor(last.level, last.grade, last.subject, Number(last.chapterIndex || 0));
    const p = subjectProgress(last.level, last.grade, last.subject);
    holder.innerHTML = `<button class="continue-card v4-last-learning" id="continueCardBtn"><div><span class="eyebrow">${escapeHtml(last.subject)} • KELAS ${escapeHtml(last.grade)}</span><h3>${escapeHtml(chapter?.title || last.title || 'Mulai belajar')}</h3><p>${last.at ? `Terakhir dibuka ${relativeTime(last.at)}` : 'Belum pernah dibuka'}</p><div class="progress-track"><span style="width:${p}%"></span></div><div class="progress-meta"><span>${p}% progres</span><span>${chapter?.topics?.length || 0} subbab</span></div></div><span class="continue-icon">${subjectIcon(last.subject)}</span></button>`;
    holder.querySelector('#continueCardBtn')?.addEventListener('click', () => {
      state.level = last.level; state.grade = last.grade; state.subject = last.subject; saveState(); setView('learn');
    });
  };

  const previousRenderDashboard = renderDashboard;
  renderDashboard = function() {
    previousRenderDashboard();
    if (!isStudent()) return;
    ensureState();
    renderLogoIdentity();
    const progress = overallProgress();
    const opened = openedTopics(state.level, state.grade).length;
    const avg = averageScore();
    const seconds = studySecondsLastDays(7);
    state.streak = attendanceStreak();
    document.getElementById('topXp').textContent = String(state.xp || 0);
    document.getElementById('streakValue').textContent = String(state.streak);
    document.getElementById('overallProgressStat').textContent = `${progress}%`;
    document.getElementById('completedLessonsStat').textContent = String(opened);
    document.getElementById('averageScoreStat').textContent = String(avg);
    document.getElementById('studyTimeStat').textContent = formatDuration(seconds);
    const progressTrend = document.getElementById('progressTrend'); if (progressTrend) progressTrend.textContent = `${getQuestionCount()} soal`;
    const lessonTrend = document.getElementById('lessonTrend'); if (lessonTrend) lessonTrend.textContent = `${totalTopics()} total subbab`;
    const scoreTrend = document.getElementById('scoreTrend'); if (scoreTrend) scoreTrend.textContent = avg >= PASSING_SCORE ? 'Tuntas' : (getQuestionCount() ? 'Perlu latihan' : 'Belum ada nilai');
    const timeTrend = document.getElementById('studyTimeTrend'); if (timeTrend) timeTrend.textContent = relativeTime(state.lastStudiedAt);
    const target = dailyTargetData();
    const targetEl = document.getElementById('dailyTargetSummary');
    if (targetEl) targetEl.innerHTML = `Target hari ini: <strong>${target.topics >= 1 ? '✓' : '○'} ${Math.min(target.topics,1)}/1 subbab &nbsp; ${target.questions >= 10 ? '✓' : '○'} ${Math.min(target.questions,10)}/10 soal</strong>`;
    renderWeekStrip();
    renderContinueCard();
    renderDashboardSubjects();
    saveState();
  };

  function optionPoolForChapter(level, grade, subject, chapterIndex) {
    const chapter = chapterFor(level, grade, subject, chapterIndex);
    const all = chaptersFor(level, grade, subject).flatMap(c => c.topics || []);
    const local = chapter?.topics || [];
    return { chapter, local, all };
  }

  function makeQuestion(q, options, answer, explanation, meta = {}) {
    return { q, options, answer, explanation, ...meta };
  }

  function shuffleQuestion(question) {
    const indexed = question.options.map((o, i) => ({o, correct:i === question.answer}));
    const mixed = shuffle(indexed);
    return { ...question, options:mixed.map(x => x.o), answer:mixed.findIndex(x => x.correct) };
  }

  function buildChapterQuestions(level, grade, subject, chapterIndex, desired = 60, onlyHots = false) {
    const { chapter, local, all } = optionPoolForChapter(level, grade, subject, chapterIndex);
    if (!chapter) return [];
    const otherChapters = chaptersFor(level, grade, subject).filter((_, i) => i !== chapterIndex);
    const questions = [];
    const add = (q, opts, answer, explanation, difficulty = 'basic') => {
      if (!q || !Array.isArray(opts) || opts.length < 4) return;
      questions.push(makeQuestion(q, opts.slice(0,4), answer, explanation, {level, grade, subject, chapterIndex, difficulty, topic: chapter.title}));
    };

    (chapter.seedQuiz || []).forEach(seed => {
      add(seed.q, seed.options, seed.answer, seed.explanation || `Soal ini membahas ${chapter.title}.`, 'seed');
    });

    const chapterNames = [chapter.title, ...otherChapters.map(c => c.title)];
    local.forEach((topic, topicIndex) => {
      const title = topicTitle(topic);
      const body = sentence(topicBody(topic)) || `${title} merupakan bagian dari pembahasan ${chapter.title}.`;
      const distractTopics = shuffle(all.filter(t => topicTitle(t) !== title)).slice(0,3);
      const bodyOptions = [body, ...distractTopics.map(t => sentence(topicBody(t)) || `Pernyataan tentang ${topicTitle(t)}.`)];
      const titleOptions = [title, ...distractTopics.map(topicTitle)];
      const chapterOptions = shuffle(chapterNames).slice(0,4);
      if (!chapterOptions.includes(chapter.title)) chapterOptions[0] = chapter.title;
      const correctChapterIndex = chapterOptions.indexOf(chapter.title);
      const templates = [
        [`Pernyataan yang paling tepat tentang “${title}” adalah ...`, bodyOptions, 0, body, 'basic'],
        [`Seorang siswa membuat ringkasan tentang “${title}”. Kalimat yang paling sesuai dimasukkan adalah ...`, bodyOptions, 0, body, 'basic'],
        [`Cuplikan materi berikut paling tepat menjelaskan konsep apa? “${body}”`, titleOptions, 0, `Cuplikan tersebut menjelaskan ${title}.`, 'analysis'],
        [`Topik “${title}” berada pada bab ...`, chapterOptions, correctChapterIndex, `${title} dibahas dalam bab ${chapter.title}.`, 'basic'],
        [`Saat meninjau bab “${chapter.title}”, konsep yang paling relevan dengan penjelasan “${body}” adalah ...`, titleOptions, 0, `Konsep yang dimaksud adalah ${title}.`, 'analysis'],
        [`Dalam diskusi kelas tentang “${chapter.title}”, kelompok diminta memverifikasi konsep “${title}”. Informasi yang paling tepat dijadikan dasar adalah ...`, bodyOptions, 0, body, 'hots'],
        [`Siswa menemukan contoh yang berkaitan dengan “${title}”. Untuk menjelaskan contoh itu secara ilmiah, ia perlu menggunakan gagasan bahwa ...`, bodyOptions, 0, body, 'hots'],
        [`Jika hasil pengamatan harus dikaitkan dengan salah satu subtopik pada bab “${chapter.title}”, deskripsi “${body}” mengarah pada ...`, titleOptions, 0, `Deskripsi itu sesuai dengan ${title}.`, 'hots'],
        [`Manakah pasangan konsep–penjelasan yang benar untuk materi “${chapter.title}”?`, [`${title} — ${body}`, ...distractTopics.map(t => `${topicTitle(t)} — ${body}`)], 0, `Pasangan yang benar adalah ${title} dengan penjelasan tersebut.`, 'analysis'],
        [`Guru memberi petunjuk: “${body}”. Jawaban konsep yang paling tepat adalah ...`, titleOptions, 0, `${title} sesuai dengan petunjuk tersebut.`, 'analysis'],
        [`Untuk menyelesaikan masalah yang berfokus pada “${title}”, siswa harus terlebih dahulu memahami bahwa ...`, bodyOptions, 0, body, 'hots'],
        [`Pernyataan “${body}” sebaiknya ditempatkan pada catatan subbab ...`, titleOptions, 0, `Pernyataan tersebut termasuk subbab ${title}.`, 'analysis'],
        [`Dalam proyek analisis bab “${chapter.title}”, data yang selaras dengan konsep “${title}” adalah data yang mendukung pernyataan ...`, bodyOptions, 0, body, 'hots'],
        [`Jika satu konsep pada bab “${chapter.title}” harus dipilih untuk menjelaskan “${body}”, pilihan paling tepat adalah ...`, titleOptions, 0, `${title} merupakan konsep yang paling sesuai.`, 'hots']
      ];
      templates.forEach(([q, opts, ans, exp, difficulty]) => add(q, opts, ans, exp, difficulty));
    });

    let pool = questions.filter((q, i, arr) => arr.findIndex(x => x.q === q.q) === i);
    if (onlyHots) pool = pool.filter(q => q.difficulty === 'hots' || q.difficulty === 'analysis');
    if (!pool.length) pool = questions;
    const expanded = [];
    let cycle = 0;
    while (expanded.length < desired && pool.length) {
      const shuffled = shuffle(pool);
      shuffled.forEach(q => {
        if (expanded.length >= desired) return;
        const variant = cycle ? { ...q, q: `${q.q} (variasi ${cycle + 1})` } : q;
        expanded.push(shuffleQuestion(variant));
      });
      cycle++;
    }
    return shuffle(expanded).slice(0, desired);
  }

  function mixedQuestions(level, grade, desired, hots = false) {
    let pool = [];
    subjectsFor(level, grade).forEach(subject => {
      chaptersFor(level, grade, subject).forEach((_, chapterIndex) => {
        pool.push(...buildChapterQuestions(level, grade, subject, chapterIndex, hots ? 16 : 24, hots));
      });
    });
    return shuffle(pool).slice(0, desired);
  }

  function bindPracticeControls() {
    const gradeSelect = document.getElementById('practiceGradeSelect');
    if (gradeSelect && !gradeSelect.dataset.boundV4) {
      gradeSelect.dataset.boundV4 = '1';
      gradeSelect.addEventListener('change', () => {
        state.grade = gradeSelect.value;
        const subjects = subjectsFor(state.level, state.grade);
        if (!subjects.includes(state.subject)) state.subject = subjects[0];
        currentConceptSubject = state.subject;
        saveState(); renderPractice(); renderDashboard(); renderProgress();
      });
    }
    const conceptSubject = document.getElementById('conceptSubjectSelect');
    if (conceptSubject && !conceptSubject.dataset.boundV4) {
      conceptSubject.dataset.boundV4 = '1';
      conceptSubject.addEventListener('change', () => { currentConceptSubject = conceptSubject.value; fillConceptChapters(); });
    }
  }

  function fillConceptChapters() {
    const subjectSelect = document.getElementById('conceptSubjectSelect');
    const chapterSelect = document.getElementById('conceptChapterSelect');
    if (!subjectSelect || !chapterSelect) return;
    const subject = currentConceptSubject || subjectSelect.value || state.subject;
    chapterSelect.innerHTML = chaptersFor(state.level, state.grade, subject).map((c, i) => `<option value="${i}">Bab ${i+1} • ${escapeHtml(c.title)}</option>`).join('');
  }

  renderPractice = function() {
    if (!isStudent()) return;
    ensureState();
    bindPracticeControls();
    const gradeSelect = document.getElementById('practiceGradeSelect');
    if (gradeSelect) {
      gradeSelect.innerHTML = gradesFor(state.level).map(g => `<option value="${g}">Kelas ${g}</option>`).join('');
      if (!gradesFor(state.level).includes(state.grade)) state.grade = gradesFor(state.level)[0];
      gradeSelect.value = state.grade;
    }
    const subjects = subjectsFor(state.level, state.grade);
    if (!subjects.includes(state.subject)) state.subject = subjects[0];
    if (!currentConceptSubject || !subjects.includes(currentConceptSubject)) currentConceptSubject = state.subject;
    const subjectFilter = document.getElementById('practiceSubjectFilter');
    if (subjectFilter) {
      subjectFilter.innerHTML = subjects.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('');
      subjectFilter.value = state.subject;
    }
    const conceptSubject = document.getElementById('conceptSubjectSelect');
    if (conceptSubject) {
      conceptSubject.innerHTML = subjects.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('');
      conceptSubject.value = currentConceptSubject;
    }
    fillConceptChapters();

    const chapters = chaptersFor(state.level, state.grade, state.subject);
    const holder = document.getElementById('practiceTopics');
    if (holder) {
      holder.innerHTML = chapters.map((chapter, i) => `<article class="topic-card"><span class="eyebrow">BAB ${i+1} • 20 SOAL</span><h3>${escapeHtml(chapter.title)}</h3><p>${chapter.topics.length} subbab • sesuai modul materi Kelas ${state.grade}</p><button class="secondary-button full" data-v4-bank-chapter="${i}">Kerjakan 20 Soal</button></article>`).join('');
      holder.querySelectorAll('[data-v4-bank-chapter]').forEach(btn => btn.addEventListener('click', () => {
        state.v4PracticeChapterIndex = Number(btn.dataset.v4BankChapter);
        startQuiz('chapter');
      }));
    }
  };

  selectQuestions = function(mode) {
    if (!isStudent()) return [];
    if (mode === 'quick') return mixedQuestions(state.level, state.grade, 50, false);
    if (mode === 'hots') return mixedQuestions(state.level, state.grade, 10, true);
    if (mode === 'adaptive') {
      const subject = document.getElementById('conceptSubjectSelect')?.value || state.subject;
      const chapterIndex = Number(document.getElementById('conceptChapterSelect')?.value || 0);
      state.subject = subject;
      return buildChapterQuestions(state.level, state.grade, subject, chapterIndex, 50, false);
    }
    if (mode === 'chapter') {
      const chapterIndex = Number(state.v4PracticeChapterIndex || 0);
      return buildChapterQuestions(state.level, state.grade, state.subject, chapterIndex, 20, false);
    }
    return mixedQuestions(state.level, state.grade, 10, false);
  };

  startQuiz = function(mode = 'quick') {
    if (!isStudent()) return;
    const questions = selectQuestions(mode);
    if (!questions.length) { toast('Soal untuk kelas ini belum tersedia.'); return; }
    quizSession = { mode, questions, index:0, selected:null, score:0, checked:false };
    touchStudyActivity();
    renderQuizQuestion();
    openModal('quizModal');
  };

  renderQuizQuestion = function() {
    const s = quizSession;
    if (!s) return;
    if (s.index >= s.questions.length) { renderQuizResult(); return; }
    const q = s.questions[s.index];
    const letters = ['A','B','C','D'];
    document.getElementById('quizModalContent').innerHTML = `<div class="quiz-top"><span class="eyebrow">${escapeHtml(q.subject || state.subject)} • KELAS ${escapeHtml(q.grade || state.grade)} • ${s.mode.toUpperCase()}</span><strong>Soal ${s.index+1} dari ${s.questions.length}</strong><div class="quiz-progress"><span style="width:${((s.index+1)/s.questions.length)*100}%"></span></div></div><div class="quiz-question"><h2>${escapeHtml(q.q)}</h2><div class="answer-list">${q.options.map((opt,i)=>`<button class="answer-option" data-answer="${i}"><span class="answer-letter">${letters[i]}</span><span>${escapeHtml(opt)}</span></button>`).join('')}</div><div id="quizFeedback"></div></div><div class="lesson-footer"><span></span><button class="primary-button" id="quizActionBtn" disabled>Periksa Jawaban</button></div>`;
    document.querySelectorAll('#quizModal [data-answer]').forEach(btn => btn.addEventListener('click', () => {
      if (s.checked) return;
      s.selected = Number(btn.dataset.answer);
      document.querySelectorAll('#quizModal .answer-option').forEach(o => o.classList.remove('selected'));
      btn.classList.add('selected');
      document.getElementById('quizActionBtn').disabled = false;
    }));
    document.getElementById('quizActionBtn').addEventListener('click', () => {
      if (!s.checked) checkQuizAnswer();
      else { s.index++; s.selected = null; s.checked = false; renderQuizQuestion(); }
    });
  };

  checkQuizAnswer = function() {
    const s = quizSession;
    if (!s || s.checked) return;
    const q = s.questions[s.index];
    s.checked = true;
    document.querySelectorAll('#quizModal .answer-option').forEach(btn => {
      const i = Number(btn.dataset.answer);
      if (i === q.answer) btn.classList.add('correct');
      if (i === s.selected && i !== q.answer) btn.classList.add('wrong');
    });
    const correct = s.selected === q.answer;
    if (correct) s.score++;
    state.questionHistory.push({
      id:`q_${Date.now()}_${s.index}_${Math.random().toString(36).slice(2,6)}`,
      date:todayKey(), at:new Date().toISOString(), correct,
      mode:s.mode, level:q.level || state.level, grade:q.grade || state.grade,
      subject:q.subject || state.subject, chapterIndex:Number(q.chapterIndex || 0), question:q.q
    });
    state.questionHistory = state.questionHistory.slice(-1500);
    state.xp += correct ? 2 : 1;
    touchStudyActivity();
    saveState();
    document.getElementById('quizFeedback').innerHTML = `<div class="quiz-feedback"><strong>${correct ? '✓ Jawaban benar' : 'Belum tepat'}</strong><p>${escapeHtml(q.explanation || 'Pelajari kembali konsep pada bab terkait.')}</p></div>`;
    document.getElementById('quizActionBtn').textContent = s.index === s.questions.length - 1 ? 'Lihat Hasil' : 'Soal Berikutnya';
  };

  renderQuizResult = function() {
    const s = quizSession;
    if (!s) return;
    const percent = Math.round(s.score / s.questions.length * 100);
    state.scores.push(percent);
    state.scores = state.scores.slice(-100);
    const xpGain = Math.max(5, Math.round(s.score * 0.5));
    state.xp += xpGain;
    touchStudyActivity();
    saveState();
    const passed = percent >= PASSING_SCORE;
    document.getElementById('quizModalContent').innerHTML = `<div class="quiz-result"><span class="eyebrow">LATIHAN SELESAI</span><h2>${passed ? 'Target nilai berhasil dicapai.' : 'Belum memenuhi standar nilai.'}</h2><div class="score-circle"><strong>${percent}</strong></div><div class="score-grid"><div><small>Benar</small><strong>${s.score}/${s.questions.length}</strong></div><div><small>Standar</small><strong>${PASSING_SCORE}</strong></div><div><small>XP</small><strong>+${xpGain}</strong></div></div><p>${passed ? 'Bagus. Lanjutkan ke latihan berikutnya untuk menjaga konsistensi.' : 'Tinjau kembali materi bab yang masih salah, lalu coba lagi.'}</p><div class="hero-actions" style="justify-content:center"><button class="secondary-button" data-close-modal="quizModal">Selesai</button><button class="primary-button" id="retryQuizBtn">Acak Soal Lagi</button></div></div>`;
    document.querySelector('#quizModal [data-close-modal="quizModal"]')?.addEventListener('click', () => closeModal('quizModal'));
    document.getElementById('retryQuizBtn')?.addEventListener('click', () => startQuiz(s.mode));
    addNotification(passed ? '✓ Latihan berhasil' : '✦ Latihan perlu diulang', `Nilai ${percent}. Standar ketuntasan ${PASSING_SCORE}.`, passed ? 'success' : 'warning');
    notifyNewAchievements();
    renderDashboard(); renderProgress(); renderAchievements();
  };

  renderProgress = function() {
    if (!isStudent()) return;
    ensureState();
    const mastery = overallProgress();
    const ring = document.getElementById('masteryRing');
    const percent = document.getElementById('masteryPercent');
    if (percent) percent.textContent = `${mastery}%`;
    if (ring) ring.style.setProperty('--value', mastery);
    const chart = document.getElementById('studyChart');
    const labels = ['H-6','H-5','H-4','H-3','H-2','Kemarin','Hari ini'];
    const values = [];
    for (let i = 6; i >= 0; i--) values.push(Math.round(Number(state.studyByDate[todayKey(addDays(new Date(), -i))] || 0) / 60));
    const max = Math.max(1, ...values);
    if (chart) chart.innerHTML = values.map((m,i)=>`<div class="bar-item" title="${labels[i]} • ${m} menit"><span style="height:${Math.max(5,m/max*100)}%"></span><small>${i === 6 ? 'H' : ['J','S','M','S','S','R'][i] || '•'}</small></div>`).join('');
    const progresses = subjectsFor(state.level, state.grade).map(s => [s, subjectProgress(state.level, state.grade, s)]).sort((a,b)=>b[1]-a[1]);
    const strength = document.getElementById('strengthList');
    const weakness = document.getElementById('weaknessList');
    if (strength) strength.innerHTML = progresses.slice(0,2).map(([n,v])=>skillRow(n,v)).join('') || '<p class="empty-copy">Mulai belajar untuk melihat kekuatanmu.</p>';
    if (weakness) weakness.innerHTML = [...progresses].sort((a,b)=>a[1]-b[1]).slice(0,2).map(([n,v])=>skillRow(n,v)).join('') || '<p class="empty-copy">Belum ada data.</p>';
    const table = document.getElementById('subjectProgressTable');
    if (table) table.innerHTML = `<div class="progress-table-row head"><span>Mata Pelajaran</span><span>Cakupan</span><span>Progres</span><span>Status</span></div>${subjectsFor(state.level,state.grade).map(subject=>{const p=subjectProgress(state.level,state.grade,subject);const opened=openedTopics(state.level,state.grade,subject).length;const total=totalTopics(state.level,state.grade,subject);return `<div class="progress-table-row"><strong>${subjectIcon(subject)} ${escapeHtml(subject)}</strong><span>${chaptersFor(state.level,state.grade,subject).length} bab • ${opened}/${total} subbab</span><div class="progress-track"><span style="width:${p}%"></span></div><span>${p===100?'Tuntas':p?'Berjalan':'Belum mulai'}</span></div>`}).join('')}`;
  };

  renderAchievements = function() {
    if (!isStudent()) return;
    ensureState();
    const level = progressLevel();
    const p = overallProgress();
    const titles = ['Penjelajah Awal','Penjelajah Aktif','Penjelajah Konsep','Penjelajah Andal','Penjelajah Sains','Penjelajah Kritis','Penjelajah Terampil','Penjelajah Unggul','Penjelajah Master','Penjelajah Tuntas'];
    document.getElementById('levelTitle').textContent = `Level ${level} • ${titles[level-1]}`;
    const nextTarget = level >= 10 ? 100 : level * 10;
    document.getElementById('levelDesc').textContent = level >= 10 ? `${p}% progres • level maksimum tercapai.` : `${p}% progres • ${Math.max(0,nextTarget-p)}% lagi menuju Level ${level+1}.`;
    document.getElementById('levelOrb').textContent = String(level);
    const badges = achievementDefinitions();
    document.getElementById('badgeGrid').innerHTML = badges.map(([id,icon,name,desc,unlocked])=>`<article class="badge-card ${unlocked?'':'locked'}"><div class="badge-icon">${icon}</div><h3>${escapeHtml(name)}</h3><p>${unlocked ? escapeHtml(desc) : `Belum terbuka • ${escapeHtml(desc)}`}</p></article>`).join('');
    notifyNewAchievements();
  };

  function rerenderStudentViews() {
    if (!isStudent()) return;
    const active = document.querySelector('.view.active')?.id;
    if (active === 'dashboardView') renderDashboard();
    if (active === 'practiceView') renderPractice();
    if (active === 'progressView') renderProgress();
    if (active === 'achievementsView') renderAchievements();
  }

  function detectIframeContext(doc) {
    const subject = state.subject;
    const level = state.level;
    const grade = state.grade;
    const candidates = ['#chapterTitle','#heroTitle','#pageTitle','#lessonTitle','h1','h2'];
    let title = '';
    for (const sel of candidates) {
      const el = doc.querySelector(sel);
      if (el?.textContent?.trim()) { title = el.textContent.trim(); break; }
    }
    const chapters = chaptersFor(level, grade, subject);
    let chapterIndex = chapters.findIndex(c => title.includes(c.title) || c.title.includes(title));
    if (chapterIndex < 0) {
      chapterIndex = chapters.findIndex(c => c.title.split(/[,:]/)[0] && title.includes(c.title.split(/[,:]/)[0]));
    }
    return { level, grade, subject, chapterIndex: chapterIndex < 0 ? 0 : chapterIndex };
  }

  function bindIframeTracking() {
    const frame = document.getElementById('moduleFrame');
    if (!frame || frame.dataset.v4Bound) return;
    frame.dataset.v4Bound = '1';
    frame.addEventListener('load', () => {
      if (!isStudent() || frame.src === 'about:blank') return;
      try {
        const doc = frame.contentDocument;
        if (!doc) return;
        setTimeout(() => {
          const ctx = detectIframeContext(doc);
          markChapterOpened(ctx.level, ctx.grade, ctx.subject, ctx.chapterIndex, 'module');
        }, 200);
        doc.addEventListener('click', event => {
          lastInteractionAt = Date.now();
          setTimeout(() => {
            const ctx = detectIframeContext(doc);
            const button = event.target.closest('button');
            const quizClick = !!event.target.closest('.quiz-option, [data-option], [data-answer]') || /jawab|pilih/i.test(button?.textContent || '');
            const chapterClick = !!event.target.closest('[data-card-lesson], [data-lesson], [data-chapter], .chapter-item, .chapter-btn, .chapter-link') || /buka bab|bab \d|materi/i.test(button?.textContent || '');
            if (chapterClick || !quizClick) markChapterOpened(ctx.level, ctx.grade, ctx.subject, ctx.chapterIndex, 'module');
            if (quizClick) {
              const correct = !!event.target.closest('.correct');
              state.questionHistory.push({id:`m_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,date:todayKey(),at:new Date().toISOString(),correct,mode:'module',level:ctx.level,grade:ctx.grade,subject:ctx.subject,chapterIndex:ctx.chapterIndex,question:'Soal modul materi'});
              state.questionHistory = state.questionHistory.slice(-1500);
              state.moduleQuizBlocks = state.moduleQuizBlocks && typeof state.moduleQuizBlocks === 'object' ? state.moduleQuizBlocks : {};
              const blockKey = `${ctx.level}|${ctx.grade}|${ctx.subject}|${ctx.chapterIndex}`;
              const block = state.moduleQuizBlocks[blockKey] || {answered:0,correct:0};
              block.answered += 1; if (correct) block.correct += 1;
              if (block.answered >= 10) {
                const moduleScore = Math.round(block.correct / block.answered * 100);
                addNotification(moduleScore >= PASSING_SCORE ? '✓ Kuis modul berhasil' : '✦ Kuis modul perlu diulang', `Nilai ${moduleScore}. Standar ketuntasan ${PASSING_SCORE}.`, moduleScore >= PASSING_SCORE ? 'success' : 'warning');
                block.answered = 0; block.correct = 0;
              }
              state.moduleQuizBlocks[blockKey] = block;
              touchStudyActivity();
              saveState();
              rerenderStudentViews();
            }
          }, 120);
        }, true);
      } catch (_) {
        // Jika iframe dijalankan lintas origin, progres snapshot bawaan tetap digunakan.
      }
    });
  }

  window.addEventListener('message', event => {
    const data = event.data;
    if (!isStudent() || !data || data.type !== 'BISA_MODULE_SNAPSHOT') return;
    setTimeout(() => {
      ensureState();
      const subject = data.subject;
      (data.keys || []).forEach(raw => {
        const parts = String(raw).split('-');
        const grade = parts[0];
        const chapterIndex = Number(parts[parts.length - 1]);
        if (gradesFor(data.level).includes(grade) && Number.isFinite(chapterIndex)) markChapterOpened(data.level, grade, subject, chapterIndex, 'module');
      });
    }, 50);
  });


  function loadStudentV4State(user) {
    try {
      const raw = JSON.parse(localStorage.getItem(BISAAuth.stateKey(user.id)) || '{}');
      raw.openedSubtopics = Array.isArray(raw.openedSubtopics) ? raw.openedSubtopics : [];
      raw.questionHistory = Array.isArray(raw.questionHistory) ? raw.questionHistory : [];
      raw.completedLessons = Array.isArray(raw.completedLessons) ? raw.completedLessons : [];
      const opened = new Set(raw.openedSubtopics);
      raw.completedLessons.forEach(key => {
        const parts = String(key).split('|');
        const m = parts.indexOf('module');
        if (m < 0) return;
        const level=parts[0], grade=parts[1], subject=parts[2], rawId=parts[m+1]||'';
        const cp=rawId.split('-'); const ci=Number(cp[cp.length-1]);
        const chapter=chapterFor(level,grade,subject,ci);
        if (chapter) chapter.topics.forEach((_,ti)=>opened.add(topicKey(level,grade,subject,ci,ti)));
      });
      raw.openedSubtopics=[...opened];
      return raw;
    } catch { return {openedSubtopics:[],questionHistory:[],completedLessons:[]}; }
  }

  function studentV4Summary(user) {
    const st=loadStudentV4State(user);
    const subjects=subjectsFor(user.level,user.grade);
    const progresses=subjects.map(subject=>{
      const total=chaptersFor(user.level,user.grade,subject).reduce((n,c)=>n+c.topics.length,0);
      const opened=st.openedSubtopics.filter(k=>String(k).startsWith(`${user.level}|${user.grade}|${subject}|topic|`)).length;
      const qTarget=chaptersFor(user.level,user.grade,subject).length*20;
      const qs=st.questionHistory.filter(x=>x.level===user.level&&x.grade===user.grade&&x.subject===subject);
      const p=Math.round((total?opened/total*100:0)*.7+(qTarget?Math.min(qTarget,qs.length)/qTarget*100:0)*.3);
      return {subject,total,opened,questions:qs.length,progress:p};
    });
    const progress=progresses.length?Math.round(progresses.reduce((a,x)=>a+x.progress,0)/progresses.length):0;
    const allQ=st.questionHistory.filter(x=>x.level===user.level&&x.grade===user.grade&&typeof x.correct==='boolean');
    const avg=allQ.length?Math.round(allQ.filter(x=>x.correct).length/allQ.length*100):0;
    const opened=progresses.reduce((a,x)=>a+x.opened,0), total=progresses.reduce((a,x)=>a+x.total,0);
    return {progress,avg,opened,total,questions:allQ.length};
  }

  function patchTeacherMonitoring(viewName) {
    if (!currentUser || !isTeacher()) return;
    const students=BISAAuth.listUsers().filter(u=>(u.role||'student')!=='teacher'&&u.level===currentUser.level);
    if (viewName==='teacher') {
      const summaries=students.map(u=>studentV4Summary(u));
      const avg=summaries.length?Math.round(summaries.reduce((a,x)=>a+x.progress,0)/summaries.length):0;
      const cards=document.querySelectorAll('#teacherView .stat-card');
      if(cards[1]) cards[1].innerHTML=`<div class="stat-icon cyan">↗</div><div><small>Rata-rata Progres</small><strong>${avg}%</strong></div><span class="trend">subbab + latihan</span>`;
      if(cards[2]) cards[2].innerHTML=`<div class="stat-icon amber">✓</div><div><small>Siswa Aktif Belajar</small><strong>${summaries.filter(x=>x.opened>0||x.questions>0).length}</strong></div><span class="trend">sudah mulai</span>`;
      const mini=document.querySelector('#teacherView .mini-student-list');
      if(mini) mini.innerHTML=students.slice(0,5).map(u=>{const x=studentV4Summary(u);return `<div><span><strong>${escapeHtml(u.name)}</strong><small>Kelas ${escapeHtml(u.grade)} • ${x.opened}/${x.total} subbab</small></span><b>${x.progress}%</b></div>`}).join('')||'<p class="empty-copy">Belum ada akun siswa pada jenjang ini.</p>';
    }
    if (viewName==='students') {
      const holder=document.getElementById('teacherStudentTable');
      const query=(document.getElementById('studentSearchInput')?.value||'').trim().toLowerCase();
      const filtered=students.filter(u=>!query||`${u.name} ${u.email} ${u.grade}`.toLowerCase().includes(query));
      const count=document.getElementById('studentCountTitle'); if(count) count.textContent=`${filtered.length} siswa ${currentUser.level}`;
      if(holder) {
        const rowsHtml = filtered.map(u=>{const x=studentV4Summary(u);return `<div class="teacher-student-row"><span class="student-cell"><b>${escapeHtml(u.name)}</b><small>${escapeHtml(u.email)}</small></span><span>Kelas ${escapeHtml(u.grade)}</span><span><div class="progress-track"><span style="width:${x.progress}%"></span></div><small>${x.progress}% • ${x.questions} soal</small></span><strong>${x.opened}/${x.total}</strong><span>${x.avg||'—'}</span></div>`}).join('') || '<p class="empty-copy table-empty">Belum ada siswa yang cocok.</p>';
        holder.innerHTML = '<div class="teacher-student-row head"><span>Siswa</span><span>Kelas</span><span>Progres</span><span>Subbab Dibuka</span><span>Nilai</span></div>' + rowsHtml;
      }
    }
  }

  const previousSetViewV4 = setView;
  setView = function(viewName) {
    previousSetViewV4(viewName);
    if (isTeacher()) patchTeacherMonitoring(viewName);
    if (isStudent()) {
      if (viewName==='dashboard') renderDashboard();
      if (viewName==='practice') renderPractice();
      if (viewName==='progress') renderProgress();
      if (viewName==='achievements') renderAchievements();
    }
  };

  function bindGlobalV4Events() {
    ['pointerdown','keydown','touchstart'].forEach(type => document.addEventListener(type, () => { if (isStudent()) lastInteractionAt = Date.now(); }, {passive:true}));
    document.addEventListener('click', event => {
      if (!isStudent()) return;
      const launch = event.target.closest('[data-open-module]');
      if (launch) {
        const subject = launch.dataset.openModule || state.subject;
        const chapter = chapterFor(state.level, state.grade, subject, 0);
        state.lastLearning = {level:state.level,grade:state.grade,subject,chapterIndex:0,title:chapter?.title || subject,source:'module',at:new Date().toISOString()};
        touchStudyActivity(); saveState();
      }
    }, true);
    const notif = document.getElementById('notificationBtn');
    if (notif && !notif.dataset.v4Bound) {
      notif.dataset.v4Bound = '1';
      notif.addEventListener('click', event => {
        if (!isStudent()) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        toggleNotifications();
      }, true);
    }
    document.getElementById('practiceSubjectFilter')?.addEventListener('change', event => {
      if (!isStudent()) return;
      state.subject = event.target.value; currentConceptSubject = state.subject; saveState(); renderPractice();
    });
    document.getElementById('studentSearchInput')?.addEventListener('input', () => {
      if (isTeacher()) setTimeout(() => patchTeacherMonitoring('students'), 0);
    });
    bindIframeTracking();
  }

  // Timer belajar: menghitung waktu nyata hanya ketika tab aktif dan ada interaksi dalam 2 menit terakhir.
  setInterval(() => {
    if (!isStudent() || document.hidden) { lastTickAt = Date.now(); return; }
    const now = Date.now();
    const elapsed = Math.min(60, Math.max(0, Math.round((now - lastTickAt) / 1000)));
    lastTickAt = now;
    if (now - lastInteractionAt <= 120000) {
      addStudySeconds(elapsed);
      if (document.getElementById('dashboardView')?.classList.contains('active')) renderDashboard();
      if (document.getElementById('progressView')?.classList.contains('active')) renderProgress();
    }
  }, 30000);

  // Sinkronkan streak segera setelah absensi diubah pada tab yang sama.
  window.addEventListener('storage', e => {
    if (e.key === ATTENDANCE_KEY && isStudent()) { state.streak = attendanceStreak(); renderDashboard(); renderAchievements(); }
  });

  // Registrasi/login pada script lama tetap dipakai; setiap kali app tampil, v4 menyiapkan state baru.
  const previousShowAuthenticatedAppV4 = showAuthenticatedApp;
  showAuthenticatedApp = function() {
    previousShowAuthenticatedAppV4();
    if (isStudent()) {
      ensureState();
      renderLogoIdentity();
      renderDashboard(); renderPractice(); renderProgress(); renderAchievements();
    }
  };

  bindGlobalV4Events();
  if (isStudent()) {
    ensureState();
    renderLogoIdentity();
    renderDashboard(); renderPractice(); renderProgress(); renderAchievements();
  }
})();
