const BISAQuery = new URLSearchParams(location.search);
const BISAUserKey = BISAQuery.get('user') || 'guest';
const BISALocked = BISAQuery.get('locked') === '1';
const BISAProgressKey = `fisikaProgress-${BISAUserKey}`;
const BISAThemeKey = `fisikaTheme-${BISAUserKey}`;

const PHYSICS = {
  X: [
    {
      title: "Hakikat Fisika, Besaran, Satuan, dan Pengukuran",
      intro: "Memahami fisika sebagai ilmu berbasis pengamatan dan eksperimen, mengenal besaran SI, alat ukur, angka penting, ketidakpastian, serta analisis dimensi.",
      concepts: ["Metode ilmiah", "Besaran pokok", "Besaran turunan", "SI", "Angka penting", "Ketidakpastian", "Dimensi"],
      sections: [
        ["Hakikat Fisika", "Fisika mempelajari materi, energi, gerak, gaya, ruang, waktu, serta interaksinya. Pengetahuan fisika dibangun melalui pengamatan, hipotesis, eksperimen, analisis data, dan kesimpulan."],
        ["Besaran dan Satuan", "Besaran adalah sesuatu yang dapat diukur dan dinyatakan dengan angka serta satuan. Tujuh besaran pokok SI meliputi panjang, massa, waktu, suhu, kuat arus, jumlah zat, dan intensitas cahaya."],
        ["Pengukuran", "Pemilihan alat ukur menyesuaikan besaran dan tingkat ketelitian. Mistar, jangka sorong, mikrometer, neraca, stopwatch, termometer, dan amperemeter memiliki ketelitian berbeda."],
        ["Ketidakpastian dan Dimensi", "Setiap pengukuran memiliki ketidakpastian. Analisis dimensi membantu memeriksa konsistensi suatu persamaan fisika dan hubungan antarbesaran."]
      ],
      formulas: [
        ["Kecepatan", "v = s / t", "m/s"],
        ["Percepatan", "a = Δv / Δt", "m/s²"],
        ["Gaya", "F = m a", "N = kg·m/s²"],
        ["Dimensi kecepatan", "[v] = L T⁻¹", "Analisis dimensi"]
      ],
      sim: "measurement",
      simTitle: "Laboratorium Pengukuran",
      simDescription: "Geser panjang benda dan ketelitian alat. Perhatikan bagaimana hasil pembacaan dan ketidakpastian berubah.",
      quiz: [
        {q:"Besaran mana yang termasuk besaran pokok SI?", o:["Gaya","Energi","Massa","Kecepatan"], a:2, e:"Massa adalah salah satu dari tujuh besaran pokok SI."},
        {q:"Dimensi kecepatan adalah...", o:["L T⁻¹","L T⁻²","M L T⁻²","M L² T⁻²"], a:0, e:"Kecepatan = panjang/waktu, sehingga dimensinya L T⁻¹."}
      ]
    },
    {
      title: "Vektor dan Gerak",
      intro: "Mempelajari perbedaan skalar dan vektor, resultan vektor, jarak, perpindahan, GLB, GLBB, jatuh bebas, dan gerak parabola.",
      concepts: ["Skalar", "Vektor", "Resultan", "GLB", "GLBB", "Jatuh bebas", "Gerak parabola"],
      sections: [
        ["Skalar dan Vektor", "Skalar hanya mempunyai nilai, sedangkan vektor mempunyai nilai dan arah. Contoh vektor: perpindahan, kecepatan, percepatan, dan gaya."],
        ["Gerak Lurus", "GLB memiliki kecepatan tetap. GLBB memiliki percepatan tetap sehingga kecepatan berubah secara teratur terhadap waktu."],
        ["Jatuh Bebas", "Jika hambatan udara diabaikan, benda jatuh mengalami percepatan gravitasi yang hampir konstan di dekat permukaan Bumi."],
        ["Gerak Parabola", "Gerak parabola dapat dianalisis sebagai gabungan GLB horizontal dan GLBB vertikal."]
      ],
      formulas: [
        ["GLB", "s = v t", "v konstan"],
        ["GLBB", "v = v₀ + a t", "a konstan"],
        ["Perpindahan GLBB", "s = v₀t + ½at²", "m"],
        ["Gerak parabola", "v₀x = v₀ cos θ ; v₀y = v₀ sin θ", "komponen"]
      ],
      sim: "projectile",
      simTitle: "Simulasi Gerak Parabola",
      simDescription: "Ubah kecepatan awal dan sudut tembak. Lintasan, waktu terbang, tinggi maksimum, dan jangkauan akan dihitung.",
      quiz: [
        {q:"Pada GLB, besaran yang tetap adalah...", o:["Percepatan saja","Kecepatan","Jarak","Gaya"], a:1, e:"GLB didefinisikan sebagai gerak dengan kecepatan tetap."},
        {q:"Gerak parabola merupakan gabungan...", o:["GLB horizontal dan GLBB vertikal","GLBB horizontal dan GLB vertikal","Dua GLB","Dua gerak melingkar"], a:0, e:"Komponen horizontal bergerak beraturan, sedangkan vertikal dipercepat gravitasi."}
      ]
    },
    {
      title: "Hukum Newton dan Gaya",
      intro: "Mempelajari hubungan gaya, massa, dan percepatan melalui tiga Hukum Newton, serta gaya berat, normal, gesek, dan sentripetal.",
      concepts: ["Inersia", "ΣF = 0", "ΣF = ma", "Aksi-reaksi", "Berat", "Normal", "Gesekan"],
      sections: [
        ["Hukum I Newton", "Jika resultan gaya nol, benda mempertahankan keadaan geraknya: tetap diam atau bergerak lurus beraturan."],
        ["Hukum II Newton", "Percepatan sebanding dengan resultan gaya dan berbanding terbalik dengan massa. Arah percepatan sama dengan arah resultan gaya."],
        ["Hukum III Newton", "Gaya selalu muncul berpasangan. Gaya aksi dan reaksi sama besar, berlawanan arah, dan bekerja pada benda yang berbeda."],
        ["Gaya pada Benda", "Analisis diagram gaya membantu menentukan berat, normal, gesek, tegangan tali, serta gaya lain yang bekerja."]
      ],
      formulas: [
        ["Hukum II Newton", "ΣF = m a", "N"],
        ["Berat", "w = m g", "N"],
        ["Gesek kinetis", "fₖ = μₖ N", "N"],
        ["Sentripetal", "Fₛ = m v² / r", "N"]
      ],
      sim: "newton",
      simTitle: "Blok, Gaya, dan Gesekan",
      simDescription: "Atur massa, gaya dorong, dan koefisien gesek untuk melihat resultan gaya serta percepatan blok.",
      quiz: [
        {q:"Benda 5 kg mendapat resultan gaya 20 N. Percepatannya...", o:["2 m/s²","4 m/s²","5 m/s²","100 m/s²"], a:1, e:"a = F/m = 20/5 = 4 m/s²."},
        {q:"Pasangan aksi-reaksi bekerja pada...", o:["Benda yang sama","Benda berbeda","Hanya benda bergerak","Hanya benda diam"], a:1, e:"Menurut Hukum III Newton, kedua gaya bekerja pada dua benda berbeda."}
      ]
    },
    {
      title: "Usaha, Energi, dan Daya",
      intro: "Mengkaji usaha sebagai perpindahan energi, energi kinetik dan potensial, kekekalan energi mekanik, daya, dan efisiensi.",
      concepts: ["Usaha", "Energi kinetik", "Energi potensial", "Kekekalan energi", "Daya", "Efisiensi"],
      sections: [
        ["Usaha", "Usaha terjadi ketika gaya memiliki komponen searah perpindahan. Besarnya dipengaruhi gaya, perpindahan, dan sudut antara keduanya."],
        ["Energi", "Energi kinetik berkaitan dengan gerak, sedangkan energi potensial gravitasi berkaitan dengan kedudukan terhadap acuan."],
        ["Kekekalan Energi", "Jika hanya gaya konservatif bekerja, jumlah energi kinetik dan potensial tetap."],
        ["Daya dan Efisiensi", "Daya menyatakan cepatnya usaha dilakukan. Efisiensi membandingkan energi keluaran yang berguna terhadap energi masukan."]
      ],
      formulas: [
        ["Usaha", "W = F s cos θ", "J"],
        ["Energi kinetik", "Eₖ = ½ m v²", "J"],
        ["Energi potensial", "Eₚ = m g h", "J"],
        ["Daya", "P = W / t", "W"]
      ],
      sim: "energy",
      simTitle: "Neraca Energi Mekanik",
      simDescription: "Ubah massa, ketinggian, dan kecepatan untuk melihat kontribusi energi potensial dan kinetik.",
      quiz: [
        {q:"Energi kinetik benda bergantung pada...", o:["Kecepatan kuadrat","Ketinggian saja","Waktu saja","Suhu"], a:0, e:"Eₖ = ½mv², sehingga bergantung pada kuadrat kecepatan."},
        {q:"Satuan SI untuk daya adalah...", o:["Newton","Joule","Watt","Pascal"], a:2, e:"Daya diukur dalam watt (W), setara joule per sekon."}
      ]
    },
    {
      title: "Momentum, Impuls, dan Gerak Melingkar",
      intro: "Menghubungkan massa dan kecepatan melalui momentum, memahami impuls dan tumbukan, serta mengenal besaran gerak melingkar.",
      concepts: ["Momentum", "Impuls", "Tumbukan", "Kekekalan momentum", "ω", "Sentripetal"],
      sections: [
        ["Momentum dan Impuls", "Momentum adalah hasil kali massa dan kecepatan. Impuls sama dengan perubahan momentum."],
        ["Kekekalan Momentum", "Dalam sistem dengan resultan gaya luar nol, momentum total sebelum dan sesudah interaksi tetap."],
        ["Tumbukan", "Tumbukan dapat lenting sempurna, lenting sebagian, atau tidak lenting sama sekali, bergantung pada perubahan energi kinetiknya."],
        ["Gerak Melingkar", "Benda yang bergerak pada lintasan melingkar mengalami percepatan menuju pusat lintasan."]
      ],
      formulas: [
        ["Momentum", "p = m v", "kg·m/s"],
        ["Impuls", "I = F Δt = Δp", "N·s"],
        ["Kecepatan linear", "v = ω r", "m/s"],
        ["Percepatan sentripetal", "aₛ = v²/r", "m/s²"]
      ],
      sim: "momentum",
      simTitle: "Dua Kereta dan Momentum",
      simDescription: "Atur massa serta kecepatan dua benda dan bandingkan momentum masing-masing serta momentum total sistem.",
      quiz: [
        {q:"Impuls sama dengan...", o:["Perubahan energi","Perubahan momentum","Massa dibagi waktu","Gaya dibagi massa"], a:1, e:"Teorema impuls-momentum menyatakan I = Δp."},
        {q:"Arah percepatan sentripetal adalah...", o:["Menjauhi pusat","Menuju pusat","Searah kecepatan","Selalu ke atas"], a:1, e:"Percepatan sentripetal selalu mengarah menuju pusat lintasan."}
      ]
    }
  ],
  XI: [
    {
      title: "Fluida",
      intro: "Mempelajari massa jenis, tekanan, tekanan hidrostatis, Hukum Pascal, Hukum Archimedes, kontinuitas, dan Bernoulli.",
      concepts: ["Massa jenis", "Tekanan", "Hidrostatis", "Pascal", "Archimedes", "Kontinuitas", "Bernoulli"],
      sections: [
        ["Fluida Statis", "Pada fluida diam, tekanan bertambah dengan kedalaman. Tekanan pada kedalaman tertentu bergantung pada massa jenis, gravitasi, dan kedalaman."],
        ["Hukum Pascal", "Tekanan pada fluida tertutup diteruskan sama besar ke segala arah, menjadi dasar sistem hidrolik."],
        ["Hukum Archimedes", "Benda dalam fluida mengalami gaya ke atas sebesar berat fluida yang dipindahkan."],
        ["Fluida Dinamis", "Kontinuitas menghubungkan luas penampang dengan kecepatan aliran, sedangkan Bernoulli menghubungkan tekanan, kecepatan, dan ketinggian."]
      ],
      formulas: [
        ["Massa jenis", "ρ = m / V", "kg/m³"],
        ["Tekanan", "P = F / A", "Pa"],
        ["Hidrostatis", "Pₕ = ρ g h", "Pa"],
        ["Kontinuitas", "A₁v₁ = A₂v₂", "debit konstan"]
      ],
      sim: "fluid",
      simTitle: "Tekanan dalam Fluida",
      simDescription: "Ubah kedalaman dan massa jenis fluida untuk melihat tekanan hidrostatis serta perubahan gaya pada sensor.",
      quiz: [
        {q:"Tekanan hidrostatis bertambah jika...", o:["Kedalaman berkurang","Massa jenis berkurang","Kedalaman bertambah","Gravitasi nol"], a:2, e:"Pₕ = ρgh, sehingga tekanan meningkat ketika h meningkat."},
        {q:"Hukum Pascal digunakan pada...", o:["Dongkrak hidrolik","Teleskop","Kaca pembesar","Termometer"], a:0, e:"Dongkrak hidrolik memanfaatkan penerusan tekanan pada fluida tertutup."}
      ]
    },
    {
      title: "Elastisitas dan Getaran Harmonik",
      intro: "Mempelajari Hukum Hooke, energi potensial elastis, susunan pegas, periode, frekuensi, dan getaran harmonik sederhana.",
      concepts: ["Elastisitas", "Hukum Hooke", "Konstanta pegas", "Energi pegas", "Periode", "Frekuensi"],
      sections: [
        ["Elastisitas", "Benda elastis cenderung kembali ke bentuk semula setelah gaya penyebab deformasi dihilangkan, selama batas elastis tidak terlampaui."],
        ["Hukum Hooke", "Pada daerah elastis, gaya pemulih pegas sebanding dengan simpangannya."],
        ["Susunan Pegas", "Pegas seri menghasilkan konstanta pengganti lebih kecil, sedangkan pegas paralel menghasilkan konstanta pengganti lebih besar."],
        ["Getaran Harmonik", "Getaran harmonik sederhana terjadi ketika gaya pemulih sebanding dan berlawanan arah dengan simpangan."]
      ],
      formulas: [
        ["Hooke", "F = k x", "N"],
        ["Energi pegas", "Eₚ = ½ k x²", "J"],
        ["Periode pegas", "T = 2π√(m/k)", "s"],
        ["Frekuensi", "f = 1/T", "Hz"]
      ],
      sim: "spring",
      simTitle: "Pegas Harmonik",
      simDescription: "Atur massa dan konstanta pegas. Visualisasi menunjukkan pertambahan panjang dan perkiraan periode getaran.",
      quiz: [
        {q:"Jika konstanta pegas membesar sementara massa tetap, periode getaran...", o:["Membesar","Mengecil","Tetap","Tak terhingga"], a:1, e:"T = 2π√(m/k); k lebih besar membuat T lebih kecil."},
        {q:"Energi potensial pegas sebanding dengan...", o:["x","x²","1/x","√x"], a:1, e:"Eₚ = ½kx²."}
      ]
    },
    {
      title: "Suhu, Kalor, dan Termodinamika",
      intro: "Membahas suhu, pemuaian, kalor, perubahan wujud, Asas Black, perpindahan kalor, dan Hukum I Termodinamika.",
      concepts: ["Suhu", "Pemuaian", "Kalor", "Kalor jenis", "Asas Black", "Konduksi", "Termodinamika"],
      sections: [
        ["Suhu dan Pemuaian", "Suhu menggambarkan keadaan termal suatu benda. Banyak bahan memuai ketika suhu meningkat."],
        ["Kalor", "Kalor merupakan energi yang berpindah akibat perbedaan suhu. Besarnya dipengaruhi massa, kalor jenis, dan perubahan suhu."],
        ["Perpindahan Kalor", "Kalor berpindah melalui konduksi, konveksi, dan radiasi."],
        ["Hukum I Termodinamika", "Perubahan energi internal sistem sama dengan kalor yang diterima dikurangi kerja yang dilakukan sistem."]
      ],
      formulas: [
        ["Kalor", "Q = m c ΔT", "J"],
        ["Perubahan wujud", "Q = m L", "J"],
        ["Pemuaian panjang", "ΔL = αL₀ΔT", "m"],
        ["Hukum I", "ΔU = Q - W", "J"]
      ],
      sim: "thermal",
      simTitle: "Pencampuran Dua Zat",
      simDescription: "Atur suhu dua zat bermassa dan berkalor jenis sama. Simulasi memperkirakan suhu kesetimbangan ideal.",
      quiz: [
        {q:"Kalor mengalir spontan dari...", o:["Suhu rendah ke tinggi","Suhu tinggi ke rendah","Massa kecil ke besar","Benda diam ke bergerak"], a:1, e:"Kalor berpindah spontan dari temperatur lebih tinggi menuju lebih rendah."},
        {q:"Rumus kalor untuk perubahan suhu tanpa perubahan wujud adalah...", o:["Q = mL","Q = mcΔT","P = W/t","V = IR"], a:1, e:"Q = mcΔT."}
      ]
    },
    {
      title: "Gelombang dan Bunyi",
      intro: "Mengenal gelombang transversal dan longitudinal, amplitudo, frekuensi, panjang gelombang, interferensi, resonansi, bunyi, dan Doppler.",
      concepts: ["Gelombang", "Amplitudo", "Frekuensi", "λ", "Interferensi", "Resonansi", "Doppler"],
      sections: [
        ["Gelombang", "Gelombang adalah perambatan gangguan yang membawa energi. Gelombang mekanik memerlukan medium, sedangkan gelombang elektromagnetik tidak."],
        ["Besaran Gelombang", "Amplitudo menyatakan simpangan maksimum, frekuensi menyatakan banyak getaran per sekon, dan panjang gelombang adalah jarak satu fase penuh."],
        ["Interferensi dan Resonansi", "Gelombang dapat saling memperkuat atau melemahkan. Resonansi terjadi saat sistem dipaksa pada frekuensi mendekati frekuensi alaminya."],
        ["Bunyi dan Doppler", "Bunyi merupakan gelombang mekanik. Gerak relatif antara sumber dan pengamat dapat mengubah frekuensi yang terdengar."]
      ],
      formulas: [
        ["Cepat rambat", "v = λ f", "m/s"],
        ["Periode", "T = 1/f", "s"],
        ["Frekuensi sudut", "ω = 2πf", "rad/s"],
        ["Bilangan gelombang", "k = 2π/λ", "rad/m"]
      ],
      sim: "wave",
      simTitle: "Gelombang Berjalan",
      simDescription: "Ubah amplitudo, frekuensi, dan panjang gelombang. Gelombang akan dianimasikan secara langsung.",
      quiz: [
        {q:"Hubungan cepat rambat, panjang gelombang, dan frekuensi adalah...", o:["v = λf","v = λ/f","v = f/λ","v = λ + f"], a:0, e:"Persamaan dasar gelombang adalah v = λf."},
        {q:"Bunyi di udara termasuk gelombang...", o:["Elektromagnetik","Longitudinal","Cahaya","Stasioner saja"], a:1, e:"Bunyi di udara merambat sebagai rapatan dan renggangan longitudinal."}
      ]
    },
    {
      title: "Cahaya dan Alat Optik",
      intro: "Mempelajari pemantulan, pembiasan, cermin, lensa, indeks bias, kekuatan lensa, mata, dan berbagai alat optik.",
      concepts: ["Pemantulan", "Pembiasan", "Snellius", "Lensa", "Cermin", "Mata", "Alat optik"],
      sections: [
        ["Pemantulan", "Sudut datang sama dengan sudut pantul jika keduanya diukur terhadap garis normal."],
        ["Pembiasan", "Perubahan kecepatan cahaya ketika memasuki medium berbeda dapat membuat arah rambatnya berubah."],
        ["Lensa dan Cermin", "Persamaan lensa tipis dan cermin sferis menghubungkan fokus, jarak benda, dan jarak bayangan."],
        ["Mata dan Alat Optik", "Konsep lensa digunakan pada kacamata, kamera, lup, mikroskop, dan teleskop."]
      ],
      formulas: [
        ["Snellius", "n₁ sin θ₁ = n₂ sin θ₂", "pembiasan"],
        ["Indeks bias", "n = c/v", "tanpa satuan"],
        ["Lensa tipis", "1/f = 1/s + 1/s′", "m"],
        ["Kekuatan lensa", "P = 1/f", "dioptri"]
      ],
      sim: "optics",
      simTitle: "Diagram Sinar Lensa Cembung",
      simDescription: "Ubah jarak benda dan fokus lensa. Posisi serta sifat bayangan akan tergambar otomatis.",
      quiz: [
        {q:"Jika cahaya masuk dari udara ke kaca, umumnya kecepatannya...", o:["Bertambah","Berkurang","Tetap selalu","Menjadi nol"], a:1, e:"Indeks bias kaca lebih besar sehingga cepat rambat cahaya di kaca lebih kecil daripada di udara."},
        {q:"Kekuatan lensa dalam SI praktis diukur dalam...", o:["Pascal","Tesla","Dioptri","Weber"], a:2, e:"P = 1/f dengan f dalam meter, satuannya dioptri."}
      ]
    }
  ],
  XII: [
    {
      title: "Listrik Statis",
      intro: "Mempelajari muatan listrik, Hukum Coulomb, medan listrik, potensial, energi potensial, dan kapasitor.",
      concepts: ["Muatan", "Coulomb", "Medan listrik", "Potensial", "Energi listrik", "Kapasitor"],
      sections: [
        ["Muatan Listrik", "Muatan sejenis tolak-menolak dan muatan berbeda jenis tarik-menarik. Muatan bersifat terkuantisasi dalam kelipatan muatan elementer."],
        ["Hukum Coulomb", "Besarnya gaya antara dua muatan titik sebanding dengan hasil kali muatan dan berbanding terbalik dengan kuadrat jaraknya."],
        ["Medan dan Potensial", "Medan listrik adalah gaya per satuan muatan uji, sedangkan potensial adalah energi potensial per satuan muatan."],
        ["Kapasitor", "Kapasitor menyimpan muatan dan energi listrik. Kapasitansi mengukur kemampuan menyimpan muatan per beda potensial."]
      ],
      formulas: [
        ["Coulomb", "F = k|q₁q₂|/r²", "N"],
        ["Medan listrik", "E = F/q", "N/C"],
        ["Potensial", "V = W/q", "V"],
        ["Kapasitor", "C = Q/V", "F"]
      ],
      sim: "electrostatic",
      simTitle: "Dua Muatan Titik",
      simDescription: "Ubah besar dua muatan dan jaraknya. Arah serta besar gaya Coulomb divisualisasikan.",
      quiz: [
        {q:"Dua muatan sejenis akan...", o:["Tarik-menarik","Tolak-menolak","Tidak berinteraksi","Selalu netral"], a:1, e:"Muatan sejenis saling tolak-menolak."},
        {q:"Jika jarak dua muatan menjadi dua kali, gaya Coulomb menjadi...", o:["2 kali","4 kali","1/2 kali","1/4 kali"], a:3, e:"F ∝ 1/r², jadi jika r → 2r maka F → F/4."}
      ]
    },
    {
      title: "Listrik Dinamis",
      intro: "Mempelajari arus, tegangan, hambatan, Hukum Ohm, rangkaian seri-paralel, Kirchhoff, daya, dan energi listrik.",
      concepts: ["Arus", "Tegangan", "Hambatan", "Ohm", "Seri", "Paralel", "Kirchhoff", "Daya"],
      sections: [
        ["Arus dan Tegangan", "Arus adalah laju aliran muatan. Tegangan menyatakan beda potensial yang dapat mendorong muatan bergerak."],
        ["Hukum Ohm", "Pada komponen ohmik pada kondisi tertentu, tegangan berbanding lurus dengan arus melalui hambatan."],
        ["Rangkaian", "Pada seri, arus sama di setiap elemen. Pada paralel, tegangan sama pada setiap cabang."],
        ["Daya Listrik", "Daya menyatakan laju perubahan energi listrik. Daya dapat dihitung dari tegangan dan arus."]
      ],
      formulas: [
        ["Arus", "I = Q/t", "A"],
        ["Ohm", "V = I R", "V"],
        ["Daya", "P = V I", "W"],
        ["Energi", "E = P t", "J"]
      ],
      sim: "circuit",
      simTitle: "Rangkaian Baterai dan Resistor",
      simDescription: "Atur tegangan dan hambatan. Arus serta daya dihitung dan divisualisasikan pada rangkaian.",
      quiz: [
        {q:"Jika V = 12 V dan R = 6 Ω, arusnya...", o:["0,5 A","2 A","6 A","72 A"], a:1, e:"I = V/R = 12/6 = 2 A."},
        {q:"Pada rangkaian seri, besaran yang sama pada semua komponen adalah...", o:["Tegangan","Arus","Hambatan","Daya"], a:1, e:"Arus yang mengalir melalui setiap komponen seri sama."}
      ]
    },
    {
      title: "Medan Magnet dan Induksi Elektromagnetik",
      intro: "Mempelajari medan magnet akibat arus, gaya Lorentz, gaya pada kawat, fluks magnet, Faraday, Lenz, generator, motor, dan transformator.",
      concepts: ["Medan magnet", "Lorentz", "Fluks", "Faraday", "Lenz", "Generator", "Motor", "Transformator"],
      sections: [
        ["Medan Magnet", "Arus listrik menghasilkan medan magnet. Arah medan di sekitar kawat lurus dapat ditentukan dengan kaidah tangan kanan."],
        ["Gaya Lorentz", "Muatan bergerak di dalam medan magnet dapat mengalami gaya yang tegak lurus terhadap arah gerak dan medan."],
        ["Induksi Elektromagnetik", "Perubahan fluks magnet pada rangkaian menghasilkan gaya gerak listrik induksi."],
        ["Aplikasi", "Prinsip elektromagnetisme digunakan pada motor, generator, transformator, speaker, dan berbagai sensor."]
      ],
      formulas: [
        ["Kawat lurus", "B = μ₀I / (2πr)", "T"],
        ["Lorentz", "F = q v B sin θ", "N"],
        ["Fluks", "Φ = B A cos θ", "Wb"],
        ["Faraday", "ε = -N ΔΦ/Δt", "V"]
      ],
      sim: "magnetic",
      simTitle: "Medan Magnet Kawat Berarus",
      simDescription: "Ubah kuat arus dan jarak pengamatan. Pola medan magnet dan besar B akan berubah.",
      quiz: [
        {q:"Medan magnet di sekitar kawat lurus berarus berbentuk...", o:["Garis lurus sejajar","Lingkaran konsentris","Parabola","Tidak beraturan"], a:1, e:"Garis medan magnet mengelilingi kawat dalam lingkaran konsentris."},
        {q:"Hukum Faraday berkaitan dengan...", o:["Tekanan fluida","Induksi elektromagnetik","Pemuaian","Gerak lurus"], a:1, e:"Hukum Faraday menjelaskan GGL induksi akibat perubahan fluks magnet."}
      ]
    },
    {
      title: "Gelombang Elektromagnetik dan Arus Bolak-Balik",
      intro: "Mempelajari spektrum elektromagnetik, hubungan c = λf, gelombang sinus AC, nilai efektif, reaktansi, impedansi, dan resonansi RLC.",
      concepts: ["Spektrum EM", "c = λf", "AC", "RMS", "Induktor", "Kapasitor", "RLC", "Resonansi"],
      sections: [
        ["Gelombang Elektromagnetik", "Gelombang elektromagnetik dapat merambat di ruang hampa dengan kecepatan cahaya."],
        ["Spektrum EM", "Dari frekuensi rendah ke tinggi: radio, mikro, inframerah, tampak, ultraviolet, sinar-X, dan gamma."],
        ["Arus Bolak-balik", "Pada AC sinusoidal, arah dan besar arus berubah secara periodik."],
        ["RLC dan Resonansi", "Reaktansi induktif bertambah terhadap frekuensi, reaktansi kapasitif berkurang. Resonansi terjadi saat keduanya sama."]
      ],
      formulas: [
        ["Gelombang EM", "c = λ f", "m/s"],
        ["Tegangan RMS", "Vᵣₘₛ = Vₘ/√2", "V"],
        ["Reaktansi induktif", "Xᴸ = 2πfL", "Ω"],
        ["Reaktansi kapasitif", "Xᶜ = 1/(2πfC)", "Ω"]
      ],
      sim: "emwave",
      simTitle: "Spektrum dan Gelombang Elektromagnetik",
      simDescription: "Geser frekuensi secara logaritmik untuk melihat perubahan panjang gelombang dan posisi pada spektrum EM.",
      quiz: [
        {q:"Jika frekuensi gelombang elektromagnetik meningkat, panjang gelombang...", o:["Meningkat","Menurun","Tetap","Menjadi nol selalu"], a:1, e:"Karena c = λf dan c tetap di ruang hampa, λ berkurang ketika f meningkat."},
        {q:"Resonansi RLC seri terjadi ketika...", o:["R = 0","Xᴸ = Xᶜ","V = 0","f = 0"], a:1, e:"Pada resonansi, reaktansi induktif dan kapasitif saling meniadakan."}
      ]
    },
    {
      title: "Fisika Modern",
      intro: "Mengenal relativitas khusus, kuantum, foton, efek fotolistrik, dualisme gelombang-partikel, atom, radioaktivitas, fisi, fusi, dan semikonduktor.",
      concepts: ["Relativitas", "Foton", "Kuantum", "Fotoelektrik", "de Broglie", "Radioaktivitas", "Fisi", "Fusi"],
      sections: [
        ["Relativitas", "Pada kecepatan sangat tinggi, pengukuran ruang dan waktu mengikuti relativitas khusus. Kecepatan cahaya di ruang hampa memiliki peran fundamental."],
        ["Kuantum", "Cahaya dapat berperilaku sebagai paket energi yang disebut foton, dengan energi sebanding dengan frekuensi."],
        ["Atom dan Inti", "Atom terdiri dari inti dan elektron. Inti tersusun dari proton serta neutron dan dapat mengalami proses nuklir."],
        ["Radioaktivitas dan Semikonduktor", "Peluruhan radioaktif mengikuti statistik waktu paruh. Semikonduktor menjadi dasar diode, transistor, sensor, dan chip."]
      ],
      formulas: [
        ["Massa-energi", "E = m c²", "J"],
        ["Energi foton", "E = h f", "J"],
        ["de Broglie", "λ = h/p", "m"],
        ["Peluruhan", "N = N₀(1/2)^(t/T½)", "jumlah inti"]
      ],
      sim: "modern",
      simTitle: "Foton dan Peluruhan Radioaktif",
      simDescription: "Ubah panjang gelombang foton dan jumlah waktu paruh untuk mengamati energi foton serta sisa inti.",
      quiz: [
        {q:"Energi foton dirumuskan sebagai...", o:["E = mc²","E = hf","E = mgh","E = ½mv²"], a:1, e:"Menurut Planck, energi foton E = hf."},
        {q:"Setelah dua kali waktu paruh, jumlah inti tersisa adalah...", o:["1/2 N₀","1/3 N₀","1/4 N₀","1/8 N₀"], a:2, e:"Setiap waktu paruh menyisakan setengah, sehingga dua waktu paruh menyisakan 1/4."}
      ]
    }
  ]
};


