const BISAQuery = new URLSearchParams(location.search);
const BISAUserKey = BISAQuery.get('user') || 'guest';
const BISALocked = BISAQuery.get('locked') === '1';
const bkey = k => `${k}-${BISAUserKey}`;

const curriculum = {
X: [
{
title:"Hakikat Ilmu Kimia, Metode Ilmiah, dan Laboratorium",
desc:"Mengenal apa yang dipelajari dalam kimia, cara kerja ilmiah, variabel percobaan, alat laboratorium, dan budaya keselamatan kerja.",
sections:[
["1.1 Hakikat ilmu kimia","Kimia mempelajari komposisi, struktur, sifat, perubahan materi, dan energi yang menyertai perubahan tersebut. Materi adalah segala sesuatu yang memiliki massa dan menempati ruang."],
["1.2 Peranan kimia","Kimia digunakan dalam kesehatan, pertanian, pangan, industri, energi, dan lingkungan. Banyak produk sehari-hari—obat, sabun, baterai, pupuk—dikembangkan melalui ilmu kimia."],
["1.3 Metode ilmiah","Tahap umum: pengamatan → rumusan masalah → hipotesis → eksperimen → pengumpulan data → analisis → kesimpulan."],
["1.4 Variabel percobaan","Variabel bebas sengaja diubah, variabel terikat diamati akibat perubahan tersebut, sedangkan variabel kontrol dijaga tetap."],
["1.5 Keselamatan laboratorium","Kenali label bahan, gunakan alat pelindung sesuai kebutuhan, ikuti instruksi guru/laboran, dan tangani bahan serta alat dengan tertib."],
["1.6 Alat laboratorium","Gelas beker untuk menampung/mencampur, erlenmeyer untuk reaksi dan titrasi, gelas ukur untuk volume, buret untuk titrasi, dan labu ukur untuk membuat larutan dengan volume tertentu."]
],
formulas:[
["Variabel","bebas → terikat","Hubungan sebab-akibat yang diuji dalam eksperimen."],
["Data","observasi → analisis","Data yang baik dicatat sistematis dan dibandingkan dengan hipotesis."],
["Keselamatan","label + APD + prosedur","Tiga hal yang harus diperiksa sebelum praktik."]
],
interactive:"lab",
quiz:[
["Variabel yang sengaja diubah peneliti disebut…",["variabel bebas","variabel terikat","variabel kontrol","konstanta"],0,"Variabel bebas adalah faktor yang sengaja dimanipulasi."],
["Alat yang paling tepat untuk membuat larutan tepat 250 mL adalah…",["gelas beker","tabung reaksi","labu ukur","cawan porselen"],2,"Labu ukur dirancang untuk menghasilkan volume tertentu dengan lebih teliti."],
["Urutan metode ilmiah yang benar dimulai dari…",["kesimpulan","pengamatan","publikasi","perhitungan"],1,"Pengamatan biasanya menjadi langkah awal untuk mengenali fenomena."]
]
},
{
title:"Struktur Atom dan Sistem Periodik Unsur",
desc:"Mempelajari perkembangan model atom, proton-neutron-elektron, nomor atom, isotop, konfigurasi elektron, serta keteraturan sifat unsur dalam tabel periodik.",
sections:[
["2.1 Perkembangan model atom","Dalton menggambarkan atom sebagai partikel dasar; Thomson menemukan elektron; Rutherford menunjukkan adanya inti; Bohr mengenalkan tingkat energi; model modern menggunakan orbital sebagai daerah kebolehjadian elektron."],
["2.2 Partikel penyusun atom","Proton bermuatan +1 dan neutron netral berada di inti, sedangkan elektron bermuatan −1 berada di sekitar inti."],
["2.3 Nomor atom dan nomor massa","Nomor atom Z = jumlah proton. Nomor massa A = proton + neutron. Pada atom netral, jumlah proton = jumlah elektron."],
["2.4 Isotop","Isotop adalah atom dari unsur yang sama dengan jumlah proton sama tetapi jumlah neutron berbeda."],
["2.5 Konfigurasi elektron","Konfigurasi elektron menunjukkan penyebaran elektron. Elektron pada kulit terluar disebut elektron valensi dan sangat berpengaruh terhadap sifat kimia."],
["2.6 Sistem periodik","Periode adalah baris, golongan adalah kolom. Unsur dalam golongan yang sama cenderung memiliki pola elektron valensi yang serupa."],
["2.7 Sifat periodik","Secara umum jari-jari atom mengecil dari kiri ke kanan dalam satu periode, sementara energi ionisasi dan keelektronegatifan cenderung meningkat."]
],
formulas:[
["Nomor massa","A = p + n","Jumlah proton dan neutron dalam inti."],
["Nomor atom","Z = p","Pada atom netral: p = e."],
["Neutron","n = A − Z","Dipakai untuk mencari jumlah neutron."]
],
interactive:"atom",
quiz:[
["Partikel bermuatan negatif adalah…",["proton","neutron","elektron","nukleon"],2,"Elektron bermuatan −1."],
["Atom netral dengan Z = 11 memiliki elektron sebanyak…",["10","11","12","23"],1,"Pada atom netral, jumlah elektron sama dengan jumlah proton atau nomor atom."],
["Isotop memiliki jumlah proton…",["berbeda","sama","selalu nol","dua kali neutron"],1,"Isotop berasal dari unsur yang sama sehingga jumlah protonnya sama."]
]
},
{
title:"Ikatan Kimia dan Bentuk Molekul",
desc:"Mengapa atom berikatan, perbedaan ikatan ion dan kovalen, struktur Lewis, polaritas, teori VSEPR, dan gaya antarmolekul.",
sections:[
["3.1 Kestabilan dan aturan oktet","Banyak atom cenderung mencapai konfigurasi elektron valensi yang lebih stabil, sering kali mendekati konfigurasi gas mulia."],
["3.2 Ikatan ion","Terbentuk akibat tarik-menarik elektrostatik antara kation dan anion setelah terjadi perpindahan elektron, umumnya antara logam dan nonlogam."],
["3.3 Ikatan kovalen","Terbentuk ketika atom menggunakan pasangan elektron bersama. Dapat berupa ikatan tunggal, rangkap dua, atau rangkap tiga."],
["3.4 Struktur Lewis","Struktur Lewis menampilkan elektron valensi dengan titik atau garis sehingga pasangan ikatan dan pasangan bebas dapat dianalisis."],
["3.5 Polaritas","Perbedaan keelektronegatifan dan geometri molekul menentukan distribusi muatan. Ikatan polar belum tentu membuat seluruh molekul bersifat polar."],
["3.6 Bentuk molekul","VSEPR menjelaskan bahwa pasangan elektron di sekitar atom pusat saling tolak dan mengatur diri sejauh mungkin."],
["3.7 Gaya antarmolekul","Gaya London, dipol-dipol, dan ikatan hidrogen memengaruhi titik didih, kelarutan, dan sifat fisik lain."]
],
formulas:[
["VSEPR","AXₙEₘ","A = atom pusat, X = atom terikat, E = pasangan bebas."],
["CO₂","AX₂ → linear","Sudut ikatan ideal sekitar 180°."],
["CH₄","AX₄ → tetrahedral","Sudut ikatan ideal sekitar 109,5°."]
],
interactive:"molecule",
quiz:[
["Ikatan NaCl terutama bersifat…",["kovalen nonpolar","ion","logam","hidrogen"],1,"Na cenderung membentuk Na⁺ dan Cl membentuk Cl⁻."],
["Bentuk molekul CO₂ adalah…",["bengkok","piramida trigonal","linear","tetrahedral"],2,"CO₂ memiliki dua domain ikatan di sekitar C tanpa pasangan bebas."],
["Ikatan hidrogen kuat terjadi jika H terikat langsung pada…",["C, Si, Ge","N, O, F","Na, K, Li","Cl, Br, I"],1,"N, O, dan F sangat elektronegatif sehingga memungkinkan ikatan hidrogen kuat."]
]
},
{
title:"Hukum Dasar Kimia dan Stoikiometri",
desc:"Mempelajari hukum kekekalan massa, persamaan reaksi, konsep mol, massa molar, jumlah partikel, dan pereaksi pembatas.",
sections:[
["4.1 Kekekalan massa","Dalam sistem tertutup, massa total sebelum dan sesudah reaksi sama. Atom tidak hilang; atom hanya tersusun ulang."],
["4.2 Persamaan reaksi","Persamaan kimia harus disetarakan agar jumlah atom setiap unsur sama pada sisi reaktan dan produk."],
["4.3 Konsep mol","Satu mol menyatakan 6,022 × 10²³ partikel. Mol menjadi jembatan antara skala partikel dan skala massa yang dapat diukur."],
["4.4 Massa molar","Massa molar adalah massa satu mol zat dalam g/mol. Secara numerik berhubungan dengan Ar atau Mr."],
["4.5 Perhitungan stoikiometri","Koefisien reaksi setara memberikan perbandingan mol antara reaktan dan produk."],
["4.6 Pereaksi pembatas","Pereaksi pembatas habis terlebih dahulu dan menentukan jumlah maksimum produk yang dapat terbentuk."]
],
formulas:[
["Mol dari massa","n = m / Mr","m dalam gram, Mr dalam g/mol."],
["Jumlah partikel","N = n × Nₐ","Nₐ = 6,022 × 10²³ partikel/mol."],
["Kekekalan massa","Σm reaktan = Σm produk","Berlaku pada sistem tertutup."]
],
interactive:"stoich",
quiz:[
["Satu mol setara dengan…",["6,022 × 10²³ partikel","6,022 × 10²² partikel","1 gram semua zat","22,4 partikel"],0,"Bilangan Avogadro adalah 6,022 × 10²³ partikel per mol."],
["36 g H₂O (Mr 18) adalah…",["0,5 mol","1 mol","2 mol","18 mol"],2,"n = 36/18 = 2 mol."],
["Koefisien yang benar untuk H₂ + O₂ → H₂O adalah…",["1:1:1","2:1:2","1:2:1","2:2:1"],1,"2H₂ + O₂ → 2H₂O."]
]
},
{
title:"Larutan dan Reaksi Kimia Dasar",
desc:"Mengenal larutan, konsentrasi, molaritas, pengenceran, reaksi pengendapan, serta reaksi asam-basa sederhana.",
sections:[
["5.1 Larutan","Larutan adalah campuran homogen yang terdiri atas pelarut dan zat terlarut."],
["5.2 Konsentrasi dan molaritas","Molaritas menunjukkan jumlah mol zat terlarut per liter larutan."],
["5.3 Pengenceran","Saat pelarut ditambahkan, jumlah mol zat terlarut tetap tetapi volumenya bertambah sehingga konsentrasi menurun."],
["5.4 Reaksi pengendapan","Dua larutan elektrolit dapat menghasilkan zat sukar larut yang tampak sebagai endapan."],
["5.5 Reaksi asam-basa","Asam dan basa dapat bereaksi membentuk garam dan air dalam reaksi netralisasi."]
],
formulas:[
["Molaritas","M = n / V","V dinyatakan dalam liter."],
["Pengenceran","M₁V₁ = M₂V₂","Mol zat terlarut tetap saat hanya ditambah pelarut."],
["Netralisasi","asam + basa → garam + air","Contoh: HCl + NaOH → NaCl + H₂O."]
],
interactive:"solution",
quiz:[
["0,5 mol zat dalam 1 L larutan memiliki M…",["0,25 M","0,5 M","1 M","2 M"],1,"M = n/V = 0,5/1."],
["Pada pengenceran, yang tetap adalah…",["volume","konsentrasi","mol zat terlarut","warna"],2,"Jika hanya pelarut ditambah, jumlah mol zat terlarut tidak berubah."],
["AgNO₃ + NaCl menghasilkan endapan…",["NaNO₃","AgCl","NaCl","AgNO₃"],1,"AgCl sukar larut sehingga membentuk endapan."]
]
}
],
XI:[
{
title:"Termokimia",
desc:"Mempelajari hubungan reaksi kimia dengan panas, sistem dan lingkungan, reaksi eksoterm-endoterm, entalpi, dan Hukum Hess.",
sections:[
["1.1 Sistem dan lingkungan","Sistem adalah bagian yang sedang dipelajari, sedangkan lingkungan adalah segala sesuatu di luar sistem."],
["1.2 Eksoterm","Reaksi eksoterm melepaskan kalor dari sistem ke lingkungan sehingga ΔH bernilai negatif."],
["1.3 Endoterm","Reaksi endoterm menyerap kalor dari lingkungan sehingga ΔH bernilai positif."],
["1.4 Entalpi","Perubahan entalpi dihitung dari entalpi produk dikurangi entalpi reaktan."],
["1.5 Hukum Hess","Perubahan entalpi total hanya bergantung pada keadaan awal dan akhir, sehingga beberapa tahap reaksi dapat dijumlahkan."]
],
formulas:[
["Perubahan entalpi","ΔH = Hproduk − Hreaktan","Negatif untuk eksoterm, positif untuk endoterm."],
["Hukum Hess","ΔHtotal = ΣΔHtahap","Jalur reaksi dapat berbeda, hasil total sama."],
["Kalor","q = m c ΔT","Digunakan pada kalorimetri sederhana."]
],
interactive:"thermo",
quiz:[
["Reaksi eksoterm memiliki ΔH…",["positif","nol","negatif","tak terdefinisi"],2,"Eksoterm melepaskan kalor sehingga entalpi sistem menurun."],
["Hukum Hess menegaskan ΔH bergantung pada…",["jalur reaksi","keadaan awal dan akhir","jumlah alat","warna zat"],1,"ΔH adalah fungsi keadaan."],
["Jika sistem menyerap kalor, reaksinya…",["eksoterm","endoterm","netral","redoks saja"],1,"Endoterm menyerap kalor dari lingkungan."]
]
},
{
title:"Laju Reaksi",
desc:"Mempelajari kecepatan reaksi, teori tumbukan, energi aktivasi, dan faktor-faktor yang memengaruhi laju reaksi.",
sections:[
["2.1 Laju reaksi","Laju menggambarkan perubahan konsentrasi reaktan atau produk per satuan waktu."],
["2.2 Teori tumbukan","Reaksi terjadi jika partikel mengalami tumbukan efektif: energi cukup dan orientasi sesuai."],
["2.3 Energi aktivasi","Energi aktivasi adalah energi minimum agar tumbukan dapat menghasilkan reaksi."],
["2.4 Faktor laju","Konsentrasi, suhu, luas permukaan, tekanan gas, dan katalis dapat memengaruhi frekuensi atau efektivitas tumbukan."],
["2.5 Persamaan laju","Hubungan eksperimen dapat ditulis v = k[A]^m[B]^n; pangkat m dan n ditentukan dari data percobaan."]
],
formulas:[
["Laju","v = ΔC / Δt","Perubahan konsentrasi per satuan waktu."],
["Persamaan laju","v = k[A]^m[B]^n","m dan n adalah orde reaksi."],
["Orde total","m + n","Jumlah pangkat konsentrasi dalam persamaan laju."]
],
interactive:"rate",
quiz:[
["Katalis mempercepat reaksi dengan…",["menaikkan ΔH","menurunkan energi aktivasi","menambah massa produk","mengubah kesetimbangan akhir"],1,"Katalis menyediakan jalur reaksi alternatif dengan energi aktivasi lebih rendah."],
["Serbuk bereaksi lebih cepat daripada bongkahan karena…",["massa selalu lebih besar","luas permukaan lebih besar","lebih dingin","tekanan nol"],1,"Luas permukaan kontak yang lebih besar meningkatkan frekuensi tumbukan."],
["Suhu naik biasanya membuat laju reaksi…",["menurun","tetap","meningkat","menjadi nol"],2,"Energi kinetik partikel meningkat dan tumbukan efektif lebih sering."]
]
},
{
title:"Kesetimbangan Kimia",
desc:"Mempelajari reaksi reversibel, kesetimbangan dinamis, tetapan kesetimbangan, dan prinsip Le Chatelier.",
sections:[
["3.1 Reaksi reversibel","Reaksi reversibel dapat berlangsung maju dan balik."],
["3.2 Kesetimbangan dinamis","Pada kesetimbangan, laju reaksi maju sama dengan laju balik; komposisi makroskopik tampak tetap."],
["3.3 Tetapan kesetimbangan","Kc menyatakan perbandingan konsentrasi produk dan reaktan yang masing-masing dipangkatkan koefisien stoikiometrinya."],
["3.4 Le Chatelier","Sistem kesetimbangan merespons perubahan konsentrasi, tekanan, volume, atau suhu dengan arah yang mengurangi efek gangguan."],
["3.5 Katalis","Katalis mempercepat tercapainya kesetimbangan tetapi tidak mengubah nilai K atau posisi kesetimbangan akhir."]
],
formulas:[
["Tetapan Kc","Kc = [C]^c[D]^d / [A]^a[B]^b","Untuk aA+bB ⇌ cC+dD."],
["Kesetimbangan","vmaju = vbalik","Ciri keadaan setimbang dinamis."],
["Tekanan gas","tekanan ↑ → sisi mol gas lebih sedikit","Aturan praktis Le Chatelier."]
],
interactive:"equilibrium",
quiz:[
["Pada kesetimbangan dinamis…",["reaksi berhenti","laju maju = laju balik","semua konsentrasi sama","produk selalu habis"],1,"Reaksi tetap berlangsung dua arah dengan laju sama."],
["Katalis pada kesetimbangan…",["mengubah K","menggeser ke kanan","mempercepat tercapainya kesetimbangan","menggeser ke kiri"],2,"Katalis mempercepat reaksi maju dan balik."],
["Menambah reaktan biasanya mendorong sistem…",["mengonsumsi reaktan tambahan","berhenti","menjadi padat","menghilangkan katalis"],0,"Sistem cenderung mengurangi gangguan dengan menggunakan sebagian reaktan tambahan."]
]
},
{
title:"Asam, Basa, dan Kesetimbangan Ion",
desc:"Mempelajari teori asam-basa, pH-pOH, asam/basa kuat dan lemah, buffer, hidrolisis, dan titrasi.",
sections:[
["4.1 Arrhenius","Asam meningkatkan konsentrasi H⁺/H₃O⁺ dalam air, sedangkan basa meningkatkan konsentrasi OH⁻."],
["4.2 Brønsted–Lowry","Asam adalah donor proton dan basa adalah akseptor proton."],
["4.3 pH dan pOH","pH = −log[H⁺] dan pOH = −log[OH⁻]. Pada 25 °C, pH + pOH = 14."],
["4.4 Kuat dan lemah","Kuat-lemah berhubungan dengan derajat ionisasi, bukan langsung dengan pekat-encer."],
["4.5 Buffer","Larutan buffer menahan perubahan pH ketika ditambah sedikit asam atau basa."],
["4.6 Hidrolisis garam","Ion tertentu dari garam bereaksi dengan air sehingga larutan dapat bersifat asam, basa, atau netral."],
["4.7 Titrasi","Titrasi memakai reaksi stoikiometrik untuk menentukan konsentrasi larutan yang belum diketahui."]
],
formulas:[
["pH","pH = −log[H⁺]","Mengukur keasaman larutan."],
["pOH","pOH = −log[OH⁻]","Mengukur kebasaan melalui ion hidroksida."],
["Hubungan","pH + pOH = 14","Untuk larutan air pada 25 °C."]
],
interactive:"ph",
quiz:[
["Menurut Brønsted–Lowry, asam adalah…",["akseptor elektron","donor proton","donor neutron","akseptor neutron"],1,"Asam Brønsted–Lowry mendonorkan H⁺."],
["Larutan dengan pH 3 bersifat…",["asam","netral","basa","selalu buffer"],0,"pH di bawah 7 bersifat asam pada kondisi umum."],
["Fungsi utama buffer adalah…",["mengubah semua asam menjadi gas","menahan perubahan pH","membuat pH selalu 7","menghilangkan semua ion"],1,"Buffer menjaga pH relatif stabil terhadap penambahan kecil asam/basa."]
]
},
{
title:"Koloid",
desc:"Membedakan larutan, koloid, dan suspensi serta memahami efek Tyndall, gerak Brown, adsorpsi, dan koagulasi.",
sections:[
["5.1 Jenis campuran","Larutan homogen memiliki partikel sangat kecil; suspensi memiliki partikel besar yang mudah mengendap; koloid berada di antara keduanya."],
["5.2 Jenis koloid","Contohnya sol, emulsi, aerosol, dan buih berdasarkan fase terdispersi dan medium pendispersinya."],
["5.3 Efek Tyndall","Partikel koloid menghamburkan cahaya sehingga berkas cahaya dapat terlihat."],
["5.4 Gerak Brown","Partikel koloid bergerak acak akibat tumbukan dengan partikel medium."],
["5.5 Adsorpsi dan koagulasi","Permukaan koloid dapat mengadsorpsi partikel/ion; koagulasi adalah penggumpalan partikel koloid."]
],
formulas:[
["Larutan","partikel sangat kecil","Umumnya tidak menghamburkan cahaya secara nyata."],
["Koloid","ukuran menengah","Menunjukkan efek Tyndall."],
["Suspensi","partikel besar","Dapat mengendap dan dipisahkan lebih mudah."]
],
interactive:"colloid",
quiz:[
["Kabut adalah contoh…",["larutan sejati","aerosol koloid","suspensi padat","unsur"],1,"Kabut adalah tetesan cair kecil yang terdispersi dalam gas."],
["Efek Tyndall adalah…",["pengendapan cepat","penghamburan cahaya","perubahan massa","reaksi redoks"],1,"Partikel koloid menghamburkan cahaya."],
["Koagulasi berarti…",["penggumpalan partikel koloid","penguapan pelarut","ionisasi air","pembentukan gas"],0,"Koagulasi adalah penggumpalan partikel koloid."]
]
}
],
XII:[
{
title:"Sifat Koligatif Larutan",
desc:"Mempelajari sifat larutan yang terutama bergantung pada jumlah partikel zat terlarut: tekanan uap, titik didih, titik beku, dan osmosis.",
sections:[
["1.1 Konsep koligatif","Sifat koligatif terutama dipengaruhi jumlah partikel zat terlarut dalam larutan ideal encer."],
["1.2 Penurunan tekanan uap","Penambahan zat terlarut nonvolatil menurunkan fraksi mol pelarut sehingga tekanan uap pelarut menurun."],
["1.3 Kenaikan titik didih","Larutan membutuhkan suhu lebih tinggi agar tekanan uapnya menyamai tekanan luar."],
["1.4 Penurunan titik beku","Zat terlarut mengganggu pembentukan kisi pelarut padat sehingga titik beku menurun."],
["1.5 Osmosis","Osmosis adalah perpindahan pelarut melalui membran semipermeabel dari sisi yang lebih encer menuju sisi yang lebih pekat."],
["1.6 Faktor van't Hoff","Elektrolit menghasilkan lebih banyak partikel efektif sehingga digunakan faktor i pada perhitungan koligatif."]
],
formulas:[
["Titik didih","ΔTb = i Kb m","Kenaikan titik didih."],
["Titik beku","ΔTf = i Kf m","Penurunan titik beku."],
["Tekanan osmotik","π = i M R T","Untuk larutan ideal encer."]
],
interactive:"colligative",
quiz:[
["Sifat koligatif terutama bergantung pada…",["warna zat terlarut","jumlah partikel zat terlarut","jenis wadah","nama senyawa"],1,"Yang utama adalah banyaknya partikel efektif dalam larutan."],
["Penambahan zat terlarut nonvolatil membuat titik beku…",["naik","tetap","turun","selalu 100°C"],2,"Terjadi penurunan titik beku."],
["Faktor van't Hoff digunakan terutama untuk…",["memperhitungkan jumlah partikel elektrolit","mengukur massa atom","menamai senyawa","menghitung nomor atom"],0,"i mengoreksi jumlah partikel efektif akibat disosiasi/asosiasi."]
]
},
{
title:"Reaksi Redoks dan Elektrokimia",
desc:"Mempelajari oksidasi-reduksi, bilangan oksidasi, sel volta, potensial sel, elektrolisis, dan korosi.",
sections:[
["2.1 Oksidasi dan reduksi","Oksidasi adalah pelepasan elektron atau kenaikan bilangan oksidasi; reduksi adalah penerimaan elektron atau penurunan bilangan oksidasi."],
["2.2 Oksidator dan reduktor","Oksidator menerima elektron dan mengalami reduksi. Reduktor memberikan elektron dan mengalami oksidasi."],
["2.3 Sel volta","Sel volta mengubah energi kimia menjadi listrik melalui reaksi redoks spontan."],
["2.4 Anoda dan katoda","Oksidasi selalu terjadi di anoda dan reduksi di katoda."],
["2.5 Elektrolisis","Sel elektrolisis menggunakan energi listrik untuk mendorong reaksi yang tidak spontan."],
["2.6 Korosi","Korosi adalah proses elektrokimia pada logam yang dapat diperlambat dengan pelapisan, galvanisasi, atau proteksi katodik."]
],
formulas:[
["Potensial sel","E°sel = E°katoda − E°anoda","Positif menandakan reaksi spontan pada kondisi standar."],
["Oksidasi","melepas e⁻","Bilangan oksidasi naik."],
["Reduksi","menerima e⁻","Bilangan oksidasi turun."]
],
interactive:"electro",
quiz:[
["Oksidasi terjadi di…",["katoda","anoda","jembatan garam","pelarut saja"],1,"Anoda adalah tempat oksidasi."],
["Pada reduksi, spesies…",["melepas elektron","menerima elektron","kehilangan proton selalu","menjadi gas selalu"],1,"Reduksi adalah penerimaan elektron."],
["Sel volta mengubah energi…",["listrik menjadi kimia","kimia menjadi listrik","panas menjadi massa","cahaya menjadi neutron"],1,"Reaksi spontan pada sel volta menghasilkan arus listrik."]
]
},
{
title:"Kimia Unsur",
desc:"Mengenal pola sifat dan kegunaan unsur golongan alkali, alkali tanah, halogen, gas mulia, dan unsur transisi.",
sections:[
["3.1 Alkali","Unsur golongan 1 memiliki satu elektron valensi dan cenderung membentuk ion +1. Reaktivitas umumnya meningkat ke bawah golongan."],
["3.2 Alkali tanah","Golongan 2 memiliki dua elektron valensi dan cenderung membentuk ion +2."],
["3.3 Halogen","Golongan 17 memiliki tujuh elektron valensi dan cenderung menerima satu elektron menjadi ion −1."],
["3.4 Gas mulia","Golongan 18 memiliki konfigurasi valensi yang sangat stabil dan umumnya relatif sukar bereaksi."],
["3.5 Unsur transisi","Banyak unsur transisi memiliki bilangan oksidasi bervariasi, senyawa berwarna, dan berperan sebagai katalis atau bahan industri."]
],
formulas:[
["Alkali","M → M⁺ + e⁻","Cenderung membentuk kation +1."],
["Alkali tanah","M → M²⁺ + 2e⁻","Cenderung membentuk kation +2."],
["Halogen","X + e⁻ → X⁻","Cenderung membentuk anion −1."]
],
interactive:"periodic",
quiz:[
["Golongan halogen adalah…",["1","2","17","18"],2,"Halogen berada pada golongan 17."],
["Gas mulia berada pada golongan…",["18","17","2","1"],0,"Gas mulia berada pada golongan 18."],
["Unsur alkali cenderung membentuk ion…",["+1","+2","−1","−2"],0,"Alkali memiliki satu elektron valensi yang relatif mudah dilepas."]
]
},
{
title:"Kimia Karbon dan Hidrokarbon",
desc:"Mempelajari kemampuan karbon membentuk rantai, alkana-alkena-alkuna, tata nama dasar, isomer, pembakaran, dan minyak bumi.",
sections:[
["4.1 Kekhasan karbon","Karbon memiliki empat elektron valensi dan dapat membentuk ikatan kovalen kuat dengan sesama karbon maupun unsur lain."],
["4.2 Alkana","Hidrokarbon jenuh dengan ikatan tunggal; untuk rantai terbuka aciklik, rumus umum CₙH₂ₙ₊₂."],
["4.3 Alkena","Memiliki sedikitnya satu ikatan rangkap dua. Untuk monoalkena rantai terbuka, rumus umum CₙH₂ₙ."],
["4.4 Alkuna","Memiliki sedikitnya satu ikatan rangkap tiga. Untuk monoalkuna rantai terbuka, rumus umum CₙH₂ₙ₋₂."],
["4.5 Isomer","Senyawa dapat memiliki rumus molekul sama tetapi susunan atom berbeda."],
["4.6 Pembakaran","Pembakaran sempurna hidrokarbon menghasilkan CO₂ dan H₂O, sedangkan pembakaran tidak sempurna dapat menghasilkan CO atau karbon."],
["4.7 Minyak bumi","Minyak bumi dipisahkan menjadi fraksi melalui distilasi berdasarkan rentang titik didih."]
],
formulas:[
["Alkana","CₙH₂ₙ₊₂","Hidrokarbon jenuh rantai terbuka."],
["Alkena","CₙH₂ₙ","Satu ikatan rangkap dua."],
["Alkuna","CₙH₂ₙ₋₂","Satu ikatan rangkap tiga."]
],
interactive:"hydrocarbon",
quiz:[
["Rumus umum alkana rantai terbuka adalah…",["CₙH₂ₙ","CₙH₂ₙ₊₂","CₙH₂ₙ₋₂","CₙHₙ"],1,"Alkana aciklik jenuh memiliki rumus CₙH₂ₙ₊₂."],
["C₂H₄ termasuk…",["alkana","alkena","alkuna","alkohol"],1,"C₂H₄ mengikuti rumus alkena CₙH₂ₙ."],
["Isomer memiliki…",["rumus molekul sama, struktur berbeda","jumlah C selalu berbeda","warna selalu sama","massa atom berbeda"],0,"Itulah definisi isomer struktur secara umum."]
]
},
{
title:"Turunan Senyawa Karbon dan Makromolekul",
desc:"Mengenal gugus fungsi organik dan makromolekul: alkohol, eter, aldehida, keton, asam karboksilat, ester, polimer, karbohidrat, protein, lemak, dan asam nukleat.",
sections:[
["5.1 Alkohol dan eter","Alkohol memiliki gugus −OH, sedangkan eter memiliki jembatan R−O−R'."],
["5.2 Aldehida dan keton","Keduanya memiliki gugus karbonil; aldehida berada di ujung rantai sebagai −CHO, sedangkan keton berada di antara dua gugus karbon."],
["5.3 Asam karboksilat dan ester","Asam karboksilat memiliki −COOH. Ester umumnya dapat terbentuk dari reaksi asam karboksilat dan alkohol."],
["5.4 Polimer","Polimer tersusun atas satuan berulang yang berasal dari monomer. Polimer dapat alami maupun sintetis."],
["5.5 Biomolekul","Protein tersusun dari asam amino, karbohidrat mencakup mono-/di-/polisakarida, lemak banyak tersusun dari gliserol dan asam lemak, sedangkan DNA/RNA adalah asam nukleat."]
],
formulas:[
["Alkohol","R−OH","Gugus hidroksil."],
["Asam karboksilat","R−COOH","Gugus karboksil."],
["Ester","R−COO−R'","Dapat terbentuk melalui esterifikasi."]
],
interactive:"polymer",
quiz:[
["Gugus fungsi alkohol adalah…",["−COOH","−OH","−CHO","−COO−"],1,"Alkohol memiliki gugus hidroksil −OH."],
["Monomer adalah…",["satuan kecil penyusun polimer","zat yang selalu ion","nama lain katalis","pelarut universal"],0,"Polimer dibangun dari banyak unit monomer."],
["Protein tersusun terutama dari monomer…",["asam amino","glukosa saja","asam lemak saja","nukleotida"],0,"Asam amino berikatan membentuk rantai polipeptida/protein."]
]
}
]
};


