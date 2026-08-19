/* =========================================================
   BISA UPGRADE
   - Pemisahan akun siswa/guru dan jenjang
   - Materi SMP/SMA terintegrasi sebagai modul interaktif
   - Sinkronisasi progres modul ke akun BISA
   - Dashboard progres guru
   - Video pembelajaran via IndexedDB
   - Hero interaktif responsif
   ========================================================= */
(() => {
  const MODULES = {
    SMP: {
      IPA: { icon: '🧪', title: 'IPA SMP Interaktif', path: 'modules/smp/index.html', desc: 'Materi IPA terpadu kelas VII, VIII, dan IX dengan visual interaktif dan kuis.' }
    },
    SMA: {
      Biologi: { icon: '🧬', title: 'Biologi SMA Interaktif', path: 'modules/biologi/index.html', desc: 'Biologi kelas X–XII dengan visualisasi konsep, materi rinci, dan kuis.' },
      Kimia: { icon: '⚗️', title: 'Kimia SMA Interaktif', path: 'modules/kimia/index.html', desc: 'Kimia kelas X–XII dengan laboratorium visual, rumus, simulasi, dan kuis.' },
      Fisika: { icon: '⚡', title: 'Fisika SMA Interaktif', path: 'modules/fisika/index.html', desc: 'Fisika kelas X–XII dengan simulasi gerak, energi, gelombang, listrik, dan lainnya.' }
    }
  };
  const CHAPTERS_PER_MODULE = 5;
  let videoUrls = [];

  const isTeacher = () => (currentUser?.role || 'student') === 'teacher';
  const isStudent = () => !isTeacher();
  const userLevel = () => currentUser?.level === 'SMA' ? 'SMA' : 'SMP';
  const validGrades = level => level === 'SMA' ? ['X','XI','XII'] : ['VII','VIII','IX'];
  const moduleSubjects = level => Object.keys(MODULES[level] || {});
  const modulePrefix = (level, grade, subject) => `${level}|${grade}|${subject}|module|`;

  function moduleProgress(level = state.level, grade = state.grade, subject = state.subject, sourceState = state) {
    const prefix = modulePrefix(level, grade, subject);
    const done = (sourceState?.completedLessons || []).filter(k => String(k).startsWith(prefix)).length;
    return Math.min(100, Math.round((done / CHAPTERS_PER_MODULE) * 100));
  }

  function overallModuleMastery(sourceState = state, level = state.level, grade = state.grade) {
    const subjects = moduleSubjects(level);
    const total = Math.max(1, subjects.length * CHAPTERS_PER_MODULE);
    let done = 0;
    subjects.forEach(subject => {
      const prefix = modulePrefix(level, grade, subject);
      done += (sourceState?.completedLessons || []).filter(k => String(k).startsWith(prefix)).length;
    });
    const completion = Math.min(100, done / total * 100);
    const scores = Array.isArray(sourceState?.scores) ? sourceState.scores : [];
    const avg = scores.length ? scores.reduce((a,b)=>a+b,0)/scores.length : 0;
    return Math.round(completion * .8 + avg * .2);
  }

  // Progres utama mengikuti modul gabungan, bukan placeholder lama.
  getSubjectProgress = function(level = state.level, grade = state.grade, subject = state.subject) {
    if (MODULES[level]?.[subject]) return moduleProgress(level, grade, subject);
    return 0;
  };
  getOverallMastery = function() { return overallModuleMastery(state, state.level, state.grade); };

  function syncCurrentAccountToProfile() {
    if (!currentUser) return;
    const lvl = userLevel();
    if (state.level !== lvl) state.level = lvl;
    const grades = validGrades(lvl);
    if (!grades.includes(state.grade)) {
      state.grade = grades.includes(currentUser.grade) ? currentUser.grade : grades[0];
    }
    const subjects = moduleSubjects(lvl);
    if (!subjects.includes(state.subject)) state.subject = subjects[0];
    saveState();
  }

  function updateRoleRegistrationUI() {
    const role = document.querySelector('input[name="registerRole"]:checked')?.value || 'student';
    const gradeField = document.getElementById('registerGradeField');
    const gradeSelect = document.getElementById('registerGrade');
    if (gradeField) gradeField.classList.toggle('teacher-grade-hidden', role === 'teacher');
    if (gradeSelect) gradeSelect.required = role !== 'teacher';
    const nameInput = document.getElementById('registerName');
    if (nameInput) nameInput.placeholder = role === 'teacher' ? 'Nama guru' : 'Nama siswa';
  }

  function applyRoleUI() {
    if (!currentUser) return;
    syncCurrentAccountToProfile();
    const teacher = isTeacher();
    document.body.classList.toggle('teacher-mode', teacher);
    document.body.classList.toggle('student-mode', !teacher);
    document.querySelectorAll('.role-teacher-only').forEach(el => { el.hidden = !teacher; });
    document.querySelectorAll('.role-student-only').forEach(el => { el.hidden = teacher; });

    const panelBtn = document.getElementById('teacherPanelBtn');
    if (panelBtn) panelBtn.hidden = true;
    const xp = document.querySelector('.topbar-xp');
    if (xp) xp.hidden = teacher;
    const levelSwitch = document.getElementById('quickLevelSwitcher');
    if (levelSwitch) levelSwitch.hidden = true;

    const badge = document.getElementById('sidebarClassBadge');
    const className = document.getElementById('sidebarClassName');
    const count = document.getElementById('sidebarSubjectCount');
    if (badge) badge.textContent = userLevel();
    if (className) className.textContent = teacher ? `Guru ${userLevel()}` : `Kelas ${state.grade}`;
    if (count) count.textContent = teacher ? `${moduleSubjects(userLevel()).length} mapel tersedia` : `${moduleSubjects(userLevel()).length} mata pelajaran`;

    const name = document.getElementById('profileNameDisplay');
    const email = document.getElementById('profileEmailDisplay');
    if (name) name.textContent = state.name || currentUser.name;
    if (email) email.textContent = teacher ? `Guru ${userLevel()} • ${currentUser.email}` : `Siswa ${userLevel()} • ${currentUser.email}`;

    prepareLearnSelectors();
    refreshVideoFormOptions();
  }

  function prepareLearnSelectors() {
    const levelSelect = document.getElementById('levelSelect');
    const gradeSelect = document.getElementById('gradeSelect');
    if (!levelSelect || !gradeSelect || !currentUser) return;
    levelSelect.innerHTML = `<option value="${userLevel()}">${userLevel()}</option>`;
    levelSelect.value = userLevel();
    levelSelect.disabled = true;
    const grades = validGrades(userLevel());
    gradeSelect.innerHTML = grades.map(g => `<option value="${g}">Kelas ${g}</option>`).join('');
    if (!grades.includes(state.grade)) state.grade = grades.includes(currentUser.grade) ? currentUser.grade : grades[0];
    gradeSelect.value = state.grade;
    gradeSelect.disabled = false;
  }

  renderDashboardSubjects = function() {
    const holder = document.getElementById('dashboardSubjects');
    if (!holder) return;
    const level = userLevel();
    const grade = state.grade;
    holder.innerHTML = moduleSubjects(level).map(subject => {
      const meta = MODULES[level][subject];
      const progress = moduleProgress(level, grade, subject);
      return `<button class="subject-card module-subject-card" data-module-subject="${subject}">
        <div><div class="subject-top"><div class="subject-symbol ${subjectClass(subject)}">${meta.icon}</div><span class="progress-badge">${progress}%</span></div>
        <h3>${subject}</h3><p>${meta.desc}</p></div>
        <div class="subject-progress"><div class="progress-track"><span style="width:${progress}%"></span></div></div>
      </button>`;
    }).join('');
    holder.querySelectorAll('[data-module-subject]').forEach(btn => btn.addEventListener('click', () => {
      state.subject = btn.dataset.moduleSubject; saveState(); setView('learn');
    }));
  };

  renderLearn = function() {
    if (!currentUser) return;
    syncCurrentAccountToProfile();
    prepareLearnSelectors();
    const level = state.level;
    const subjects = moduleSubjects(level);
    if (!subjects.includes(state.subject)) state.subject = subjects[0];
    const pills = document.getElementById('subjectPills');
    const chapterList = document.getElementById('chapterList');
    const eyebrow = document.getElementById('chaptersEyebrow');
    const progressBadge = document.getElementById('subjectProgressBadge');
    const title = document.getElementById('chaptersTitle');
    if (!pills || !chapterList) return;

    pills.innerHTML = subjects.map(subject => `<button class="subject-pill ${subject===state.subject?'active':''}" data-module-pill="${subject}">${MODULES[level][subject].icon} ${subject}</button>`).join('');
    pills.querySelectorAll('[data-module-pill]').forEach(btn => btn.addEventListener('click', () => {
      state.subject = btn.dataset.modulePill; saveState(); renderLearn();
    }));

    const meta = MODULES[level][state.subject];
    const pct = moduleProgress(level, state.grade, state.subject);
    if (eyebrow) eyebrow.textContent = `${state.subject.toUpperCase()} • KELAS ${state.grade}`;
    if (title) title.textContent = meta.title;
    if (progressBadge) progressBadge.textContent = `${pct}% selesai`;

    const gradeButtons = validGrades(level).map(g => `<button class="grade-choice-btn ${g===state.grade?'active':''}" data-grade-choice="${g}">Kelas ${g}</button>`).join('');
    chapterList.innerHTML = `<div class="grade-choice-panel"><div><span class="eyebrow">PILIH KELAS</span><strong>${level === 'SMP' ? 'VII • VIII • IX' : 'X • XI • XII'}</strong></div><div class="grade-choice-buttons">${gradeButtons}</div></div><article class="module-launch-card">
      <div class="module-launch-icon">${meta.icon}</div>
      <div class="module-launch-copy">
        <span class="eyebrow">FILE MATERI TERINTEGRASI</span>
        <h3>${meta.title} • Kelas ${state.grade}</h3>
        <p>${meta.desc}</p>
        <div class="module-features"><span>✓ 5 bab</span><span>✓ Materi lengkap</span><span>✓ Visual/simulasi interaktif</span><span>✓ Kuis</span></div>
        <div class="progress-track"><span style="width:${pct}%"></span></div>
      </div>
      <button class="primary-button module-open-button" data-open-module="${state.subject}">Buka Materi Interaktif</button>
    </article>`;
    chapterList.querySelectorAll('[data-grade-choice]').forEach(btn => btn.addEventListener('click', () => {
      state.grade = btn.dataset.gradeChoice;
      document.getElementById('gradeSelect').value = state.grade;
      saveState();
      const className=document.getElementById('sidebarClassName');
      if(className) className.textContent=isTeacher()?`Guru ${userLevel()} • Kelas ${state.grade}`:`Kelas ${state.grade}`;
      renderLearn();
      if(isStudent()){renderDashboard();renderProgress();}
    }));
    chapterList.querySelector('[data-open-module]')?.addEventListener('click', e => openModule(e.currentTarget.dataset.openModule));
  };

  const originalRenderDashboard = renderDashboard;
  renderDashboard = function() {
    if (isTeacher()) return renderTeacherDashboard();
    syncCurrentAccountToProfile();
    originalRenderDashboard();
    renderDashboardSubjects();
    const hero = document.getElementById('heroSubtitle');
    if (hero) hero.textContent = `Lanjutkan materi ${state.level} Kelas ${state.grade}. Progres, XP, kuis, dan penyelesaian bab tersimpan pada akunmu.`;
  };

  renderContinueCard = function() {
    const holder = document.getElementById('continueLearningCard');
    if (!holder || !currentUser) return;
    const meta = MODULES[state.level]?.[state.subject] || MODULES[state.level]?.[moduleSubjects(state.level)[0]];
    const pct = moduleProgress(state.level, state.grade, state.subject);
    holder.innerHTML = `<button class="continue-card module-continue" data-continue-module="${state.subject}">
      <div class="continue-icon">${meta?.icon || '📘'}</div><div><span class="eyebrow">${state.subject} • KELAS ${state.grade}</span><h3>${meta?.title || 'Materi BISA'}</h3><p>${pct}% materi selesai</p><div class="progress-track"><span style="width:${pct}%"></span></div></div><span class="continue-arrow">→</span>
    </button>`;
    holder.querySelector('[data-continue-module]')?.addEventListener('click', e => openModule(e.currentTarget.dataset.continueModule));
  };

  // Tombol "Lanjutkan" lama diarahkan ke modul, sehingga tidak lagi membuka materi placeholder.
  openLesson = function(level, grade, subject) {
    state.level = level || state.level; state.grade = grade || state.grade; state.subject = subject || state.subject;
    saveState(); openModule(state.subject);
  };

  function openModule(subject) {
    if (!currentUser) return;
    const level = userLevel();
    const meta = MODULES[level]?.[subject];
    if (!meta) return;
    state.level = level; state.subject = subject; saveState();
    const modal = document.getElementById('moduleModal');
    const frame = document.getElementById('moduleFrame');
    if (!modal || !frame) return;
    document.getElementById('moduleModalTitle').textContent = `${meta.title} • Kelas ${state.grade}`;
    document.getElementById('moduleModalEyebrow').textContent = `${level} • ${subject.toUpperCase()}`;
    const qs = new URLSearchParams({grade: state.grade, user: currentUser.id, locked: '0', embed: '1'});
    frame.src = `${meta.path}?${qs.toString()}`;
    modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden';
  }

  function closeModule() {
    const modal = document.getElementById('moduleModal');
    const frame = document.getElementById('moduleFrame');
    if (!modal) return;
    modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow = '';
    if (frame) frame.src = 'about:blank';
    if (isStudent()) { renderDashboard(); renderProgress(); renderAchievements(); }
    renderLearn();
  }

  document.querySelector('[data-close-module]')?.addEventListener('click', closeModule);
  document.getElementById('moduleModal')?.addEventListener('click', e => { if (e.target.id === 'moduleModal') closeModule(); });

  window.addEventListener('message', event => {
    const data = event.data;
    if (!data || data.type !== 'BISA_MODULE_SNAPSHOT' || !currentUser || isTeacher()) return;
    const subject = data.subject;
    if (!MODULES[data.level]?.[subject] || !Array.isArray(data.keys)) return;
    const before = new Set(state.completedLessons || []);
    const allTargetPrefixes = validGrades(data.level).map(g => modulePrefix(data.level, g, subject));
    let next = (state.completedLessons || []).filter(k => !allTargetPrefixes.some(p => String(k).startsWith(p)));
    data.keys.forEach(raw => {
      const grade = String(raw).split('-')[0];
      if (!validGrades(data.level).includes(grade)) return;
      next.push(`${data.level}|${grade}|${subject}|module|${raw}`);
    });
    next = [...new Set(next)];
    const newCompletions = next.filter(k => !before.has(k)).length;
    state.completedLessons = next;
    if (newCompletions > 0) {
      state.xp = Math.max(0, Number(state.xp || 0)) + newCompletions * 25;
      const today = new Date().getDay();
      const idx = today === 0 ? 6 : today - 1;
      state.studyMinutes[idx] = Number(state.studyMinutes[idx] || 0) + newCompletions * 5;
      toast(`+${newCompletions * 25} XP • progres materi tersimpan`);
    }
    saveState();
  });

  const originalRenderProgress = renderProgress;
  renderProgress = function() {
    if (isTeacher()) return renderStudentProgressTable();
    const mastery = overallModuleMastery(state, state.level, state.grade);
    const ring = document.getElementById('masteryRing');
    const percent = document.getElementById('masteryPercent');
    if (percent) percent.textContent = `${mastery}%`;
    if (ring) ring.style.setProperty('--value', mastery);
    const dayNames = ['S','S','R','K','J','S','M'];
    const max = Math.max(...state.studyMinutes, 60);
    const chart = document.getElementById('studyChart');
    if (chart) chart.innerHTML = state.studyMinutes.map((m,i)=>`<div class="bar-item" title="${m} menit"><span style="height:${Math.max(8,(m/max)*100)}%"></span><small>${dayNames[i]}</small></div>`).join('');
    const strengths = moduleSubjects(state.level).map(s=>[s,moduleProgress(state.level,state.grade,s)]).sort((a,b)=>b[1]-a[1]);
    const strengthList = document.getElementById('strengthList');
    const weaknessList = document.getElementById('weaknessList');
    if (strengthList) strengthList.innerHTML = strengths.slice(0,2).map(([n,v])=>skillRow(n,v)).join('') || '<p class="empty-copy">Mulai belajar untuk melihat kekuatanmu.</p>';
    if (weaknessList) weaknessList.innerHTML = [...strengths].sort((a,b)=>a[1]-b[1]).slice(0,2).map(([n,v])=>skillRow(n,v)).join('');
    const table = document.getElementById('subjectProgressTable');
    if (table) table.innerHTML = `<div class="progress-table-row head"><span>Mata Pelajaran</span><span>Cakupan</span><span>Progres</span><span>Status</span></div>${moduleSubjects(state.level).map(subject=>{const p=moduleProgress(state.level,state.grade,subject);return `<div class="progress-table-row"><strong>${MODULES[state.level][subject].icon} ${subject}</strong><span>5 bab</span><div class="progress-track"><span style="width:${p}%"></span></div><span>${p===100?'Tuntas':p?'Berjalan':'Belum mulai'}</span></div>`}).join('')}`;
  };

  function loadUserState(user) {
    try {
      const raw = JSON.parse(localStorage.getItem(BISAAuth.stateKey(user.id)) || '{}');
      return { completedLessons: Array.isArray(raw.completedLessons)?raw.completedLessons:[], scores:Array.isArray(raw.scores)?raw.scores:[], xp:Number(raw.xp||0), studyMinutes:Array.isArray(raw.studyMinutes)?raw.studyMinutes:[0,0,0,0,0,0,0] };
    } catch { return {completedLessons:[],scores:[],xp:0,studyMinutes:[0,0,0,0,0,0,0]}; }
  }

  function studentsForTeacher() {
    if (!currentUser || !isTeacher()) return [];
    return BISAAuth.listUsers().filter(u => (u.role || 'student') !== 'teacher' && u.level === currentUser.level);
  }

  function studentSummary(user) {
    const st = loadUserState(user);
    const subjects = moduleSubjects(user.level);
    const total = subjects.length * CHAPTERS_PER_MODULE;
    let done = 0;
    subjects.forEach(subject => done += st.completedLessons.filter(k => String(k).startsWith(modulePrefix(user.level,user.grade,subject))).length);
    const progress = Math.min(100, Math.round(done / Math.max(1,total) * 100));
    const avg = st.scores.length ? Math.round(st.scores.reduce((a,b)=>a+b,0)/st.scores.length) : 0;
    return {st,done,total,progress,avg};
  }

  function renderTeacherDashboard() {
    if (!currentUser || !isTeacher()) return;
    const students = studentsForTeacher();
    const summaries = students.map(u=>[u,studentSummary(u)]);
    const avgProgress = summaries.length ? Math.round(summaries.reduce((a,[,s])=>a+s.progress,0)/summaries.length) : 0;
    const active = summaries.filter(([,s])=>s.progress>0).length;
    const view = document.getElementById('teacherView');
    if (!view) return;
    view.innerHTML = `<div class="page-header"><div><span class="eyebrow">PENGAWASAN GURU ${currentUser.level}</span><h1>Dashboard Pengawasan</h1><p>Pantau progres dan kehadiran siswa ${currentUser.level}, lalu kelola file materi dan video pembelajaran.</p></div></div>
      <div class="stats-grid">
        <article class="stat-card"><div class="stat-icon purple">👥</div><div><small>Jumlah Siswa</small><strong>${students.length}</strong></div><span class="trend">${currentUser.level}</span></article>
        <article class="stat-card"><div class="stat-icon cyan">↗</div><div><small>Rata-rata Progres</small><strong>${avgProgress}%</strong></div><span class="trend">materi</span></article>
        <article class="stat-card"><div class="stat-icon amber">✓</div><div><small>Siswa Aktif Belajar</small><strong>${active}</strong></div><span class="trend">sudah mulai</span></article>
        <article class="stat-card"><div class="stat-icon green">▤</div><div><small>Fungsi Guru</small><strong>Monitor</strong></div><span class="trend">&amp; unggah</span></article>
      </div>
      <div class="dashboard-grid"><section class="panel"><div class="section-heading"><div><span class="eyebrow">AKSES CEPAT</span><h2>Pengawasan &amp; Materi</h2></div></div><div class="teacher-actions-grid"><button class="primary-button" data-teacher-jump="students">Lihat Progres Siswa</button><button class="secondary-button" data-teacher-jump="attendance">Pantau Absensi</button><button class="secondary-button" data-teacher-jump="videos">Unggah Materi &amp; Video</button></div></section>
      <section class="panel"><div class="section-heading"><div><span class="eyebrow">RINGKASAN</span><h2>Progres Terbaru</h2></div></div><div class="mini-student-list">${summaries.slice(0,5).map(([u,s])=>`<div><span><strong>${escapeHtml(u.name)}</strong><small>Kelas ${u.grade}</small></span><b>${s.progress}%</b></div>`).join('') || '<p class="empty-copy">Belum ada akun siswa pada jenjang ini.</p>'}</div></section></div>`;
    view.querySelectorAll('[data-teacher-jump]').forEach(btn=>btn.addEventListener('click',()=>setView(btn.dataset.teacherJump)));
  }

  function renderStudentProgressTable(query = '') {
    if (!currentUser || !isTeacher()) return;
    const all = studentsForTeacher();
    const q = String(query).trim().toLowerCase();
    const students = all.filter(u => !q || `${u.name} ${u.email} ${u.grade}`.toLowerCase().includes(q));
    const title = document.getElementById('studentCountTitle');
    if (title) title.textContent = `${students.length} siswa ${currentUser.level}`;
    const holder = document.getElementById('teacherStudentTable');
    if (!holder) return;
    holder.innerHTML = `<div class="teacher-student-row head"><span>Siswa</span><span>Kelas</span><span>Progres</span><span>Bab Selesai</span><span>Nilai</span></div>${students.map(u=>{const s=studentSummary(u);return `<div class="teacher-student-row"><span class="student-cell"><b>${escapeHtml(u.name)}</b><small>${escapeHtml(u.email)}</small></span><span>Kelas ${u.grade}</span><span><div class="progress-track"><span style="width:${s.progress}%"></span></div><small>${s.progress}% materi</small></span><strong>${s.done}/${s.total}</strong><span>${s.avg || '—'}</span></div>`}).join('') || '<p class="empty-copy table-empty">Belum ada siswa yang cocok.</p>'}`;
  }

  const studentSearch = document.getElementById('studentSearchInput');
  studentSearch?.addEventListener('input', e=>renderStudentProgressTable(e.target.value));

  function escapeHtml(v='') { return String(v).replace(/[&<>'"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

  // ----------------------- Video / IndexedDB -----------------------
  function openVideoDb() {
    return new Promise((resolve,reject)=>{
      const req = indexedDB.open('BISA_media_v1',2);
      req.onupgradeneeded = () => {
        const db=req.result;
        if(!db.objectStoreNames.contains('videos')) {
          const store=db.createObjectStore('videos',{keyPath:'id'});
          store.createIndex('level','level',{unique:false});
          store.createIndex('teacherId','teacherId',{unique:false});
        }
        if(!db.objectStoreNames.contains('materials')) {
          const materials=db.createObjectStore('materials',{keyPath:'id'});
          materials.createIndex('level','level',{unique:false});
          materials.createIndex('teacherId','teacherId',{unique:false});
        }
      };
      req.onsuccess=()=>resolve(req.result); req.onerror=()=>reject(req.error);
    });
  }
  async function putVideo(record) { const db=await openVideoDb(); return new Promise((res,rej)=>{const tx=db.transaction('videos','readwrite');tx.objectStore('videos').put(record);tx.oncomplete=()=>{db.close();res();};tx.onerror=()=>rej(tx.error);}); }
  async function getVideos() { const db=await openVideoDb(); return new Promise((res,rej)=>{const req=db.transaction('videos').objectStore('videos').getAll();req.onsuccess=()=>{db.close();res(req.result||[])};req.onerror=()=>rej(req.error);}); }
  async function deleteVideo(id) { const db=await openVideoDb(); return new Promise((res,rej)=>{const tx=db.transaction('videos','readwrite');tx.objectStore('videos').delete(id);tx.oncomplete=()=>{db.close();res();};tx.onerror=()=>rej(tx.error);}); }

  function refreshVideoFormOptions() {
    if (!currentUser) return;
    const subject = document.getElementById('videoSubjectInput');
    const grade = document.getElementById('videoGradeInput');
    if (subject) subject.innerHTML = moduleSubjects(userLevel()).map(s=>`<option value="${s}">${s}</option>`).join('');
    if (grade) grade.innerHTML = validGrades(userLevel()).map(g=>`<option value="${g}">Kelas ${g}</option>`).join('');
  }

  async function renderVideos() {
    if (!currentUser) return;
    videoUrls.forEach(URL.revokeObjectURL); videoUrls=[];
    const holder=document.getElementById('videoLibrary'); if(!holder)return;
    const title=document.getElementById('videosTitle'), sub=document.getElementById('videosSubtitle');
    if(title) title.textContent=isTeacher()?'Kelola Video Pembelajaran':'Video dari Guru';
    if(sub) sub.textContent=isTeacher()?`Unggah dan kelola video untuk siswa ${currentUser.level}.`:`Video yang tersedia untuk ${currentUser.level} Kelas ${state.grade}.`;
    try {
      let videos=(await getVideos()).filter(v=>v.level===currentUser.level);
      if(isStudent()) videos=videos.filter(v=>v.grade===state.grade);
      else videos=videos.filter(v=>v.teacherId===currentUser.id);
      videos.sort((a,b)=>String(b.createdAt).localeCompare(String(a.createdAt)));
      if(!videos.length){holder.innerHTML='<section class="panel empty-video"><div class="empty-video-icon">▶</div><h3>Belum ada video</h3><p>'+ (isTeacher()?'Unggah video pembelajaran pertama melalui formulir di atas.':'Guru belum mengunggah video untuk kelas ini pada perangkat ini.') +'</p></section>';return;}
      holder.innerHTML=videos.map(v=>{const url=URL.createObjectURL(v.blob);videoUrls.push(url);return `<article class="video-card"><video controls preload="metadata" src="${url}"></video><div class="video-card-body"><span class="eyebrow">${escapeHtml(v.subject)} • KELAS ${escapeHtml(v.grade)}</span><h3>${escapeHtml(v.title)}</h3><p>Oleh ${escapeHtml(v.teacherName||'Guru BISA')} • ${new Date(v.createdAt).toLocaleDateString('id-ID')}</p>${isTeacher()?`<button class="danger-link" data-delete-video="${v.id}">Hapus video</button>`:''}</div></article>`}).join('');
      holder.querySelectorAll('[data-delete-video]').forEach(btn=>btn.addEventListener('click',async()=>{if(confirm('Hapus video ini?')){await deleteVideo(btn.dataset.deleteVideo);renderVideos();toast('Video dihapus.');}}));
    } catch(err) { holder.innerHTML='<section class="panel"><p>Browser ini tidak dapat membuka penyimpanan video lokal.</p></section>'; }
  }

  document.getElementById('videoUploadForm')?.addEventListener('submit', async e=>{
    e.preventDefault(); if(!currentUser||!isTeacher())return;
    const file=document.getElementById('videoFileInput')?.files?.[0];
    if(!file)return;
    if(file.size > 250*1024*1024){toast('Ukuran video maksimal 250 MB untuk penyimpanan lokal.');return;}
    const btn=e.submitter; if(btn){btn.disabled=true;btn.textContent='Menyimpan…';}
    try{
      await putVideo({id:crypto.randomUUID?crypto.randomUUID():`vid_${Date.now()}`,title:document.getElementById('videoTitleInput').value.trim(),subject:document.getElementById('videoSubjectInput').value,grade:document.getElementById('videoGradeInput').value,level:currentUser.level,teacherId:currentUser.id,teacherName:currentUser.name,createdAt:new Date().toISOString(),blob:file});
      e.currentTarget.reset();refreshVideoFormOptions();await renderVideos();toast('Video pembelajaran berhasil disimpan.');
    }catch(err){toast('Video belum dapat disimpan pada browser ini.');}
    finally{if(btn){btn.disabled=false;btn.textContent='Unggah Video';}}
  });

  // ----------------------- Hero interaktif -----------------------
  function enhanceHero() {
    const visual=document.querySelector('.hero-visual'); const card=document.querySelector('.hero-card');
    if(!visual||!card||visual.dataset.upgraded)return;
    visual.dataset.upgraded='1';
    visual.innerHTML=`<div class="hero-scene"><div class="hero-glow"></div><img src="assets/bisa-logo.svg" class="hero-logo" alt="Logo BISA"><span class="science-particle p1">DNA</span><span class="science-particle p2">H₂O</span><span class="science-particle p3">F=ma</span><span class="science-particle p4">⚛</span><span class="science-particle p5">🧬</span><div class="hero-ring r1"></div><div class="hero-ring r2"></div></div>`;
    const move=e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;visual.style.setProperty('--mx',`${x*18}px`);visual.style.setProperty('--my',`${y*18}px`);};
    card.addEventListener('pointermove',move);card.addEventListener('pointerleave',()=>{visual.style.setProperty('--mx','0px');visual.style.setProperty('--my','0px');});
  }

  // Bungkus perpindahan view agar menu guru/siswa benar-benar terpisah.
  const baseSetView = setView;
  setView = function(viewName) {
    if (currentUser && isTeacher() && ['dashboard','practice','progress','achievements'].includes(viewName)) viewName='teacher';
    baseSetView(viewName);
    if(viewName==='teacher') renderTeacherDashboard();
    if(viewName==='students') renderStudentProgressTable(document.getElementById('studentSearchInput')?.value||'');
    if(viewName==='videos') renderVideos();
    if(viewName==='learn') renderLearn();
  };

  const baseShowAuthenticatedApp = showAuthenticatedApp;
  showAuthenticatedApp = function() {
    baseShowAuthenticatedApp();
    if(!currentUser)return;
    applyRoleUI(); enhanceHero();
    if(isTeacher()) setView('teacher'); else { setView('dashboard'); renderDashboard(); }
  };

  // Grade guru boleh berganti di dalam jenjang; siswa dikunci sesuai akun.
  document.getElementById('gradeSelect')?.addEventListener('change',e=>{
    if(!currentUser)return;
    const grades = validGrades(userLevel());
    if(!grades.includes(e.target.value))return;
    state.grade=e.target.value;
    state.subject=moduleSubjects(state.level)[0];
    saveState();
    const className=document.getElementById('sidebarClassName');
    if(className) className.textContent=isTeacher()?`Guru ${userLevel()} • Kelas ${state.grade}`:`Kelas ${state.grade}`;
    renderLearn();
    if(isStudent()){renderDashboard();renderProgress();}
    refreshVideoFormOptions();
  });
  document.querySelectorAll('input[name="registerRole"]').forEach(r=>r.addEventListener('change',updateRoleRegistrationUI));
  document.getElementById('registerLevel')?.addEventListener('change',()=>setTimeout(updateRoleRegistrationUI,0));
  updateRoleRegistrationUI();

  // Pastikan tampilan sesi yang sudah aktif juga diperbarui saat file ini selesai dimuat.
  if(currentUser){applyRoleUI();enhanceHero();if(isTeacher())setView('teacher');else{renderDashboard();renderLearn();renderProgress();renderAchievements();}}
})();