function expandPhysicsQuizToTen(){
  Object.values(PHYSICS).flat().forEach(ch=>{
    const sections=ch.sections||[];
    let i=0;
    while(ch.quiz.length<10 && sections.length){
      const idx=i%sections.length, sec=sections[idx], title=sec[0], answer=String(sec[1]).split(/(?<=[.!?])\s+/)[0];
      const distract=sections.filter((_,j)=>j!==idx).map(x=>String(x[1]).split(/(?<=[.!?])\s+/)[0]).slice(0,3);
      while(distract.length<3)distract.push(`Pernyataan lain pada bab ${ch.title}.`);
      ch.quiz.push({q:`Pernyataan yang paling tepat tentang ${title} adalah...`,o:[answer,...distract],a:0,e:answer});
      i++;
    }
  });
}
expandPhysicsQuizToTen();

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const canvas = $("#simCanvas");
const ctx = canvas.getContext("2d");
const svg = $("#simSvg");

let currentClass = ["X","XI","XII"].includes(BISAQuery.get("grade")) ? BISAQuery.get("grade") : "X";
let currentChapter = 0;
let currentTab = "materi";
let quizIndex = 0;
let quizAnswered = false;
let waveFrame = 0;
let animationId = null;

const progress = JSON.parse(localStorage.getItem(BISAProgressKey) || "{}");
const theme = localStorage.getItem(BISAThemeKey);
if (theme === "dark") document.body.classList.add("dark");