function expandChemistryQuizToTen(){
  Object.values(curriculum).flat().forEach(ch=>{
    const sections=ch.sections||[];
    let i=0;
    while(ch.quiz.length<10 && sections.length){
      const idx=i%sections.length, sec=sections[idx];
      const title=String(sec[0]).replace(/^\d+(?:\.\d+)?\s*/,''), answer=String(sec[1]).split(/(?<=[.!?])\s+/)[0];
      const distract=sections.filter((_,j)=>j!==idx).map(x=>String(x[1]).split(/(?<=[.!?])\s+/)[0]).slice(0,3);
      while(distract.length<3)distract.push(`Pernyataan lain pada bab ${ch.title}.`);
      ch.quiz.push([`Pernyataan yang paling tepat tentang ${title} adalah...`,[answer,...distract],0,answer]);
      i++;
    }
  });
}
expandChemistryQuizToTen();

const state = {
  className: ["X","XI","XII"].includes(BISAQuery.get("grade")) ? BISAQuery.get("grade") : (localStorage.getItem(bkey("kimialab-class")) || "X"),
  chapter: Number(localStorage.getItem(bkey("kimialab-chapter")) || 0),
  completed: JSON.parse(localStorage.getItem(bkey("kimialab-completed")) || "{}"),
  answers: {}
};

