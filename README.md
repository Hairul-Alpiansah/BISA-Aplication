# BISA App v4 — Progres Terpadu & Latihan Dinamis

Versi ini merupakan pengembangan dari BISA App Absensi & Pengawasan v3.

## Perubahan utama

- Tampilan responsif untuk ponsel Android/iPhone, tablet/iPad, laptop, dan desktop lebar.
- Sesi login memakai `sessionStorage`: setelah tab/aplikasi ditutup, pembukaan berikutnya kembali ke halaman login. Data akun/progres tetap tersimpan.
- Logo BISA digunakan pada identitas aplikasi dan profil.
- Streak belajar mengikuti data absensi berstatus **Hadir**.
- Target harian mengikuti aktivitas nyata: minimal 1 subbab dibuka dan 10 soal dikerjakan.
- Progres belajar dihitung dari kombinasi pembukaan subbab modul (70%) dan latihan soal (30%).
- Jumlah **Subbab Selesai** mengikuti subbab modul yang benar-benar dibuka.
- Rata-rata nilai dihitung dari jawaban soal yang benar/salah.
- Waktu belajar dihitung real-time ketika tab aktif dan pengguna sedang berinteraksi.
- Riwayat belajar terakhir mengikuti materi/bab terakhir yang dibuka.
- Level siswa baru mulai dari **Level 1** dan meningkat mengikuti progres keseluruhan.
- Notifikasi muncul saat latihan selesai dan saat pencapaian terbuka.

## Sistem latihan

Semua jumlah bab mengikuti modul materi asli: **5 bab per kelas per mata pelajaran**.

- **Kuis Cepat**: 50 soal campuran acak dari seluruh materi kelas aktif.
- **Perkuat Konsep**: 50 soal fokus pada satu bab yang dipilih.
- **Tantangan Analisis**: 10 soal analisis/HOTS campuran acak sesuai jenjang dan kelas.
- **Bank Latihan**: 20 soal per bab.
- Kuis di dalam modul IPA SMP, Biologi SMA, Kimia SMA, dan Fisika SMA diperluas menjadi **10 soal per bab**.
- Standar ketuntasan utama: **75**.

## Pengawasan guru

Menu guru tetap difokuskan untuk pengawasan:

- Dashboard pengawasan.
- Progres siswa berdasarkan subbab yang dibuka + latihan yang dikerjakan.
- Absensi siswa.
- Unggah file materi.
- Unggah video pembelajaran.
- Tidak ada XP pada tampilan guru.

## Menjalankan aplikasi

Disarankan menjalankan folder melalui Live Server atau server lokal agar Web Crypto, iframe modul, dan penyimpanan browser bekerja konsisten.

Contoh sederhana:

```bash
python -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Catatan penyimpanan

Versi ini masih menggunakan penyimpanan browser (`localStorage`, `sessionStorage`, dan IndexedDB). Untuk penggunaan sekolah lintas perangkat secara nyata, data akun, progres, absensi, materi, dan video sebaiknya dipindahkan ke backend/database terpusat.