function bridgeProgress(){
  if (window.parent !== window) window.parent.postMessage({type:'BISA_MODULE_SNAPSHOT', subject:'Fisika', level:'SMA', keys:Object.keys(progress || {}).filter(k=>progress[k])}, '*');
}

function saveProgress() {
  localStorage.setItem(BISAProgressKey, JSON.stringify(progress));
  bridgeProgress();
}

function keyFor(cls, idx) { return `${cls}-${idx}`; }

function renderChapterList() {
  const list = $("#chapterList");
  list.innerHTML = "";
  PHYSICS[currentClass].forEach((ch, i) => {
    const done = !!progress[keyFor(currentClass, i)];
    const btn = document.createElement("button");
    btn.className = `chapter-btn ${i === currentChapter ? "active" : ""}`;
    btn.innerHTML = `
      <span class="chapter-number">${i + 1}</span>
      <span class="chapter-name">${ch.title}</span>
      <span class="chapter-check">${done ? "✓" : ""}</span>`;
    btn.addEventListener("click", () => {
      currentChapter = i;
      quizIndex = 0;
      quizAnswered = false;
      renderAll();
      window.scrollTo({top:0, behavior:"smooth"});
    });
    list.appendChild(btn);
  });
  updateProgressUI();
}

function updateProgressUI() {
  const total = PHYSICS[currentClass].length;
  const done = PHYSICS[currentClass].reduce((n, _, i) => n + (progress[keyFor(currentClass, i)] ? 1 : 0), 0);
  const pct = Math.round(done / total * 100);
  $("#progressText").textContent = `${pct}%`;
  $("#progressBar").style.width = `${pct}%`;
  $("#progressCount").textContent = `${done} dari ${total} bab selesai`;
  const isDone = !!progress[keyFor(currentClass, currentChapter)];
  $("#completeBtn").textContent = isDone ? "✓ Sudah selesai" : "✓ Tandai selesai";
  $("#completeBtn").classList.toggle("done", isDone);
}