const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];

function keyOf(c = state.className, ch = state.chapter){ return `${c}-${ch}`; }

function bridgeProgress(){
  if (window.parent !== window) window.parent.postMessage({type:'BISA_MODULE_SNAPSHOT', subject:'Kimia', level:'SMA', keys:Object.keys(state?.completed || {}).filter(k=>state.completed[k])}, '*');
}

function saveState(){
  localStorage.setItem(bkey("kimialab-class"), state.className);
  localStorage.setItem(bkey("kimialab-chapter"), state.chapter);
  localStorage.setItem(bkey("kimialab-completed"), JSON.stringify(state.completed));
  bridgeProgress();
}

function current(){ return curriculum[state.className][state.chapter]; }

function renderNav(filter=""){
  const nav = $("#chapterNav");
  nav.innerHTML = "";
  curriculum[state.className].forEach((item,i)=>{
    const hay = (item.title+" "+item.sections.map(s=>s.join(" ")).join(" ")).toLowerCase();
    if(filter && !hay.includes(filter.toLowerCase())) return;
    const b=document.createElement("button");
    b.className="chapter-btn"+(i===state.chapter?" active":"");
    b.innerHTML=`<small>Bab ${i+1}</small><span>${item.title}</span>`;
    b.onclick=()=>{state.chapter=i;saveState();renderAll();scrollTo({top:0,behavior:"smooth"});};
    nav.appendChild(b);
  });
}

