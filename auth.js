/* =========================================================
   BISA AUTH - Prototype autentikasi lokal
   Setiap akun memiliki user ID dan state/progres terpisah.
   CATATAN: localStorage bukan pengganti backend produksi.
   ========================================================= */

const BISAAuth = (() => {
  const USERS_KEY = "bisa_users_v1";
  const SESSION_KEY = "bisa_session_v1";
  // Bersihkan penanda sesi versi lama. Sesi aktif v4 hanya hidup di sessionStorage.
  localStorage.removeItem(SESSION_KEY);

  function loadUsers() {
    try {
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
      return Array.isArray(users) ? users : [];
    } catch {
      return [];
    }
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function normalizeEmail(email) {
    return String(email || "").trim().toLowerCase();
  }

  function makeId() {
    if (window.crypto?.randomUUID) return window.crypto.randomUUID();
    return `user_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  }

  function makeSalt() {
    if (!window.crypto?.getRandomValues) {
      return `${Date.now()}_${Math.random().toString(36).slice(2)}`;
    }
    const bytes = new Uint8Array(16);
    window.crypto.getRandomValues(bytes);
    return Array.from(bytes, b => b.toString(16).padStart(2, "0")).join("");
  }

  async function hashPassword(password, salt) {
    if (!window.crypto?.subtle) {
      throw new Error("Fitur keamanan browser tidak tersedia. Jalankan aplikasi melalui Live Server/localhost.");
    }
    const input = new TextEncoder().encode(`${salt}:${password}`);
    const digest = await window.crypto.subtle.digest("SHA-256", input);
    return Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2, "0")).join("");
  }

  function publicUser(user) {
    if (!user) return null;
    const { passwordHash, salt, ...safe } = user;
    return safe;
  }

  function getSessionUserId() {
    return sessionStorage.getItem(SESSION_KEY);
  }

  function getCurrentUser() {
    const id = getSessionUserId();
    if (!id) return null;
    return publicUser(loadUsers().find(u => u.id === id) || null);
  }

  function hasAccounts() {
    return loadUsers().length > 0;
  }

  async function register({ name, email, password, level, grade, role }) {
    name = String(name || "").trim();
    email = normalizeEmail(email);
    level = level === "SMA" ? "SMA" : "SMP";
    role = role === "teacher" ? "teacher" : "student";

    if (name.length < 2) throw new Error("Nama minimal 2 karakter.");
    if (!email) throw new Error("Email wajib diisi.");
    if (String(password).length < 8) throw new Error("Password minimal 8 karakter.");

    const users = loadUsers();
    if (users.some(u => normalizeEmail(u.email) === email)) {
      throw new Error("Email sudah terdaftar. Silakan masuk.");
    }

    const salt = makeSalt();
    const passwordHash = await hashPassword(password, salt);
    const user = {
      id: makeId(),
      name,
      email,
      level,
      grade,
      role,
      salt,
      passwordHash,
      createdAt: new Date().toISOString()
    };

    users.push(user);
    saveUsers(users);
    sessionStorage.setItem(SESSION_KEY, user.id);
    return publicUser(user);
  }

  async function login(email, password, expectedRole) {
    email = normalizeEmail(email);
    const user = loadUsers().find(u => normalizeEmail(u.email) === email);
    if (!user) throw new Error("Email atau password tidak sesuai.");

    const candidate = await hashPassword(password, user.salt);
    if (candidate !== user.passwordHash) {
      throw new Error("Email atau password tidak sesuai.");
    }
    const actualRole = user.role === "teacher" ? "teacher" : "student";
    if (expectedRole && actualRole !== expectedRole) {
      throw new Error(expectedRole === "teacher" ? "Akun ini bukan akun guru." : "Akun ini bukan akun siswa.");
    }

    sessionStorage.setItem(SESSION_KEY, user.id);
    return publicUser(user);
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
  }

  function updateCurrentUser(changes = {}) {
    const id = getSessionUserId();
    if (!id) return null;
    const users = loadUsers();
    const index = users.findIndex(u => u.id === id);
    if (index < 0) return null;

    if (typeof changes.name === "string" && changes.name.trim().length >= 2) {
      users[index].name = changes.name.trim();
    }
    if (changes.level === "SMP" || changes.level === "SMA") users[index].level = changes.level;
    if (changes.role === "teacher" || changes.role === "student") users[index].role = changes.role;
    if (typeof changes.grade === "string") users[index].grade = changes.grade;

    saveUsers(users);
    return publicUser(users[index]);
  }

  function listUsers() {
    return loadUsers().map(publicUser);
  }

  function getUserById(id) {
    return publicUser(loadUsers().find(u => u.id === id) || null);
  }

  function stateKey(userId) {
    return `bisa_state_v1_${userId}`;
  }

  return {
    register,
    login,
    logout,
    getCurrentUser,
    updateCurrentUser,
    hasAccounts,
    listUsers,
    getUserById,
    stateKey
  };
})();