function renderMaterial() {
  const ch = PHYSICS[currentClass][currentChapter];
  $("#classBadge").textContent = `Kelas ${currentClass}`;
  $("#chapterTitle").textContent = ch.title;
  $("#chapterIntro").textContent = ch.intro;

  $("#conceptChips").innerHTML = ch.concepts.map(x => `<span class="chip">${x}</span>`).join("");
  $("#materialContent").innerHTML = ch.sections.map(([t, p]) => `
    <article class="content-card">
      <h3>${t}</h3>
      <p>${p}</p>
    </article>`).join("");

  $("#formulaGrid").innerHTML = ch.formulas.map(([n, eq, note]) => `
    <article class="formula-card">
      <div class="formula-name">${n}</div>
      <div class="formula-eq">${eq}</div>
      <div class="formula-note">${note}</div>
    </article>`).join("");
}

function createSlider(name, id, min, max, step, value, unit="") {
  const div = document.createElement("div");
  div.className = "control";
  div.innerHTML = `
    <div class="control-top">
      <label for="${id}">${name}</label>
      <output id="${id}Out">${value}${unit}</output>
    </div>
    <input id="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}">
  `;
  return div;
}

function setControls(items, callback) {
  const box = $("#simControls");
  box.innerHTML = "";
  items.forEach(i => box.appendChild(createSlider(...i)));
  items.forEach(i => {
    const id = i[1], unit = i[6] || "";
    $(`#${id}`).addEventListener("input", () => {
      $(`#${id}Out`).textContent = `${$(`#${id}`).value}${unit}`;
      callback();
    });
  });
}

function setReadouts(values) {
  $("#simReadout").innerHTML = values.map(([label, value]) => `
    <div class="readout"><span>${label}</span><strong>${value}</strong></div>
  `).join("");
}

function clearVisual(use="canvas") {
  cancelAnimationFrame(animationId);
  animationId = null;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  svg.innerHTML = "";
  canvas.style.display = use === "canvas" ? "block" : "none";
  svg.style.display = use === "svg" ? "block" : "none";
}

function fitCanvas() {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const w = Math.max(500, rect.width);
  const h = Math.max(360, rect.height);
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  ctx.setTransform(dpr,0,0,dpr,0,0);
  return {w,h};
}

function cssVar(name) {
  return getComputedStyle(document.body).getPropertyValue(name).trim();
}

function line(x1,y1,x2,y2,color,width=2,dash=[]) {
  ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2);
  ctx.strokeStyle=color; ctx.lineWidth=width; ctx.setLineDash(dash); ctx.stroke(); ctx.setLineDash([]);
}