function renderMaterial(){
  const item=current();
  $("#heroClass").textContent=`KELAS ${state.className}`;
  $("#heroTitle").textContent=item.title;
  $("#heroDesc").textContent=item.desc;
  $("#materialContent").innerHTML=item.sections.map((s,i)=>`
    <section id="sub-${i}">
      <h4>${s[0]}</h4>
      <p>${s[1]}</p>
    </section>`).join("") + `<div class="callout"><strong>Strategi belajar:</strong> pahami konsep dengan kata-kata sendiri, amati visual interaktif, lalu kerjakan kuis tanpa melihat jawaban.</div>`;
  $("#subtopicList").innerHTML=item.sections.map((s,i)=>`<button class="subtopic-link" data-sub="${i}">${s[0]}</button>`).join("");
  $$(".subtopic-link").forEach(b=>b.onclick=()=>document.querySelector(`#sub-${b.dataset.sub}`).scrollIntoView({behavior:"smooth",block:"center"}));
  $("#formulaGrid").innerHTML=item.formulas.map(f=>`<div class="formula-tile"><code>${f[1]}</code><strong>${f[0]}</strong><span>${f[2]}</span></div>`).join("");
  $("#markCompleteBtn").textContent=state.completed[keyOf()]?"✓ Bab selesai":"Tandai selesai";
}

