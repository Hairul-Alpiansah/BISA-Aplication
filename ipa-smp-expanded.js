/* =========================================================
   BISA • IPA SMP KELAS VII–IX — EXPANDED CURRICULUM PACK
   Dipasang SETELAH app.js.
   - Memperbarui curriculum.SMP.VII/VIII/IX.IPA
   - Memperkaya BISAContent dengan materi naratif lengkap untuk seluruh subbab IPA SMP
   - Menambah bank soal IPA tanpa mengubah login/progres/SMA
   ========================================================= */

(() => {
  "use strict";

  const IPA_SMP_CURRICULUM = {
    VII: [
      ["Hakikat Ilmu Sains dan Metode Ilmiah", [
        "Apa Itu Ilmu Pengetahuan Alam?", "Cabang-Cabang IPA", "Laboratorium IPA dan Keselamatan Kerja",
        "Alat-Alat Laboratorium", "Besaran dan Satuan", "Pengukuran", "Metode Ilmiah", "Variabel dalam Percobaan"
      ]],
      ["Zat dan Perubahannya", [
        "Apa Itu Zat?", "Wujud Zat", "Model Partikel", "Perubahan Wujud", "Perubahan Fisika",
        "Perubahan Kimia", "Massa Jenis atau Kerapatan"
      ]],
      ["Suhu, Kalor, dan Pemuaian", [
        "Suhu", "Kalor", "Perpindahan Kalor", "Pemuaian", "Penerapan Suhu dan Kalor"
      ]],
      ["Gerak dan Gaya", [
        "Apa Itu Gerak?", "Jarak dan Perpindahan", "Kelajuan", "Apa Itu Gaya?", "Gaya Gesek",
        "Hukum Newton Secara Sederhana", "Penerapan Gerak dan Gaya"
      ]],
      ["Karakteristik dan Klasifikasi Makhluk Hidup", [
        "Karakteristik Makhluk Hidup", "Mengapa Makhluk Hidup Diklasifikasikan?", "Tingkatan Klasifikasi",
        "Nama Ilmiah", "Kunci Klasifikasi", "Keanekaragaman Makhluk Hidup"
      ]],
      ["Ekologi dan Pelestarian Lingkungan", [
        "Apa Itu Ekologi?", "Komponen Biotik dan Abiotik", "Tingkatan Organisasi Ekologi", "Interaksi Antarorganisme",
        "Rantai Makanan", "Jaring-Jaring Makanan", "Aliran Energi", "Keanekaragaman Hayati",
        "Perubahan Lingkungan", "Pelestarian Lingkungan"
      ]],
      ["Bumi dan Tata Surya", [
        "Sistem Tata Surya", "Matahari sebagai Bintang", "Planet", "Bumi", "Rotasi Bumi", "Revolusi Bumi",
        "Bulan", "Fase Bulan", "Gerhana"
      ]]
    ],

    VIII: [
      ["Pengenalan Sel", [
        "Sel sebagai Unit Terkecil Makhluk Hidup", "Mikroskop", "Struktur Dasar Sel", "Sel Tumbuhan dan Sel Hewan",
        "Spesialisasi Sel", "Organisasi Kehidupan"
      ]],
      ["Struktur dan Fungsi Tubuh Makhluk Hidup", [
        "Makanan dan Nutrisi", "Sistem Pencernaan", "Sistem Peredaran Darah", "Sistem Pernapasan",
        "Sistem Ekskresi", "Hubungan Antar Sistem Organ dan Pola Hidup Sehat"
      ]],
      ["Usaha, Energi, dan Pesawat Sederhana", [
        "Usaha", "Energi", "Energi Kinetik", "Energi Potensial", "Perubahan Bentuk Energi", "Daya",
        "Pesawat Sederhana", "Tuas", "Katrol", "Bidang Miring", "Roda dan Poros"
      ]],
      ["Getaran, Gelombang, dan Cahaya", [
        "Getaran", "Periode dan Frekuensi", "Gelombang", "Gelombang Transversal dan Longitudinal", "Bunyi",
        "Cahaya", "Pemantulan Cahaya", "Pembiasan Cahaya", "Cermin dan Lensa", "Mata dan Alat Optik"
      ]],
      ["Unsur, Senyawa, dan Campuran", [
        "Materi dan Partikel Penyusunnya", "Atom", "Unsur", "Simbol Unsur", "Senyawa", "Campuran",
        "Campuran Homogen dan Heterogen", "Pemisahan Campuran"
      ]],
      ["Struktur Bumi dan Perkembangannya", [
        "Struktur Lapisan Bumi", "Kerak, Mantel, dan Inti Bumi", "Litosfer", "Lempeng Tektonik",
        "Pergerakan Lempeng", "Gempa Bumi", "Gunung Api", "Pembentukan Bentang Alam", "Mitigasi Bencana"
      ]]
    ],

    IX: [
      ["Sistem Koordinasi dan Homeostasis Tubuh Manusia", [
        "Sistem Koordinasi Manusia", "Sistem Saraf", "Struktur dan Fungsi Neuron", "Otak dan Sumsum Tulang Belakang",
        "Gerak Sadar dan Gerak Refleks", "Alat Indra Manusia", "Sistem Hormon", "Homeostasis",
        "Menjaga Kesehatan Sistem Koordinasi"
      ]],
      ["Zat Aditif dan Zat Adiktif", [
        "Pengertian Zat Aditif", "Pewarna", "Pemanis", "Pengawet", "Penyedap dan Bahan Tambahan Lain",
        "Membaca Informasi pada Kemasan Makanan", "Pengertian Zat Adiktif", "Dampak Zat Adiktif terhadap Tubuh",
        "Menjaga Diri dari Penyalahgunaan Zat"
      ]],
      ["Sistem Reproduksi Manusia", [
        "Tujuan Sistem Reproduksi", "Masa Pubertas", "Sistem Reproduksi Laki-Laki", "Sistem Reproduksi Perempuan",
        "Pembentukan Sel Reproduksi", "Siklus Menstruasi", "Fertilisasi dan Perkembangan Awal",
        "Kehamilan dan Kelahiran", "Menjaga Kesehatan Sistem Reproduksi"
      ]],
      ["Pewarisan Sifat dan Bioteknologi", [
        "Pewarisan Sifat", "Kromosom", "DNA", "Gen", "Alel dan Sifat", "Dominan dan Resesif",
        "Persilangan Sederhana", "Variasi Makhluk Hidup", "Mutasi secara Sederhana", "Pengertian Bioteknologi",
        "Bioteknologi Konvensional", "Bioteknologi Modern", "Manfaat dan Pertimbangan Bioteknologi"
      ]],
      ["Listrik, Magnet, dan Energi Alternatif", [
        "Muatan Listrik", "Listrik Statis", "Arus Listrik", "Tegangan dan Hambatan", "Hukum Ohm", "Rangkaian Seri",
        "Rangkaian Paralel", "Energi dan Daya Listrik", "Magnet", "Medan Magnet", "Elektromagnet",
        "Hubungan Listrik dan Magnet", "Generator dan Motor Listrik", "Sumber Energi", "Energi Terbarukan"
      ]],
      ["Isu-Isu Lingkungan", [
        "Lingkungan dan Kehidupan", "Perubahan Lingkungan", "Pencemaran Udara", "Pencemaran Air", "Pencemaran Tanah",
        "Efek Rumah Kaca", "Perubahan Iklim", "Dampak Aktivitas Manusia", "Keanekaragaman Hayati", "Konservasi",
        "Pengelolaan Sampah", "Gaya Hidup Berkelanjutan"
      ]]
    ]
  };

  // Terapkan kurikulum baru tanpa mengubah mata pelajaran lain.
  Object.entries(IPA_SMP_CURRICULUM).forEach(([grade, chapters]) => {
    if (curriculum?.SMP?.[grade]) curriculum.SMP[grade].IPA = chapters;
  });

  const COMMON = "IPA mempelajari alam melalui pengamatan, pengukuran, percobaan, pemodelan, dan penalaran berbasis bukti.";

  const profiles = [
    {rx:/apa itu ilmu pengetahuan alam|cabang-cabang ipa/i,title:"Hakikat IPA",visual:"method",points:[
      "IPA mempelajari gejala alam dengan cara yang sistematis dan dapat diuji.",
      "Biologi mempelajari kehidupan, fisika mempelajari materi-energi dan interaksinya, sedangkan kimia mempelajari zat dan perubahannya.",
      "Ilmu Bumi dan astronomi membantu menjelaskan planet, cuaca, batuan, serta benda langit.",
      "Sikap ilmiah mencakup rasa ingin tahu, teliti, terbuka terhadap bukti, dan bersedia memperbaiki kesimpulan."
    ],example:"Ketika tanaman dekat jendela tumbuh berbeda, kita tidak langsung menebak penyebabnya; kita membandingkan cahaya, air, tanah, dan faktor lain.",keywords:["IPA","biologi","fisika","kimia","bukti"]},

    {rx:/laboratorium|alat-alat laboratorium/i,title:"Laboratorium dan keselamatan",visual:"method",points:[
      "Laboratorium adalah tempat melakukan pengamatan dan percobaan menggunakan alat serta bahan yang sesuai.",
      "Keselamatan dimulai dari membaca prosedur, menggunakan alat sesuai fungsi, dan mengikuti arahan guru.",
      "Alat ukur dipilih berdasarkan besaran yang hendak diketahui, misalnya termometer untuk suhu dan neraca untuk massa.",
      "Hasil percobaan yang baik memerlukan kerja rapi, pencatatan data, serta pelaporan jika ada alat rusak atau keadaan tidak aman."
    ],example:"Sebelum praktikum, siswa memeriksa prosedur, menyiapkan alat, memakai perlindungan yang diminta guru, lalu membersihkan meja setelah selesai.",keywords:["laboratorium","keselamatan","alat ukur","prosedur"]},

    {rx:/besaran dan satuan|pengukuran/i,title:"Besaran, satuan, dan pengukuran",visual:"measure",formula:"Nilai pengukuran = angka × satuan",points:[
      "Besaran adalah sesuatu yang dapat diukur dan dinyatakan dengan angka serta satuan.",
      "Contoh satuan SI: meter untuk panjang, kilogram untuk massa, sekon untuk waktu, dan kelvin untuk suhu.",
      "Pengukuran berarti membandingkan besaran dengan satuan baku menggunakan alat ukur.",
      "Cara membaca skala dan posisi mata memengaruhi ketelitian hasil."
    ],example:"Panjang meja 1,20 m berarti besaran yang diukur adalah panjang, nilainya 1,20, dan satuannya meter.",keywords:["besaran","satuan SI","alat ukur","ketelitian"]},

    {rx:/metode ilmiah|variabel dalam percobaan/i,title:"Metode ilmiah",visual:"method",points:[
      "Penyelidikan dimulai dari pengamatan dan pertanyaan yang dapat diuji.",
      "Hipotesis adalah dugaan beralasan yang dapat diperiksa melalui data.",
      "Variabel bebas sengaja diubah, variabel terikat diukur, dan variabel kontrol dijaga tetap.",
      "Kesimpulan harus mengikuti hasil pengamatan, bukan keinginan peneliti."
    ],example:"Untuk menguji pengaruh jumlah cahaya pada pertumbuhan tanaman, cahaya diubah sementara jenis tanaman, media, dan jumlah air dibuat sama.",keywords:["pengamatan","hipotesis","variabel","data","kesimpulan"]},

    {rx:/apa itu zat|wujud zat|model partikel|materi dan partikel penyusunnya/i,title:"Materi dan model partikel",visual:"matter",points:[
      "Materi memiliki massa dan menempati ruang.",
      "Pada zat padat, partikel tersusun rapat; pada cairan partikel masih berdekatan tetapi dapat bergeser; pada gas jaraknya lebih renggang dan bergerak bebas.",
      "Model partikel membantu menjelaskan sifat makroskopik yang tidak dapat dilihat langsung.",
      "Perubahan suhu dapat mengubah gerak dan susunan rata-rata partikel."
    ],example:"Udara tidak terlihat, tetapi menempati ruang dan dapat memberi tekanan sehingga tetap termasuk materi.",keywords:["materi","partikel","padat","cair","gas"]},

    {rx:/perubahan wujud/i,title:"Perubahan wujud zat",visual:"matter",points:[
      "Mencair adalah perubahan padat menjadi cair, sedangkan membeku adalah cair menjadi padat.",
      "Menguap adalah cair menjadi gas dan mengembun adalah gas menjadi cair.",
      "Menyublim adalah perubahan padat langsung menjadi gas pada kondisi tertentu.",
      "Perubahan wujud merupakan perubahan fisika karena identitas kimia zat tidak harus berubah."
    ],example:"Es yang mencair tetap tersusun dari air; yang berubah terutama adalah wujud dan susunan partikelnya.",keywords:["mencair","membeku","menguap","mengembun","menyublim"]},

    {rx:/perubahan fisika|perubahan kimia/i,title:"Perubahan fisika dan kimia",visual:"matter",points:[
      "Perubahan fisika tidak menghasilkan zat baru, misalnya es mencair atau kertas dipotong.",
      "Perubahan kimia menghasilkan zat dengan sifat yang berbeda dari zat awal.",
      "Tanda perubahan kimia dapat berupa terbentuknya gas, endapan, perubahan warna, atau perubahan energi, tetapi harus dinilai bersama konteksnya.",
      "Besi berkarat merupakan contoh perubahan kimia karena terbentuk senyawa baru."
    ],example:"Gula larut dalam air adalah perubahan fisika, sedangkan pembakaran bahan melibatkan reaksi kimia.",keywords:["fisika","kimia","zat baru","reaksi"]},

    {rx:/massa jenis|kerapatan/i,title:"Massa jenis atau kerapatan",visual:"density",formula:"ρ = m / V",points:[
      "Massa jenis menunjukkan massa pada setiap satuan volume.",
      "Simbol yang sering digunakan adalah ρ, dengan m untuk massa dan V untuk volume.",
      "Benda berukuran sama dapat memiliki massa berbeda karena kerapatan bahannya berbeda.",
      "Massa jenis membantu menjelaskan kecenderungan benda terapung atau tenggelam bersama faktor lain seperti bentuk dan gaya apung."
    ],example:"Benda bermassa 100 g dan volume 50 cm³ mempunyai massa jenis 2 g/cm³.",keywords:["massa","volume","massa jenis","ρ"]},

    {rx:/^suhu$|kalor|perpindahan kalor|pemuaian|penerapan suhu dan kalor/i,title:"Suhu, kalor, dan pemuaian",visual:"heat",formula:"Kalor berpindah secara spontan dari suhu lebih tinggi ke suhu lebih rendah.",points:[
      "Suhu menyatakan keadaan termal benda, sedangkan kalor adalah energi yang berpindah karena perbedaan suhu.",
      "Konduksi berlangsung tanpa perpindahan materi secara keseluruhan, konveksi bersama aliran fluida, dan radiasi melalui gelombang elektromagnetik.",
      "Banyak bahan memuai ketika suhunya meningkat karena jarak rata-rata antarpartikel bertambah.",
      "Pemahaman kalor digunakan pada termos, bahan bangunan, alat masak, dan sistem pendingin."
    ],example:"Gagang sendok logam ikut hangat ketika ujungnya berada dalam air panas karena konduksi.",keywords:["suhu","kalor","konduksi","konveksi","radiasi","pemuaian"]},

    {rx:/apa itu gerak|jarak dan perpindahan|kelajuan|penerapan gerak dan gaya/i,title:"Gerak",visual:"motion",formula:"Kelajuan = jarak / waktu",points:[
      "Benda dikatakan bergerak jika posisinya berubah terhadap titik acuan.",
      "Jarak adalah panjang lintasan, sedangkan perpindahan memperhatikan posisi awal, posisi akhir, dan arah.",
      "Kelajuan menyatakan seberapa cepat jarak ditempuh.",
      "Pemilihan titik acuan penting karena gerak bersifat relatif terhadap acuan tertentu."
    ],example:"Berjalan 10 m ke timur lalu kembali 10 m menghasilkan jarak 20 m tetapi perpindahan 0 m.",keywords:["gerak","acuan","jarak","perpindahan","kelajuan"]},

    {rx:/apa itu gaya|gaya gesek|hukum newton|penerapan gerak dan gaya/i,title:"Gaya dan Hukum Newton",visual:"force",formula:"ΣF = m × a",points:[
      "Gaya adalah dorongan atau tarikan yang dapat mengubah gerak atau bentuk benda.",
      "Gaya gesek dapat menghambat gerak, tetapi juga membantu kita berjalan dan kendaraan mencengkeram jalan.",
      "Hukum I membahas kecenderungan mempertahankan keadaan gerak, Hukum II menghubungkan gaya, massa, dan percepatan, Hukum III membahas pasangan gaya interaksi.",
      "Resultan gaya menentukan perubahan gerak benda."
    ],example:"Kereta belanja kosong lebih mudah dipercepat daripada kereta penuh ketika didorong dengan gaya yang sama.",keywords:["gaya","gesek","Newton","resultan","percepatan"]},

    {rx:/karakteristik makhluk hidup|keanekaragaman makhluk hidup/i,title:"Karakteristik makhluk hidup",visual:"classification",points:[
      "Makhluk hidup menggunakan energi, tumbuh dan berkembang, merespons rangsangan, melakukan metabolisme, dan bereproduksi.",
      "Makhluk hidup juga mempertahankan kondisi internal dan berinteraksi dengan lingkungan.",
      "Tidak semua ciri mudah diamati dalam waktu singkat, sehingga identifikasi memerlukan beberapa bukti.",
      "Keanekaragaman menunjukkan bahwa organisme memiliki banyak bentuk, fungsi, dan cara hidup."
    ],example:"Tumbuhan tidak berpindah tempat seperti hewan, tetapi tetap merespons cahaya dan tumbuh menuju sumber cahaya.",keywords:["makhluk hidup","energi","pertumbuhan","rangsangan","reproduksi"]},

    {rx:/diklasifikasikan|tingkatan klasifikasi|nama ilmiah|kunci klasifikasi/i,title:"Klasifikasi makhluk hidup",visual:"classification",points:[
      "Klasifikasi membantu mengelompokkan organisme berdasarkan persamaan, perbedaan, dan kekerabatan.",
      "Urutan takson yang umum dipelajari adalah kingdom, filum/divisio, kelas, ordo, famili, genus, dan spesies.",
      "Nama ilmiah menggunakan tata nama binomial agar komunikasi antarilmuwan lebih seragam.",
      "Kunci klasifikasi menggunakan pilihan ciri secara bertahap untuk membantu identifikasi."
    ],example:"Homo sapiens adalah nama ilmiah manusia: Homo menunjukkan genus dan sapiens penunjuk spesies.",keywords:["klasifikasi","takson","genus","spesies","kunci"]},

    {rx:/apa itu ekologi|biotik dan abiotik|organisasi ekologi|interaksi antarorganisme/i,title:"Ekologi",visual:"ecosystem",points:[
      "Ekologi mempelajari hubungan makhluk hidup dengan organisme lain dan lingkungan fisiknya.",
      "Komponen biotik adalah makhluk hidup; komponen abiotik meliputi air, tanah, cahaya, suhu, dan udara.",
      "Tingkat organisasi ekologi dapat dilihat sebagai individu, populasi, komunitas, dan ekosistem.",
      "Interaksi dapat berupa kompetisi, predasi, mutualisme, dan berbagai hubungan lain."
    ],example:"Di sawah, padi, belalang, katak, tanah, air, dan cahaya membentuk satu sistem yang saling memengaruhi.",keywords:["ekologi","biotik","abiotik","populasi","komunitas"]},

    {rx:/rantai makanan|jaring-jaring makanan|aliran energi/i,title:"Aliran energi dalam ekosistem",visual:"ecosystem",points:[
      "Produsen memasukkan energi ke ekosistem melalui fotosintesis.",
      "Rantai makanan menunjukkan satu jalur perpindahan energi melalui hubungan makan-dimakan.",
      "Jaring-jaring makanan menggabungkan banyak rantai yang saling berhubungan.",
      "Energi yang tersedia cenderung berkurang pada tingkat trofik yang lebih tinggi karena sebagian digunakan dan dilepas sebagai panas."
    ],example:"Rumput → belalang → katak → ular merupakan satu rantai; di alam organisme biasanya terhubung pada banyak rantai sekaligus.",keywords:["produsen","konsumen","rantai makanan","jaring makanan","energi"]},

    {rx:/keanekaragaman hayati|perubahan lingkungan|pelestarian lingkungan|konservasi/i,title:"Keanekaragaman dan pelestarian",visual:"environment",points:[
      "Keanekaragaman hayati mencakup variasi gen, spesies, dan ekosistem.",
      "Perubahan habitat, pencemaran, pemanfaatan berlebihan, dan perubahan iklim dapat memberi tekanan pada keanekaragaman.",
      "Pelestarian berupaya menjaga spesies, habitat, serta fungsi ekosistem.",
      "Tindakan manusia dapat mengurangi maupun memperbesar tekanan terhadap lingkungan."
    ],example:"Menjaga hutan berarti bukan hanya menjaga pohon, tetapi juga habitat, air, tanah, dan jaringan kehidupan di dalamnya.",keywords:["keanekaragaman","habitat","pelestarian","konservasi"]},

    {rx:/sistem tata surya|matahari sebagai bintang|planet|^bumi$|rotasi bumi|revolusi bumi|^bulan$|fase bulan|gerhana/i,title:"Bumi dan Tata Surya",visual:"space",points:[
      "Tata surya terdiri atas Matahari dan benda-benda yang terikat gravitasi dengannya.",
      "Delapan planet utama adalah Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, dan Neptunus.",
      "Rotasi Bumi berkaitan dengan siang-malam; revolusi dan kemiringan sumbu berhubungan dengan pola musim.",
      "Fase Bulan terjadi karena perubahan bagian Bulan yang tersinari Matahari dan terlihat dari Bumi; gerhana terjadi ketika posisi Matahari, Bumi, dan Bulan membentuk konfigurasi tertentu."
    ],example:"Bulan tampak berubah bentuk bukan karena bentuknya benar-benar berubah, tetapi karena bagian yang diterangi dan terlihat dari Bumi berubah.",keywords:["Matahari","planet","rotasi","revolusi","Bulan","gerhana"]},

    {rx:/sel sebagai unit|struktur dasar sel|sel tumbuhan dan sel hewan|spesialisasi sel|organisasi kehidupan/i,title:"Sel sebagai unit kehidupan",visual:"cell",points:[
      "Sel adalah unit struktural dan fungsional dasar makhluk hidup.",
      "Membran sel mengatur pertukaran zat, sitoplasma menjadi tempat banyak reaksi, dan inti menyimpan sebagian besar materi genetik pada sel eukariotik.",
      "Sel tumbuhan memiliki dinding sel dan pada sel fotosintetik terdapat kloroplas; vakuolanya biasanya besar.",
      "Spesialisasi membuat bentuk sel sesuai dengan tugasnya; sel membentuk jaringan, organ, sistem organ, lalu organisme."
    ],example:"Sel saraf memanjang untuk membantu membawa informasi, sedangkan sel rambut akar memiliki bentuk yang memperluas daerah penyerapan.",keywords:["sel","membran","nukleus","organel","spesialisasi"]},

    {rx:/mikroskop/i,title:"Mikroskop",visual:"cell",formula:"Perbesaran total = perbesaran okuler × perbesaran objektif",points:[
      "Mikroskop membantu mengamati objek yang terlalu kecil untuk dilihat jelas dengan mata biasa.",
      "Lensa okuler berada dekat mata, sedangkan lensa objektif berada dekat preparat.",
      "Pengatur fokus digunakan untuk memperoleh bayangan yang jelas dan meja preparat menyangga objek.",
      "Penggunaan mikroskop memerlukan urutan kerja yang hati-hati agar preparat dan lensa tidak rusak."
    ],example:"Okuler 10× dan objektif 40× menghasilkan perbesaran total sekitar 400×.",keywords:["mikroskop","okuler","objektif","perbesaran","preparat"]},

    {rx:/makanan dan nutrisi/i,title:"Makanan dan nutrisi",visual:"digestion",points:[
      "Makanan menyediakan energi, bahan pertumbuhan, bahan perbaikan jaringan, dan zat pengatur.",
      "Karbohidrat, protein, lemak, vitamin, mineral, dan air memiliki fungsi berbeda dan saling melengkapi.",
      "Kebutuhan gizi dipengaruhi usia, aktivitas, dan kondisi tubuh.",
      "Pola makan yang baik berfokus pada keseimbangan dan keberagaman, bukan satu zat gizi saja."
    ],example:"Nasi dapat menjadi sumber karbohidrat, sedangkan ikan, telur, tahu, atau tempe dapat membantu memenuhi kebutuhan protein.",keywords:["nutrisi","karbohidrat","protein","lemak","vitamin","mineral"]},

    {rx:/sistem pencernaan/i,title:"Sistem pencernaan",visual:"digestion",points:[
      "Pencernaan mengubah makanan menjadi bentuk yang dapat diserap dan digunakan tubuh.",
      "Jalur utamanya: mulut, kerongkongan, lambung, usus halus, usus besar, rektum, dan anus.",
      "Pencernaan mekanik memperkecil makanan, sedangkan pencernaan kimia menggunakan enzim dan zat lain.",
      "Sebagian besar penyerapan zat gizi berlangsung di usus halus."
    ],example:"Mengunyah memperkecil makanan di mulut sehingga luas permukaan yang dapat bekerja dengan enzim menjadi lebih besar.",keywords:["pencernaan","enzim","lambung","usus halus","penyerapan"]},

    {rx:/sistem peredaran darah/i,title:"Sistem peredaran darah",visual:"circulation",points:[
      "Jantung memompa darah melalui pembuluh ke seluruh tubuh.",
      "Arteri membawa darah menjauhi jantung, vena menuju jantung, dan kapiler menjadi tempat pertukaran zat.",
      "Sel darah merah membantu membawa oksigen, sel darah putih berperan dalam pertahanan, dan trombosit membantu pembekuan.",
      "Sirkulasi menghubungkan sistem pernapasan, pencernaan, ekskresi, dan jaringan tubuh."
    ],example:"Saat berlari, otot membutuhkan lebih banyak oksigen sehingga kerja jantung dan aliran darah meningkat.",keywords:["jantung","darah","arteri","vena","kapiler"]},

    {rx:/sistem pernapasan/i,title:"Sistem pernapasan",visual:"respiration",points:[
      "Sistem pernapasan memasukkan oksigen dan membantu mengeluarkan karbon dioksida.",
      "Udara melewati hidung, faring, laring, trakea, bronkus, bronkiolus, lalu alveolus.",
      "Pertukaran gas terutama berlangsung di alveolus yang berdinding tipis dan kaya kapiler.",
      "Gerakan diafragma dan otot antartulang rusuk membantu mengubah volume rongga dada."
    ],example:"Setelah aktivitas fisik, frekuensi napas biasanya meningkat karena kebutuhan oksigen dan pembuangan karbon dioksida bertambah.",keywords:["paru-paru","alveolus","oksigen","karbon dioksida","diafragma"]},

    {rx:/sistem ekskresi/i,title:"Sistem ekskresi",visual:"kidney",points:[
      "Ekskresi mengeluarkan zat sisa metabolisme dan membantu menjaga keseimbangan internal tubuh.",
      "Ginjal menyaring dan mengolah darah untuk membentuk urine.",
      "Paru-paru mengeluarkan karbon dioksida dan uap air, kulit menghasilkan keringat, dan hati membantu pengolahan berbagai zat.",
      "Ginjal juga berperan penting dalam pengaturan air dan ion."
    ],example:"Saat tubuh kekurangan air, mekanisme tubuh dapat membuat urine menjadi lebih pekat untuk membantu mempertahankan cairan.",keywords:["ekskresi","ginjal","urine","kulit","paru-paru"]},

    {rx:/hubungan antar sistem organ/i,title:"Hubungan antar sistem organ",visual:"cell",points:[
      "Sistem organ tidak bekerja sendiri-sendiri, melainkan saling bergantung.",
      "Pencernaan menyediakan zat gizi, pernapasan menyediakan oksigen, dan peredaran darah mendistribusikan keduanya.",
      "Sel menggunakan bahan tersebut untuk memperoleh energi, kemudian sistem ekskresi membantu membuang sisa metabolisme.",
      "Pola hidup sehat mendukung kerja sistem tubuh secara keseluruhan."
    ],example:"Saat berlari, sistem pernapasan, peredaran darah, otot, saraf, dan ekskresi bekerja bersama dalam satu respons tubuh.",keywords:["sistem organ","koordinasi","oksigen","nutrisi","kesehatan"]},

    {rx:/^usaha$/i,title:"Usaha dalam fisika",visual:"energy",formula:"W = F × s (untuk gaya searah perpindahan)",points:[
      "Dalam fisika, usaha terjadi ketika gaya menyebabkan perpindahan.",
      "Besarnya usaha bergantung pada gaya dan perpindahan serta arah keduanya.",
      "Satuan SI usaha adalah joule (J).",
      "Jika benda tidak berpindah, usaha mekanik oleh gaya tersebut dapat bernilai nol meskipun kita merasa lelah."
    ],example:"Gaya 20 N mendorong kotak 5 m searah gaya menghasilkan usaha 100 J.",keywords:["usaha","gaya","perpindahan","joule"]},

    {rx:/^energi$|energi kinetik|energi potensial|perubahan bentuk energi/i,title:"Energi",visual:"energy",formula:"Ek = ½mv²   •   Ep = mgh",points:[
      "Energi adalah kemampuan untuk menyebabkan perubahan atau melakukan usaha.",
      "Energi kinetik berkaitan dengan gerak; energi potensial gravitasi berkaitan dengan posisi terhadap acuan ketinggian.",
      "Energi dapat berubah bentuk, misalnya listrik menjadi cahaya, gerak, bunyi, atau panas.",
      "Pada sistem ideal, energi tidak hilang tetapi berubah bentuk atau berpindah."
    ],example:"Ketika bola jatuh, energi potensial gravitasi berkurang sementara energi kinetiknya bertambah.",keywords:["energi","kinetik","potensial","transformasi","kekekalan"]},

    {rx:/^daya$|energi dan daya listrik/i,title:"Daya",visual:"energy",formula:"P = W / t   atau pada listrik P = V × I",points:[
      "Daya menunjukkan seberapa cepat usaha dilakukan atau energi dipindahkan.",
      "Satuan daya adalah watt (W).",
      "Dua alat dapat melakukan kerja yang sama tetapi mempunyai daya berbeda jika waktunya berbeda.",
      "Pada listrik, daya terkait dengan tegangan dan arus."
    ],example:"Alat berdaya lebih besar menggunakan atau memindahkan energi lebih cepat pada kondisi yang sama.",keywords:["daya","usaha","energi","watt"]},

    {rx:/pesawat sederhana|tuas|katrol|bidang miring|roda dan poros/i,title:"Pesawat sederhana",visual:"force",points:[
      "Pesawat sederhana membantu mengubah besar atau arah gaya agar pekerjaan lebih sesuai kebutuhan.",
      "Tuas menggunakan titik tumpu dan lengan gaya; katrol menggunakan roda dan tali; bidang miring menukar gaya yang lebih kecil dengan jarak yang lebih panjang.",
      "Roda dan poros membantu mempermudah rotasi dan perpindahan.",
      "Pesawat sederhana tidak menciptakan energi secara gratis; pada kondisi ideal keuntungan gaya dibayar dengan perubahan jarak."
    ],example:"Papan miring membantu menaikkan barang ke tempat lebih tinggi dengan gaya lebih kecil daripada mengangkat tegak lurus, tetapi jaraknya lebih panjang.",keywords:["tuas","katrol","bidang miring","roda","keuntungan mekanis"]},

    {rx:/getaran|periode dan frekuensi/i,title:"Getaran, periode, dan frekuensi",visual:"wave",formula:"T = t / n   •   f = n / t   •   f = 1 / T",points:[
      "Getaran adalah gerak bolak-balik melalui titik keseimbangan.",
      "Periode adalah waktu untuk satu getaran, sedangkan frekuensi adalah jumlah getaran per sekon.",
      "Frekuensi diukur dalam hertz (Hz).",
      "Periode dan frekuensi berbanding terbalik."
    ],example:"Jika bandul melakukan 10 getaran dalam 20 s, periodenya 2 s dan frekuensinya 0,5 Hz.",keywords:["getaran","periode","frekuensi","hertz"]},

    {rx:/^gelombang$|transversal dan longitudinal/i,title:"Gelombang",visual:"wave",formula:"v = λ × f",points:[
      "Gelombang adalah perambatan gangguan yang membawa energi.",
      "Pada gelombang transversal arah getar tegak lurus arah rambat; pada longitudinal arah getar sejajar arah rambat.",
      "Panjang gelombang adalah jarak antara dua titik sefase yang berurutan.",
      "Cepat rambat berkaitan dengan panjang gelombang dan frekuensi."
    ],example:"Gelombang pada tali dapat menunjukkan bentuk transversal, sedangkan bunyi di udara berupa gelombang longitudinal.",keywords:["gelombang","transversal","longitudinal","panjang gelombang","frekuensi"]},

    {rx:/^bunyi$/i,title:"Bunyi",visual:"wave",points:[
      "Bunyi berasal dari getaran dan membutuhkan medium untuk merambat.",
      "Di udara, bunyi merambat melalui rapatan dan renggangan partikel.",
      "Frekuensi berhubungan dengan tinggi-rendah nada, sedangkan amplitudo berhubungan dengan kuat-lemah bunyi dalam banyak konteks sederhana.",
      "Bunyi tidak dapat merambat melalui ruang hampa."
    ],example:"Senar gitar yang dipetik bergetar dan menggetarkan udara sehingga gelombang bunyi mencapai telinga.",keywords:["bunyi","getaran","medium","frekuensi","amplitudo"]},

    {rx:/^cahaya$|pemantulan cahaya|pembiasan cahaya|cermin dan lensa|mata dan alat optik/i,title:"Cahaya dan alat optik",visual:"optics",points:[
      "Cahaya adalah gelombang elektromagnetik dan dapat merambat tanpa medium material.",
      "Pemantulan mengikuti hubungan sudut datang sama dengan sudut pantul pada permukaan ideal.",
      "Pembiasan terjadi ketika arah rambat cahaya berubah saat memasuki medium berbeda karena kecepatannya berubah.",
      "Cermin, lensa, mata, lup, dan mikroskop memanfaatkan pemantulan atau pembiasan untuk membentuk bayangan."
    ],example:"Pensil di dalam air tampak bengkok karena cahaya dari pensil dibiaskan ketika berpindah dari air ke udara.",keywords:["cahaya","pemantulan","pembiasan","cermin","lensa","mata"]},

    {rx:/^atom$|^unsur$|simbol unsur|^senyawa$|^campuran$|homogen dan heterogen/i,title:"Atom, unsur, senyawa, dan campuran",visual:"atom",points:[
      "Atom merupakan satuan dasar penyusun materi dalam pembahasan kimia dasar.",
      "Unsur tersusun dari atom dengan nomor atom yang sama dan ditulis menggunakan simbol, misalnya O, C, Fe, dan Au.",
      "Senyawa terbentuk dari dua atau lebih unsur yang berikatan secara kimia dalam perbandingan tertentu.",
      "Campuran mengandung dua atau lebih zat yang bergabung secara fisik; campuran dapat homogen atau heterogen."
    ],example:"Air murni H₂O adalah senyawa, sedangkan air garam merupakan campuran homogen jika garam larut merata.",keywords:["atom","unsur","simbol","senyawa","campuran"]},

    {rx:/pemisahan campuran/i,title:"Pemisahan campuran",visual:"matter",points:[
      "Campuran dapat dipisahkan dengan memanfaatkan perbedaan sifat fisika komponen.",
      "Filtrasi memisahkan berdasarkan ukuran partikel, penguapan memanfaatkan volatilitas, dan distilasi memanfaatkan perbedaan titik didih.",
      "Kromatografi memisahkan berdasarkan perbedaan interaksi komponen dengan fase diam dan fase bergerak.",
      "Metode dipilih sesuai sifat campuran dan tujuan pemisahan."
    ],example:"Campuran pasir dan air dapat dipisahkan dengan filtrasi karena pasir tertahan oleh penyaring sementara air melewatinya.",keywords:["filtrasi","penguapan","distilasi","kromatografi"]},

    {rx:/struktur lapisan bumi|kerak, mantel, dan inti bumi|litosfer|lempeng tektonik|pergerakan lempeng/i,title:"Struktur Bumi dan tektonik lempeng",visual:"earth",points:[
      "Secara sederhana Bumi memiliki kerak, mantel, dan inti.",
      "Litosfer adalah lapisan kaku bagian luar yang terbagi menjadi lempeng tektonik.",
      "Lempeng bergerak sangat lambat di atas bagian mantel yang dapat berubah bentuk dalam skala waktu geologi.",
      "Batas lempeng dapat konvergen, divergen, atau transform dan berkaitan dengan banyak proses geologi."
    ],example:"Pegunungan, palung laut, dan banyak zona gempa berkaitan dengan interaksi lempeng dalam waktu yang sangat panjang.",keywords:["kerak","mantel","inti","litosfer","lempeng"]},

    {rx:/gempa bumi|gunung api|pembentukan bentang alam|mitigasi bencana/i,title:"Dinamika Bumi dan mitigasi",visual:"earth",points:[
      "Gempa adalah getaran akibat pelepasan energi secara tiba-tiba, sering berkaitan dengan pergeseran pada patahan.",
      "Gunung api berkaitan dengan pergerakan magma menuju permukaan.",
      "Bentang alam juga dibentuk oleh pelapukan, erosi, transportasi sedimen, dan sedimentasi.",
      "Mitigasi bertujuan mengurangi risiko melalui pengetahuan bahaya, jalur evakuasi, titik kumpul, dan informasi resmi."
    ],example:"Latihan evakuasi di sekolah membantu siswa mengenali jalur aman dan titik kumpul sebelum keadaan darurat terjadi.",keywords:["gempa","gunung api","erosi","mitigasi","evakuasi"]},

    {rx:/sistem koordinasi manusia|sistem saraf|neuron|otak dan sumsum|gerak sadar dan gerak refleks|alat indra manusia|sistem hormon|homeostasis|kesehatan sistem koordinasi/i,title:"Sistem koordinasi dan homeostasis",visual:"nervous",points:[
      "Sistem koordinasi melibatkan sistem saraf, alat indra, dan sistem hormon.",
      "Neuron menerima dan menghantarkan sinyal; otak dan sumsum tulang belakang menjadi pusat pemrosesan utama.",
      "Refleks memungkinkan respons cepat terhadap rangsangan tertentu, sedangkan gerak sadar melibatkan pengolahan yang lebih disengaja.",
      "Hormon dibawa darah dan membantu mengatur pertumbuhan, metabolisme, reproduksi, serta homeostasis atau kestabilan kondisi internal."
    ],example:"Ketika suhu tubuh meningkat saat berolahraga, tubuh mengaktifkan respons yang membantu melepaskan panas agar kondisi internal tetap sesuai.",keywords:["saraf","neuron","refleks","indra","hormon","homeostasis"]},

    {rx:/zat aditif|pewarna|pemanis|pengawet|penyedap|kemasan makanan/i,title:"Zat aditif dan literasi pangan",visual:"matter",points:[
      "Zat aditif ditambahkan ke makanan untuk fungsi tertentu seperti memberi warna, rasa, tekstur, atau membantu mempertahankan kualitas.",
      "Keamanan tidak ditentukan hanya oleh istilah 'alami' atau 'buatan', tetapi oleh jenis bahan, dosis, dan ketentuan penggunaan.",
      "Label pangan membantu konsumen mengetahui daftar bahan, informasi gizi, tanggal kedaluwarsa, dan petunjuk penyimpanan.",
      "Kebiasaan membaca label mendukung keputusan konsumsi yang lebih terinformasi."
    ],example:"Dua minuman dengan tampilan serupa dapat mempunyai kandungan gula dan bahan tambahan berbeda; daftar bahan dan informasi gizi membantu membandingkannya.",keywords:["zat aditif","pewarna","pemanis","pengawet","label"]},

    {rx:/zat adiktif|penyalahgunaan zat/i,title:"Zat adiktif dan kesehatan",visual:"nervous",points:[
      "Zat adiktif dapat memengaruhi sistem saraf dan berpotensi menimbulkan ketergantungan.",
      "Dampaknya dapat mengenai kesehatan, kemampuan membuat keputusan, belajar, dan kehidupan sosial.",
      "Materi ini dipelajari untuk memahami risiko dan membuat keputusan yang aman, bukan untuk mencoba zat tersebut.",
      "Jika menghadapi tekanan terkait zat berbahaya, pilihan aman adalah menjauh dan mencari bantuan orang dewasa tepercaya."
    ],example:"Kemampuan menolak ajakan yang berisiko merupakan bagian penting dari menjaga kesehatan diri.",keywords:["zat adiktif","ketergantungan","sistem saraf","pencegahan"]},

    {rx:/tujuan sistem reproduksi|masa pubertas|sistem reproduksi laki-laki|sistem reproduksi perempuan|pembentukan sel reproduksi|siklus menstruasi|fertilisasi dan perkembangan awal|kehamilan dan kelahiran|kesehatan sistem reproduksi/i,title:"Sistem reproduksi manusia",visual:"growth",points:[
      "Sistem reproduksi berperan dalam pembentukan sel reproduksi dan keberlanjutan generasi manusia.",
      "Pubertas adalah tahap perkembangan biologis yang dipengaruhi hormon; waktu dan kecepatannya dapat berbeda antarindividu.",
      "Sperma dan sel telur membawa informasi genetik; fertilisasi menghasilkan zigot yang kemudian mengalami pembelahan dan perkembangan.",
      "Kesehatan reproduksi dijaga melalui kebersihan, pola hidup sehat, informasi tepercaya, dan konsultasi pada orang tua/wali atau tenaga kesehatan bila ada keluhan."
    ],example:"Siklus menstruasi merupakan rangkaian perubahan berkala pada sistem reproduksi perempuan dan panjangnya dapat berbeda antarindividu.",keywords:["pubertas","sperma","sel telur","fertilisasi","menstruasi","kesehatan"]},

    {rx:/pewarisan sifat|kromosom|^dna$|^gen$|alel dan sifat|dominan dan resesif|persilangan sederhana|variasi makhluk hidup|mutasi secara sederhana/i,title:"Pewarisan sifat",visual:"dna",formula:"Contoh persilangan: Bb × Bb → BB, Bb, Bb, bb",points:[
      "Informasi genetik diwariskan dari orang tua melalui DNA yang tersusun dalam kromosom.",
      "Gen adalah bagian DNA dengan informasi biologis tertentu; bentuk alternatif gen disebut alel.",
      "Dalam model sederhana, alel dapat diperkenalkan sebagai dominan dan resesif, tetapi banyak sifat nyata jauh lebih kompleks.",
      "Variasi dipengaruhi gen, lingkungan, dan interaksi keduanya; mutasi adalah perubahan pada materi genetik."
    ],example:"Kotak Punnett membantu memperkirakan kemungkinan kombinasi alel, tetapi hasilnya adalah peluang, bukan jaminan urutan keturunan nyata.",keywords:["DNA","kromosom","gen","alel","genotipe","fenotipe"]},

    {rx:/bioteknologi/i,title:"Bioteknologi",visual:"dna",points:[
      "Bioteknologi memanfaatkan organisme, sel, atau proses biologis untuk menghasilkan produk atau memecahkan kebutuhan.",
      "Bioteknologi konvensional banyak menggunakan fermentasi, misalnya pada tempe, yoghurt, dan roti.",
      "Bioteknologi modern menggunakan teknik lebih maju untuk mempelajari atau memanfaatkan sel dan materi genetik.",
      "Penerapan teknologi perlu menimbang manfaat, keamanan, lingkungan, etika, dan peraturan."
    ],example:"Pembuatan tempe memanfaatkan aktivitas mikroorganisme untuk mengubah bahan pangan sehingga memiliki sifat yang berbeda.",keywords:["bioteknologi","fermentasi","mikroorganisme","genetik","etika"]},

    {rx:/muatan listrik|listrik statis/i,title:"Muatan dan listrik statis",visual:"circuit",points:[
      "Proton bermuatan positif, elektron negatif, dan neutron tidak bermuatan.",
      "Perpindahan elektron dapat membuat benda memiliki kelebihan atau kekurangan muatan.",
      "Muatan sejenis cenderung tolak-menolak dan muatan berbeda jenis tarik-menarik.",
      "Listrik statis berkaitan dengan penumpukan muatan pada permukaan atau bagian benda."
    ],example:"Penggaris plastik yang digosok dengan bahan tertentu dapat menarik potongan kertas kecil karena interaksi muatan.",keywords:["muatan","proton","elektron","statis","tarik","tolak"]},

    {rx:/arus listrik|tegangan dan hambatan|hukum ohm/i,title:"Arus, tegangan, dan hambatan",visual:"circuit",formula:"V = I × R",points:[
      "Arus menyatakan laju aliran muatan dan diukur dalam ampere.",
      "Tegangan adalah beda potensial antara dua titik dan diukur dalam volt.",
      "Hambatan menyatakan seberapa besar komponen menghambat arus dan diukur dalam ohm.",
      "Untuk komponen ohmik pada kondisi tertentu, Hukum Ohm menghubungkan V, I, dan R."
    ],example:"Jika V = 12 V dan R = 4 Ω, arusnya I = 12/4 = 3 A.",keywords:["arus","tegangan","hambatan","Ohm","ampere","volt"]},

    {rx:/rangkaian seri|rangkaian paralel/i,title:"Rangkaian listrik",visual:"circuit",formula:"Seri: Rₜ = R₁ + R₂ + ...",points:[
      "Rangkaian seri memiliki satu jalur utama sehingga arus yang sama melewati komponen pada jalur itu.",
      "Pada rangkaian paralel terdapat beberapa cabang dan tegangan pada cabang ideal yang sejajar sama dengan sumber.",
      "Jika satu komponen seri memutus jalur, rangkaian utama berhenti; cabang paralel dapat bekerja lebih mandiri.",
      "Instalasi rumah menggunakan prinsip percabangan agar peralatan dapat digunakan secara terpisah."
    ],example:"Lampu rumah tidak semuanya padam ketika satu lampu dimatikan karena instalasi menggunakan cabang paralel.",keywords:["seri","paralel","rangkaian","hambatan"]},

    {rx:/magnet|medan magnet|elektromagnet|hubungan listrik dan magnet|generator dan motor listrik/i,title:"Magnet dan elektromagnetisme",visual:"circuit",points:[
      "Magnet mempunyai kutub utara dan selatan serta menghasilkan medan magnet.",
      "Kutub sejenis tolak-menolak dan kutub berbeda tarik-menarik.",
      "Arus listrik dapat menghasilkan medan magnet; prinsip ini digunakan pada elektromagnet.",
      "Generator mengubah energi mekanik menjadi listrik, sedangkan motor listrik mengubah energi listrik menjadi gerak."
    ],example:"Kipas angin menggunakan motor listrik, sedangkan pembangkit menggunakan generator untuk menghasilkan listrik dari gerak turbin.",keywords:["magnet","medan","elektromagnet","generator","motor"]},

    {rx:/sumber energi|energi terbarukan/i,title:"Sumber energi dan energi terbarukan",visual:"energy",points:[
      "Sumber energi menyediakan energi untuk penerangan, transportasi, komunikasi, industri, dan rumah tangga.",
      "Sumber terbarukan dapat diperbarui oleh proses alam pada skala waktu yang sesuai, misalnya surya, angin, air, dan panas bumi.",
      "Setiap sumber memiliki keunggulan, keterbatasan, kebutuhan teknologi, dan dampak lingkungan.",
      "Sistem energi yang baik mempertimbangkan keandalan, biaya, keselamatan, dan keberlanjutan."
    ],example:"Panel surya mengubah energi cahaya menjadi listrik, sedangkan turbin angin menggunakan energi gerak udara untuk memutar generator.",keywords:["energi","surya","angin","air","panas bumi","terbarukan"]},

    {rx:/lingkungan dan kehidupan|perubahan lingkungan|pencemaran udara|pencemaran air|pencemaran tanah|efek rumah kaca|perubahan iklim|dampak aktivitas manusia|pengelolaan sampah|gaya hidup berkelanjutan/i,title:"Isu lingkungan dan keberlanjutan",visual:"environment",points:[
      "Lingkungan terdiri atas komponen biotik dan abiotik yang saling berinteraksi.",
      "Pencemaran terjadi ketika bahan atau energi menurunkan kualitas lingkungan hingga mengganggu organisme atau fungsi ekosistem.",
      "Efek rumah kaca alami membantu menjaga Bumi hangat, tetapi peningkatan gas rumah kaca memperkuat pemanasan global dan memengaruhi iklim.",
      "Pengurangan sampah, penggunaan sumber daya secara bijak, konservasi, dan perubahan kebiasaan dapat membantu menurunkan tekanan lingkungan."
    ],example:"Menggunakan barang sesuai kebutuhan dan menggunakan kembali barang yang masih layak mencegah timbulan sampah sebelum tahap daur ulang.",keywords:["pencemaran","gas rumah kaca","iklim","sampah","keberlanjutan"]}
  ];

  const specific = {
    "Suhu": {formula:"Suhu sering dinyatakan dalam °C; satuan SI-nya kelvin (K).", extra:"Suhu dan kalor berbeda: suhu menggambarkan keadaan termal, sedangkan kalor adalah energi yang berpindah."},
    "Kelajuan": {formula:"v = s / t", extra:"Kelajuan menggunakan jarak, sedangkan kecepatan dalam fisika juga memuat arah."},
    "Energi Kinetik": {formula:"Eₖ = ½mv²", extra:"Karena kecepatan dikuadratkan, perubahan kecepatan sangat memengaruhi energi kinetik."},
    "Energi Potensial": {formula:"Eₚ = mgh", extra:"Nilai energi potensial gravitasi bergantung pada acuan ketinggian yang dipilih."},
    "Tuas": {formula:"F kuasa × l kuasa = F beban × l beban (kondisi seimbang ideal)", extra:"Letak titik tumpu menentukan perbandingan lengan kuasa dan lengan beban."},
    "Periode dan Frekuensi": {formula:"T = t/n, f = n/t, dan f = 1/T", extra:"Frekuensi menyatakan jumlah getaran per sekon; periode menyatakan waktu satu getaran."},
    "Gelombang": {formula:"v = λf", extra:"Gelombang membawa energi tanpa harus memindahkan materi secara keseluruhan dari sumber ke tujuan."},
    "Hukum Ohm": {formula:"V = I × R", extra:"Hubungan ini berlaku baik pada komponen yang bersifat ohmik dalam kondisi yang sesuai."},
    "Energi dan Daya Listrik": {formula:"P = VI dan E = Pt", extra:"Energi listrik yang digunakan bergantung pada daya alat dan lama pemakaian."}
  };

  const FULL_CHAPTER_ARTICLES = {
  "Hakikat Ilmu Sains dan Metode Ilmiah": [
    "Ilmu Pengetahuan Alam (IPA) adalah cara sistematis untuk memahami gejala alam. Siswa tidak hanya menghafal fakta, tetapi belajar mengamati, bertanya, mengukur, membuat dugaan yang dapat diuji, mengumpulkan data, lalu menyusun kesimpulan berdasarkan bukti. Karena itu, ketelitian, rasa ingin tahu, keterbukaan terhadap data, dan keselamatan kerja merupakan bagian dari belajar IPA.",
    "Pada bab ini siswa juga mengenal cabang IPA, laboratorium, alat ukur, besaran dan satuan, serta metode ilmiah. Semua keterampilan tersebut akan dipakai kembali pada bab-bab berikutnya. Ketika mengukur suhu, mengamati pertumbuhan tanaman, atau menghitung kelajuan benda, siswa sebenarnya sedang menggunakan dasar kerja ilmiah yang sama."
  ],
  "Zat dan Perubahannya": [
    "Semua benda di sekitar kita tersusun atas materi. Materi memiliki massa dan menempati ruang. Untuk menjelaskan sifat materi yang tidak dapat dilihat langsung, IPA menggunakan model partikel: zat padat memiliki partikel yang sangat berdekatan, zat cair partikelnya masih berdekatan tetapi dapat bergeser, sedangkan gas memiliki partikel yang jauh lebih renggang dan bergerak lebih bebas.",
    "Materi dapat mengalami perubahan wujud, perubahan fisika, dan perubahan kimia. Siswa juga mempelajari massa jenis sebagai hubungan antara massa dan volume. Dengan memahami model partikel, siswa dapat menjelaskan mengapa es mencair, air menguap, gas memenuhi ruang, dan benda yang ukurannya sama dapat memiliki massa yang berbeda."
  ],
  "Suhu, Kalor, dan Pemuaian": [
    "Suhu dan kalor sering dianggap sama, padahal keduanya berbeda. Suhu berkaitan dengan keadaan termal suatu benda, sedangkan kalor adalah energi yang berpindah karena adanya perbedaan suhu. Jika dua benda bersuhu berbeda bersentuhan, energi termal cenderung berpindah dari benda yang bersuhu lebih tinggi ke benda yang bersuhu lebih rendah.",
    "Kalor dapat berpindah melalui konduksi, konveksi, dan radiasi. Perubahan suhu juga dapat menyebabkan pemuaian atau penyusutan bahan. Konsep ini dapat ditemukan pada alat masak, termos, ventilasi rumah, rel, jembatan, termometer, dan berbagai teknologi yang berhubungan dengan panas."
  ],
  "Gerak dan Gaya": [
    "Gerak selalu dibahas terhadap suatu titik acuan. Benda dikatakan bergerak jika posisinya berubah terhadap acuan yang dipilih. Untuk menggambarkan gerak, siswa mempelajari jarak, perpindahan, waktu, dan kelajuan. Jarak menunjukkan panjang lintasan, sedangkan perpindahan memperhatikan perubahan posisi awal ke posisi akhir beserta arahnya.",
    "Gaya adalah tarikan atau dorongan yang dapat memengaruhi gerak atau bentuk benda. Resultan gaya berkaitan dengan perubahan kecepatan benda. Gaya gesek, gravitasi, dan prinsip-prinsip Newton membantu menjelaskan peristiwa sehari-hari seperti berjalan, mengerem sepeda, mendorong meja, atau tubuh terdorong ke depan saat kendaraan berhenti mendadak."
  ],
  "Karakteristik dan Klasifikasi Makhluk Hidup": [
    "Makhluk hidup menunjukkan ciri-ciri kehidupan seperti memerlukan energi, tumbuh dan berkembang, merespons rangsangan, melakukan metabolisme, bereproduksi, serta berinteraksi dengan lingkungan. Karena jumlah dan keragaman organisme sangat besar, ilmuwan mengelompokkannya agar lebih mudah dipelajari dan dibandingkan.",
    "Klasifikasi menggunakan persamaan dan perbedaan ciri serta hubungan kekerabatan. Siswa mengenal tingkatan klasifikasi, nama ilmiah, dan kunci klasifikasi. Tujuannya bukan sekadar menghafal urutan takson, melainkan memahami bagaimana ciri organisme digunakan untuk mengenali dan mengelompokkannya secara sistematis."
  ],
  "Ekologi dan Pelestarian Lingkungan": [
    "Ekologi mempelajari hubungan antara makhluk hidup dengan makhluk hidup lain serta dengan lingkungan fisiknya. Dalam satu ekosistem terdapat komponen biotik seperti tumbuhan, hewan, jamur, dan mikroorganisme, serta komponen abiotik seperti air, tanah, cahaya, udara, dan suhu.",
    "Organisme saling berinteraksi dan energi mengalir melalui hubungan makan-dimakan. Rantai makanan hanyalah satu jalur, sedangkan jaring-jaring makanan menggambarkan hubungan yang lebih kompleks. Perubahan pada satu komponen dapat memengaruhi komponen lain, sehingga pelestarian habitat dan keanekaragaman hayati penting bagi kestabilan ekosistem."
  ],
  "Bumi dan Tata Surya": [
    "Tata surya terdiri atas Matahari dan berbagai benda langit yang terikat oleh gravitasi, termasuk planet, satelit, planet katai, asteroid, komet, dan meteoroid. Matahari adalah bintang di pusat tata surya dan merupakan sumber energi utama bagi banyak proses di Bumi.",
    "Bumi berotasi pada porosnya dan berevolusi mengelilingi Matahari. Bulan mengelilingi Bumi dan memperlihatkan fase yang berbeda karena perubahan posisi relatif Matahari, Bumi, dan Bulan. Gerhana terjadi ketika ketiga benda langit tersebut berada pada susunan tertentu sehingga cahaya Matahari terhalang sebagian atau seluruhnya."
  ],
  "Pengenalan Sel": [
    "Sel merupakan unit struktural dan fungsional terkecil penyusun makhluk hidup. Organisme dapat terdiri atas satu sel atau banyak sel. Pada organisme multiseluler, sel-sel dapat memiliki bentuk dan fungsi berbeda karena mengalami spesialisasi.",
    "Mikroskop membantu manusia mengamati struktur yang terlalu kecil untuk dilihat jelas dengan mata. Siswa mempelajari membran sel, sitoplasma, inti, mitokondria, ribosom, serta struktur khas sel tumbuhan seperti dinding sel, kloroplas, dan vakuola besar. Sel kemudian tersusun menjadi jaringan, organ, sistem organ, dan organisme."
  ],
  "Struktur dan Fungsi Tubuh Makhluk Hidup": [
    "Tubuh adalah sistem yang terdiri atas banyak organ yang saling bekerja sama. Makanan menyediakan zat gizi dan energi, sistem pencernaan memecah serta menyerap zat makanan, sistem pernapasan membantu pertukaran oksigen dan karbon dioksida, sedangkan sistem peredaran darah mengangkut berbagai zat ke seluruh tubuh.",
    "Sistem ekskresi membantu mengeluarkan sisa metabolisme dan menjaga keseimbangan internal. Karena setiap sistem saling bergantung, kesehatan tubuh tidak dapat dipahami dengan melihat satu organ saja. Ketika berolahraga, misalnya, otot, paru-paru, jantung, darah, pencernaan, dan sistem ekskresi semuanya berperan."
  ],
  "Usaha, Energi, dan Pesawat Sederhana": [
    "Dalam fisika, usaha terjadi ketika gaya menyebabkan perpindahan. Energi adalah kemampuan untuk menyebabkan perubahan atau melakukan usaha, dan dapat muncul dalam berbagai bentuk seperti energi kinetik, potensial, termal, listrik, dan kimia. Energi dapat berpindah atau berubah bentuk, tetapi tidak muncul dari ketiadaan.",
    "Pesawat sederhana seperti tuas, katrol, bidang miring, roda dan poros membantu manusia melakukan pekerjaan dengan mengubah besar atau arah gaya dan jarak tempuh. Alat tersebut tidak menciptakan energi secara gratis; keuntungan gaya biasanya disertai perubahan jarak atau cara gaya diberikan."
  ],
  "Getaran, Gelombang, dan Cahaya": [
    "Getaran adalah gerak bolak-balik melalui titik keseimbangan. Ketika getaran atau gangguan merambat, terbentuk gelombang yang membawa energi dari satu tempat ke tempat lain. Siswa mempelajari periode, frekuensi, panjang gelombang, cepat rambat, serta perbedaan gelombang transversal dan longitudinal.",
    "Bunyi merupakan gelombang mekanik yang memerlukan medium, sedangkan cahaya adalah gelombang elektromagnetik yang dapat merambat melalui ruang hampa. Pemantulan dan pembiasan cahaya menjelaskan cara kerja cermin, lensa, mata, dan berbagai alat optik."
  ],
  "Unsur, Senyawa, dan Campuran": [
    "Materi tersusun atas partikel. Atom merupakan satuan dasar unsur dalam pembahasan kimia dasar. Unsur tersusun dari satu jenis atom berdasarkan nomor atomnya, sedangkan senyawa terbentuk ketika dua atau lebih unsur berikatan secara kimia dalam perbandingan tertentu.",
    "Campuran berbeda dari senyawa karena komponen campuran bergabung secara fisik dan komposisinya dapat bervariasi. Campuran dapat homogen atau heterogen dan dapat dipisahkan berdasarkan perbedaan sifat fisika melalui filtrasi, penguapan, distilasi, kromatografi, dan teknik lain yang sesuai."
  ],
  "Struktur Bumi dan Perkembangannya": [
    "Bumi memiliki struktur berlapis yang secara sederhana dapat dibagi menjadi kerak, mantel, inti luar, dan inti dalam. Lapisan luar yang kaku membentuk litosfer dan terbagi menjadi lempeng-lempeng tektonik yang bergerak perlahan di atas lapisan yang lebih plastis.",
    "Interaksi lempeng dapat menghasilkan pembentukan pegunungan, aktivitas gunung api, dan gempa bumi. Permukaan Bumi juga dibentuk oleh pelapukan, erosi, pengangkutan, dan sedimentasi. Karena Indonesia berada di wilayah geologi aktif, pemahaman mitigasi bencana merupakan bagian penting dari materi ini."
  ],
  "Sistem Koordinasi dan Homeostasis Tubuh Manusia": [
    "Tubuh menerima informasi dari lingkungan dan dari dalam tubuh, mengolahnya, lalu menghasilkan respons. Sistem saraf, alat indra, dan sistem hormon bekerja bersama dalam proses koordinasi. Sistem saraf umumnya mengirimkan sinyal dengan cepat melalui neuron, sedangkan hormon dibawa oleh darah menuju jaringan sasaran.",
    "Homeostasis adalah kemampuan tubuh menjaga kondisi internal dalam kisaran yang sesuai, misalnya suhu, kadar air, dan kadar glukosa. Homeostasis bukan berarti nilainya selalu tetap persis, melainkan tubuh memiliki mekanisme pengaturan yang terus menyesuaikan kondisi ketika terjadi perubahan."
  ],
  "Zat Aditif dan Zat Adiktif": [
    "Zat aditif adalah bahan yang ditambahkan ke makanan atau minuman untuk tujuan tertentu, misalnya memberi warna, rasa, aroma, tekstur, atau membantu mempertahankan mutu. Keamanan suatu bahan tidak cukup ditentukan dari kata 'alami' atau 'buatan'; yang penting adalah jenis bahan, jumlah, cara penggunaan, dan aturan keamanannya.",
    "Zat adiktif berbeda dari zat aditif. Zat adiktif dapat memengaruhi sistem saraf dan menimbulkan ketergantungan. Pembelajaran materi ini bertujuan membantu siswa memahami risiko, membaca informasi secara kritis, dan membuat keputusan yang aman, bukan mencoba atau mencari cara menggunakan zat berbahaya."
  ],
  "Sistem Reproduksi Manusia": [
    "Sistem reproduksi memungkinkan manusia menghasilkan generasi berikutnya. Pada masa pubertas, perubahan hormon menyebabkan tubuh mengalami pertumbuhan dan pematangan biologis. Waktu dan kecepatan pubertas dapat berbeda antarindividu, sehingga perkembangan tubuh tidak perlu dibanding-bandingkan dengan teman sebaya.",
    "Siswa mempelajari fungsi organ reproduksi, pembentukan sel sperma dan sel telur, siklus menstruasi, fertilisasi, perkembangan embrio, kehamilan, dan kelahiran secara ilmiah. Fokus utama pembelajaran adalah memahami fungsi tubuh dan menjaga kesehatan reproduksi dengan informasi yang benar dan sesuai usia."
  ],
  "Pewarisan Sifat dan Bioteknologi": [
    "Informasi genetik tersimpan dalam DNA. Bagian DNA yang memiliki informasi biologis tertentu disebut gen, dan DNA tersusun dalam kromosom. Alel adalah bentuk alternatif suatu gen. Kombinasi alel dapat berhubungan dengan sifat yang tampak, tetapi banyak sifat nyata dipengaruhi oleh banyak gen serta lingkungan.",
    "Bioteknologi memanfaatkan organisme, sel, atau proses biologis untuk menghasilkan produk dan menyelesaikan kebutuhan manusia. Fermentasi pada tempe, roti, dan yoghurt merupakan contoh konvensional, sedangkan bioteknologi modern dapat melibatkan teknik sel dan materi genetik yang lebih maju. Manfaatnya perlu dipertimbangkan bersama keamanan, etika, dan dampak lingkungan."
  ],
  "Listrik, Magnet, dan Energi Alternatif": [
    "Listrik berkaitan dengan muatan dan aliran muatan. Dalam rangkaian, arus, tegangan, dan hambatan saling berhubungan. Rangkaian seri dan paralel memiliki karakteristik berbeda, sedangkan daya dan energi listrik membantu menjelaskan seberapa cepat dan seberapa banyak energi digunakan oleh peralatan.",
    "Arus listrik dapat menghasilkan medan magnet, dan perubahan medan magnet dapat dimanfaatkan untuk menghasilkan listrik. Hubungan ini menjadi dasar motor, generator, dan banyak teknologi modern. Siswa juga mempelajari sumber energi, terutama energi terbarukan seperti surya, angin, air, dan panas bumi."
  ],
  "Isu-Isu Lingkungan": [
    "Lingkungan merupakan sistem yang saling terhubung. Pencemaran udara, air, dan tanah dapat memengaruhi organisme dan fungsi ekosistem. Aktivitas manusia juga dapat meningkatkan konsentrasi gas rumah kaca sehingga memperkuat efek rumah kaca dan memengaruhi sistem iklim global.",
    "Pemecahan masalah lingkungan membutuhkan pemahaman data dan tindakan pada berbagai tingkat, dari individu hingga kebijakan. Mengurangi penggunaan sumber daya, menggunakan kembali barang, mengelola sampah, menjaga habitat, dan melindungi keanekaragaman hayati merupakan bagian dari gaya hidup serta pengelolaan yang lebih berkelanjutan."
  ]
};

  const FULL_LESSON_NOTES = {
  "Apa Itu Ilmu Pengetahuan Alam?": "IPA mempelajari gejala alam dengan cara yang dapat diperiksa kembali. Ketika siswa melihat tanaman tumbuh berbeda, langkah ilmiah bukan langsung menentukan penyebab, tetapi mengajukan pertanyaan, mengumpulkan data, dan membandingkan faktor yang mungkin berpengaruh. Karena itu IPA adalah kumpulan pengetahuan sekaligus proses untuk memperoleh pengetahuan tersebut.",
  "Cabang-Cabang IPA": "Biologi berfokus pada makhluk hidup, fisika membahas gerak, gaya, energi, cahaya, bunyi, listrik dan interaksi materi, sedangkan kimia mempelajari susunan, sifat, serta perubahan zat. Ilmu Bumi mempelajari planet kita dan proses geologinya, sementara astronomi mempelajari benda serta sistem di luar Bumi. Pembagian ini membantu belajar, walaupun pada kenyataannya banyak masalah membutuhkan lebih dari satu cabang ilmu.",
  "Laboratorium IPA dan Keselamatan Kerja": "Laboratorium adalah tempat melakukan pengamatan dan eksperimen dengan alat serta bahan tertentu. Keselamatan harus didahulukan: baca prosedur, dengarkan arahan guru, gunakan alat sesuai fungsi, jaga meja tetap rapi, dan segera laporkan keadaan yang tidak aman. Praktikum yang baik bukan yang paling rumit, tetapi yang aman, terkontrol, dan menghasilkan data yang dapat dipertanggungjawabkan.",
  "Alat-Alat Laboratorium": "Setiap alat memiliki fungsi. Gelas ukur digunakan untuk mengukur volume cairan, neraca untuk massa, termometer untuk suhu, stopwatch untuk waktu, mistar untuk panjang, mikroskop untuk objek sangat kecil, dan pipet untuk memindahkan cairan dalam jumlah kecil. Pemilihan alat yang tepat menentukan kualitas data yang diperoleh.",
  "Besaran dan Satuan": "Besaran adalah sesuatu yang dapat diukur. Hasil pengukuran harus memiliki nilai dan satuan, misalnya panjang meja 1,2 meter. Satuan baku memungkinkan hasil pengukuran dibandingkan oleh orang yang berbeda. Dalam SI, beberapa satuan pokok yang sering digunakan di SMP adalah meter, kilogram, sekon, dan kelvin.",
  "Pengukuran": "Mengukur berarti membandingkan suatu besaran dengan satuan baku menggunakan alat. Ketelitian hasil bergantung pada skala alat, cara membaca, posisi mata, dan prosedur. Pengukuran berulang dapat membantu mengenali variasi data dan mengurangi pengaruh kesalahan acak.",
  "Metode Ilmiah": "Metode ilmiah biasanya dimulai dari pengamatan dan pertanyaan. Selanjutnya dibuat hipotesis yang dapat diuji, dirancang percobaan, dikumpulkan data, dianalisis hasil, lalu dibuat kesimpulan. Jika data tidak mendukung hipotesis, hipotesis dapat diperbaiki; inilah salah satu kekuatan ilmu pengetahuan.",
  "Variabel dalam Percobaan": "Variabel bebas adalah faktor yang sengaja diubah, variabel terikat adalah faktor yang diamati atau diukur, dan variabel kontrol adalah faktor yang dijaga tetap. Contohnya pada pengaruh jumlah cahaya terhadap pertumbuhan tanaman: jumlah cahaya menjadi variabel bebas, pertumbuhan menjadi variabel terikat, sedangkan jenis tanaman, tanah, pot, dan air dapat dijaga tetap.",
  "Apa Itu Zat?": "Zat atau materi adalah sesuatu yang mempunyai massa dan menempati ruang. Air, udara, batu, meja, dan tubuh manusia semuanya termasuk materi. Walaupun udara tidak tampak, udara menempati ruang dan dapat memberikan tekanan, sehingga tetap termasuk materi.",
  "Wujud Zat": "Tiga wujud yang sering dipelajari adalah padat, cair, dan gas. Padat memiliki bentuk serta volume relatif tetap. Cair memiliki volume tetap tetapi bentuk mengikuti wadah. Gas dapat mengembang memenuhi ruang yang tersedia. Perbedaan sifat ini dapat dijelaskan menggunakan model partikel.",
  "Model Partikel": "Pada zat padat, partikel sangat berdekatan dan hanya bergetar di sekitar posisi tertentu. Pada cairan, partikel masih dekat tetapi dapat saling bergeser. Pada gas, partikel lebih berjauhan dan bergerak lebih bebas. Model ini membantu menjelaskan pemuaian, perubahan wujud, dan sifat zat meskipun partikel tidak dapat dilihat langsung dengan mata.",
  "Perubahan Wujud": "Mencair adalah perubahan padat menjadi cair, membeku kebalikannya, menguap adalah cair menjadi gas, dan mengembun adalah gas menjadi cair. Pada kondisi tertentu zat padat dapat berubah langsung menjadi gas melalui sublimasi. Perubahan wujud terutama mengubah susunan dan gerak partikel, bukan identitas kimia zat.",
  "Perubahan Fisika": "Perubahan fisika tidak menghasilkan zat baru. Es mencair tetap berupa air, kertas dipotong tetap tersusun dari bahan yang sama, dan gula yang larut masih dapat dipisahkan kembali melalui proses fisika tertentu. Bentuk, ukuran, atau wujud dapat berubah tanpa membentuk zat baru.",
  "Perubahan Kimia": "Perubahan kimia menghasilkan zat dengan sifat baru. Besi berkarat, bahan terbakar, atau proses memasak tertentu melibatkan reaksi kimia. Tanda seperti perubahan warna, terbentuk gas, endapan, bau, atau perubahan energi dapat menjadi petunjuk, tetapi kesimpulan harus mempertimbangkan keseluruhan bukti.",
  "Massa Jenis atau Kerapatan": "Massa jenis menyatakan massa pada setiap satuan volume dan ditulis ρ = m/V. Benda dengan volume sama dapat memiliki massa berbeda karena bahannya memiliki massa jenis berbeda. Contoh: benda bermassa 100 g dan volume 50 cm³ memiliki massa jenis 2 g/cm³.",
  "Suhu": "Suhu menunjukkan keadaan termal suatu benda dan dapat diukur dengan termometer. Suhu tidak sama dengan banyaknya kalor. Dua benda dapat memiliki suhu sama tetapi jumlah energi internal berbeda karena jumlah materi dan jenis bahannya tidak sama.",
  "Kalor": "Kalor adalah energi yang berpindah akibat perbedaan suhu. Jika sendok logam dimasukkan ke teh panas, energi berpindah dari teh ke sendok sehingga suhu sendok meningkat. Perpindahan berlanjut menuju keadaan yang lebih seimbang secara termal.",
  "Perpindahan Kalor": "Konduksi adalah perpindahan kalor melalui bahan tanpa perpindahan bahan secara keseluruhan. Konveksi terjadi bersama gerakan fluida seperti air atau udara. Radiasi berlangsung melalui gelombang elektromagnetik dan tidak memerlukan medium material, sehingga energi Matahari dapat mencapai Bumi.",
  "Pemuaian": "Banyak bahan mengalami pertambahan ukuran ketika suhu naik karena jarak rata-rata antarpartikelnya meningkat. Ketika suhu turun, bahan dapat menyusut. Karena itu sambungan jembatan, rel, kabel, dan berbagai alat harus memperhitungkan perubahan ukuran akibat suhu.",
  "Penerapan Suhu dan Kalor": "Pemahaman suhu dan kalor digunakan pada termos, lemari pendingin, ventilasi, alat masak, pakaian, dan konstruksi. Bahan konduktor dipilih saat kita ingin energi termal cepat berpindah, sedangkan isolator digunakan untuk memperlambat perpindahan panas.",
  "Apa Itu Gerak?": "Gerak ditentukan terhadap titik acuan. Penumpang yang duduk di bus diam terhadap kursinya, tetapi bergerak terhadap pohon di pinggir jalan. Karena itu sebuah benda dapat dianggap bergerak terhadap satu acuan dan diam terhadap acuan lain.",
  "Jarak dan Perpindahan": "Jarak adalah seluruh panjang lintasan yang ditempuh, sedangkan perpindahan adalah perubahan posisi dari awal ke akhir dan memiliki arah. Jika seseorang berjalan 10 m ke timur lalu kembali 10 m, jaraknya 20 m tetapi perpindahannya nol.",
  "Kelajuan": "Kelajuan dihitung dari jarak dibagi waktu, v = s/t. Jika sepeda menempuh 100 m dalam 20 s, kelajuannya 5 m/s. Kelajuan rata-rata tidak selalu menunjukkan bahwa benda bergerak dengan kelajuan yang sama pada setiap saat.",
  "Apa Itu Gaya?": "Gaya adalah tarikan atau dorongan. Gaya dapat menyebabkan benda mulai bergerak, berhenti, berubah arah, berubah cepat, atau berubah bentuk. Yang menentukan perubahan gerak adalah resultan seluruh gaya yang bekerja, bukan hanya satu gaya saja.",
  "Gaya Gesek": "Gaya gesek muncul ketika permukaan berinteraksi dan menentang gerak relatif. Gesekan dapat merugikan karena menghasilkan panas dan keausan, tetapi juga sangat berguna: tanpa gesekan kita sulit berjalan, ban sulit mencengkeram jalan, dan rem tidak dapat bekerja dengan baik.",
  "Hukum Newton Secara Sederhana": "Hukum I menjelaskan kecenderungan benda mempertahankan keadaan geraknya jika resultan gaya nol. Hukum II menghubungkan resultan gaya, massa, dan percepatan melalui ΣF = ma. Hukum III menyatakan bahwa dua benda yang berinteraksi memberikan gaya yang sama besar dan berlawanan arah pada satu sama lain.",
  "Penerapan Gerak dan Gaya": "Konsep gerak dan gaya digunakan untuk menjelaskan sabuk pengaman, pengereman, olahraga, kendaraan, dan banyak mesin. Analisis yang baik selalu memperhatikan titik acuan, arah gaya, massa benda, serta apakah gaya-gaya yang bekerja saling menyeimbangkan.",
  "Karakteristik Makhluk Hidup": "Makhluk hidup membutuhkan energi, tumbuh dan berkembang, merespons rangsangan, melakukan metabolisme, mempertahankan kondisi internal, bereproduksi, dan berinteraksi dengan lingkungan. Tidak semua ciri tampak pada waktu yang sama, sehingga identifikasi kehidupan menggunakan beberapa bukti sekaligus.",
  "Mengapa Makhluk Hidup Diklasifikasikan?": "Klasifikasi membuat keanekaragaman organisme lebih mudah dipelajari. Seperti perpustakaan yang mengelompokkan buku, biologi mengelompokkan organisme berdasarkan ciri dan kekerabatan sehingga ilmuwan dapat berkomunikasi lebih jelas dan membandingkan kelompok secara sistematis.",
  "Tingkatan Klasifikasi": "Urutan yang umum dipelajari adalah kingdom, filum atau divisio, kelas, ordo, famili, genus, dan spesies. Semakin menuju spesies, kelompok biasanya semakin khusus dan anggotanya memiliki lebih banyak kesamaan ciri.",
  "Nama Ilmiah": "Nama ilmiah menggunakan tata nama binomial: nama genus diikuti penunjuk spesies. Contohnya Homo sapiens. Sistem ini membantu menghindari kebingungan akibat perbedaan nama lokal dan membuat komunikasi ilmiah lebih seragam di berbagai negara.",
  "Kunci Klasifikasi": "Kunci klasifikasi memberi serangkaian pilihan ciri, biasanya dua pilihan pada setiap langkah. Pengguna memilih ciri yang sesuai lalu mengikuti petunjuk berikutnya sampai memperoleh identifikasi. Ketelitian mengamati ciri sangat menentukan hasil.",
  "Keanekaragaman Makhluk Hidup": "Keanekaragaman terlihat dari perbedaan bentuk, ukuran, cara hidup, habitat, dan fungsi organisme. Variasi tersebut merupakan hasil proses biologis yang panjang dan membuat kehidupan mampu menempati lingkungan yang sangat beragam.",
  "Apa Itu Ekologi?": "Ekologi mempelajari hubungan organisme dengan organisme lain dan dengan lingkungan fisiknya. Pertanyaan ekologi dapat membahas makanan, kompetisi, habitat, perubahan populasi, aliran energi, hingga dampak perubahan lingkungan.",
  "Komponen Biotik dan Abiotik": "Biotik berarti komponen hidup seperti tumbuhan, hewan, jamur, dan mikroorganisme. Abiotik adalah komponen fisik seperti air, tanah, udara, cahaya, suhu, dan mineral. Keduanya saling memengaruhi dalam ekosistem.",
  "Tingkatan Organisasi Ekologi": "Individu adalah satu organisme, populasi adalah kumpulan organisme sejenis di tempat tertentu, komunitas adalah berbagai populasi yang hidup bersama, dan ekosistem mencakup komunitas beserta lingkungan abiotiknya.",
  "Interaksi Antarorganisme": "Organisme dapat bersaing memperebutkan sumber daya, memangsa organisme lain, atau membentuk hubungan yang menguntungkan salah satu maupun kedua pihak. Interaksi tersebut memengaruhi jumlah organisme, persebaran, dan kestabilan ekosistem.",
  "Rantai Makanan": "Rantai makanan menunjukkan satu jalur perpindahan energi melalui hubungan makan-dimakan. Produsen seperti tumbuhan memperoleh energi dari cahaya, kemudian energi diteruskan ke konsumen tingkat berikutnya.",
  "Jaring-Jaring Makanan": "Di alam, satu organisme biasanya memiliki lebih dari satu sumber makanan dan juga dapat dimakan oleh lebih dari satu organisme. Karena itu banyak rantai makanan saling terhubung membentuk jaring-jaring makanan yang lebih realistis.",
  "Aliran Energi": "Energi masuk ke banyak ekosistem melalui fotosintesis. Setiap organisme menggunakan sebagian energi untuk aktivitas hidup dan sebagian dilepas sebagai panas, sehingga energi yang tersedia untuk tingkat trofik berikutnya lebih sedikit.",
  "Keanekaragaman Hayati": "Keanekaragaman hayati mencakup variasi genetik, spesies, dan ekosistem. Keanekaragaman menyediakan banyak fungsi ekologis dan sumber daya, tetapi dapat terancam oleh hilangnya habitat, pencemaran, eksploitasi berlebihan, spesies invasif, serta perubahan iklim.",
  "Perubahan Lingkungan": "Lingkungan dapat berubah karena proses alam maupun aktivitas manusia. Perubahan penggunaan lahan, pencemaran, kebakaran, banjir, kekeringan, dan perubahan iklim dapat mengubah habitat serta hubungan antarorganisme.",
  "Pelestarian Lingkungan": "Pelestarian bertujuan menjaga fungsi ekosistem dan keanekaragaman hayati. Upayanya dapat berupa perlindungan habitat, rehabilitasi, pengurangan pencemaran, penggunaan sumber daya secara bertanggung jawab, dan pendidikan masyarakat.",
  "Sistem Tata Surya": "Tata surya terdiri atas Matahari dan benda-benda yang bergerak mengitarinya akibat gravitasi. Delapan planet utama berurutan dari Merkurius sampai Neptunus. Selain planet terdapat planet katai, satelit, asteroid, komet, dan meteoroid.",
  "Matahari sebagai Bintang": "Matahari adalah bintang terdekat dengan Bumi. Energinya berasal dari reaksi fusi di bagian dalam dan sangat penting bagi fotosintesis, cuaca, iklim, dan kehidupan di Bumi. Cahaya Matahari memerlukan sekitar delapan menit untuk mencapai Bumi.",
  "Planet": "Planet mengorbit Matahari dan tidak menghasilkan cahaya tampak sendiri seperti bintang. Planet terlihat karena memantulkan cahaya Matahari. Planet bagian dalam relatif berbatu, sedangkan planet luar berukuran besar dan didominasi gas atau es.",
  "Bumi": "Bumi adalah planet ketiga dari Matahari dan memiliki air cair melimpah, atmosfer, serta kondisi yang mendukung kehidupan. Gravitasi menahan atmosfer dan benda di permukaan, sementara medan magnet membantu melindungi planet dari sebagian partikel bermuatan dari Matahari.",
  "Rotasi Bumi": "Rotasi adalah perputaran Bumi pada porosnya sekitar sekali dalam satu hari. Akibat utamanya adalah pergantian siang dan malam serta gerak semu harian benda langit di langit.",
  "Revolusi Bumi": "Revolusi adalah gerak Bumi mengelilingi Matahari sekitar sekali dalam satu tahun. Bersama kemiringan sumbu Bumi, revolusi berkaitan dengan perubahan musim di berbagai wilayah.",
  "Bulan": "Bulan adalah satelit alami Bumi. Bulan tidak memancarkan cahaya tampak sendiri, tetapi memantulkan cahaya Matahari. Gerak Bulan mengelilingi Bumi menyebabkan perubahan posisi relatif yang berkaitan dengan fase dan gerhana.",
  "Fase Bulan": "Fase Bulan terjadi karena kita melihat bagian Bulan yang diterangi Matahari dari sudut berbeda selama Bulan mengorbit Bumi. Fase bukan disebabkan oleh bayangan Bumi; bayangan Bumi terlibat pada gerhana Bulan.",
  "Gerhana": "Gerhana Matahari terjadi ketika Bulan berada di antara Matahari dan Bumi sehingga menghalangi cahaya ke wilayah tertentu. Gerhana Bulan terjadi ketika Bulan masuk ke bayangan Bumi. Gerhana tidak terjadi setiap bulan karena bidang orbit Bulan miring terhadap bidang orbit Bumi.",
  "Sel sebagai Unit Terkecil Makhluk Hidup": "Sel disebut unit struktural karena tubuh makhluk hidup tersusun dari sel, dan disebut unit fungsional karena berbagai proses kehidupan berlangsung di dalamnya. Organisme uniseluler hanya tersusun atas satu sel, sedangkan organisme multiseluler memiliki banyak sel yang dapat bekerja sama dan memiliki tugas khusus.",
  "Mikroskop": "Mikroskop memperbesar penampakan objek kecil. Perbesaran total pada mikroskop cahaya sederhana diperoleh dengan mengalikan perbesaran lensa okuler dan objektif. Selain perbesaran, kualitas pengamatan juga dipengaruhi fokus, cahaya, preparat, dan cara menggunakan alat.",
  "Struktur Dasar Sel": "Membran sel membatasi dan mengatur pertukaran zat, sitoplasma menjadi tempat banyak proses berlangsung, inti menyimpan sebagian besar informasi genetik pada sel eukariotik, mitokondria berperan dalam respirasi sel, dan ribosom membentuk protein. Struktur bekerja sebagai satu sistem, bukan bagian yang berdiri sendiri.",
  "Sel Tumbuhan dan Sel Hewan": "Keduanya memiliki membran, sitoplasma, inti, mitokondria, dan ribosom. Sel tumbuhan umumnya memiliki dinding sel, kloroplas pada jaringan fotosintetik, serta vakuola sentral besar. Perbedaan struktur berhubungan dengan kebutuhan fungsi tumbuhan dan hewan.",
  "Spesialisasi Sel": "Pada organisme multiseluler, sel memiliki struktur sesuai tugasnya. Sel darah merah membantu membawa oksigen, neuron membawa informasi, sel otot dapat berkontraksi, dan sel rambut akar memperluas daerah penyerapan air serta mineral.",
  "Organisasi Kehidupan": "Sel sejenis dapat membentuk jaringan, beberapa jaringan membentuk organ, organ bekerja sama dalam sistem organ, dan seluruh sistem membentuk organisme. Contohnya sel otot membentuk jaringan otot, jaringan tersebut menjadi bagian jantung, dan jantung bekerja dalam sistem peredaran darah.",
  "Makanan dan Nutrisi": "Makanan menyediakan energi serta bahan untuk pertumbuhan, perbaikan, dan pengaturan tubuh. Karbohidrat merupakan sumber energi penting, protein membantu membentuk dan memperbaiki jaringan, lemak memiliki fungsi struktural serta cadangan energi, sedangkan vitamin, mineral, dan air mendukung banyak proses tubuh.",
  "Sistem Pencernaan": "Pencernaan mengubah makanan menjadi bentuk yang dapat diserap tubuh. Proses dimulai di mulut, makanan bergerak melalui kerongkongan ke lambung, pencernaan dan penyerapan utama berlangsung di usus halus, sedangkan usus besar membantu menyerap air dan membentuk sisa pencernaan.",
  "Sistem Peredaran Darah": "Jantung memompa darah melalui pembuluh. Arteri membawa darah menjauhi jantung, vena mengembalikan darah ke jantung, dan kapiler menjadi tempat pertukaran zat dengan jaringan. Darah membawa oksigen, zat gizi, hormon, panas, dan berbagai zat lain.",
  "Sistem Pernapasan": "Udara masuk melalui saluran pernapasan menuju paru-paru. Di alveolus terjadi pertukaran gas antara udara dan darah: oksigen masuk ke darah, sedangkan karbon dioksida bergerak ke alveolus untuk dikeluarkan. Diafragma dan otot di sekitar tulang rusuk membantu perubahan volume rongga dada saat bernapas.",
  "Sistem Ekskresi": "Ekskresi adalah pengeluaran sisa metabolisme. Ginjal menyaring dan mengolah darah untuk membentuk urine, paru-paru mengeluarkan karbon dioksida dan uap air, kulit menghasilkan keringat, dan hati berperan dalam berbagai proses metabolisme serta pengolahan zat tertentu.",
  "Hubungan Antar Sistem Organ dan Pola Hidup Sehat": "Sistem organ saling bergantung. Saat berlari, paru-paru menyediakan oksigen, jantung dan darah mengantarkannya ke otot, zat gizi menyediakan bahan bakar, dan sistem ekskresi membantu mengelola sisa metabolisme. Tidur cukup, aktivitas fisik wajar, makanan seimbang, kebersihan, dan menghindari zat berbahaya membantu menjaga fungsi tubuh.",
  "Usaha": "Dalam fisika, usaha terjadi jika gaya memiliki komponen searah perpindahan. Untuk kasus sederhana ketika gaya searah perpindahan, W = F × s. Jika gaya 20 N memindahkan benda 5 m, usaha yang dilakukan 100 joule.",
  "Energi": "Energi adalah kemampuan untuk menyebabkan perubahan atau melakukan usaha. Energi dapat berupa kinetik, potensial, kimia, listrik, termal, cahaya, dan lainnya. Dalam suatu proses energi dapat berpindah atau berubah bentuk.",
  "Energi Kinetik": "Energi kinetik dimiliki benda karena bergerak dan untuk gerak translasi dirumuskan Ek = ½mv². Massa yang lebih besar meningkatkan energi kinetik, sedangkan kecepatan berpengaruh sangat kuat karena dikuadratkan.",
  "Energi Potensial": "Energi potensial gravitasi berkaitan dengan posisi benda terhadap acuan ketinggian dan secara sederhana Ep = mgh. Buku di rak memiliki energi potensial terhadap lantai karena gravitasi dapat melakukan kerja jika buku jatuh.",
  "Perubahan Bentuk Energi": "Lampu mengubah energi listrik menjadi cahaya dan panas, kipas mengubah listrik menjadi gerak serta panas dan bunyi, sedangkan tubuh mengubah energi kimia makanan menjadi gerak, panas, dan energi untuk proses sel. Tidak ada alat nyata yang mengubah seluruh energi menjadi satu bentuk yang diinginkan tanpa sebagian berpindah ke lingkungan.",
  "Daya": "Daya menunjukkan cepatnya usaha dilakukan atau energi dipindahkan. P = W/t atau P = E/t. Dua mesin dapat melakukan usaha sama, tetapi mesin yang menyelesaikannya lebih cepat memiliki daya lebih besar.",
  "Pesawat Sederhana": "Pesawat sederhana membantu mengubah besar atau arah gaya. Keuntungan mekanis membuat gaya yang diperlukan lebih kecil, tetapi biasanya harus diberikan melalui jarak yang lebih panjang. Dalam alat nyata, gesekan menyebabkan sebagian energi berubah menjadi panas.",
  "Tuas": "Tuas memiliki titik tumpu, beban, dan kuasa. Keseimbangan ideal dapat ditulis Fkuasa × lkuasa = Fbeban × lbeban. Memperpanjang lengan kuasa dapat mengurangi gaya yang diperlukan untuk mengangkat beban.",
  "Katrol": "Katrol tetap terutama mengubah arah gaya, sedangkan susunan katrol bergerak dapat memberikan keuntungan mekanis. Banyaknya tali penopang beban pada model ideal membantu menentukan keuntungan gaya.",
  "Bidang Miring": "Bidang miring memungkinkan benda dinaikkan dengan gaya lebih kecil dibanding mengangkat vertikal langsung, tetapi benda menempuh jarak lebih panjang. Contohnya jalur landai, tangga, dan beberapa jenis alat pemotong atau sekrup yang menggunakan prinsip bidang miring.",
  "Roda dan Poros": "Roda dan poros terdiri atas dua bagian berputar dengan jari-jari berbeda. Gaya pada roda yang lebih besar dapat menghasilkan momen pada poros. Prinsipnya digunakan pada gagang pintu, setir, obeng, dan berbagai mekanisme mesin.",
  "Getaran": "Getaran adalah gerak bolak-balik melewati titik keseimbangan. Satu getaran lengkap berarti benda kembali ke posisi awal dengan arah gerak yang sama setelah melewati posisi-posisi lain dalam siklusnya.",
  "Periode dan Frekuensi": "Periode T adalah waktu untuk satu getaran, sedangkan frekuensi f adalah jumlah getaran tiap sekon. Hubungannya T = 1/f. Jika benda bergetar 20 kali dalam 10 s, frekuensinya 2 Hz dan periodenya 0,5 s.",
  "Gelombang": "Gelombang adalah perambatan gangguan yang membawa energi. Cepat rambat berhubungan dengan panjang gelombang dan frekuensi melalui v = λf. Medium dapat bergetar di sekitar posisi keseimbangan tanpa berpindah bersama gelombang sampai ke tujuan.",
  "Gelombang Transversal dan Longitudinal": "Pada gelombang transversal arah getar tegak lurus arah rambat, seperti gelombang pada tali. Pada gelombang longitudinal arah getar sejajar arah rambat dan terdapat rapatan serta renggangan, seperti bunyi di udara.",
  "Bunyi": "Bunyi berasal dari benda yang bergetar dan memerlukan medium untuk merambat. Frekuensi berkaitan dengan tinggi nada, sedangkan besar amplitudo berkaitan dengan kuat-lemahnya bunyi secara fisika. Bunyi tidak dapat merambat melalui ruang hampa.",
  "Cahaya": "Cahaya adalah gelombang elektromagnetik yang dapat merambat tanpa medium. Cahaya dapat dipantulkan, dibiaskan, diserap, diteruskan, dan diuraikan bergantung pada bahan serta kondisi interaksinya.",
  "Pemantulan Cahaya": "Pada pemantulan teratur, sudut datang sama dengan sudut pantul jika diukur terhadap garis normal. Permukaan cermin menghasilkan pemantulan yang teratur sehingga dapat membentuk bayangan jelas.",
  "Pembiasan Cahaya": "Pembiasan adalah perubahan arah rambat cahaya ketika memasuki medium berbeda karena cepat rambatnya berubah. Pensil di dalam air tampak bengkok karena cahaya dari bagian di dalam air dibiaskan sebelum mencapai mata.",
  "Cermin dan Lensa": "Cermin datar membentuk bayangan maya, tegak, dan sama besar. Cermin cekung dan cembung memiliki sifat yang bergantung posisi benda. Lensa cembung cenderung mengumpulkan cahaya sejajar, sedangkan lensa cekung menyebarkannya; prinsip ini digunakan dalam berbagai alat optik.",
  "Mata dan Alat Optik": "Kornea dan lensa membantu memfokuskan cahaya ke retina. Retina mengubah rangsangan cahaya menjadi sinyal saraf yang diproses otak. Kacamata, lup, mikroskop, teleskop, dan kamera memanfaatkan prinsip lensa serta pembentukan bayangan.",
  "Materi dan Partikel Penyusunnya": "Materi tersusun atas partikel yang sangat kecil. Dalam kimia dasar, atom menjadi unit penting untuk memahami unsur dan bagaimana atom dapat bergabung membentuk molekul atau struktur lain. Sifat makroskopik bahan muncul dari jenis, susunan, serta interaksi partikelnya.",
  "Atom": "Atom memiliki inti yang berisi proton dan neutron, sedangkan elektron berada pada daerah di sekitar inti menurut model modern. Nomor proton menentukan identitas unsur. Atom dapat memperoleh atau melepaskan elektron dalam proses tertentu sehingga menjadi ion.",
  "Unsur": "Unsur adalah zat yang terdiri atas atom-atom dengan jumlah proton yang sama. Unsur tidak dapat diuraikan menjadi zat yang lebih sederhana melalui reaksi kimia biasa. Contohnya hidrogen, oksigen, karbon, besi, dan emas.",
  "Simbol Unsur": "Simbol unsur adalah singkatan internasional, biasanya satu atau dua huruf, misalnya H untuk hidrogen, O untuk oksigen, Fe untuk besi, Cu untuk tembaga, dan Au untuk emas. Huruf pertama selalu kapital dan huruf kedua, jika ada, ditulis kecil.",
  "Senyawa": "Senyawa terbentuk ketika unsur berbeda berikatan kimia dalam perbandingan tertentu. Air H₂O dan karbon dioksida CO₂ merupakan contoh. Sifat senyawa dapat sangat berbeda dari unsur-unsur penyusunnya.",
  "Campuran": "Campuran terbentuk ketika dua atau lebih zat bergabung secara fisik tanpa membentuk satu zat murni baru. Komposisi campuran dapat berubah dan komponennya dapat dipisahkan menggunakan perbedaan sifat fisika.",
  "Campuran Homogen dan Heterogen": "Campuran homogen tampak seragam pada skala pengamatan biasa, contohnya larutan garam. Campuran heterogen memiliki komposisi yang tidak seragam atau memperlihatkan fase berbeda, contohnya pasir dan air.",
  "Pemisahan Campuran": "Filtrasi memisahkan berdasarkan ukuran partikel, penguapan memanfaatkan perubahan wujud pelarut, distilasi memanfaatkan perbedaan volatilitas atau titik didih, dan kromatografi memanfaatkan perbedaan interaksi komponen dengan fase bergerak dan fase diam.",
  "Struktur Lapisan Bumi": "Bumi dapat dipelajari melalui data gelombang seismik, komposisi batuan, dan model geofisika. Secara komposisi terdapat kerak, mantel, dan inti; berdasarkan sifat mekanik, lapisan dapat dibedakan lagi menjadi bagian kaku dan lebih plastis.",
  "Kerak, Mantel, dan Inti Bumi": "Kerak merupakan lapisan terluar yang tipis, mantel sangat tebal dan tersusun terutama dari batuan silikat, inti luar bersifat cair dan kaya besi-nikel, sedangkan inti dalam padat akibat tekanan yang sangat tinggi.",
  "Litosfer": "Litosfer adalah lapisan kaku yang mencakup kerak dan bagian paling atas mantel. Litosfer terpecah menjadi lempeng-lempeng tektonik yang bergerak relatif satu sama lain.",
  "Lempeng Tektonik": "Lempeng tektonik bergerak sangat lambat, umumnya beberapa sentimeter per tahun. Meskipun lambat, dalam jutaan tahun gerakan tersebut dapat memindahkan benua, membuka samudra, membentuk pegunungan, dan menghasilkan aktivitas geologi besar.",
  "Pergerakan Lempeng": "Pada batas konvergen lempeng mendekat, pada divergen menjauh, dan pada transform bergeser sejajar. Jenis batas menentukan proses geologi yang dominan, tetapi kenyataan di alam dapat lebih kompleks daripada model sederhana.",
  "Gempa Bumi": "Gempa terjadi ketika energi dilepaskan secara tiba-tiba di dalam Bumi, sering akibat pergeseran batuan pada patahan. Hiposentrum adalah sumber di dalam Bumi dan episentrum adalah titik permukaan di atasnya. Gelombang seismik membawa energi menjauhi sumber.",
  "Gunung Api": "Magma adalah material batuan cair atau sebagian cair di bawah permukaan. Jika mencapai permukaan disebut lava. Aktivitas gunung api dapat menghasilkan bahaya seperti aliran material dan abu, tetapi juga membentuk bentang alam serta menyumbang material mineral ke permukaan.",
  "Pembentukan Bentang Alam": "Bentang alam dibentuk oleh proses internal seperti tektonik dan vulkanisme serta proses eksternal seperti pelapukan, erosi, transportasi sedimen, dan sedimentasi. Bentuk permukaan Bumi terus berubah sepanjang waktu geologi.",
  "Mitigasi Bencana": "Mitigasi adalah upaya mengurangi risiko dan dampak bencana. Siswa perlu mengenali informasi resmi, jalur evakuasi, titik kumpul, dan prosedur sekolah. Tujuannya bukan menakut-nakuti, tetapi membangun kebiasaan kesiapsiagaan dan pengambilan keputusan yang aman.",
  "Sistem Koordinasi Manusia": "Sistem koordinasi membuat tubuh mampu menerima informasi, mengolahnya, dan memberikan respons. Komponen utama yang dipelajari adalah sistem saraf, alat indra, dan hormon. Ketiganya bekerja bersama agar gerakan, perilaku, dan fungsi organ sesuai kebutuhan tubuh.",
  "Sistem Saraf": "Sistem saraf pusat terdiri atas otak dan sumsum tulang belakang, sedangkan sistem saraf tepi menghubungkannya dengan berbagai bagian tubuh. Informasi sensorik masuk ke pusat pengolahan dan perintah motorik dikirim ke efektor seperti otot atau kelenjar.",
  "Struktur dan Fungsi Neuron": "Neuron memiliki dendrit untuk menerima sinyal, badan sel yang berisi inti serta organel, dan akson yang membawa impuls menjauhi badan sel. Komunikasi antarneuron berlangsung melalui sambungan khusus sehingga informasi dapat diteruskan melalui jaringan saraf.",
  "Otak dan Sumsum Tulang Belakang": "Otak besar berperan dalam kesadaran, pemikiran, ingatan, pengolahan indra, dan gerak sadar. Otak kecil membantu koordinasi serta keseimbangan, sedangkan batang otak mengatur banyak fungsi dasar. Sumsum tulang belakang menjadi jalur komunikasi dan pusat beberapa refleks.",
  "Gerak Sadar dan Gerak Refleks": "Gerak sadar melibatkan keputusan yang disadari, misalnya menulis. Refleks adalah respons cepat terhadap rangsangan tertentu; jalurnya dapat melibatkan reseptor, neuron sensorik, sumsum tulang belakang, neuron motorik, dan efektor sebelum kesadaran penuh muncul.",
  "Alat Indra Manusia": "Mata mendeteksi cahaya, telinga mendeteksi getaran bunyi dan membantu keseimbangan, hidung serta lidah mendeteksi molekul kimia, dan kulit memiliki berbagai reseptor sentuhan, tekanan, serta suhu. Otak menafsirkan sinyal dari reseptor menjadi pengalaman indra.",
  "Sistem Hormon": "Hormon adalah pembawa pesan kimia yang dihasilkan kelenjar dan dibawa darah menuju jaringan sasaran. Hormon membantu mengatur pertumbuhan, metabolisme, reproduksi, respons terhadap stres, serta banyak proses lain. Efeknya biasanya lebih lambat daripada impuls saraf tetapi dapat berlangsung lebih lama.",
  "Homeostasis": "Homeostasis menjaga kondisi internal dalam kisaran yang sesuai. Contohnya ketika suhu tubuh meningkat, tubuh dapat meningkatkan pelepasan panas; ketika kadar air berubah, ginjal menyesuaikan pengeluaran air. Mekanisme ini menggunakan umpan balik untuk menstabilkan kondisi.",
  "Menjaga Kesehatan Sistem Koordinasi": "Kesehatan sistem koordinasi didukung oleh tidur cukup, aktivitas fisik yang aman, makanan seimbang, perlindungan kepala saat aktivitas yang memerlukan, pengelolaan stres, dan menghindari zat yang merusak sistem saraf. Keluhan yang mengganggu fungsi perlu dibicarakan dengan orang dewasa tepercaya dan tenaga kesehatan.",
  "Pengertian Zat Aditif": "Zat aditif ditambahkan ke pangan untuk fungsi tertentu seperti warna, rasa, aroma, tekstur, atau menjaga mutu. Bahan aditif dapat berasal dari sumber alami maupun dibuat secara industri. Keamanan ditentukan oleh jenis bahan dan penggunaannya sesuai batas yang ditetapkan.",
  "Pewarna": "Pewarna membantu memberikan atau mempertahankan warna produk pangan. Warna bukan ukuran utama nilai gizi atau keamanan. Konsumen perlu memperhatikan label dan memastikan produk menggunakan bahan yang diizinkan untuk pangan.",
  "Pemanis": "Pemanis memberikan rasa manis. Gula juga memberikan energi, sedangkan beberapa pemanis lain digunakan dalam jumlah kecil untuk tujuan tertentu. Konsumsi makanan dan minuman manis tetap perlu seimbang sebagai bagian pola makan sehat.",
  "Pengawet": "Pengawetan memperlambat kerusakan pangan akibat mikroorganisme, reaksi kimia, atau perubahan fisik. Pengawetan dapat dilakukan dengan pendinginan, pembekuan, pengeringan, pemanasan, atau penggunaan bahan pengawet yang diizinkan.",
  "Penyedap dan Bahan Tambahan Lain": "Bahan tambahan dapat digunakan untuk memperkuat rasa, aroma, tekstur, kestabilan, atau sifat produk lainnya. Fungsi bahan perlu dibedakan dari klaim pemasaran; informasi pada daftar bahan membantu mengetahui apa yang sebenarnya terdapat dalam produk.",
  "Membaca Informasi pada Kemasan Makanan": "Label dapat memuat daftar bahan, informasi nilai gizi, ukuran sajian, tanggal kedaluwarsa, petunjuk penyimpanan, serta informasi alergi. Membaca label membantu membandingkan produk dan membuat keputusan berdasarkan data, bukan hanya iklan atau tampilan kemasan.",
  "Pengertian Zat Adiktif": "Zat adiktif dapat memengaruhi sistem tubuh dan menimbulkan ketergantungan. Materi ini dipelajari untuk memahami risiko dan menjaga diri. Tidak ada kebutuhan untuk mencoba zat berbahaya agar dapat memahami dampaknya.",
  "Dampak Zat Adiktif terhadap Tubuh": "Zat adiktif dapat memengaruhi sistem saraf, perhatian, kemampuan mengambil keputusan, kesehatan organ, suasana hati, dan kehidupan sosial. Risiko berbeda menurut zat dan kondisi, tetapi penggunaan pada usia remaja dapat sangat merugikan perkembangan dan keselamatan.",
  "Menjaga Diri dari Penyalahgunaan Zat": "Strategi aman adalah menolak ajakan mencoba zat berbahaya, menjauh dari situasi yang menekan, mencari dukungan orang tua, guru, konselor, atau tenaga kesehatan, dan menggunakan informasi dari sumber tepercaya. Jangan menyimpan atau membantu menyembunyikan zat berbahaya.",
  "Tujuan Sistem Reproduksi": "Sistem reproduksi menghasilkan sel reproduksi dan memungkinkan terjadinya reproduksi manusia. Pembelajarannya berfokus pada fungsi biologis, perkembangan, dan kesehatan, serta menggunakan istilah ilmiah dengan sikap saling menghormati.",
  "Masa Pubertas": "Pubertas dipengaruhi perubahan hormon dan menyebabkan pertumbuhan serta pematangan tubuh. Waktu pubertas berbeda-beda. Variasi perkembangan normal tidak dapat dinilai hanya dengan membandingkan penampilan fisik seseorang dengan teman sebayanya.",
  "Sistem Reproduksi Laki-Laki": "Testis menghasilkan sel sperma dan hormon tertentu. Saluran serta organ lain membantu pematangan, pengangkutan, dan fungsi reproduksi. Pada tingkat SMP, fokusnya adalah mengenali struktur utama, fungsi, dan cara menjaga kesehatan.",
  "Sistem Reproduksi Perempuan": "Ovarium menghasilkan sel telur dan hormon tertentu, tuba falopi menjadi jalur sel telur dan lokasi umum fertilisasi, uterus menjadi tempat perkembangan kehamilan, dan vagina merupakan bagian saluran reproduksi. Setiap organ memiliki fungsi yang saling terkait.",
  "Pembentukan Sel Reproduksi": "Sel sperma dan sel telur dibentuk melalui proses pembelahan khusus sehingga membawa setengah jumlah kromosom dibanding sel tubuh. Ketika keduanya bergabung saat fertilisasi, jumlah kromosom dipulihkan pada zigot.",
  "Siklus Menstruasi": "Siklus menstruasi melibatkan perubahan hormon, ovarium, dan lapisan rahim. Jika tidak terjadi kehamilan, lapisan rahim mengalami peluruhan dan menstruasi terjadi. Panjang siklus tidak selalu sama pada setiap orang atau setiap bulan.",
  "Fertilisasi dan Perkembangan Awal": "Fertilisasi adalah bergabungnya sel sperma dan sel telur membentuk zigot. Zigot membelah berulang, berkembang menjadi embrio, dan kemudian mengalami diferensiasi membentuk jaringan serta organ selama perkembangan kehamilan.",
  "Kehamilan dan Kelahiran": "Selama kehamilan, embrio lalu janin berkembang di uterus dan memperoleh dukungan melalui plasenta. Kelahiran merupakan proses biologis yang terjadi setelah masa kehamilan. Pembahasan di SMP menekankan urutan perkembangan dan kesehatan ibu serta bayi secara ilmiah.",
  "Menjaga Kesehatan Sistem Reproduksi": "Kesehatan reproduksi didukung oleh kebersihan, pola hidup sehat, informasi yang benar, menghindari zat berbahaya, dan berbicara kepada orang tua/wali atau tenaga kesehatan jika ada keluhan. Tubuh dan privasi setiap orang harus dihormati.",
  "Pewarisan Sifat": "Pewarisan sifat adalah penerusan informasi genetik dari orang tua kepada keturunannya. Kemiripan keluarga dapat dipengaruhi genetik, tetapi banyak sifat juga dipengaruhi lingkungan sehingga saudara kandung tidak identik.",
  "Kromosom": "Kromosom adalah struktur DNA dan protein di dalam sel. Kromosom membawa banyak gen. Pada manusia, sebagian besar sel tubuh memiliki pasangan kromosom, sedangkan sel reproduksi membawa satu set untuk kemudian bergabung saat fertilisasi.",
  "DNA": "DNA adalah molekul penyimpan informasi genetik. Urutan bagian-bagian penyusunnya membawa informasi yang dapat digunakan sel untuk membentuk RNA dan protein serta mengatur berbagai proses biologis.",
  "Gen": "Gen adalah bagian DNA yang memiliki fungsi atau informasi tertentu. Satu sifat nyata dapat dipengaruhi oleh satu atau banyak gen, dan ekspresinya juga dapat berinteraksi dengan lingkungan.",
  "Alel dan Sifat": "Alel adalah variasi suatu gen. Individu dapat membawa kombinasi alel yang berbeda. Genotipe adalah susunan genetik tertentu, sedangkan fenotipe adalah sifat yang dapat diamati sebagai hasil pengaruh gen dan lingkungan.",
  "Dominan dan Resesif": "Dalam model Mendel sederhana, alel dominan dapat tampak pada individu heterozigot, sedangkan alel resesif tampak jika tidak ada alel dominan pada pasangan tersebut. Dominan tidak berarti lebih baik, lebih kuat, atau lebih sering ditemukan.",
  "Persilangan Sederhana": "Kotak Punnett digunakan untuk memetakan kemungkinan kombinasi alel. Pada Bb × Bb, kemungkinan genotipe adalah BB, Bb, Bb, dan bb sehingga perbandingan peluangnya 1:2:1. Peluang tidak menjamin hasil tepat pada jumlah keturunan yang sedikit.",
  "Variasi Makhluk Hidup": "Variasi muncul dari perbedaan genetik, lingkungan, dan interaksi keduanya. Rekombinasi saat reproduksi seksual juga menghasilkan kombinasi gen baru. Variasi penting karena membuat individu dalam populasi tidak semuanya sama.",
  "Mutasi secara Sederhana": "Mutasi adalah perubahan materi genetik. Mutasi dapat terjadi secara spontan atau dipengaruhi faktor tertentu. Dampaknya dapat netral, merugikan, atau kadang menguntungkan tergantung lokasi perubahan dan lingkungan.",
  "Pengertian Bioteknologi": "Bioteknologi memanfaatkan organisme, sel, enzim, atau proses biologis untuk menghasilkan produk atau jasa. Bidangnya mencakup pangan, pertanian, kesehatan, industri, dan lingkungan.",
  "Bioteknologi Konvensional": "Bioteknologi konvensional sering memanfaatkan fermentasi tanpa mengubah materi genetik secara langsung. Tempe, roti, yoghurt, dan beberapa produk pangan lain dibuat dengan bantuan mikroorganisme tertentu dalam kondisi yang dikendalikan.",
  "Bioteknologi Modern": "Bioteknologi modern menggunakan teknik laboratorium yang lebih maju, termasuk kultur sel, analisis DNA, dan pada konteks tertentu rekayasa genetika. Penerapannya memerlukan pengujian keamanan, fasilitas, dan aturan yang ketat.",
  "Manfaat dan Pertimbangan Bioteknologi": "Bioteknologi dapat meningkatkan produksi pangan, menghasilkan obat, membantu diagnosis, atau mengolah limbah. Namun setiap penerapan perlu dinilai dari manfaat, risiko, dampak lingkungan, keadilan akses, etika, dan regulasi.",
  "Muatan Listrik": "Proton bermuatan positif dan elektron bermuatan negatif. Benda netral memiliki jumlah muatan positif dan negatif seimbang secara keseluruhan. Perpindahan elektron dapat membuat benda memiliki muatan bersih dan menimbulkan gaya listrik.",
  "Listrik Statis": "Listrik statis berkaitan dengan ketidakseimbangan muatan pada permukaan benda. Muatan sejenis saling tolak dan muatan berbeda jenis saling tarik. Penggosokan bahan tertentu dapat memindahkan elektron sehingga benda mampu menarik benda ringan.",
  "Arus Listrik": "Arus adalah laju aliran muatan, I = Q/t. Dalam logam, elektron bergerak sebagai pembawa muatan, sementara arah arus konvensional didefinisikan berlawanan arah gerak elektron. Arus hanya terus mengalir jika ada rangkaian tertutup dan sumber beda potensial.",
  "Tegangan dan Hambatan": "Tegangan adalah beda potensial listrik yang mendorong perpindahan muatan, sedangkan hambatan menunjukkan seberapa kuat suatu komponen menentang arus. Besar hambatan bergantung pada bahan, ukuran, dan kondisi seperti suhu.",
  "Hukum Ohm": "Untuk komponen ohmik pada kondisi sesuai, tegangan, arus, dan hambatan dihubungkan oleh V = IR. Jika V = 12 V dan R = 6 Ω, arus I = 2 A. Tidak semua komponen selalu mengikuti hubungan linear ini pada semua kondisi.",
  "Rangkaian Seri": "Pada rangkaian seri hanya terdapat satu jalur utama untuk arus. Arus sama melalui setiap komponen, sedangkan tegangan sumber terbagi. Hambatan total ideal adalah jumlah hambatan: Rt = R1 + R2 + ... .",
  "Rangkaian Paralel": "Pada rangkaian paralel terdapat beberapa cabang. Tegangan pada tiap cabang sama dengan tegangan sumber ideal, sedangkan arus terbagi sesuai hambatan cabang. Sistem listrik rumah menggunakan prinsip percabangan agar peralatan dapat beroperasi lebih mandiri.",
  "Energi dan Daya Listrik": "Daya listrik menunjukkan laju penggunaan energi dan dapat dihitung P = VI. Energi E = Pt. Karena itu peralatan berdaya besar yang digunakan lebih lama mengonsumsi lebih banyak energi.",
  "Magnet": "Magnet memiliki kutub utara dan selatan. Kutub sejenis saling menolak dan kutub berbeda saling menarik. Beberapa bahan seperti besi dapat dipengaruhi kuat oleh medan magnet, tetapi tidak semua logam bersifat magnetik kuat.",
  "Medan Magnet": "Medan magnet adalah daerah di sekitar magnet atau arus listrik tempat gaya magnet dapat bekerja. Garis medan digunakan sebagai model untuk menunjukkan arah dan kekuatan relatif medan.",
  "Elektromagnet": "Kawat berarus menghasilkan medan magnet. Jika kawat dibuat kumparan dan diberi inti bahan feromagnetik, medan dapat menjadi lebih kuat. Elektromagnet dapat dinyalakan dan dimatikan sehingga berguna dalam relay, bel listrik, motor, dan alat lainnya.",
  "Hubungan Listrik dan Magnet": "Listrik dan magnet merupakan bagian dari elektromagnetisme. Arus menghasilkan medan magnet, dan perubahan fluks magnet dapat menginduksi tegangan listrik. Hubungan ini menjadi dasar banyak teknologi tenaga dan komunikasi.",
  "Generator dan Motor Listrik": "Generator mengubah energi mekanik menjadi energi listrik melalui induksi elektromagnetik. Motor melakukan proses sebaliknya secara umum: energi listrik menghasilkan gerak melalui gaya pada penghantar berarus dalam medan magnet.",
  "Sumber Energi": "Sumber energi dibedakan antara yang tidak terbarukan seperti bahan bakar fosil dan yang terbarukan seperti cahaya Matahari, angin, air, serta panas bumi. Setiap sumber memiliki kelebihan, keterbatasan, biaya, dan dampak lingkungan.",
  "Energi Terbarukan": "Energi surya menggunakan panel fotovoltaik, angin memutar turbin, aliran air dapat menggerakkan turbin, dan panas bumi memanfaatkan energi termal dari dalam Bumi. Sistem energi nyata membutuhkan jaringan, penyimpanan, pengaturan beban, serta pertimbangan lingkungan.",
  "Lingkungan dan Kehidupan": "Organisme bergantung pada air, udara, tanah, cahaya, suhu, dan organisme lain. Karena komponen lingkungan saling terhubung, perubahan pada satu bagian dapat menyebar melalui ekosistem dan memengaruhi kesehatan serta kehidupan manusia.",
  "Pencemaran Udara": "Pencemaran udara terjadi ketika gas atau partikel mencapai tingkat yang mengganggu kesehatan atau lingkungan. Sumbernya dapat berasal dari transportasi, industri, pembakaran, kebakaran, dan proses alam. Dampaknya bergantung pada jenis zat, konsentrasi, serta lama paparan.",
  "Pencemaran Air": "Air tercemar ketika bahan atau organisme tertentu menurunkan kualitas dan fungsi air. Limbah rumah tangga, industri, pertanian, dan sampah dapat menjadi sumber. Pencemaran dapat menurunkan oksigen terlarut, membahayakan organisme, dan membuat air tidak layak digunakan.",
  "Pencemaran Tanah": "Pencemaran tanah dapat berasal dari limbah, kebocoran bahan kimia, atau pembuangan sampah yang tidak dikelola. Zat pencemar dapat memengaruhi organisme tanah, tumbuhan, dan air tanah serta masuk ke rantai makanan.",
  "Efek Rumah Kaca": "Gas rumah kaca menyerap dan memancarkan kembali radiasi inframerah sehingga membantu menjaga Bumi cukup hangat. Peningkatan konsentrasi gas rumah kaca akibat aktivitas manusia memperkuat efek ini dan meningkatkan energi yang tersimpan dalam sistem iklim.",
  "Perubahan Iklim": "Iklim adalah pola kondisi atmosfer dalam jangka panjang, berbeda dari cuaca harian. Pemanasan global akibat peningkatan gas rumah kaca memengaruhi pola suhu, hujan, es, laut, dan kejadian ekstrem tertentu dengan dampak yang berbeda antarwilayah.",
  "Dampak Aktivitas Manusia": "Perubahan penggunaan lahan, pembakaran bahan bakar fosil, konsumsi sumber daya, produksi limbah, dan pencemaran mengubah lingkungan. Dampaknya dapat bersifat lokal maupun global dan sering kali saling berhubungan.",
  "Konservasi": "Konservasi menjaga keanekaragaman hayati dan fungsi ekosistem melalui perlindungan habitat, pengelolaan sumber daya, pemulihan, pemantauan populasi, serta pengurangan ancaman. Konservasi yang baik mempertimbangkan kebutuhan ekologi dan masyarakat.",
  "Pengelolaan Sampah": "Prinsip yang baik dimulai dari reduce, lalu reuse, kemudian recycle. Mengurangi barang yang tidak diperlukan mencegah sampah sejak awal. Pemilahan membantu bahan yang dapat didaur ulang atau dikomposkan diproses sesuai jenisnya.",
  "Gaya Hidup Berkelanjutan": "Gaya hidup berkelanjutan berarti memenuhi kebutuhan dengan menggunakan sumber daya secara lebih bijak. Contohnya menghemat energi dan air, mengurangi makanan terbuang, memakai barang berulang kali, memilih transportasi yang sesuai, dan menjaga lingkungan sekitar."
};

  const chapterGoals = {
    "Hakikat Ilmu Sains dan Metode Ilmiah":"belajar bagaimana ilmuwan mengamati, mengukur, merancang percobaan, dan menarik kesimpulan berdasarkan bukti",
    "Zat dan Perubahannya":"menghubungkan sifat materi dengan model partikel, perubahan wujud, perubahan fisika-kimia, dan massa jenis",
    "Suhu, Kalor, dan Pemuaian":"membedakan suhu dan kalor serta menjelaskan perpindahan energi termal dan pemuaian",
    "Gerak dan Gaya":"menjelaskan perubahan posisi, kelajuan, gaya, gesekan, dan prinsip Newton",
    "Karakteristik dan Klasifikasi Makhluk Hidup":"mengenali ciri kehidupan serta cara ilmuwan mengelompokkan organisme",
    "Ekologi dan Pelestarian Lingkungan":"menjelaskan hubungan organisme, aliran energi, keanekaragaman, dan pelestarian lingkungan",
    "Bumi dan Tata Surya":"memahami posisi Bumi dalam tata surya serta gerak Bumi, Bulan, dan peristiwa gerhana",
    "Pengenalan Sel":"memahami sel sebagai unit kehidupan dan hubungan sel-jaringan-organ-sistem organ",
    "Struktur dan Fungsi Tubuh Makhluk Hidup":"memahami bagaimana sistem pencernaan, pernapasan, peredaran darah, dan ekskresi bekerja bersama",
    "Usaha, Energi, dan Pesawat Sederhana":"menggunakan konsep usaha, energi, daya, dan pesawat sederhana pada masalah sehari-hari",
    "Getaran, Gelombang, dan Cahaya":"menghubungkan getaran, gelombang, bunyi, cahaya, dan alat optik",
    "Unsur, Senyawa, dan Campuran":"membedakan atom, unsur, senyawa, campuran, dan metode pemisahan",
    "Struktur Bumi dan Perkembangannya":"menjelaskan lapisan Bumi, tektonik lempeng, gempa, gunung api, dan mitigasi",
    "Sistem Koordinasi dan Homeostasis Tubuh Manusia":"menjelaskan bagaimana saraf, indra, dan hormon mengatur tubuh serta mempertahankan homeostasis",
    "Zat Aditif dan Zat Adiktif":"memahami fungsi bahan tambahan pangan dan risiko zat adiktif untuk membuat keputusan yang aman",
    "Sistem Reproduksi Manusia":"memahami perubahan pubertas, fungsi sistem reproduksi, fertilisasi, perkembangan awal, dan kesehatan reproduksi secara ilmiah",
    "Pewarisan Sifat dan Bioteknologi":"menghubungkan DNA, gen, alel, variasi, dan pemanfaatan proses biologis dalam bioteknologi",
    "Listrik, Magnet, dan Energi Alternatif":"menggunakan konsep listrik dan magnet serta menilai berbagai sumber energi",
    "Isu-Isu Lingkungan":"menganalisis perubahan lingkungan, pencemaran, iklim, konservasi, dan pilihan hidup berkelanjutan"
  };

  function clean(s){ return String(s || "").trim(); }
  function esc(s){ return String(s || "").replace(/[&<>\"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }

  function findProfile(lesson, chapter){
    const text = `${lesson} ${chapter}`;
    return profiles.find(p => p.rx.test(lesson) || p.rx.test(text));
  }

  function makeContent(subject, lesson, chapter){
    if (subject !== "IPA") return null;
    const p = findProfile(lesson, chapter);
    if (!p) return null;
    const sp = specific[lesson] || {};
    const goal = chapterGoals[chapter] || "memahami konsep utama dan penerapannya";
    return {
      _bisaIpaSmp: true,
      subject, lesson, chapter,
      title: lesson,
      intro: `${COMMON} Pada subbab <strong>“${esc(lesson)}”</strong>, kamu ${goal}. Materi disusun dari pengertian, hubungan sebab-akibat, contoh, hingga penerapan agar tidak hanya dihafal.`,
      points: [...p.points, ...(sp.extra ? [sp.extra] : [])],
      example: p.example,
      keywords: p.keywords,
      visual: p.visual || "generic",
      formula: sp.formula || p.formula || "",
      chapterArticle: FULL_CHAPTER_ARTICLES[chapter] || [],
      fullNotes: FULL_LESSON_NOTES[lesson] ? [FULL_LESSON_NOTES[lesson]] : p.points,
      activity: activityFor(lesson, chapter),
      misconception: misconceptionFor(lesson, chapter),
      summary: `Inti ${lesson}: ${p.points.slice(0,2).join(" ")}`,
      questions: [
        `Jelaskan ${lesson} dengan bahasamu sendiri tanpa membaca catatan.`,
        `Berikan satu contoh ${lesson} dalam kehidupan sehari-hari dan jelaskan hubungan konsepnya.`,
        `Apa hubungan ${lesson} dengan topik lain dalam bab “${chapter}”?`
      ]
    };
  }

  function activityFor(lesson, chapter){
    const t = `${lesson} ${chapter}`.toLowerCase();
    if (/pengukuran|besaran/.test(t)) return "Ukur tiga benda di kelas dengan alat yang sesuai. Catat nilai, satuan, dan ketelitian alat, lalu bandingkan hasilnya.";
    if (/metode ilmiah|variabel/.test(t)) return "Susun pertanyaan penelitian sederhana. Tentukan variabel bebas, terikat, kontrol, data yang akan dicatat, dan bentuk tabel hasil.";
    if (/massa jenis/.test(t)) return "Dengan bimbingan guru, ukur massa dan volume beberapa benda aman, hitung massa jenisnya, lalu bandingkan hasil.";
    if (/suhu|kalor|pemuaian/.test(t)) return "Amati perubahan suhu dua benda pada kondisi berbeda menggunakan alat sekolah yang sesuai, lalu gambarkan kecenderungan datanya.";
    if (/gerak|kelajuan/.test(t)) return "Ukur jarak lintasan pendek dan waktu tempuh, kemudian hitung kelajuan rata-rata dan diskusikan sumber ketidakpastian.";
    if (/ekologi|makanan|keanekaragaman|lingkungan/.test(t)) return "Amati lingkungan sekolah dan buat peta hubungan sederhana antara komponen biotik, abiotik, serta dampak aktivitas manusia.";
    if (/sel|mikroskop/.test(t)) return "Amati preparat yang disiapkan guru menggunakan mikroskop, buat sketsa, dan beri label bagian yang dapat dikenali.";
    if (/pencernaan|peredaran|pernapasan|ekskresi/.test(t)) return "Buat diagram alir yang menunjukkan bagaimana zat makanan, oksigen, darah, dan sisa metabolisme saling terhubung.";
    if (/usaha|energi|pesawat|tuas|katrol|bidang miring/.test(t)) return "Gunakan model atau data kelas untuk membandingkan gaya, jarak, usaha, atau keuntungan mekanis dalam dua kondisi.";
    if (/getaran|gelombang/.test(t)) return "Gunakan bandul atau simulasi aman untuk menghitung jumlah getaran dan waktu, lalu tentukan periode dan frekuensi.";
    if (/cahaya|cermin|lensa/.test(t)) return "Amati pemantulan atau pembiasan menggunakan perangkat optik sekolah di bawah arahan guru, kemudian gambarkan jalur cahaya.";
    if (/campuran|pemisahan/.test(t)) return "Pilih campuran aman yang disediakan guru dan tentukan metode pemisahan berdasarkan perbedaan sifat fisiknya.";
    if (/lempeng|gempa|gunung api|bencana/.test(t)) return "Gunakan peta Indonesia untuk menandai wilayah rawan geologi dan hubungkan dengan posisi lempeng serta jalur mitigasi sekolah.";
    if (/aditif|kemasan/.test(t)) return "Bandingkan dua label pangan: daftar bahan, informasi gizi, tanggal kedaluwarsa, dan petunjuk penyimpanan.";
    if (/gen|dna|kromosom|persilangan|pewarisan/.test(t)) return "Gunakan kartu alel untuk membuat simulasi persilangan dan bandingkan kemungkinan genotipe serta fenotipe.";
    if (/listrik|rangkaian|ohm/.test(t)) return "Gunakan kit rangkaian sekolah dengan pengawasan guru untuk membandingkan rangkaian seri dan paralel serta mencatat hasil pengamatan.";
    if (/magnet/.test(t)) return "Gunakan magnet kelas untuk memetakan daerah pengaruh magnet dengan kompas kecil atau alat demonstrasi guru.";
    if (/sampah|berkelanjutan/.test(t)) return "Lakukan audit sampah kelas selama satu hari, kelompokkan jenisnya, lalu usulkan tindakan reduce, reuse, dan recycle yang realistis.";
    return "Buat peta konsep satu halaman yang menghubungkan pengertian, proses, contoh, dan penerapan topik ini.";
  }

  function misconceptionFor(lesson, chapter){
    const t = `${lesson} ${chapter}`.toLowerCase();
    if (/kalor|suhu/.test(t)) return "Suhu bukan 'jumlah kalor'. Kalor adalah energi yang berpindah karena perbedaan suhu.";
    if (/massa jenis/.test(t)) return "Benda yang massanya besar tidak selalu bermassa jenis besar; massa jenis bergantung pada massa sekaligus volume.";
    if (/jarak dan perpindahan/.test(t)) return "Jarak dan perpindahan tidak sama. Seseorang dapat menempuh jarak besar tetapi memiliki perpindahan nol jika kembali ke titik awal.";
    if (/gaya/.test(t)) return "Benda tidak harus selalu diberi gaya agar terus bergerak; yang mengubah kecepatan adalah resultan gaya.";
    if (/fase bulan/.test(t)) return "Fase Bulan bukan bayangan Bumi pada Bulan. Bayangan Bumi berperan khusus pada gerhana Bulan.";
    if (/energi/.test(t)) return "Energi tidak 'hilang begitu saja'; energi dapat berpindah atau berubah menjadi bentuk lain seperti panas dan bunyi.";
    if (/gelombang/.test(t)) return "Gelombang membawa energi, bukan memindahkan seluruh medium dari sumber hingga tujuan.";
    if (/atom|unsur|senyawa|campuran/.test(t)) return "Campuran berbeda dari senyawa: komponen campuran tidak terikat dalam perbandingan kimia tetap dan dapat dipisahkan secara fisik.";
    if (/homeostasis/.test(t)) return "Homeostasis bukan berarti kondisi tubuh selalu tepat pada satu angka; tubuh mempertahankan kisaran yang sesuai melalui mekanisme pengaturan.";
    if (/dominan|resesif/.test(t)) return "Dominan tidak berarti lebih baik, lebih kuat, atau lebih umum; istilah ini hanya menggambarkan pola ekspresi alel dalam model tertentu.";
    if (/listrik/.test(t)) return "Arus tidak 'habis' setelah melewati komponen; energi dipindahkan, sedangkan muatan tetap menjadi bagian dari rangkaian.";
    if (/efek rumah kaca/.test(t)) return "Efek rumah kaca alami bukan sepenuhnya buruk; masalahnya adalah penguatan efek tersebut akibat peningkatan gas rumah kaca.";
    return "Hindari menghafal istilah tanpa memahami hubungan sebab-akibat, bukti, dan batas berlakunya konsep.";
  }

  const originalGet = BISAContent.get.bind(BISAContent);
  const originalRender = BISAContent.render.bind(BISAContent);

  BISAContent.get = function(subject, lesson, chapter){
    const rich = makeContent(subject, lesson, chapter);
    return rich || originalGet(subject, lesson, chapter);
  };

  BISAContent.render = function(d){
    if (!d?._bisaIpaSmp) return originalRender(d);
    const formula = d.formula ? `
      <section class="reading-section">
        <span class="reading-label">RUMUS / HUBUNGAN PENTING</span>
        <div class="lesson-callout"><strong>${esc(d.formula)}</strong></div>
      </section>` : "";
    const chapterArticle = (d.chapterArticle || []).length ? `
      <section class="reading-section full-material-section">
        <span class="reading-label">MATERI LENGKAP BAB</span>
        <h3>${esc(d.chapter)}</h3>
        ${(d.chapterArticle || []).map(p=>`<p class="full-paragraph">${esc(p)}</p>`).join("")}
      </section>` : "";
    const deepDive = (d.fullNotes || []).length ? `
      <section class="reading-section full-material-section">
        <span class="reading-label">PENJELASAN LENGKAP SUBBAB</span>
        <h3>${esc(d.title)}</h3>
        ${(d.fullNotes || []).map(p=>`<p class="full-paragraph">${esc(p)}</p>`).join("")}
      </section>` : "";
    const concepts = `
      <section class="reading-section">
        <span class="reading-label">PAHAMI BERTAHAP</span>
        <h3>Konsep penting yang harus dipahami</h3>
        <div class="reading-points">${d.points.map((p,i)=>`<article><span>${i+1}</span><p>${esc(p)}</p></article>`).join("")}</div>
      </section>`;
    return `<div class="bisa-reading bisa-reading-full">
      <div class="learning-visual">${simpleDiagram(d)}</div>
      <section class="reading-section"><span class="reading-label">PENGANTAR</span><h3>${esc(d.title)}</h3><p class="full-paragraph">${d.intro}</p></section>
      ${chapterArticle}
      ${deepDive}
      ${concepts}
      ${formula}
      <section class="reading-section example-section"><span class="reading-label">CONTOH DALAM KEHIDUPAN</span><h3>Hubungkan konsep dengan keadaan nyata</h3><p class="full-paragraph">${esc(d.example)}</p></section>
      <section class="reading-section"><span class="reading-label">AKTIVITAS / PRAKTIKUM</span><h3>Ayo mencoba</h3><p class="full-paragraph">${esc(d.activity)}</p></section>
      <section class="reading-section"><span class="reading-label">CATATAN PENTING</span><h3>Hindari miskonsepsi</h3><p class="full-paragraph">${esc(d.misconception)}</p></section>
      <section class="reading-section"><span class="reading-label">KATA KUNCI</span><div class="keyword-cloud">${d.keywords.map(k=>`<span>${esc(k)}</span>`).join("")}</div></section>
      <section class="reading-section summary-section"><span class="reading-label">RANGKUMAN</span><p class="full-paragraph"><strong>${esc(d.summary)}</strong></p></section>
      <section class="reading-section check-section"><span class="reading-label">CEK PEMAHAMAN</span><ol>${d.questions.map(q=>`<li>${esc(q)}</li>`).join("")}</ol></section>
    </div>`;
  };

  function simpleDiagram(d){
    const c = "#2fbf71";
    const t = esc(d.lesson).slice(0, 38);
    const icon = ({method:"🔬",measure:"📏",matter:"⚛",density:"ρ",heat:"🌡",motion:"➜",force:"F",classification:"🌿",ecosystem:"🌱",environment:"🌍",space:"☀",cell:"◉",digestion:"🍽",circulation:"♥",respiration:"◌",kidney:"◈",energy:"⚡",wave:"∿",optics:"◒",atom:"⚛",earth:"🌎",nervous:"⌁",growth:"↗",dna:"DNA",circuit:"⏻"})[d.visual] || "IPA";
    return `<svg viewBox="0 0 820 330" role="img" aria-label="Ilustrasi konsep ${t}">
      <rect width="820" height="330" rx="28" fill="${c}" opacity=".07"/>
      <circle cx="210" cy="165" r="92" fill="white" stroke="${c}" stroke-width="5"/>
      <text x="210" y="180" text-anchor="middle" font-size="42" font-weight="800" fill="${c}">${esc(icon)}</text>
      <path d="M320 165 H430" stroke="${c}" stroke-width="7"/><polygon points="430,165 405,150 405,180" fill="${c}"/>
      <rect x="465" y="100" width="270" height="130" rx="24" fill="white" stroke="${c}" stroke-width="4"/>
      <text x="600" y="151" text-anchor="middle" font-size="18" font-weight="800" fill="${c}">KONSEP IPA</text>
      <text x="600" y="186" text-anchor="middle" font-size="16" fill="#596070">${t}</text>
      <text x="410" y="295" text-anchor="middle" font-size="16" font-weight="700" fill="${c}">Amati • Pahami • Uji • Terapkan</text>
    </svg>`;
  }

  // Tambahan bank soal IPA untuk memperluas latihan.
  const extraQuestions = [
    ["Metode Ilmiah","Dalam percobaan pengaruh cahaya terhadap pertumbuhan tanaman, faktor yang sengaja diubah adalah ...",["jenis tanaman","jumlah cahaya","tinggi tanaman","kesimpulan"],1,"Jumlah cahaya adalah variabel bebas karena sengaja diubah."],
    ["Pengukuran","Satuan SI untuk massa adalah ...",["gram","kilogram","meter","liter"],1,"Satuan pokok SI untuk massa adalah kilogram."],
    ["Massa Jenis","Benda bermassa 120 g dan volume 40 cm³ mempunyai massa jenis ...",["2 g/cm³","3 g/cm³","4 g/cm³","6 g/cm³"],1,"ρ = m/V = 120/40 = 3 g/cm³."],
    ["Kalor","Perpindahan panas dari Matahari ke Bumi terutama terjadi melalui ...",["konduksi","konveksi","radiasi","evaporasi"],2,"Radiasi tidak membutuhkan medium material."],
    ["Gerak","Seseorang berjalan 5 m ke timur lalu 5 m kembali ke barat. Perpindahannya ...",["0 m","5 m","10 m","25 m"],0,"Posisi akhir sama dengan posisi awal sehingga perpindahan nol."],
    ["Gaya","Gaya resultan 15 N bekerja pada massa 3 kg. Percepatannya ...",["3 m/s²","5 m/s²","12 m/s²","45 m/s²"],1,"a = F/m = 15/3 = 5 m/s²."],
    ["Klasifikasi","Urutan klasifikasi yang paling khusus adalah ...",["kingdom","kelas","genus","spesies"],3,"Spesies merupakan tingkat yang paling khusus pada pilihan tersebut."],
    ["Ekosistem","Organisme yang memasukkan energi ke ekosistem melalui fotosintesis disebut ...",["produsen","konsumen","predator","dekomposer"],0,"Produsen seperti tumbuhan menggunakan energi cahaya untuk fotosintesis."],
    ["Tata Surya","Pergantian siang dan malam terutama disebabkan oleh ...",["revolusi Bumi","rotasi Bumi","revolusi Bulan","fase Bulan"],1,"Rotasi Bumi pada porosnya menyebabkan bagian Bumi bergantian menghadap Matahari."],
    ["Sel","Struktur yang berperan mengatur keluar-masuknya zat adalah ...",["membran sel","ribosom","dinding sel","inti sel"],0,"Membran sel mengatur pertukaran zat dengan lingkungan."],
    ["Mikroskop","Okuler 10× dan objektif 40× memberi perbesaran total ...",["50×","100×","400×","800×"],2,"Perbesaran total = 10 × 40 = 400×."],
    ["Pencernaan","Sebagian besar penyerapan zat gizi terjadi di ...",["mulut","lambung","usus halus","usus besar"],2,"Usus halus memiliki permukaan luas untuk penyerapan zat gizi."],
    ["Peredaran Darah","Pembuluh yang membawa darah menjauhi jantung disebut ...",["vena","arteri","kapiler","alveolus"],1,"Arteri membawa darah menjauhi jantung."],
    ["Pernapasan","Pertukaran gas terutama terjadi di ...",["trakea","bronkus","alveolus","diafragma"],2,"Alveolus berdinding tipis dan dikelilingi kapiler."],
    ["Usaha","Gaya 10 N memindahkan benda 4 m searah gaya. Usahanya ...",["2,5 J","6 J","14 J","40 J"],3,"W = F × s = 10 × 4 = 40 J."],
    ["Energi","Energi yang dimiliki benda karena bergerak disebut ...",["kinetik","potensial","kimia","nuklir"],0,"Energi kinetik berkaitan dengan gerak."],
    ["Getaran","Benda melakukan 20 getaran dalam 10 s. Frekuensinya ...",["0,5 Hz","2 Hz","10 Hz","200 Hz"],1,"f = n/t = 20/10 = 2 Hz."],
    ["Gelombang","Gelombang bunyi di udara merupakan gelombang ...",["transversal","longitudinal","elektromagnetik","stasioner selalu"],1,"Getaran partikel udara sejajar arah rambat bunyi."],
    ["Cahaya","Pensil tampak bengkok di dalam air terutama karena ...",["interferensi","pembiasan","difraksi","magnetisme"],1,"Cahaya berubah arah saat berpindah antara air dan udara."],
    ["Senyawa","H₂O termasuk ...",["unsur","senyawa","campuran heterogen","larutan"],1,"H₂O tersusun dari hidrogen dan oksigen yang berikatan kimia."],
    ["Pemisahan Campuran","Metode yang sesuai untuk memisahkan pasir dari air adalah ...",["filtrasi","sublimasi","kromatografi gas","elektrolisis"],0,"Filtrasi menahan partikel pasir sementara air melewati penyaring."],
    ["Tektonik","Dua lempeng yang bergerak saling menjauh membentuk batas ...",["konvergen","divergen","transform","pasif"],1,"Divergen berarti bergerak saling menjauh."],
    ["Sistem Saraf","Sel khusus yang membawa informasi dalam sistem saraf disebut ...",["eritrosit","neuron","trombosit","osteosit"],1,"Neuron adalah sel saraf yang menerima dan menghantarkan sinyal."],
    ["Homeostasis","Contoh homeostasis adalah ...",["perubahan warna cat","pengaturan suhu tubuh","gerak planet","pembentukan batu"],1,"Homeostasis menjaga kondisi internal tubuh dalam kisaran yang sesuai."],
    ["Zat Aditif","Informasi yang penting diperiksa pada makanan kemasan adalah ...",["warna gambar saja","daftar bahan dan informasi gizi","ukuran iklan","nama artis"],1,"Daftar bahan dan informasi gizi membantu memahami kandungan produk."],
    ["Genetika","Bagian DNA yang membawa informasi biologis tertentu disebut ...",["gen","organ","jaringan","enzim"],0,"Gen adalah bagian DNA dengan informasi tertentu."],
    ["Genetika","Persilangan Bb × Bb menghasilkan peluang genotipe bb sebesar ...",["0%","25%","50%","75%"],1,"Kombinasi BB, Bb, Bb, bb memberi peluang bb 1/4 atau 25%."],
    ["Bioteknologi","Pembuatan tempe merupakan contoh ...",["bioteknologi konvensional","fisi nuklir","pelapukan","elektromagnetisme"],0,"Tempe memanfaatkan fermentasi oleh mikroorganisme."],
    ["Listrik","Jika V = 12 V dan R = 6 Ω, arus I adalah ...",["0,5 A","2 A","6 A","72 A"],1,"I = V/R = 12/6 = 2 A."],
    ["Rangkaian","Pada rangkaian seri, hambatan total dua resistor 3 Ω dan 5 Ω adalah ...",["1,875 Ω","2 Ω","8 Ω","15 Ω"],2,"R seri dijumlahkan: 3 + 5 = 8 Ω."],
    ["Magnet","Arus listrik yang mengalir pada kumparan dapat menghasilkan ...",["medan magnet","massa baru","cahaya selalu","gravitasi baru"],0,"Arus listrik menghasilkan medan magnet di sekitarnya."],
    ["Energi Terbarukan","Sumber energi terbarukan adalah ...",["batu bara","minyak bumi","angin","gas alam"],2,"Angin diperbarui terus oleh proses atmosfer."],
    ["Lingkungan","Gas rumah kaca yang meningkat dapat ...",["menghentikan rotasi Bumi","memperkuat pemanasan global","menghilangkan gravitasi","menghentikan fotosintesis seluruhnya"],1,"Peningkatan gas rumah kaca menahan lebih banyak radiasi inframerah dan memperkuat pemanasan."],
    ["Sampah","Urutan tindakan yang paling baik dimulai dari ...",["recycle lalu reduce","reduce lalu reuse lalu recycle","membuang lalu memilah","membakar semua sampah"],1,"Mengurangi sejak awal paling efektif, kemudian gunakan kembali dan daur ulang bila perlu."]
  ].map(([topic,q,options,answer,explanation],i)=>({subject:"IPA",topic,level:i%3===0?"hots":"basic",q,options,answer,explanation}));

  if (Array.isArray(questionBank)) {
    const existing = new Set(questionBank.map(q => q.q));
    extraQuestions.forEach(q => { if (!existing.has(q.q)) questionBank.push(q); });
  }

  // Pastikan tampilan awal memakai kurikulum baru setelah app.js selesai melakukan render pertama.
  try {
    if (typeof currentUser !== "undefined" && currentUser) {
      if (typeof renderDashboard === "function") renderDashboard();
      if (typeof renderLearn === "function") renderLearn();
      if (typeof renderPractice === "function") renderPractice();
      if (typeof renderProgress === "function") renderProgress();
      if (typeof renderAchievements === "function") renderAchievements();
    }
  } catch (err) {
    console.warn("BISA IPA SMP pack: refresh UI skipped", err);
  }

  console.info("BISA: Paket IPA SMP VII–IX aktif.");
})();