function arrow(x1,y1,x2,y2,color,label="") {
  line(x1,y1,x2,y2,color,3);
  const ang = Math.atan2(y2-y1,x2-x1);
  const len=11;
  ctx.beginPath();
  ctx.moveTo(x2,y2);
  ctx.lineTo(x2-len*Math.cos(ang-.45),y2-len*Math.sin(ang-.45));
  ctx.lineTo(x2-len*Math.cos(ang+.45),y2-len*Math.sin(ang+.45));
  ctx.closePath(); ctx.fillStyle=color; ctx.fill();
  if(label){ ctx.fillStyle=color; ctx.font="700 13px system-ui"; ctx.fillText(label,(x1+x2)/2+6,(y1+y2)/2-7); }
}

function drawAxes(w,h) {
  const muted = cssVar("--muted"), linec = cssVar("--line");
  line(45,h-45,w-20,h-45,muted,1.5);
  line(45,h-45,45,20,muted,1.5);
  ctx.fillStyle=muted; ctx.font="12px system-ui";
  ctx.fillText("x",w-30,h-55); ctx.fillText("y",55,30);
}

function renderSimulation() {
  const ch = PHYSICS[currentClass][currentChapter];
  $("#simTitle").textContent = ch.simTitle;
  $("#simDescription").textContent = ch.simDescription;
  runSim(ch.sim);
}

function runSim(type) {
  const sims = {
    measurement, projectile, newton, energy, momentum,
    fluid, spring, thermal, wave, optics,
    electrostatic, circuit, magnetic, emwave, modern
  };
  sims[type]();
}

function measurement() {
  clearVisual("svg");
  setControls([
    ["Panjang benda","length",2,18,0.1,10.2," cm"],
    ["Ketelitian alat","precision",0.1,1,0.1,0.1," cm"]
  ], draw);
  function draw() {
    const L = +$("#length").value, p = +$("#precision").value;
    const x0=85, x1=815, y=280;
    let ticks="";
    for(let i=0;i<=20;i++){
      const x=x0+(x1-x0)*i/20;
      const h=i%5===0?30:15;
      ticks += `<line x1="${x}" y1="${y}" x2="${x}" y2="${y-h}" stroke="currentColor" stroke-width="${i%5===0?2:1}"/>`;
      if(i%5===0) ticks += `<text x="${x}" y="${y+24}" text-anchor="middle" fill="currentColor" font-size="14">${i}</text>`;
    }
    const end=x0+(x1-x0)*L/20;
    svg.innerHTML=`
      <g color="${cssVar("--text")}">
        <rect x="${x0}" y="${y-35}" width="${x1-x0}" height="52" rx="8" fill="${cssVar("--surface")}" stroke="${cssVar("--line")}"/>
        ${ticks}
        <rect x="${x0}" y="170" width="${end-x0}" height="55" rx="10" fill="${cssVar("--primary")}" opacity=".82"/>
        <line x1="${end}" y1="150" x2="${end}" y2="245" stroke="${cssVar("--primary-2")}" stroke-width="4"/>
        <text x="${(x0+end)/2}" y="205" text-anchor="middle" fill="white" font-size="18" font-weight="700">Benda</text>
      </g>`;
    const rounded = Math.round(L/p)*p;
    setReadouts([
      ["Panjang sebenarnya",`${L.toFixed(1)} cm`],
      ["Pembacaan alat",`${rounded.toFixed(p<1?1:0)} cm`],
      ["Ketidakpastian",`± ${(p/2).toFixed(2)} cm`],
      ["Rentang",`${(rounded-p/2).toFixed(2)} – ${(rounded+p/2).toFixed(2)} cm`]
    ]);
  }
  draw();
}

function projectile() {
  clearVisual("canvas");
  setControls([
    ["Kecepatan awal","speed",5,50,1,25," m/s"],
    ["Sudut","angle",10,80,1,45,"°"],
    ["Gravitasi","grav",5,15,0.1,9.8," m/s²"]
  ], draw);
  function draw() {
    const {w,h}=fitCanvas();
    ctx.clearRect(0,0,w,h);
    drawAxes(w,h);
    const v=+$("#speed").value, theta=+$("#angle").value*Math.PI/180, g=+$("#grav").value;
    const T=2*v*Math.sin(theta)/g;
    const R=v*Math.cos(theta)*T;
    const H=(v*v*Math.sin(theta)**2)/(2*g);
    const sx=(w-85)/Math.max(R*1.08,5);
    const sy=(h-85)/Math.max(H*1.25,5);
    ctx.beginPath();
    for(let i=0;i<=120;i++){
      const t=T*i/120;
      const x=v*Math.cos(theta)*t;
      const y=v*Math.sin(theta)*t-.5*g*t*t;
      const px=45+x*sx, py=h-45-y*sy;
      i?ctx.lineTo(px,py):ctx.moveTo(px,py);
    }
    ctx.strokeStyle=cssVar("--primary"); ctx.lineWidth=4; ctx.stroke();
    ctx.beginPath(); ctx.arc(45,h-45,8,0,Math.PI*2); ctx.fillStyle=cssVar("--primary-2"); ctx.fill();
    setReadouts([
      ["Waktu terbang",`${T.toFixed(2)} s`],
      ["Jangkauan",`${R.toFixed(1)} m`],
      ["Tinggi maksimum",`${H.toFixed(1)} m`],
      ["v₀x",`${(v*Math.cos(theta)).toFixed(1)} m/s`]
    ]);
  }
  draw();
}

function newton() {
  clearVisual("canvas");
  setControls([
    ["Massa","mass",1,20,1,5," kg"],
    ["Gaya dorong","force",0,120,1,50," N"],
    ["Koef. gesek","mu",0,1,0.05,0.25,""]
  ], draw);
  function draw(){
    const {w,h}=fitCanvas(); ctx.clearRect(0,0,w,h);
    const m=+$("#mass").value,F=+$("#force").value,mu=+$("#mu").value,g=9.8;
    const N=m*g, fg=Math.min(mu*N,F), net=Math.max(F-fg,0), a=net/m;
    const ground=h*0.72, bx=w*0.42, by=ground-82;
    line(25,ground,w-25,ground,cssVar("--muted"),2);
    ctx.fillStyle=cssVar("--primary"); ctx.fillRect(bx,by,150,82);
    ctx.fillStyle="#fff"; ctx.font="700 16px system-ui"; ctx.fillText(`${m} kg`,bx+55,by+47);
    arrow(bx+150,by+40,bx+150+Math.min(160,F*1.3),by+40,cssVar("--primary-2"),`F = ${F} N`);
    if(fg>0) arrow(bx,by+60,bx-Math.min(150,fg*1.4),by+60,cssVar("--danger"),`f = ${fg.toFixed(1)} N`);
    arrow(bx+75,by,bx+75,by-95,cssVar("--success"),"N");
    arrow(bx+75,by+82,bx+75,by+170,cssVar("--warning"),"w");
    setReadouts([
      ["Gaya gesek",`${fg.toFixed(1)} N`],
      ["Resultan gaya",`${net.toFixed(1)} N`],
      ["Percepatan",`${a.toFixed(2)} m/s²`],
      ["Gaya normal",`${N.toFixed(1)} N`]
    ]);
  }
  draw();
}

function energy() {
  clearVisual("canvas");
  setControls([
    ["Massa","emass",1,20,1,5," kg"],
    ["Ketinggian","height",0,25,0.5,10," m"],
    ["Kecepatan","vel",0,25,0.5,8," m/s"]
  ], draw);
  function draw(){
    const {w,h}=fitCanvas(); ctx.clearRect(0,0,w,h);
    const m=+$("#emass").value, H=+$("#height").value, v=+$("#vel").value,g=9.8;
    const ep=m*g*H, ek=.5*m*v*v,total=ep+ek, max=Math.max(total,1);
    const bars=[["Eₚ",ep,cssVar("--primary")],["Eₖ",ek,cssVar("--primary-2")],["E total",total,cssVar("--success")]];
    bars.forEach((b,i)=>{
      const x=100+i*220, bh=(b[1]/max)*(h-150);
      ctx.fillStyle=cssVar("--line"); ctx.fillRect(x,70,95,h-140);
      ctx.fillStyle=b[2]; ctx.fillRect(x,h-70-bh,95,bh);
      ctx.fillStyle=cssVar("--text"); ctx.font="700 15px system-ui";
      ctx.fillText(b[0],x+28,h-38);
      ctx.fillStyle=cssVar("--muted"); ctx.font="12px system-ui";
      ctx.fillText(`${b[1].toFixed(1)} J`,x+18,55);
    });
    setReadouts([
      ["Energi potensial",`${ep.toFixed(1)} J`],
      ["Energi kinetik",`${ek.toFixed(1)} J`],
      ["Energi mekanik",`${total.toFixed(1)} J`],
      ["Daya setara 1 s",`${total.toFixed(1)} W`]
    ]);
  }
  draw();
}