function renderQuiz(){
  const item=current();
  state.answers[keyOf()] = state.answers[keyOf()] || {};
  const ans=state.answers[keyOf()];
  $("#quizArea").innerHTML=item.quiz.map((q,qi)=>`
    <div class="question">
      <h4>${qi+1}. ${q[0]}</h4>
      <div class="options">${q[1].map((op,oi)=>`<button class="option-btn" data-q="${qi}" data-o="${oi}">${op}</button>`).join("")}</div>
      <p class="feedback" id="fb-${qi}"></p>
    </div>`).join("");
  $$(".option-btn").forEach(btn=>{
    btn.onclick=()=>{
      const qi=+btn.dataset.q, oi=+btn.dataset.o, q=item.quiz[qi];
      ans[qi]=oi;
      btn.closest(".options").querySelectorAll(".option-btn").forEach((x,idx)=>{
        x.disabled=true;
        if(idx===q[2])x.classList.add("correct");
        if(idx===oi && oi!==q[2])x.classList.add("wrong");
      });
      $(`#fb-${qi}`).textContent=(oi===q[2]?"Benar. ":"Belum tepat. ")+q[3];
      updateQuizScore();
      if(Object.keys(ans).length===item.quiz.length && Object.entries(ans).filter(([i,o])=>+o===item.quiz[+i][2]).length>=Math.ceil(item.quiz.length*0.75)){
        state.completed[keyOf()]=true;saveState();updateProgressUI();$("#markCompleteBtn").textContent="✓ Bab selesai";
      }
    };
  });
  updateQuizScore();
}

function updateQuizScore(){
  const ans=state.answers[keyOf()]||{};
  const q=current().quiz;
  const score=Object.entries(ans).filter(([i,o])=>+o===q[+i][2]).length;
  $("#quizScore").textContent=`${score} / ${q.length}`;
}

function renderInteractive(){
  const type=current().interactive;
  const area=$("#interactiveArea");
  const names={
    lab:"Pilih Alat Laboratorium",
    atom:"Model Atom Bohr",
    molecule:"Bentuk Molekul VSEPR",
    stoich:"Kalkulator Stoikiometri",
    solution:"Simulasi Pengenceran",
    thermo:"Profil Energi Reaksi",
    rate:"Faktor Laju Reaksi",
    equilibrium:"Pergeseran Kesetimbangan",
    ph:"Eksplorasi Skala pH",
    colloid:"Efek Tyndall",
    colligative:"Sifat Koligatif",
    electro:"Sel Volta",
    periodic:"Tren Periodik",
    hydrocarbon:"Pembangun Hidrokarbon",
    polymer:"Rantai Polimer"
  };
  $("#interactiveTitle").textContent=names[type]||"Eksplorasi Konsep";
  const map={
    lab:interactiveLab,atom:interactiveAtom,molecule:interactiveMolecule,stoich:interactiveStoich,
    solution:interactiveSolution,thermo:interactiveThermo,rate:interactiveRate,equilibrium:interactiveEquilibrium,
    ph:interactivePH,colloid:interactiveColloid,colligative:interactiveColligative,electro:interactiveElectro,
    periodic:interactivePeriodic,hydrocarbon:interactiveHydrocarbon,polymer:interactivePolymer
  };
  area.innerHTML=map[type]();
  attachInteractive(type);
}

function interactiveLab(){
  return `<div class="interactive-stage">
    <div class="stage-visual">
      <svg class="visual-svg" viewBox="0 0 700 360">
        <g data-tool="beaker" class="labtool" tabindex="0">
          <path d="M80 90v180q0 40 40 40h100q40 0 40-40V90" fill="none" stroke="currentColor" stroke-width="7"/>
          <path d="M93 220h154v45q0 30-30 30H123q-30 0-30-30z" fill="currentColor" opacity=".15"/>
          <text x="170" y="330" text-anchor="middle" class="svg-label">Gelas beker</text>
        </g>
        <g data-tool="erlenmeyer" class="labtool" tabindex="0">
          <path d="M330 60h70M345 60v95l-75 135q-13 24 15 24h175q28 0 15-24l-75-135V60" fill="none" stroke="currentColor" stroke-width="7"/>
          <path d="M315 250h115l27 48H288z" fill="currentColor" opacity=".15"/>
          <text x="372" y="338" text-anchor="middle" class="svg-label">Erlenmeyer</text>
        </g>
        <g data-tool="testtube" class="labtool" tabindex="0">
          <path d="M560 60v210q0 46 40 46t40-46V60" fill="none" stroke="currentColor" stroke-width="7"/>
          <path d="M573 220h54v50q0 32-27 32t-27-32z" fill="currentColor" opacity=".15"/>
          <text x="600" y="338" text-anchor="middle" class="svg-label">Tabung reaksi</text>
        </g>
      </svg>
    </div>
    <div class="stage-controls">
      <h4 id="labName">Klik salah satu alat</h4>
      <p id="labDesc">Arahkan kursor atau klik gambar untuk melihat fungsi alat.</p>
      <div class="callout">Diagram dibuat dengan SVG sehingga tetap tajam dan interaktif.</div>
    </div>
  </div>`;
}

function interactiveAtom(){
 return `<div class="interactive-stage">
  <div class="stage-visual">
   <svg class="visual-svg" id="atomSvg" viewBox="0 0 600 420"></svg>
  </div>
  <div class="stage-controls">
    <div class="control-group"><label>Nomor atom <span id="zVal">11</span></label><input id="zSlider" type="range" min="1" max="20" value="11"></div>
    <div class="stat-grid">
      <div class="stat"><small>Proton</small><strong id="pVal">11</strong></div>
      <div class="stat"><small>Elektron</small><strong id="eVal">11</strong></div>
      <div class="stat"><small>Kulit</small><strong id="shellVal">3</strong></div>
      <div class="stat"><small>Valensi</small><strong id="valVal">1</strong></div>
    </div>
    <p id="atomInfo">Na: konfigurasi kulit 2, 8, 1</p>
  </div>
 </div>`;
}

function interactiveMolecule(){
 return `<div class="interactive-stage">
  <div class="stage-visual"><svg class="visual-svg" id="molSvg" viewBox="0 0 600 400"></svg></div>
  <div class="stage-controls">
    <div class="molecule-preset">
      <button class="small-btn active" data-mol="CO2">CO₂</button>
      <button class="small-btn" data-mol="H2O">H₂O</button>
      <button class="small-btn" data-mol="NH3">NH₃</button>
      <button class="small-btn" data-mol="CH4">CH₄</button>
    </div>
    <div class="callout" id="molInfo">CO₂: linear, sudut ideal 180°.</div>
    <p>Gunakan tombol untuk membandingkan geometri. Titik abu-abu menggambarkan pasangan elektron bebas.</p>
  </div>
 </div>`;
}

function interactiveStoich(){
 return `<div class="interactive-stage">
   <div class="stage-visual">
    <div>
      <div class="balance-row"><span class="chem-chip">2H₂</span><span>+</span><span class="chem-chip">O₂</span><span class="arrow">→</span><span class="chem-chip">2H₂O</span></div>
      <div class="callout" id="stoichResult">Masukkan mol H₂ untuk menghitung kebutuhan O₂ dan H₂O yang terbentuk.</div>
    </div>
   </div>
   <div class="stage-controls">
    <div class="control-group"><label>Mol H₂ <span id="h2MolVal">2.0</span></label><input id="h2Mol" type="range" min=".5" max="10" step=".5" value="2"></div>
    <div class="stat-grid">
      <div class="stat"><small>O₂ dibutuhkan</small><strong id="o2Need">1.0 mol</strong></div>
      <div class="stat"><small>H₂O terbentuk</small><strong id="h2oMade">2.0 mol</strong></div>
    </div>
   </div>
 </div>`;
}

function interactiveSolution(){
 return `<div class="interactive-stage">
  <div class="stage-visual">
    <svg class="visual-svg" viewBox="0 0 620 360">
      <defs><clipPath id="cupClip"><path d="M160 40h300l-30 270H190z"/></clipPath></defs>
      <path d="M160 40h300l-30 270H190z" fill="none" stroke="currentColor" stroke-width="7"/>
      <rect id="solLiquid" x="170" y="130" width="280" height="180" fill="currentColor" opacity=".18" clip-path="url(#cupClip)"/>
      <g id="soluteDots"></g>
      <text x="310" y="340" text-anchor="middle" class="svg-label" id="solLabel">0,50 M</text>
    </svg>
  </div>
  <div class="stage-controls">
    <div class="control-group"><label>Volume akhir <span id="v2Text">1.0 L</span></label><input id="v2Slider" type="range" min="1" max="4" step=".25" value="1"></div>
    <p>Larutan awal: <strong>0,50 M</strong> sebanyak <strong>1,0 L</strong>.</p>
    <div class="stat"><small>Molaritas akhir</small><strong id="m2Text">0,50 M</strong></div>
    <p>Semakin besar volume akhir, partikel zat terlarut tersebar dalam volume yang lebih besar.</p>
  </div>
 </div>`;
}

function interactiveThermo(){
 return `<div class="interactive-stage">
  <div class="stage-visual"><svg class="visual-svg" id="thermoSvg" viewBox="0 0 650 380"></svg></div>
  <div class="stage-controls">
    <div class="molecule-preset">
      <button class="small-btn active" data-thermo="exo">Eksoterm</button>
      <button class="small-btn" data-thermo="endo">Endoterm</button>
    </div>
    <div class="callout" id="thermoInfo">Eksoterm: energi produk lebih rendah daripada reaktan, sehingga ΔH negatif.</div>
  </div>
 </div>`;
}

