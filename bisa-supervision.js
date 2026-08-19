/* =========================================================
   BISA SUPERVISION v3
   - Absensi siswa harian + pengawasan guru
   - Dashboard guru tanpa XP
   - Unggah/akses file materi melalui IndexedDB
   - Navigasi guru hanya untuk pengawasan dan sumber belajar
   ========================================================= */
(() => {
  const ATTENDANCE_KEY = 'bisa_attendance_v1';
  const MEDIA_DB = 'BISA_media_v1';
  const MEDIA_DB_VERSION = 2;
  const materialUrls = [];
  const MODULE_SUBJECTS = { SMP: ['IPA'], SMA: ['Biologi', 'Kimia', 'Fisika'] };
  const GRADES = { SMP: ['VII', 'VIII', 'IX'], SMA: ['X', 'XI', 'XII'] };

  const isTeacherAccount = () => (currentUser?.role || 'student') === 'teacher';
  const levelOf = () => currentUser?.level === 'SMA' ? 'SMA' : 'SMP';
  const subjectsForLevel = level => MODULE_SUBJECTS[level] || [];
  const gradesForLevel = level => GRADES[level] || [];

  function safe(v = '') {
    return String(v).replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
  }

  function localDateKey(date = new Date()) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function displayDate(key) {
    if (!key) return '-';
    const [y, m, d] = key.split('-').map(Number);
    return new Intl.DateTimeFormat('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
      .format(new Date(y, m - 1, d));
  }

  function displayTime(iso) {
    if (!iso) return '—';
    try { return new Intl.DateTimeFormat('id-ID', { hour: '2-digit', minute: '2-digit' }).format(new Date(iso)); }
    catch { return '—'; }
  }

  function loadAttendance() {
    try {
      const rows = JSON.parse(localStorage.getItem(ATTENDANCE_KEY) || '[]');
      return Array.isArray(rows) ? rows : [];
    } catch { return []; }
  }

  function saveAttendance(rows) {
    localStorage.setItem(ATTENDANCE_KEY, JSON.stringify(rows));
  }

  function attendanceRecord(userId, dateKey) {
    return loadAttendance().find(r => r.userId === userId && r.date === dateKey) || null;
  }

  function setAttendanceStatus(user, dateKey, status, source = 'teacher') {
    const rows = loadAttendance();
    const idx = rows.findIndex(r => r.userId === user.id && r.date === dateKey);
    if (!status) {
      if (idx >= 0) rows.splice(idx, 1);
      saveAttendance(rows);
      return null;
    }
    const record = {
      id: idx >= 0 ? rows[idx].id : (crypto.randomUUID ? crypto.randomUUID() : `att_${Date.now()}_${user.id}`),
      userId: user.id,
      name: user.name,
      email: user.email,
      level: user.level,
      grade: user.grade,
      date: dateKey,
      status,
      source,
      updatedAt: new Date().toISOString()
    };
    if (idx >= 0) rows[idx] = record; else rows.push(record);
    saveAttendance(rows);
    return record;
  }

  function studentsForCurrentTeacher() {
    if (!currentUser || !isTeacherAccount()) return [];
    return BISAAuth.listUsers().filter(u => (u.role || 'student') !== 'teacher' && u.level === currentUser.level);
  }

  function statusClass(status) {
    return status === 'Hadir' ? '' : status ? 'pending' : 'pending';
  }

  function renderStudentAttendance() {
    const holder = document.getElementById('attendanceContent');
    if (!holder || !currentUser) return;
    const today = localDateKey();
    const todayRecord = attendanceRecord(currentUser.id, today);
    const history = loadAttendance()
      .filter(r => r.userId === currentUser.id)
      .sort((a, b) => String(b.date).localeCompare(String(a.date)))
      .slice(0, 14);

    document.getElementById('attendanceEyebrow').textContent = 'ABSENSI SISWA';
    document.getElementById('attendanceTitle').textContent = 'Absensi Harian';
    document.getElementById('attendanceSubtitle').textContent = `Kehadiran untuk ${currentUser.level} Kelas ${currentUser.grade}. Absensi tidak menambah XP.`;

    holder.innerHTML = `<div class="attendance-grid">
      <section class="attendance-status-card">
        <span class="eyebrow">HARI INI</span>
        <h2>${displayDate(today)}</h2>
        <p class="attendance-date">${todayRecord ? `Tercatat pukul ${displayTime(todayRecord.updatedAt)}` : 'Kehadiran belum tercatat.'}</p>
        <p><span class="attendance-pill ${statusClass(todayRecord?.status)}">${todayRecord?.status || 'Belum Absen'}</span></p>
        <button class="primary-button full" id="studentCheckinBtn" ${todayRecord ? 'disabled' : ''}>${todayRecord ? 'Absensi Hari Ini Sudah Tercatat' : 'Saya Hadir Hari Ini'}</button>
        <p class="storage-note">Guru dapat melihat status kehadiran ini pada dashboard pengawasan.</p>
      </section>
      <section class="panel">
        <div class="section-heading"><div><span class="eyebrow">RIWAYAT</span><h2>14 Absensi Terakhir</h2></div></div>
        <div class="attendance-history">${history.length ? history.map(r => `<div class="attendance-history-row"><span><strong>${displayDate(r.date)}</strong><small>${r.source === 'student' ? 'Diisi siswa' : 'Dicatat guru'}</small></span><span class="attendance-pill ${statusClass(r.status)}">${safe(r.status)}</span><small>${displayTime(r.updatedAt)}</small></div>`).join('') : '<p class="empty-copy">Belum ada riwayat absensi.</p>'}</div>
      </section>
    </div>`;

    document.getElementById('studentCheckinBtn')?.addEventListener('click', () => {
      setAttendanceStatus(currentUser, today, 'Hadir', 'student');
      toast('Absensi hari ini berhasil dicatat.');
      renderStudentAttendance();
    });
  }

  function renderTeacherAttendance() {
    const holder = document.getElementById('attendanceContent');
    if (!holder || !currentUser) return;
    const today = localDateKey();
    const selectedDate = holder.dataset.date || today;
    const selectedGrade = holder.dataset.grade || 'ALL';
    const search = holder.dataset.search || '';
    const allStudents = studentsForCurrentTeacher();
    const students = allStudents.filter(u => (selectedGrade === 'ALL' || u.grade === selectedGrade) && (!search || `${u.name} ${u.email}`.toLowerCase().includes(search.toLowerCase())));
    const rows = loadAttendance();
    const byUser = new Map(rows.filter(r => r.date === selectedDate).map(r => [r.userId, r]));
    const present = allStudents.filter(u => byUser.get(u.id)?.status === 'Hadir').length;
    const excused = allStudents.filter(u => ['Izin', 'Sakit'].includes(byUser.get(u.id)?.status)).length;

    document.getElementById('attendanceEyebrow').textContent = `PENGAWASAN ${currentUser.level}`;
    document.getElementById('attendanceTitle').textContent = 'Absensi Siswa';
    document.getElementById('attendanceSubtitle').textContent = 'Pantau atau koreksi status kehadiran siswa berdasarkan tanggal dan kelas.';

    holder.innerHTML = `<div class="stats-grid">
      <article class="stat-card"><div class="stat-icon purple">👥</div><div><small>Total Siswa</small><strong>${allStudents.length}</strong></div><span class="trend">${currentUser.level}</span></article>
      <article class="stat-card"><div class="stat-icon green">✓</div><div><small>Hadir</small><strong>${present}</strong></div><span class="trend">${displayDate(selectedDate).split(',')[0]}</span></article>
      <article class="stat-card"><div class="stat-icon amber">○</div><div><small>Izin / Sakit</small><strong>${excused}</strong></div><span class="trend">tercatat</span></article>
      <article class="stat-card"><div class="stat-icon cyan">—</div><div><small>Belum Tercatat</small><strong>${Math.max(0, allStudents.length - [...byUser.values()].filter(r => allStudents.some(u => u.id === r.userId)).length)}</strong></div><span class="trend">perlu cek</span></article>
    </div>
    <section class="panel">
      <div class="attendance-teacher-controls">
        <label>Tanggal<input type="date" id="attendanceDateFilter" value="${selectedDate}" max="${today}"></label>
        <label>Kelas<select id="attendanceGradeFilter"><option value="ALL">Semua kelas</option>${gradesForLevel(levelOf()).map(g => `<option value="${g}" ${selectedGrade === g ? 'selected' : ''}>Kelas ${g}</option>`).join('')}</select></label>
        <label>Cari siswa<input type="search" id="attendanceSearch" value="${safe(search)}" placeholder="Nama atau email"></label>
      </div>
      <div class="attendance-table">
        <div class="attendance-row head"><span>Siswa</span><span>Kelas</span><span>Status</span><span>Waktu</span></div>
        ${students.map(u => {
          const rec = byUser.get(u.id);
          const status = rec?.status || '';
          return `<div class="attendance-row"><span><strong>${safe(u.name)}</strong><small>${safe(u.email)}</small></span><span>${safe(u.grade)}</span><span><select class="attendance-status-select" data-student-id="${safe(u.id)}"><option value="" ${!status ? 'selected' : ''}>Belum</option>${['Hadir','Izin','Sakit','Alpa'].map(v => `<option value="${v}" ${status === v ? 'selected' : ''}>${v}</option>`).join('')}</select></span><span>${rec ? `${displayTime(rec.updatedAt)}<small>${rec.source === 'student' ? 'oleh siswa' : 'oleh guru'}</small>` : '—'}</span></div>`;
        }).join('') || '<p class="empty-copy table-empty">Belum ada siswa yang cocok.</p>'}
      </div>
    </section>`;

    document.getElementById('attendanceDateFilter')?.addEventListener('change', e => { holder.dataset.date = e.target.value || today; renderTeacherAttendance(); });
    document.getElementById('attendanceGradeFilter')?.addEventListener('change', e => { holder.dataset.grade = e.target.value; renderTeacherAttendance(); });
    document.getElementById('attendanceSearch')?.addEventListener('input', e => { holder.dataset.search = e.target.value; renderTeacherAttendance(); });
    holder.querySelectorAll('.attendance-status-select').forEach(select => select.addEventListener('change', e => {
      const student = allStudents.find(u => u.id === e.target.dataset.studentId);
      if (!student) return;
      setAttendanceStatus(student, selectedDate, e.target.value, 'teacher');
      toast(e.target.value ? `Absensi ${student.name}: ${e.target.value}.` : `Status absensi ${student.name} dikosongkan.`);
      renderTeacherAttendance();
    }));
  }

  function renderAttendance() {
    if (!currentUser) return;
    if (isTeacherAccount()) renderTeacherAttendance(); else renderStudentAttendance();
  }

  function openMediaDb() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(MEDIA_DB, MEDIA_DB_VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains('videos')) {
          const videos = db.createObjectStore('videos', { keyPath: 'id' });
          videos.createIndex('level', 'level', { unique: false });
          videos.createIndex('teacherId', 'teacherId', { unique: false });
        }
        if (!db.objectStoreNames.contains('materials')) {
          const materials = db.createObjectStore('materials', { keyPath: 'id' });
          materials.createIndex('level', 'level', { unique: false });
          materials.createIndex('teacherId', 'teacherId', { unique: false });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function materialStoreAction(mode, payload) {
    const db = await openMediaDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('materials', mode === 'getAll' ? 'readonly' : 'readwrite');
      const store = tx.objectStore('materials');
      let request;
      if (mode === 'put') request = store.put(payload);
      else if (mode === 'delete') request = store.delete(payload);
      else request = store.getAll();
      if (mode === 'getAll') request.onsuccess = () => resolve(request.result || []);
      tx.oncomplete = () => { db.close(); if (mode !== 'getAll') resolve(); };
      tx.onerror = () => { db.close(); reject(tx.error); };
      request?.addEventListener?.('error', () => reject(request.error));
    });
  }

  const getMaterials = () => materialStoreAction('getAll');
  const putMaterial = record => materialStoreAction('put', record);
  const deleteMaterial = id => materialStoreAction('delete', id);

  function refreshMaterialOptions() {
    if (!currentUser) return;
    const subject = document.getElementById('materialSubjectInput');
    const grade = document.getElementById('materialGradeInput');
    if (subject) subject.innerHTML = subjectsForLevel(levelOf()).map(s => `<option value="${s}">${s}</option>`).join('');
    if (grade) grade.innerHTML = gradesForLevel(levelOf()).map(g => `<option value="${g}">Kelas ${g}</option>`).join('');
  }

  function fileIcon(type = '', name = '') {
    const ext = name.split('.').pop()?.toLowerCase();
    if (type.startsWith('image/')) return '🖼️';
    if (ext === 'pdf') return '📕';
    if (['ppt','pptx'].includes(ext)) return '📊';
    if (['xls','xlsx'].includes(ext)) return '📈';
    if (['doc','docx'].includes(ext)) return '📘';
    if (ext === 'zip') return '🗂️';
    return '📄';
  }

  function formatBytes(bytes = 0) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  }

  async function renderMaterials() {
    const holder = document.getElementById('materialLibrary');
    if (!holder || !currentUser) return;
    materialUrls.splice(0).forEach(URL.revokeObjectURL);
    try {
      let materials = (await getMaterials()).filter(m => m.level === levelOf());
      if (isTeacherAccount()) materials = materials.filter(m => m.teacherId === currentUser.id);
      else materials = materials.filter(m => m.grade === state.grade);
      materials.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
      if (!materials.length) {
        holder.innerHTML = `<p class="empty-copy">${isTeacherAccount() ? 'Belum ada file materi yang diunggah.' : 'Belum ada file materi dari guru untuk kelas aktif ini.'}</p>`;
        return;
      }
      holder.innerHTML = materials.map(m => {
        const url = URL.createObjectURL(m.blob);
        materialUrls.push(url);
        return `<article class="material-card">
          <div class="material-card-icon">${fileIcon(m.type, m.fileName)}</div>
          <span class="eyebrow">${safe(m.subject)} • KELAS ${safe(m.grade)}</span>
          <h3>${safe(m.title)}</h3>
          <p>${safe(m.fileName)}</p>
          <span class="file-meta">${formatBytes(m.size)} • ${new Date(m.createdAt).toLocaleDateString('id-ID')} • ${safe(m.teacherName || 'Guru BISA')}</span>
          <div class="material-card-actions">
            <a class="secondary-button material-open" href="${url}" target="_blank" rel="noopener">Buka</a>
            <a class="secondary-button material-open" href="${url}" download="${safe(m.fileName)}">Simpan File</a>
            ${isTeacherAccount() ? `<button class="danger-link" data-delete-material="${safe(m.id)}">Hapus</button>` : ''}
          </div>
        </article>`;
      }).join('');
      holder.querySelectorAll('[data-delete-material]').forEach(btn => btn.addEventListener('click', async () => {
        if (!confirm('Hapus file materi ini?')) return;
        await deleteMaterial(btn.dataset.deleteMaterial);
        toast('File materi dihapus.');
        renderMaterials();
      }));
    } catch (err) {
      holder.innerHTML = '<p class="empty-copy">Browser ini belum dapat membuka penyimpanan file materi lokal.</p>';
    }
  }

  document.getElementById('materialUploadForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    if (!currentUser || !isTeacherAccount()) return;
    const file = document.getElementById('materialFileInput')?.files?.[0];
    if (!file) return;
    if (file.size > 50 * 1024 * 1024) { toast('Ukuran file materi maksimal 50 MB untuk penyimpanan lokal.'); return; }
    const button = e.submitter;
    if (button) { button.disabled = true; button.textContent = 'Menyimpan…'; }
    try {
      await putMaterial({
        id: crypto.randomUUID ? crypto.randomUUID() : `mat_${Date.now()}`,
        title: document.getElementById('materialTitleInput').value.trim(),
        subject: document.getElementById('materialSubjectInput').value,
        grade: document.getElementById('materialGradeInput').value,
        level: levelOf(),
        teacherId: currentUser.id,
        teacherName: currentUser.name,
        fileName: file.name,
        type: file.type || 'application/octet-stream',
        size: file.size,
        createdAt: new Date().toISOString(),
        blob: file
      });
      e.currentTarget.reset();
      refreshMaterialOptions();
      await renderMaterials();
      toast('File materi berhasil disimpan.');
    } catch { toast('File materi belum dapat disimpan pada browser ini.'); }
    finally { if (button) { button.disabled = false; button.textContent = 'Unggah Materi'; } }
  });

  function updateResourceHeader() {
    const title = document.getElementById('videosTitle');
    const subtitle = document.getElementById('videosSubtitle');
    if (!title || !subtitle || !currentUser) return;
    if (isTeacherAccount()) {
      title.textContent = 'Materi & Video Pembelajaran';
      subtitle.textContent = `Unggah bahan ajar dan video untuk siswa ${currentUser.level}.`;
    } else {
      title.textContent = 'Materi & Video dari Guru';
      subtitle.textContent = `Bahan ajar untuk ${currentUser.level} Kelas ${state.grade}.`;
    }
  }

  function updateTeacherDashboardAttendance() {
    if (!currentUser || !isTeacherAccount()) return;
    const view = document.getElementById('teacherView');
    if (!view?.classList.contains('active')) return;
    const students = studentsForCurrentTeacher();
    const today = localDateKey();
    const records = loadAttendance().filter(r => r.date === today && students.some(u => u.id === r.userId));
    const present = records.filter(r => r.status === 'Hadir').length;
    const cards = view.querySelectorAll('.stat-card');
    const card = cards[cards.length - 1];
    if (card) card.innerHTML = `<div class="stat-icon green">✓</div><div><small>Hadir Hari Ini</small><strong>${present}/${students.length}</strong></div><span class="trend">absensi</span>`;
  }

  function applyTeacherOnlyInterface() {
    if (!currentUser) return;
    document.body.classList.toggle('teacher-mode', isTeacherAccount());
    document.body.classList.toggle('student-mode', !isTeacherAccount());
    const search = document.querySelector('.search-box input');
    if (search) search.placeholder = isTeacherAccount() ? 'Cari siswa atau materi yang diawasi...' : 'Cari materi, bab, atau mata pelajaran...';
    refreshMaterialOptions();
  }

  // Bungkus perpindahan view terakhir agar extension ini selalu ikut merender.
  const previousSetView = setView;
  setView = function(viewName) {
    if (currentUser && isTeacherAccount() && ['dashboard', 'learn', 'practice', 'progress', 'achievements'].includes(viewName)) viewName = 'teacher';
    previousSetView(viewName);
    if (viewName === 'attendance') renderAttendance();
    if (viewName === 'videos') {
      updateResourceHeader();
      refreshMaterialOptions();
      renderMaterials();
    }
    if (viewName === 'teacher') updateTeacherDashboardAttendance();
  };

  // Pastikan login/registrasi berikutnya ikut menerapkan UI v3.
  const previousShowAuthenticatedApp = showAuthenticatedApp;
  showAuthenticatedApp = function() {
    previousShowAuthenticatedApp();
    if (!currentUser) return;
    applyTeacherOnlyInterface();
    if (isTeacherAccount()) {
      setView('teacher');
    }
  };

  applyTeacherOnlyInterface();
  if (currentUser) {
    if (isTeacherAccount()) {
      setView('teacher');
    } else if (document.getElementById('videosView')?.classList.contains('active')) {
      updateResourceHeader();
      renderMaterials();
    }
  }
})();