function momentum() {
  clearVisual("canvas");
  setControls([
    ["Massa benda 1","m1",1,10,1,3," kg"],
    ["Kecepatan 1","v1",-10,10,1,6," m/s"],
    ["Massa benda 2","m2",1,10,1,5," kg"],
    ["Kecepatan 2","v2",-10,10,1,-2," m/s"]
  ], draw);
  function draw(){
    const {w,h}=fitCanvas(); ctx.clearRect(0,0,w,h);
    const m1=+$("#m1").value,v1=+$("#v1").value,m2=+$("#m2").value,v2=+$("#v2").value;
    const p1=m1*v1,p2=m2*v2,pt=p1+p2,y1=h*.38,y2=h*.68;
    line(30,y1+38,w-30,y1+38,cssVar("--line"),2); line(30,y2+38,w-30,y2+38,cssVar("--line"),2);
    const center=w/2;
    ctx.fillStyle=cssVar("--primary"); ctx.fillRect(center-70,y1,140,70);
    ctx.fillStyle=cssVar("--primary-2"); ctx.fillRect(center-70,y2,140,70);
    ctx.fillStyle="#fff"; ctx.font="700 14px system-ui";
    ctx.fillText(`Benda 1 • ${m1} kg`,center-52,y1+40); ctx.fillText(`Benda 2 • ${m2} kg`,center-52,y2+40);
    const scale=7;
    arrow(center,y1-10,center+Math.max(-180,Math.min(180,p1*scale)),y1-10,cssVar("--primary"),`p₁=${p1}`);
    arrow(center,y2-10,center+Math.max(-180,Math.min(180,p2*scale)),y2-10,cssVar("--primary-2"),`p₂=${p2}`);
    setReadouts([
      ["Momentum 1",`${p1.toFixed(1)} kg·m/s`],
      ["Momentum 2",`${p2.toFixed(1)} kg·m/s`],
      ["Momentum total",`${pt.toFixed(1)} kg·m/s`],
      ["Arah total", pt>0?"ke kanan":pt<0?"ke kiri":"seimbang"]
    ]);
  }
  draw();
}

function fluid() {
  clearVisual("svg");
  setControls([
    ["Kedalaman","depth",0,8,0.1,3," m"],
    ["Massa jenis","rho",700,1300,10,1000," kg/m³"]
  ], draw);
  function draw(){
    const d=+$("#depth").value,rho=+$("#rho").value,g=9.8,p=rho*g*d;
    const top=75,bottom=410,x=210,w=430;
    const sy=(bottom-top)/8, sensorY=top+d*sy;
    svg.innerHTML=`
      <rect x="${x}" y="${top}" width="${w}" height="${bottom-top}" rx="10" fill="none" stroke="${cssVar("--text")}" stroke-width="3"/>
      <rect x="${x+3}" y="${top+3}" width="${w-6}" height="${bottom-top-6}" rx="8" fill="${cssVar("--primary")}" opacity=".22"/>
      <line x1="${x+20}" y1="${sensorY}" x2="${x+w-20}" y2="${sensorY}" stroke="${cssVar("--primary-2")}" stroke-width="3" stroke-dasharray="8 8"/>
      <circle cx="${x+w/2}" cy="${sensorY}" r="18" fill="${cssVar("--primary-2")}"/>
      <text x="${x+w/2+28}" y="${sensorY+5}" fill="${cssVar("--text")}" font-size="16">Sensor</text>
      <text x="${x+w+35}" y="${top+25}" fill="${cssVar("--muted")}" font-size="14">Permukaan</text>
      <line x1="${x+w+20}" y1="${top}" x2="${x+w+20}" y2="${sensorY}" stroke="${cssVar("--success")}" stroke-width="3"/>
      <text x="${x+w+40}" y="${(top+sensorY)/2}" fill="${cssVar("--success")}" font-size="15">h = ${d.toFixed(1)} m</text>
    `;
    setReadouts([
      ["Tekanan hidrostatis",`${(p/1000).toFixed(2)} kPa`],
      ["Kedalaman",`${d.toFixed(1)} m`],
      ["Massa jenis",`${rho.toFixed(0)} kg/m³`],
      ["Jika area 0,01 m²",`${(p*.01).toFixed(1)} N`]
    ]);
  }
  draw();
}

function spring() {
  clearVisual("svg");
  setControls([
    ["Massa","smass",0.5,10,0.5,3," kg"],
    ["Konstanta pegas","k",20,300,5,120," N/m"]
  ], draw);
  function draw(){
    const m=+$("#smass").value,k=+$("#k").value,g=9.8,x=m*g/k,T=2*Math.PI*Math.sqrt(m/k);
    const top=55, base=160, maxExt=230, ext=Math.min(maxExt,x*400);
    let pts=[];
    const coils=12;
    for(let i=0;i<=coils;i++){
      const yy=base+(ext+60)*i/coils;
      const xx=450+(i===0||i===coils?0:(i%2? -55:55));
      pts.push(`${xx},${yy}`);
    }
    svg.innerHTML=`
      <line x1="300" y1="${top}" x2="600" y2="${top}" stroke="${cssVar("--text")}" stroke-width="8"/>
      <line x1="450" y1="${top}" x2="450" y2="${base}" stroke="${cssVar("--muted")}" stroke-width="3"/>
      <polyline points="${pts.join(" ")}" fill="none" stroke="${cssVar("--primary")}" stroke-width="5"/>
      <rect x="390" y="${base+ext+60}" width="120" height="80" rx="12" fill="${cssVar("--primary-2")}"/>
      <text x="450" y="${base+ext+108}" text-anchor="middle" fill="white" font-size="17" font-weight="700">${m} kg</text>
    `;
    setReadouts([
      ["Pertambahan panjang",`${x.toFixed(3)} m`],
      ["Gaya berat",`${(m*g).toFixed(1)} N`],
      ["Periode",`${T.toFixed(2)} s`],
      ["Frekuensi",`${(1/T).toFixed(2)} Hz`]
    ]);
  }
  draw();
}

function thermal() {
  clearVisual("svg");
  setControls([
    ["Suhu zat A","tHot",20,100,1,80," °C"],
    ["Suhu zat B","tCold",0,80,1,20," °C"]
  ], draw);
  function draw(){
    const a=+$("#tHot").value,b=+$("#tCold").value,eq=(a+b)/2;
    const yA=390-(a/100)*280, yB=390-(b/100)*280, yE=390-(eq/100)*280;
    svg.innerHTML=`
      <text x="220" y="55" text-anchor="middle" fill="${cssVar("--text")}" font-size="18" font-weight="700">Zat A</text>
      <text x="680" y="55" text-anchor="middle" fill="${cssVar("--text")}" font-size="18" font-weight="700">Zat B</text>
      <rect x="170" y="90" width="100" height="300" rx="25" fill="${cssVar("--surface")}" stroke="${cssVar("--line")}" stroke-width="3"/>
      <rect x="630" y="90" width="100" height="300" rx="25" fill="${cssVar("--surface")}" stroke="${cssVar("--line")}" stroke-width="3"/>
      <rect x="190" y="${yA}" width="60" height="${390-yA}" rx="20" fill="#e95f53"/>
      <rect x="650" y="${yB}" width="60" height="${390-yB}" rx="20" fill="#4a8de8"/>
      <path d="M320 230 C420 170 480 290 580 230" fill="none" stroke="${cssVar("--primary-2")}" stroke-width="5" marker-end="url(#arrow)"/>
      <text x="450" y="210" text-anchor="middle" fill="${cssVar("--primary-2")}" font-size="16" font-weight="700">kalor berpindah</text>
      <line x1="410" y1="${yE}" x2="490" y2="${yE}" stroke="${cssVar("--success")}" stroke-width="5"/>
      <text x="450" y="${yE-10}" text-anchor="middle" fill="${cssVar("--success")}" font-size="15">T akhir ≈ ${eq.toFixed(1)}°C</text>
    `;
    setReadouts([
      ["Suhu awal A",`${a.toFixed(0)} °C`],
      ["Suhu awal B",`${b.toFixed(0)} °C`],
      ["Suhu setimbang",`${eq.toFixed(1)} °C`],
      ["Selisih awal",`${Math.abs(a-b).toFixed(0)} °C`]
    ]);
  }
  draw();
}

function wave() {
  clearVisual("canvas");
  setControls([
    ["Amplitudo","amp",10,90,1,45," px"],
    ["Frekuensi","freq",0.2,3,0.1,1.2," Hz"],
    ["Panjang gelombang","lambda",80,360,10,220," px"]
  ], restart);
  function restart(){ waveFrame=0; animate(); }
  function animate(){
    cancelAnimationFrame(animationId);
    const {w,h}=fitCanvas();
    const A=+$("#amp").value,f=+$("#freq").value,lam=+$("#lambda").value;
    ctx.clearRect(0,0,w,h);
    const mid=h/2;
    line(20,mid,w-20,mid,cssVar("--line"),2,[7,7]);
    ctx.beginPath();
    for(let x=0;x<=w;x+=3){
      const y=mid-A*Math.sin(2*Math.PI*(x/lam - waveFrame/120*f));
      x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    }
    ctx.strokeStyle=cssVar("--primary"); ctx.lineWidth=4; ctx.stroke();
    ctx.fillStyle=cssVar("--muted"); ctx.font="13px system-ui";
    ctx.fillText(`λ = ${lam}px`,30,35);
    setReadouts([
      ["Amplitudo",`${A} px`],
      ["Frekuensi",`${f.toFixed(1)} Hz`],
      ["Periode",`${(1/f).toFixed(2)} s`],
      ["Cepat rambat (skala)",`${(lam*f).toFixed(1)} px/s`]
    ]);
    waveFrame++;
    animationId=requestAnimationFrame(animate);
  }
  animate();
}