function interactiveRate(){
 return `<div class="interactive-stage">
  <div class="stage-visual">
    <div style="width:100%">
      <div class="rate-bars" id="rateBars"></div>
      <p style="text-align:center;color:var(--muted)">Visual relatif jumlah tumbukan efektif</p>
    </div>
  </div>
  <div class="stage-controls">
    <div class="control-group"><label>Suhu relatif <span id="tempVal">50</span></label><input id="tempSlider" type="range" min="10" max="100" value="50"></div>
    <div class="control-group"><label>Konsentrasi relatif <span id="concVal">50</span></label><input id="concSlider" type="range" min="10" max="100" value="50"></div>
    <div class="control-group"><label><span>Katalis</span><input id="catCheck" type="checkbox"></label></div>
    <div class="stat"><small>Indeks laju relatif</small><strong id="rateIndex">25</strong></div>
  </div>
 </div>`;
}

function interactiveEquilibrium(){
 return `<div class="interactive-stage">
  <div class="stage-visual">
    <svg class="visual-svg" viewBox="0 0 700 360">
      <rect x="80" y="90" width="220" height="180" rx="20" fill="currentColor" opacity=".08"/>
      <rect x="400" y="90" width="220" height="180" rx="20" fill="currentColor" opacity=".08"/>
      <text x="190" y="65" text-anchor="middle" class="svg-label">REAKTAN</text>
      <text x="510" y="65" text-anchor="middle" class="svg-label">PRODUK</text>
      <text x="350" y="180" text-anchor="middle" style="font-size:44px;fill:currentColor">⇌</text>
      <g id="eqLeft"></g><g id="eqRight"></g>
    </svg>
  </div>
  <div class="stage-controls">
    <div class="control-group"><label>Gangguan</label>
      <select id="eqSelect">
       <option value="none">Tidak ada</option>
       <option value="addR">Tambah reaktan</option>
       <option value="removeP">Kurangi produk</option>
       <option value="addP">Tambah produk</option>
      </select>
    </div>
    <div class="callout" id="eqInfo">Sistem berada pada keadaan setimbang dinamis.</div>
  </div>
 </div>`;
}

function interactivePH(){
 return `<div class="interactive-stage">
  <div class="stage-visual">
    <div style="width:min(90%,650px)">
      <div class="ph-scale"><div class="ph-marker" id="phMarker"></div></div>
      <div style="display:flex;justify-content:space-between;margin-top:10px"><span>0 • asam</span><span>7 • netral</span><span>basa • 14</span></div>
      <div class="callout" id="phDesc">pH 7: netral.</div>
    </div>
  </div>
  <div class="stage-controls">
    <div class="control-group"><label>pH <span id="phValue">7.0</span></label><input id="phSlider" type="range" min="0" max="14" step=".1" value="7"></div>
    <div class="stat-grid">
      <div class="stat"><small>[H⁺]</small><strong id="hConc">1.0e-7 M</strong></div>
      <div class="stat"><small>pOH</small><strong id="pohValue">7.0</strong></div>
    </div>
  </div>
 </div>`;
}

function interactiveColloid(){
 return `<div class="interactive-stage">
   <div class="stage-visual">
    <svg class="visual-svg" viewBox="0 0 700 360">
      <rect x="100" y="80" width="500" height="200" rx="24" fill="currentColor" opacity=".06"/>
      <g id="colloidParticles"></g>
      <polygon id="lightBeam" points="70,150 610,175 610,215 70,190" fill="currentColor" opacity=".08"/>
      <circle cx="65" cy="170" r="28" fill="currentColor" opacity=".8"/>
      <text x="65" y="225" text-anchor="middle" class="svg-label">Senter</text>
    </svg>
   </div>
   <div class="stage-controls">
     <div class="control-group"><label>Jenis campuran</label><select id="mixSelect"><option value="solution">Larutan</option><option value="colloid" selected>Koloid</option><option value="suspension">Suspensi</option></select></div>
     <div class="callout" id="mixInfo">Koloid menghamburkan cahaya: efek Tyndall terlihat.</div>
   </div>
 </div>`;
}

function interactiveColligative(){
 return `<div class="interactive-stage">
  <div class="stage-visual">
   <svg class="visual-svg" viewBox="0 0 700 360">
    <line x1="90" y1="300" x2="620" y2="300" stroke="currentColor" stroke-width="2"/>
    <line x1="90" y1="300" x2="90" y2="50" stroke="currentColor" stroke-width="2"/>
    <text x="350" y="340" text-anchor="middle" class="svg-label">konsentrasi partikel</text>
    <text x="35" y="180" transform="rotate(-90 35 180)" text-anchor="middle" class="svg-label">perubahan titik</text>
    <line id="freezeLine" x1="110" y1="160" x2="590" y2="160" stroke="currentColor" stroke-width="7" opacity=".35"/>
    <circle id="freezeDot" cx="110" cy="160" r="12" fill="currentColor"/>
    <text id="freezeText" x="350" y="120" text-anchor="middle" class="svg-label">ΔTf = 0,00 °C</text>
   </svg>
  </div>
  <div class="stage-controls">
    <div class="control-group"><label>Molalitas m <span id="molalVal">0.0</span></label><input id="molalSlider" type="range" min="0" max="3" step=".1" value="0"></div>
    <div class="control-group"><label>Faktor i</label><select id="iSelect"><option value="1">1 • nonelektrolit</option><option value="2">2 • ideal NaCl</option><option value="3">3 • ideal CaCl₂</option></select></div>
    <p>Contoh menggunakan Kf air = 1,86 °C·kg/mol.</p>
  </div>
 </div>`;
}

function interactiveElectro(){
 return `<div class="interactive-stage">
   <div class="stage-visual">
    <div class="electro-cell">
      <div class="beaker"><div class="solution"></div><div class="electrode"></div><span style="position:absolute;bottom:12px;left:12px">Zn/Zn²⁺</span></div>
      <div class="salt-bridge"></div>
      <div class="beaker"><div class="solution"></div><div class="electrode"></div><span style="position:absolute;bottom:12px;left:12px">Cu²⁺/Cu</span></div>
    </div>
   </div>
   <div class="stage-controls">
    <div class="callout"><strong>Elektron:</strong> Zn → Cu melalui rangkaian luar.</div>
    <p><strong>Anoda:</strong> Zn → Zn²⁺ + 2e⁻</p>
    <p><strong>Katoda:</strong> Cu²⁺ + 2e⁻ → Cu</p>
    <button id="flowBtn" class="primary-btn">Jalankan aliran elektron</button>
    <div id="flowDots" style="position:relative;height:44px;margin-top:14px;border-top:2px dashed var(--line)"></div>
   </div>
 </div>`;
}

function interactivePeriodic(){
 return `<div class="interactive-stage">
  <div class="stage-visual"><div id="periodicMini" style="display:grid;grid-template-columns:repeat(8,1fr);gap:6px;width:min(100%,720px)"></div></div>
  <div class="stage-controls">
    <div class="control-group"><label>Tren</label><select id="trendSelect"><option value="radius">Jari-jari atom</option><option value="en">Keelektronegatifan</option><option value="ie">Energi ionisasi</option></select></div>
    <div class="callout" id="trendInfo"></div>
  </div>
 </div>`;
}

function interactiveHydrocarbon(){
 return `<div class="interactive-stage">
  <div class="stage-visual">
   <div style="text-align:center">
    <div id="hcChain" style="font-size:34px;font-weight:900;letter-spacing:3px"></div>
    <div class="callout" id="hcName"></div>
   </div>
  </div>
  <div class="stage-controls">
   <div class="control-group"><label>Jumlah C <span id="cVal">3</span></label><input id="cSlider" type="range" min="1" max="8" value="3"></div>
   <div class="control-group"><label>Jenis</label><select id="hcType"><option value="ane">Alkana</option><option value="ene">Alkena</option><option value="yne">Alkuna</option></select></div>
   <div class="stat"><small>Rumus molekul</small><strong id="hcFormula">C₃H₈</strong></div>
  </div>
 </div>`;
}

function interactivePolymer(){
 return `<div class="interactive-stage">
  <div class="stage-visual"><div class="polymer-chain" id="polyChain"></div></div>
  <div class="stage-controls">
    <div class="control-group"><label>Derajat polimerisasi sederhana <span id="polyVal">8</span></label><input id="polySlider" type="range" min="2" max="20" value="8"></div>
    <div class="callout">Setiap bulatan mewakili satu unit ulangan monomer dalam model sederhana.</div>
  </div>
 </div>`;
}

function attachInteractive(type){
 const fn={
  lab:attachLab,atom:attachAtom,molecule:attachMolecule,stoich:attachStoich,solution:attachSolution,
  thermo:attachThermo,rate:attachRate,equilibrium:attachEquilibrium,ph:attachPH,colloid:attachColloid,
  colligative:attachColligative,electro:attachElectro,periodic:attachPeriodic,hydrocarbon:attachHydrocarbon,polymer:attachPolymer
 }[type];
 if(fn)fn();
}
function attachLab(){
 const info={
  beaker:["Gelas beker","Untuk menampung, mencampur, atau memanaskan larutan; bukan alat utama untuk pengukuran volume presisi."],
  erlenmeyer:["Erlenmeyer","Bentuk kerucut memudahkan pengocokan tanpa mudah tumpah; sering digunakan pada titrasi."],
  testtube:["Tabung reaksi","Untuk reaksi kimia skala kecil dan pengamatan sederhana."]
 };
 document.querySelectorAll(".labtool").forEach(g=>{
   g.style.cursor="pointer";
   g.onclick=()=>{const [n,d]=info[g.dataset.tool];$("#labName").textContent=n;$("#labDesc").textContent=d;};
 });
}
function attachAtom(){
 const symbols=["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca"];
 function conf(z){let left=z,a=[];for(const cap of [2,8,8,2]){if(left<=0)break;let x=Math.min(left,cap);a.push(x);left-=x;}return a;}
 function draw(){
  const z=+$("#zSlider").value,c=conf(z),cx=300,cy=210;
  $("#zVal").textContent=z;$("#pVal").textContent=z;$("#eVal").textContent=z;$("#shellVal").textContent=c.length;$("#valVal").textContent=c.at(-1);
  $("#atomInfo").textContent=`${symbols[z-1]}: konfigurasi kulit ${c.join(", ")}`;
  let svg=`<circle cx="${cx}" cy="${cy}" r="34" fill="currentColor" opacity=".88"/><text x="${cx}" y="${cy+6}" text-anchor="middle" style="font-size:20px;fill:var(--panel);font-weight:900">${symbols[z-1]}</text>`;
  let idx=0;
  c.forEach((count,si)=>{
    const r=72+si*47;
    svg+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="currentColor" opacity=".28" stroke-width="2"/>`;
    for(let j=0;j<count;j++){
      const a=(Math.PI*2*j/count)-Math.PI/2, x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;
      svg+=`<circle class="atom-electron" cx="${x}" cy="${y}" r="8" fill="currentColor"><title>Elektron ${++idx}</title></circle>`;
    }
  });
  $("#atomSvg").innerHTML=svg;
 }
 $("#zSlider").oninput=draw;draw();
}
function attachMolecule(){
 const specs={
  CO2:{name:"CO₂: linear, sudut ideal 180°.",center:"C",atoms:[["O",120,200],["O",480,200]],lone:[]},
  H2O:{name:"H₂O: bengkok, sudut sekitar 104,5°.",center:"O",atoms:[["H",170,300],["H",430,300]],lone:[[250,90],[350,90]]},
  NH3:{name:"NH₃: piramida trigonal, sudut sekitar 107°.",center:"N",atoms:[["H",160,285],["H",440,285],["H",300,335]],lone:[[300,90]]},
  CH4:{name:"CH₄: tetrahedral, sudut ideal sekitar 109,5°.",center:"C",atoms:[["H",130,200],["H",470,200],["H",300,60],["H",300,340]],lone:[]}
 };
 function draw(k){
  const s=specs[k],cx=300,cy=200;
  let out=s.atoms.map(a=>`<line x1="${cx}" y1="${cy}" x2="${a[1]}" y2="${a[2]}" stroke="currentColor" stroke-width="5"/>`).join("");
  out+=`<circle cx="${cx}" cy="${cy}" r="42" fill="currentColor"/><text x="${cx}" y="${cy+8}" text-anchor="middle" style="fill:var(--panel);font-size:25px;font-weight:900">${s.center}</text>`;
  s.atoms.forEach(a=>out+=`<circle cx="${a[1]}" cy="${a[2]}" r="32" fill="currentColor" opacity=".72"/><text x="${a[1]}" y="${a[2]+7}" text-anchor="middle" style="fill:var(--panel);font-size:20px;font-weight:900">${a[0]}</text>`);
  s.lone.forEach(a=>out+=`<circle cx="${a[0]-10}" cy="${a[1]}" r="7" fill="currentColor" opacity=".45"/><circle cx="${a[0]+10}" cy="${a[1]}" r="7" fill="currentColor" opacity=".45"/>`);
  $("#molSvg").innerHTML=out;$("#molInfo").textContent=s.name;
  document.querySelectorAll("[data-mol]").forEach(b=>b.classList.toggle("active",b.dataset.mol===k));
 }
 document.querySelectorAll("[data-mol]").forEach(b=>b.onclick=()=>draw(b.dataset.mol));draw("CO2");
}
function attachStoich(){
 function u(){let h=+$("#h2Mol").value;$("#h2MolVal").textContent=h.toFixed(1);$("#o2Need").textContent=(h/2).toFixed(1)+" mol";$("#h2oMade").textContent=h.toFixed(1)+" mol";$("#stoichResult").textContent=`Perbandingan koefisien H₂:O₂:H₂O = 2:1:2. Jadi ${h.toFixed(1)} mol H₂ memerlukan ${(h/2).toFixed(1)} mol O₂.`}
 $("#h2Mol").oninput=u;u();
}
function attachSolution(){
 function u(){
  const v=+$("#v2Slider").value,m=.5/v;
  $("#v2Text").textContent=v.toFixed(2)+" L";$("#m2Text").textContent=m.toFixed(3)+" M";$("#solLabel").textContent=m.toFixed(3).replace(".",",")+" M";
  $("#solLiquid").setAttribute("y",Math.max(55,230-v*45));$("#solLiquid").setAttribute("height",310-Math.max(55,230-v*45));
  let dots="";for(let i=0;i<24;i++){const x=205+(i%8)*30,y=160+Math.floor(i/8)*45;dots+=`<circle cx="${x}" cy="${y}" r="5" fill="currentColor" opacity=".65"/>`;}$("#soluteDots").innerHTML=dots;
 }
 $("#v2Slider").oninput=u;u();
}
function attachThermo(){
 function draw(mode){
  const ex=mode==="exo", yR=ex?120:250,yP=ex?260:110;
  $("#thermoSvg").innerHTML=`<line x1="70" y1="315" x2="610" y2="315" stroke="currentColor" stroke-width="2"/><line x1="70" y1="315" x2="70" y2="45" stroke="currentColor" stroke-width="2"/>
  <text x="340" y="350" text-anchor="middle" class="svg-label">koordinat reaksi</text><text x="28" y="180" transform="rotate(-90 28 180)" text-anchor="middle" class="svg-label">entalpi</text>
  <path d="M90 ${yR} C220 ${yR},220 55,330 55 S470 ${yP},590 ${yP}" fill="none" stroke="currentColor" stroke-width="7"/>
  <line x1="95" y1="${yR}" x2="200" y2="${yR}" stroke="currentColor" stroke-width="3"/><line x1="485" y1="${yP}" x2="590" y2="${yP}" stroke="currentColor" stroke-width="3"/>
  <text x="145" y="${yR-14}" text-anchor="middle" class="svg-label">reaktan</text><text x="535" y="${yP-14}" text-anchor="middle" class="svg-label">produk</text>`;
  $("#thermoInfo").textContent=ex?"Eksoterm: energi produk lebih rendah daripada reaktan, sehingga ΔH negatif.":"Endoterm: energi produk lebih tinggi daripada reaktan, sehingga ΔH positif.";
  document.querySelectorAll("[data-thermo]").forEach(b=>b.classList.toggle("active",b.dataset.thermo===mode));
 }
 document.querySelectorAll("[data-thermo]").forEach(b=>b.onclick=()=>draw(b.dataset.thermo));draw("exo");
}
function attachRate(){
 function u(){
  const t=+$("#tempSlider").value,c=+$("#concSlider").value,cat=$("#catCheck").checked;
  const idx=Math.round((t*c)/100*(cat?1.45:1));
  $("#tempVal").textContent=t;$("#concVal").textContent=c;$("#rateIndex").textContent=idx;
  $("#rateBars").innerHTML=Array.from({length:12},(_,i)=>`<div class="rate-bar" style="height:${Math.min(100,12+idx*.55+(i%4)*8)}%"></div>`).join("");
 }
 ["tempSlider","concSlider","catCheck"].forEach(id=>$("#"+id).oninput=u);u();
}
function attachEquilibrium(){
 function dots(side,count){let out="";for(let i=0;i<count;i++){const x=(side==="l"?110:430)+(i%5)*34,y=120+Math.floor(i/5)*34;out+=`<circle cx="${x}" cy="${y}" r="8" fill="currentColor" opacity="${.35+(i%3)*.2}"/>`;}return out;}
 function u(){
  const v=$("#eqSelect").value;let l=15,r=15,msg="Sistem berada pada keadaan setimbang dinamis.";
  if(v==="addR"){l=11;r=19;msg="Menambah reaktan mendorong pergeseran relatif ke kanan untuk mengonsumsi sebagian reaktan tambahan."}
  if(v==="removeP"){l=11;r=19;msg="Mengurangi produk mendorong pembentukan produk lebih banyak, sehingga bergeser relatif ke kanan."}
  if(v==="addP"){l=19;r=11;msg="Menambah produk mendorong sistem relatif ke kiri untuk mengurangi gangguan."}
  $("#eqLeft").innerHTML=dots("l",l);$("#eqRight").innerHTML=dots("r",r);$("#eqInfo").textContent=msg;
 }
 $("#eqSelect").onchange=u;u();
}
function attachPH(){
 function sci(x){return x.toExponential(1).replace("e-","×10⁻").replace("e+","×10⁺");}
 function u(){
  const p=+$("#phSlider").value, h=Math.pow(10,-p),poh=14-p;
  $("#phValue").textContent=p.toFixed(1);$("#pohValue").textContent=poh.toFixed(1);$("#hConc").textContent=h.toExponential(1)+" M";$("#phMarker").style.left=(p/14*100)+"%";
  $("#phDesc").textContent=p<6.5?`pH ${p.toFixed(1)}: bersifat asam.`:p>7.5?`pH ${p.toFixed(1)}: bersifat basa.`:`pH ${p.toFixed(1)}: mendekati netral.`;
 }
 $("#phSlider").oninput=u;u();
}
function attachColloid(){
 function u(){
  const v=$("#mixSelect").value;let count=0,size=0,op=.05,msg="";
  if(v==="solution"){count=60;size=2;op=.015;msg="Larutan sejati: partikel sangat kecil, berkas cahaya tidak tampak jelas."}
  if(v==="colloid"){count=35;size=5;op=.18;msg="Koloid: partikel menghamburkan cahaya sehingga efek Tyndall terlihat."}
  if(v==="suspension"){count=18;size=10;op=.08;msg="Suspensi: partikel lebih besar dan cenderung dapat mengendap."}
  let d="";for(let i=0;i<count;i++){const x=120+(i*83)%450,y=105+(i*47)%145;d+=`<circle cx="${x}" cy="${y}" r="${size}" fill="currentColor" opacity=".55"/>`;}
  $("#colloidParticles").innerHTML=d;$("#lightBeam").style.opacity=op;$("#mixInfo").textContent=msg;
 }
 $("#mixSelect").onchange=u;u();
}
function attachColligative(){
 function u(){
  const m=+$("#molalSlider").value,i=+$("#iSelect").value,dt=i*1.86*m,x=110+(m/3)*480;
  $("#molalVal").textContent=m.toFixed(1);$("#freezeDot").setAttribute("cx",x);$("#freezeText").textContent=`ΔTf = ${dt.toFixed(2)} °C`;
 }
 $("#molalSlider").oninput=u;$("#iSelect").onchange=u;u();
}
function attachElectro(){
 $("#flowBtn").onclick=()=>{
  const box=$("#flowDots");box.innerHTML="";
  for(let i=0;i<6;i++){const d=document.createElement("span");d.textContent="e⁻";d.style.cssText=`position:absolute;left:${i*12}%;top:8px;font-weight:900;color:var(--brand);transition:1.4s ease ${i*.12}s`;box.appendChild(d);requestAnimationFrame(()=>d.style.left=(80+i*2)+"%");}
 };
}
function attachPeriodic(){
 const els=["Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Ga","Ge","As","Se","Br","Kr"];
 function draw(){
  const tr=$("#trendSelect").value;let info="";
  $("#periodicMini").innerHTML=els.map((e,i)=>{
    const row=Math.floor(i/8),col=i%8;
    let val=tr==="radius"?(3-row)*10+(8-col):tr==="en"?col*6-row*3:col*5-row*2;
    const op=Math.max(.16,Math.min(.9,.2+val/65));
    return `<div title="${e}" style="aspect-ratio:1;border:1px solid var(--line);border-radius:10px;display:grid;place-items:center;background:color-mix(in srgb,var(--brand) ${Math.round(op*70)}%,var(--panel));font-weight:900">${e}</div>`;
  }).join("");
  if(tr==="radius")info="Jari-jari atom umumnya membesar ke bawah dan ke kiri.";
  if(tr==="en")info="Keelektronegatifan umumnya meningkat ke atas dan ke kanan (mengabaikan gas mulia dalam pembahasan dasar).";
  if(tr==="ie")info="Energi ionisasi umumnya meningkat ke atas dan ke kanan.";
  $("#trendInfo").textContent=info;
 }
 $("#trendSelect").onchange=draw;draw();
}
function attachHydrocarbon(){
 const roots=["met","et","prop","but","pent","heks","hept","okt"];
 function u(){
  let n=+$("#cSlider").value,t=$("#hcType").value,h;
  if(t==="ane")h=2*n+2;if(t==="ene")h=2*n;if(t==="yne")h=2*n-2;
  if(n===1 && t!=="ane"){t="ane";$("#hcType").value="ane";h=4;}
  $("#cVal").textContent=n;$("#hcFormula").textContent=`C${sub(n)}H${sub(h)}`;
  const bond=t==="ane"?"−":t==="ene"?"=":"≡";
  $("#hcChain").textContent=Array.from({length:n},(_,i)=>i<n-1?"C "+(i===0?bond:"−"):"C").join(" ");
  $("#hcName").textContent=`Nama dasar: ${roots[n-1]}${t==="ane"?"ana":t==="ene"?"ena":"una"} • model ini hanya menunjukkan rantai karbon utama secara sederhana.`;
 }
 function sub(n){return String(n).replace(/\d/g,d=>"₀₁₂₃₄₅₆₇₈₉"[d]);}
 $("#cSlider").oninput=u;$("#hcType").onchange=u;u();
}
function attachPolymer(){
 function u(){const n=+$("#polySlider").value;$("#polyVal").textContent=n;$("#polyChain").innerHTML=Array.from({length:n},(_,i)=>`<div class="polymer-unit" style="animation-delay:${i*.06}s">−CH₂−</div>`).join("");}
 $("#polySlider").oninput=u;u();
}

function renderAll(){
 $$(".class-tab").forEach(b=>b.classList.toggle("active",b.dataset.class===state.className));
 renderNav($("#searchInput").value);
 renderMaterial();
 renderInteractive();
 renderQuiz();
 updateProgressUI();
 $("#prevBtn").disabled=state.className==="X"&&state.chapter===0;
 $("#nextBtn").textContent=(state.className==="XII"&&state.chapter===4)?"Kembali ke awal ↺":"Bab berikutnya →";
}

function updateProgressUI(){
 const total=15,done=Object.values(state.completed).filter(Boolean).length,p=Math.round(done/total*100);
 $("#progressLabel").textContent=p+"%";$("#progressPercent").textContent=p+"%";$("#progressRing").style.setProperty("--p",p+"%");
 $("#progressText").textContent=`${done} dari ${total} bab selesai`;
 $("#progressList").innerHTML=Object.entries(curriculum).flatMap(([c,chapters])=>chapters.map((ch,i)=>`<div class="progress-item ${state.completed[`${c}-${i}`]?"done":""}"><span>Kelas ${c} • Bab ${i+1}</span><strong>${state.completed[`${c}-${i}`]?"✓":"—"}</strong></div>`)).join("");
}
$$(".class-tab").forEach(btn=>btn.onclick=()=>{state.className=btn.dataset.class;state.chapter=0;saveState();renderAll();});
$("#searchInput").oninput=e=>renderNav(e.target.value);
$("#markCompleteBtn").onclick=()=>{state.completed[keyOf()]=!state.completed[keyOf()];saveState();renderMaterial();updateProgressUI();};
$("#jumpQuizBtn").onclick=()=>$("#quizSection").scrollIntoView({behavior:"smooth"});
$("#prevBtn").onclick=()=>{
 if(state.chapter>0)state.chapter--; else if(state.className==="XI"){state.className="X";state.chapter=4;} else if(state.className==="XII"){state.className="XI";state.chapter=4;}
 saveState();renderAll();scrollTo({top:0,behavior:"smooth"});
};
$("#nextBtn").onclick=()=>{
 if(state.chapter<4)state.chapter++;
 else if(state.className==="X"){state.className="XI";state.chapter=0;}
 else if(state.className==="XI"){state.className="XII";state.chapter=0;}
 else {state.className="X";state.chapter=0;}
 saveState();renderAll();scrollTo({top:0,behavior:"smooth"});
};
$("#themeBtn").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem(bkey("kimialab-theme"),document.body.classList.contains("dark")?"dark":"light");$("#themeBtn").textContent=document.body.classList.contains("dark")?"☀":"☾";};
if(localStorage.getItem(bkey("kimialab-theme"))==="dark"){document.body.classList.add("dark");$("#themeBtn").textContent="☀";}
$("#progressBtn").onclick=()=>{$("#progressModal").hidden=false;updateProgressUI();};
document.querySelectorAll("[data-close-modal]").forEach(x=>x.onclick=()=>$("#progressModal").hidden=true);
$("#resetProgressBtn").onclick=()=>{state.completed={};state.answers={};saveState();updateProgressUI();renderMaterial();renderQuiz();};
document.addEventListener("keydown",e=>{if(e.key==="Escape")$("#progressModal").hidden=true;});
renderAll();


if (BISAQuery.get('embed') === '1') document.body.classList.add('bisa-embedded');
if (BISALocked) document.querySelectorAll('.class-tab').forEach(btn => { btn.hidden = btn.dataset.class !== state.className; });
bridgeProgress();