function optics() {
  clearVisual("svg");
  setControls([
    ["Jarak benda","objDist",60,300,5,180," cm"],
    ["Fokus lensa","focus",30,120,5,70," cm"]
  ], draw);
  function draw(){
    const s=+$("#objDist").value,f=+$("#focus").value;
    const inv=1/f-1/s;
    const sp=Math.abs(inv)<1e-9?999:1/inv;
    const mag=-sp/s;
    const lensX=450, scale=1.15, objX=lensX-s*scale, objH=110;
    const imageX=lensX+sp*scale, imgH=objH*mag;
    const base=270;
    const isReal=sp>0;
    const finalImageX=Math.max(40,Math.min(860,imageX));
    const finalImgH=Math.max(-170,Math.min(170,imgH));
    svg.innerHTML=`
      <line x1="30" y1="${base}" x2="870" y2="${base}" stroke="${cssVar("--muted")}" stroke-width="2"/>
      <path d="M${lensX} 80 Q${lensX-35} ${base} ${lensX} 460 Q${lensX+35} ${base} ${lensX} 80" fill="${cssVar("--primary")}" opacity=".18" stroke="${cssVar("--primary")}" stroke-width="3"/>
      <line x1="${lensX-f*scale}" y1="${base-9}" x2="${lensX-f*scale}" y2="${base+9}" stroke="${cssVar("--text")}" stroke-width="3"/>
      <line x1="${lensX+f*scale}" y1="${base-9}" x2="${lensX+f*scale}" y2="${base+9}" stroke="${cssVar("--text")}" stroke-width="3"/>
      <line x1="${objX}" y1="${base}" x2="${objX}" y2="${base-objH}" stroke="${cssVar("--primary-2")}" stroke-width="6"/>
      <polygon points="${objX-9},${base-objH+14} ${objX+9},${base-objH+14} ${objX},${base-objH}" fill="${cssVar("--primary-2")}"/>
      <line x1="${objX}" y1="${base-objH}" x2="${lensX}" y2="${base-objH}" stroke="${cssVar("--warning")}" stroke-width="2"/>
      <line x1="${lensX}" y1="${base-objH}" x2="${finalImageX}" y2="${base-finalImgH}" stroke="${cssVar("--warning")}" stroke-width="2"/>
      <line x1="${objX}" y1="${base-objH}" x2="${lensX}" y2="${base}" stroke="${cssVar("--success")}" stroke-width="2"/>
      <line x1="${lensX}" y1="${base}" x2="${finalImageX}" y2="${base-finalImgH}" stroke="${cssVar("--success")}" stroke-width="2"/>
      <line x1="${finalImageX}" y1="${base}" x2="${finalImageX}" y2="${base-finalImgH}" stroke="${isReal?cssVar("--danger"):cssVar("--success")}" stroke-width="6" ${isReal?"":"stroke-dasharray='7 7'"}/>
    `;
    setReadouts([
      ["Jarak bayangan", Number.isFinite(sp)?`${sp.toFixed(1)} cm`:"∞"],
      ["Perbesaran",`${mag.toFixed(2)} ×`],
      ["Sifat bayangan",isReal?"Nyata":"Maya"],
      ["Orientasi",mag<0?"Terbalik":"Tegak"]
    ]);
  }
  draw();
}

function electrostatic() {
  clearVisual("svg");
  setControls([
    ["Muatan q₁","q1",-10,10,1,5," μC"],
    ["Muatan q₂","q2",-10,10,1,-4," μC"],
    ["Jarak","dist",0.2,2,0.1,0.8," m"]
  ], draw);
  function draw(){
    const q1=+$("#q1").value*1e-6,q2=+$("#q2").value*1e-6,r=+$("#dist").value,k=8.99e9;
    const F=k*Math.abs(q1*q2)/(r*r);
    const attr=q1*q2<0, x1=280,x2=620,y=240;
    const c1=q1>=0?"#e65a5a":"#4b83ea", c2=q2>=0?"#e65a5a":"#4b83ea";
    const a1=attr?x1+130:x1-130, a2=attr?x2-130:x2+130;
    svg.innerHTML=`
      <line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${cssVar("--line")}" stroke-width="3" stroke-dasharray="8 8"/>
      <circle cx="${x1}" cy="${y}" r="48" fill="${c1}"/>
      <circle cx="${x2}" cy="${y}" r="48" fill="${c2}"/>
      <text x="${x1}" y="${y+8}" text-anchor="middle" fill="white" font-size="26" font-weight="800">${q1>=0?"+":"−"}</text>
      <text x="${x2}" y="${y+8}" text-anchor="middle" fill="white" font-size="26" font-weight="800">${q2>=0?"+":"−"}</text>
      <line x1="${x1}" y1="${y-75}" x2="${a1}" y2="${y-75}" stroke="${cssVar("--primary-2")}" stroke-width="5"/>
      <line x1="${x2}" y1="${y+75}" x2="${a2}" y2="${y+75}" stroke="${cssVar("--primary-2")}" stroke-width="5"/>
      <text x="450" y="175" text-anchor="middle" fill="${cssVar("--text")}" font-size="16">r = ${r.toFixed(1)} m</text>
    `;
    setReadouts([
      ["Gaya Coulomb",`${F.toFixed(3)} N`],
      ["Interaksi",attr?"Tarik-menarik":"Tolak-menolak"],
      ["q₁",`${(q1*1e6).toFixed(0)} μC`],
      ["q₂",`${(q2*1e6).toFixed(0)} μC`]
    ]);
  }
  draw();
}

function circuit() {
  clearVisual("svg");
  setControls([
    ["Tegangan","volt",1,24,1,12," V"],
    ["Hambatan","res",1,30,1,6," Ω"]
  ], draw);
  function draw(){
    const V=+$("#volt").value,R=+$("#res").value,I=V/R,P=V*I;
    svg.innerHTML=`
      <path d="M180 130 H430 M530 130 H720 V350 H180 V130" fill="none" stroke="${cssVar("--text")}" stroke-width="5"/>
      <rect x="430" y="100" width="100" height="60" rx="8" fill="${cssVar("--primary")}" opacity=".85"/>
      <text x="480" y="136" text-anchor="middle" fill="white" font-size="16" font-weight="700">${R} Ω</text>
      <line x1="165" y1="230" x2="195" y2="230" stroke="${cssVar("--primary-2")}" stroke-width="8"/>
      <line x1="172" y1="250" x2="188" y2="250" stroke="${cssVar("--primary-2")}" stroke-width="4"/>
      <text x="215" y="248" fill="${cssVar("--text")}" font-size="16">${V} V</text>
      <circle cx="640" cy="350" r="${18+Math.min(30,I*5)}" fill="${cssVar("--success")}" opacity=".72"/>
      <text x="640" y="357" text-anchor="middle" fill="white" font-size="15" font-weight="700">I</text>
      <text x="450" y="420" text-anchor="middle" fill="${cssVar("--muted")}" font-size="15">Arus = ${I.toFixed(2)} A • Daya = ${P.toFixed(1)} W</text>
    `;
    setReadouts([
      ["Arus",`${I.toFixed(2)} A`],
      ["Daya",`${P.toFixed(1)} W`],
      ["Tegangan",`${V} V`],
      ["Hambatan",`${R} Ω`]
    ]);
  }
  draw();
}

function magnetic() {
  clearVisual("svg");
  setControls([
    ["Kuat arus","current",0.5,15,0.5,5," A"],
    ["Jarak titik","mr",0.02,0.3,0.01,0.08," m"]
  ], draw);
  function draw(){
    const I=+$("#current").value,r=+$("#mr").value,mu0=4*Math.PI*1e-7,B=mu0*I/(2*Math.PI*r);
    let rings="";
    for(let rad=55;rad<=190;rad+=45){
      rings += `<circle cx="450" cy="240" r="${rad}" fill="none" stroke="${cssVar("--primary")}" stroke-width="3" opacity="${1-rad/280}"/>`;
    }
    svg.innerHTML=`
      ${rings}
      <circle cx="450" cy="240" r="34" fill="${cssVar("--primary-2")}"/>
      <circle cx="450" cy="240" r="8" fill="white"/>
      <text x="450" y="300" text-anchor="middle" fill="${cssVar("--text")}" font-size="16">Arus keluar bidang</text>
      <circle cx="${450+r*1000}" cy="240" r="10" fill="${cssVar("--danger")}"/>
      <line x1="450" y1="240" x2="${450+r*1000}" y2="240" stroke="${cssVar("--muted")}" stroke-width="2" stroke-dasharray="7 7"/>
      <text x="${450+r*500}" y="220" text-anchor="middle" fill="${cssVar("--muted")}" font-size="14">${r.toFixed(2)} m</text>
    `;
    setReadouts([
      ["Medan B",`${(B*1e6).toFixed(2)} μT`],
      ["Arus",`${I.toFixed(1)} A`],
      ["Jarak",`${r.toFixed(2)} m`],
      ["Arah garis B","Melingkar"]
    ]);
  }
  draw();
}

function emwave() {
  clearVisual("canvas");
  setControls([
    ["Log₁₀ frekuensi (Hz)","logf",5,20,0.1,14.5,""]
  ], draw);
  function draw(){
    const {w,h}=fitCanvas(); ctx.clearRect(0,0,w,h);
    const logf=+$("#logf").value,f=10**logf,c=3e8,lambda=c/f;
    const bands=[
      [3,9,"Radio"],[9,11.5,"Mikro"],[11.5,14,"Infrared"],[14,15,"Tampak"],
      [15,16.8,"UV"],[16.8,19,"Sinar-X"],[19,22,"Gamma"]
    ];
    const x0=55,x1=w-45,y=82,barH=55;
    bands.forEach(([a,b,n],i)=>{
      const xa=x0+(Math.max(a,5)-5)/(20-5)*(x1-x0);
      const xb=x0+(Math.min(b,20)-5)/(20-5)*(x1-x0);
      ctx.fillStyle=`hsl(${(i*45+205)%360} 65% 58%)`;
      ctx.fillRect(xa,y,Math.max(0,xb-xa),barH);
      ctx.fillStyle="#fff"; ctx.font="700 11px system-ui";
      if(xb-xa>45) ctx.fillText(n,xa+8,y+33);
    });
    const marker=x0+(logf-5)/(20-5)*(x1-x0);
    line(marker,y-20,marker,y+barH+25,cssVar("--text"),4);
    const mid=h*.68, A=55, lamPx=80+300*(20-logf)/15;
    ctx.beginPath();
    for(let x=20;x<w-20;x+=2){
      const yy=mid-A*Math.sin(2*Math.PI*x/Math.max(24,lamPx));
      x===20?ctx.moveTo(x,yy):ctx.lineTo(x,yy);
    }
    ctx.strokeStyle=cssVar("--primary"); ctx.lineWidth=4; ctx.stroke();
    const band=bands.find(([a,b])=>logf>=a&&logf<b)?.[2] || (logf>=19?"Gamma":"Radio");
    setReadouts([
      ["Frekuensi",`${f.toExponential(2)} Hz`],
      ["Panjang gelombang",`${lambda.toExponential(2)} m`],
      ["Bagian spektrum",band],
      ["Kecepatan",`3.00×10⁸ m/s`]
    ]);
  }
  draw();
}

function modern() {
  clearVisual("canvas");
  setControls([
    ["Panjang gelombang","wl",200,900,5,500," nm"],
    ["Jumlah waktu paruh","halves",0,8,1,2," × T½"]
  ], draw);
  function wavelengthColor(nm) {
    if(nm<380) return "#8d66d8";
    if(nm<450) return "#5a62e8";
    if(nm<495) return "#3297e8";
    if(nm<570) return "#48b96d";
    if(nm<590) return "#e0c74c";
    if(nm<620) return "#ef9445";
    if(nm<=750) return "#e55353";
    return "#9b5e4b";
  }
  function draw(){
    const {w,h}=fitCanvas(); ctx.clearRect(0,0,w,h);
    const wl=+$("#wl").value,halves=+$("#halves").value,hp=6.62607015e-34,c=3e8;
    const f=c/(wl*1e-9),E=hp*f,frac=0.5**halves;
    const color=wavelengthColor(wl);
    ctx.fillStyle=color; ctx.beginPath(); ctx.arc(w*.28,h*.42,75,0,Math.PI*2); ctx.fill();
    ctx.fillStyle="#fff"; ctx.font="800 20px system-ui"; ctx.fillText("foton",w*.28-27,h*.42+7);
    ctx.fillStyle=cssVar("--text"); ctx.font="700 18px system-ui";
    ctx.fillText("Peluruhan radioaktif",w*.56,h*.22);
    const N=64, remain=Math.round(N*frac), cols=8, size=22,gap=7, sx=w*.57,sy=h*.28;
    for(let i=0;i<N;i++){
      const col=i%cols,row=Math.floor(i/cols);
      ctx.fillStyle=i<remain?cssVar("--primary"):cssVar("--line");
      ctx.fillRect(sx+col*(size+gap),sy+row*(size+gap),size,size);
    }
    setReadouts([
      ["Energi foton",`${E.toExponential(3)} J`],
      ["Frekuensi",`${f.toExponential(3)} Hz`],
      ["Sisa inti",`${(frac*100).toFixed(2)}%`],
      ["Waktu paruh berlalu",`${halves} × T½`]
    ]);
  }
  draw();
}

function renderQuiz() {
  const qset = PHYSICS[currentClass][currentChapter].quiz;
  quizIndex = Math.min(quizIndex, qset.length-1);
  const q=qset[quizIndex];
  $("#quizQuestion").textContent = q.q;
  $("#quizCounter").textContent = `${quizIndex+1}/${qset.length}`;
  $("#quizFeedback").textContent = "";
  $("#nextQuizBtn").disabled = true;
  $("#quizOptions").innerHTML="";
  quizAnswered=false;
  q.o.forEach((opt,i)=>{
    const btn=document.createElement("button");
    btn.className="quiz-option";
    btn.textContent=opt;
    btn.addEventListener("click",()=>{
      if(quizAnswered) return;
      quizAnswered=true;
      $$(".quiz-option").forEach((b,j)=>{
        if(j===q.a) b.classList.add("correct");
        if(j===i && i!==q.a) b.classList.add("wrong");
        b.disabled=true;
      });
      $("#quizFeedback").textContent=(i===q.a?"Benar. ":"Belum tepat. ")+q.e;
      $("#nextQuizBtn").disabled=false;
    });
    $("#quizOptions").appendChild(btn);
  });
}

function renderAll() {
  renderChapterList();
  renderMaterial();
  renderSimulation();
  renderQuiz();
  switchTab(currentTab);
}

function switchTab(tab) {
  currentTab=tab;
  $$(".tab-btn").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
  $$(".panel").forEach(p=>p.classList.toggle("active",p.dataset.panel===tab));
  if(tab==="simulasi") setTimeout(()=>runSim(PHYSICS[currentClass][currentChapter].sim),0);
}

$$(".class-btn").forEach(btn=>btn.addEventListener("click",()=>{
  currentClass=btn.dataset.class;
  currentChapter=0; quizIndex=0; quizAnswered=false;
  $$(".class-btn").forEach(b=>b.classList.toggle("active",b===btn));
  renderAll();
}));

$$(".tab-btn").forEach(btn=>btn.addEventListener("click",()=>switchTab(btn.dataset.tab)));

$("#completeBtn").addEventListener("click",()=>{
  const k=keyFor(currentClass,currentChapter);
  progress[k]=!progress[k];
  saveProgress();
  renderChapterList();
});

$("#resetProgressBtn").addEventListener("click",()=>{
  Object.keys(progress).forEach(k=>{ if(k.startsWith(currentClass+"-")) delete progress[k]; });
  saveProgress(); renderChapterList();
});

$("#nextQuizBtn").addEventListener("click",()=>{
  const qs=PHYSICS[currentClass][currentChapter].quiz;
  quizIndex=(quizIndex+1)%qs.length;
  renderQuiz();
});

$("#simResetBtn").addEventListener("click",()=>renderSimulation());

$("#themeBtn").addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  const d=document.body.classList.contains("dark");
  localStorage.setItem(BISAThemeKey,d?"dark":"light");
  $("#themeBtn").textContent=d?"☀️":"🌙";
  if(currentTab==="simulasi") runSim(PHYSICS[currentClass][currentChapter].sim);
});
$("#themeBtn").textContent=document.body.classList.contains("dark")?"☀️":"🌙";

$("#searchInput").addEventListener("input",(e)=>{
  const q=e.target.value.trim().toLowerCase();
  const results=$("#searchResults");
  if(!q){
    results.classList.add("hidden");
    switchTab(currentTab);
    return;
  }
  $$(".panel").forEach(p=>p.classList.remove("active"));
  results.classList.remove("hidden");
  const found=[];
  Object.entries(PHYSICS).forEach(([cls, chapters])=>{
    chapters.forEach((ch,i)=>{
      const hay=[ch.title,ch.intro,...ch.concepts,...ch.sections.flat(),...ch.formulas.flat()].join(" ").toLowerCase();
      if(hay.includes(q)) found.push({cls,i,ch});
    });
  });
  results.innerHTML = found.length ? found.map((r,idx)=>`
    <article class="search-card" data-result="${idx}">
      <span class="badge soft">Kelas ${r.cls} • Bab ${r.i+1}</span>
      <h4>${r.ch.title}</h4>
      <p>${r.ch.intro}</p>
    </article>`).join("") : `<div class="content-card"><h3>Tidak ditemukan</h3><p>Coba kata kunci lain, misalnya “gaya”, “gelombang”, “lensa”, atau “listrik”.</p></div>`;
  $$(".search-card").forEach((card,idx)=>card.addEventListener("click",()=>{
    const r=found[idx];
    currentClass=r.cls; currentChapter=r.i;
    $$(".class-btn").forEach(b=>b.classList.toggle("active",b.dataset.class===currentClass));
    $("#searchInput").value="";
    results.classList.add("hidden");
    currentTab="materi";
    renderAll();
    window.scrollTo({top:0,behavior:"smooth"});
  }));
});

window.addEventListener("resize",()=>{
  if(currentTab==="simulasi" && PHYSICS[currentClass][currentChapter].sim!=="wave"){
    runSim(PHYSICS[currentClass][currentChapter].sim);
  }
});

renderAll();


if (BISAQuery.get('embed') === '1') document.body.classList.add('bisa-embedded');
if (BISALocked) document.querySelectorAll('.class-btn').forEach(btn => { btn.hidden = btn.dataset.class !== currentClass; });
$$('.class-btn').forEach(b=>b.classList.toggle('active', b.dataset.class===currentClass));
renderAll();
bridgeProgress();
