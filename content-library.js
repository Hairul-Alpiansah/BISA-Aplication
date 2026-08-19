
const BISAContent = (() => {
  const norm = s => String(s||"").toLowerCase();
  const base = {
    IPA: "IPA mempelajari alam melalui pengamatan, pengukuran, percobaan, dan penalaran berbasis bukti.",
    Biologi: "Biologi mempelajari kehidupan dengan menghubungkan struktur, fungsi, proses, dan lingkungan.",
    Fisika: "Fisika menjelaskan gejala alam melalui konsep, besaran, model, grafik, dan hubungan matematis.",
    Kimia: "Kimia mempelajari materi, partikel penyusun, sifat, serta perubahan yang dialaminya.",
    Matematika: "Matematika mempelajari pola, hubungan, bentuk, perubahan, dan cara bernalar secara logis."
  };

  const rules = [
    ["metode ilmiah|hipotesis|variabel penelitian|analisis data",
      "Berpikir seperti ilmuwan",
      ["Pengamatan adalah langkah awal untuk menemukan fakta atau pola yang menarik.",
       "Hipotesis merupakan dugaan yang memiliki alasan dan harus dapat diuji.",
       "Variabel bebas sengaja diubah, variabel terikat diamati, sedangkan variabel kontrol dibuat tetap.",
       "Kesimpulan harus mengikuti data, bukan keinginan peneliti."],
      "Jika ingin meneliti pengaruh cahaya terhadap pertumbuhan tanaman, jumlah cahaya dapat diubah sementara jenis tanaman, air, dan media tanam dibuat sama.",
      ["pengamatan","hipotesis","variabel","data","kesimpulan"], "method"],

    ["besaran|satuan|pengukuran|alat ukur|angka penting|ketidakpastian|dimensi",
      "Pengukuran dan satuan",
      ["Pengukuran membandingkan suatu besaran dengan satuan yang disepakati.",
       "Besaran pokok seperti panjang, massa, waktu, dan suhu mempunyai satuan SI.",
       "Ketelitian alat menentukan seberapa rinci hasil yang dapat dibaca.",
       "Tidak ada pengukuran yang benar-benar sempurna, sehingga hasil selalu memiliki batas ketelitian."],
      "Panjang meja yang ditulis 120,4 cm memberikan informasi lebih lengkap daripada hanya 120 cm karena ketelitiannya berbeda.",
      ["besaran","satuan SI","ketelitian","alat ukur"], "measure"],

    ["materi|wujud zat|perubahan wujud|sifat fisika|sifat kimia|unsur|senyawa|campuran|pemisahan campuran",
      "Materi dan perubahannya",
      ["Materi memiliki massa dan menempati ruang.",
       "Partikel zat padat rapat dan hanya bergetar; pada cairan dapat bergeser; pada gas bergerak bebas dan berjauhan.",
       "Perubahan fisika tidak menghasilkan zat baru.",
       "Perubahan kimia menghasilkan zat dengan sifat yang berbeda dari zat awal."],
      "Es mencair adalah perubahan fisika karena tetap berupa air, sedangkan besi berkarat merupakan perubahan kimia karena terbentuk zat baru.",
      ["materi","partikel","padat","cair","gas","perubahan kimia"], "matter"],

    ["suhu|termometer|kalor|konduksi|konveksi|radiasi|pemuaian|asas black",
      "Suhu dan kalor",
      ["Suhu menunjukkan keadaan panas atau dingin suatu benda, sedangkan kalor adalah energi yang berpindah karena perbedaan suhu.",
       "Kalor mengalir dari suhu lebih tinggi menuju suhu lebih rendah.",
       "Konduksi terjadi tanpa perpindahan zat secara keseluruhan, konveksi disertai aliran zat, sedangkan radiasi tidak memerlukan medium.",
       "Banyak benda memuai ketika suhu meningkat karena jarak rata-rata antarpartikel bertambah."],
      "Sendok logam menjadi panas di dalam sup karena konduksi, sedangkan panas Matahari mencapai Bumi terutama melalui radiasi.",
      ["suhu","kalor","konduksi","konveksi","radiasi","pemuaian"], "heat"],

    ["massa jenis",
      "Massa jenis",
      ["Massa jenis menunjukkan massa yang terdapat pada setiap satuan volume.",
       "Rumus dasarnya adalah ρ = m/V.",
       "Benda yang ukurannya sama dapat memiliki massa berbeda karena bahan penyusunnya berbeda.",
       "Massa jenis membantu menjelaskan kecenderungan benda terapung atau tenggelam."],
      "Kayu umumnya terapung di air karena massa jenis rata-ratanya lebih kecil daripada air.",
      ["massa","volume","massa jenis","kerapatan"], "density"],

    ["gerak|jarak|perpindahan|kelajuan|kecepatan|percepatan|glb|glbb|grafik gerak",
      "Gerak dan perubahan posisi",
      ["Benda bergerak jika posisinya berubah terhadap titik acuan.",
       "Jarak adalah panjang lintasan, sedangkan perpindahan memperhatikan posisi awal dan akhir beserta arah.",
       "Kelajuan berkaitan dengan jarak per waktu; kecepatan berkaitan dengan perpindahan per waktu.",
       "Percepatan menunjukkan perubahan kecepatan setiap satuan waktu."],
      "Berjalan 3 m ke timur lalu 3 m kembali menghasilkan jarak 6 m tetapi perpindahan 0 m.",
      ["acuan","jarak","perpindahan","kecepatan","percepatan"], "motion"],

    ["gaya|hukum newton|gaya berat|gaya gesek|resultan gaya|diagram gaya",
      "Gaya dan Hukum Newton",
      ["Gaya adalah dorongan atau tarikan yang dapat mengubah gerak atau bentuk benda.",
       "Jika resultan gaya nol, benda mempertahankan keadaan geraknya.",
       "Hukum II Newton menghubungkan resultan gaya, massa, dan percepatan melalui ΣF = ma.",
       "Gaya aksi dan reaksi bekerja pada dua benda yang berbeda."],
      "Kereta belanja kosong lebih mudah dipercepat daripada kereta penuh ketika diberi gaya dorong yang sama.",
      ["gaya","resultan","massa","percepatan","aksi-reaksi"], "force"],

    ["usaha|energi kinetik|energi potensial|energi mekanik|kekekalan energi|daya|efisiensi",
      "Usaha dan energi",
      ["Energi adalah kemampuan untuk menyebabkan perubahan.",
       "Energi kinetik berkaitan dengan gerak, sedangkan energi potensial berkaitan dengan posisi atau konfigurasi.",
       "Energi dapat berubah bentuk tetapi jumlah totalnya tetap pada sistem ideal.",
       "Daya menunjukkan seberapa cepat usaha dilakukan atau energi dipindahkan."],
      "Ketika bola jatuh, energi potensial gravitasi berkurang dan energi kinetiknya bertambah.",
      ["usaha","energi","kinetik","potensial","daya"], "energy"],

    ["momentum|impuls|tumbukan",
      "Momentum dan impuls",
      ["Momentum dirumuskan p = mv dan dipengaruhi massa serta kecepatan.",
       "Impuls FΔt sama dengan perubahan momentum.",
       "Dalam sistem tertutup, momentum total sebelum dan sesudah interaksi tetap.",
       "Memperpanjang waktu tumbukan dapat mengurangi gaya rata-rata untuk perubahan momentum yang sama."],
      "Airbag memperpanjang waktu tubuh berhenti ketika terjadi benturan sehingga gaya rata-rata yang diterima dapat berkurang.",
      ["momentum","impuls","tumbukan","kekekalan"], "motion"],

    ["gravitasi|tata surya|planet|matahari|rotasi bumi|revolusi bumi|fase bulan|gerhana|hukum kepler|satelit",
      "Gravitasi dan tata surya",
      ["Gravitasi adalah interaksi tarik-menarik antara benda bermassa.",
       "Rotasi Bumi menyebabkan pergantian siang dan malam.",
       "Revolusi Bumi dan kemiringan sumbu berhubungan dengan pola musim.",
       "Fase Bulan terjadi karena perubahan bagian Bulan yang terkena cahaya Matahari dan terlihat dari Bumi."],
      "Satelit tetap berada di orbit karena terus mengalami gerak jatuh bebas sambil bergerak maju mengelilingi Bumi.",
      ["gravitasi","orbit","rotasi","revolusi","Bulan"], "space"],

    ["klasifikasi|takson|tata nama|kunci determinasi|plantae|animalia|fungi|protista|bakteri|archaea|virus",
      "Klasifikasi makhluk hidup",
      ["Klasifikasi mengelompokkan organisme berdasarkan persamaan, perbedaan, dan kekerabatan.",
       "Tingkatan takson bergerak dari kelompok luas menuju kelompok yang semakin khusus.",
       "Tata nama binomial menggunakan nama genus dan penunjuk spesies.",
       "Kunci determinasi mengenali organisme melalui pilihan ciri yang berurutan."],
      "Nama ilmiah Felis catus membantu ilmuwan merujuk pada kucing rumah tanpa bergantung pada perbedaan bahasa lokal.",
      ["klasifikasi","takson","genus","spesies","determinasi"], "classification"],

    ["ekosistem|biotik|abiotik|populasi|komunitas|rantai makanan|jaring|aliran energi|piramida|keanekaragaman hayati|konservasi|suksesi",
      "Ekosistem dan aliran energi",
      ["Ekosistem terbentuk dari interaksi makhluk hidup dengan faktor abiotik.",
       "Produsen memasukkan energi ke ekosistem melalui fotosintesis.",
       "Rantai makanan menunjukkan satu jalur perpindahan energi, sedangkan jaring-jaring makanan menunjukkan banyak jalur.",
       "Energi yang tersedia berkurang pada tingkat trofik yang lebih tinggi."],
      "Di sawah, padi dapat dimakan belalang atau tikus, lalu keduanya dapat menjadi mangsa predator berbeda sehingga terbentuk jaring makanan.",
      ["ekosistem","produsen","konsumen","dekomposer","energi"], "ecosystem"],

    ["pencemaran|limbah|sampah|efek rumah kaca|pemanasan global|perubahan iklim|3r|lingkungan|pembangunan berkelanjutan|erosi",
      "Lingkungan dan keberlanjutan",
      ["Pencemaran terjadi ketika bahan atau energi menurunkan kualitas lingkungan.",
       "Gas rumah kaca menyerap sebagian radiasi inframerah yang dipancarkan permukaan Bumi.",
       "Peningkatan konsentrasi gas rumah kaca memperkuat pemanasan global dan memengaruhi iklim.",
       "Reduce, reuse, dan recycle membantu mengurangi penggunaan sumber daya dan timbulan sampah."],
      "Menggunakan botol minum berulang kali mencegah sampah sejak awal sehingga lebih baik daripada hanya mengandalkan daur ulang.",
      ["pencemaran","gas rumah kaca","iklim","3R","keberlanjutan"], "environment"],

    ["sel|organel|membran sel|sitoplasma|nukleus|prokariotik|eukariotik|difusi|osmosis|transport aktif",
      "Sel sebagai unit kehidupan",
      ["Sel adalah unit struktural dan fungsional dasar makhluk hidup.",
       "Membran sel mengatur pertukaran zat dengan lingkungan.",
       "Nukleus menyimpan sebagian besar materi genetik pada sel eukariotik; mitokondria penting dalam produksi ATP; ribosom menyusun protein.",
       "Difusi dan osmosis mengikuti perbedaan konsentrasi, sedangkan transport aktif membutuhkan energi."],
      "Sel tumbuhan dalam larutan sangat pekat dapat kehilangan air melalui osmosis sehingga isi sel menyusut.",
      ["sel","membran","organel","nukleus","osmosis"], "cell"],

    ["jaringan tumbuhan|meristem|epidermis|parenkim|xilem|floem|akar|batang|daun",
      "Jaringan dan organ tumbuhan",
      ["Sel tumbuhan dengan fungsi serupa membentuk jaringan.",
       "Meristem aktif membelah dan berperan pada pertumbuhan.",
       "Xilem terutama mengangkut air dan mineral, sedangkan floem mengangkut hasil fotosintesis.",
       "Akar, batang, dan daun memiliki susunan jaringan yang sesuai dengan fungsi masing-masing."],
      "Air yang diserap akar dapat bergerak melalui xilem menuju daun untuk mendukung fotosintesis.",
      ["meristem","xilem","floem","akar","daun"], "plant"],

    ["pencernaan|zat gizi|nutrisi|enzim pencernaan|penyerapan",
      "Sistem pencernaan",
      ["Pencernaan mengubah makanan menjadi molekul yang dapat diserap tubuh.",
       "Pencernaan mekanik memperkecil ukuran makanan, sedangkan pencernaan kimiawi menggunakan enzim.",
       "Karbohidrat, protein, dan lemak memiliki fungsi dan jalur pemecahan berbeda.",
       "Sebagian besar penyerapan zat gizi berlangsung di usus halus."],
      "Mengunyah adalah proses mekanik, sedangkan pemecahan molekul makanan oleh enzim merupakan proses kimiawi.",
      ["pencernaan","enzim","nutrisi","usus halus","penyerapan"], "digestion"],

    ["pernapasan|alveolus|pertukaran gas|volume pernapasan|transport gas",
      "Sistem pernapasan",
      ["Sistem pernapasan memasukkan oksigen dan membantu mengeluarkan karbon dioksida.",
       "Perubahan volume rongga dada membantu udara masuk dan keluar.",
       "Pertukaran gas berlangsung terutama di alveolus yang berdinding tipis dan kaya kapiler.",
       "Hemoglobin membantu membawa oksigen melalui darah."],
      "Setelah berlari, kebutuhan oksigen meningkat sehingga frekuensi napas biasanya bertambah.",
      ["paru-paru","alveolus","oksigen","karbon dioksida"], "respiration"],

    ["peredaran darah|sirkulasi|jantung|pembuluh darah|darah|limfatik",
      "Sistem peredaran darah",
      ["Jantung memompa darah melalui pembuluh.",
       "Arteri membawa darah menjauhi jantung, vena menuju jantung, dan kapiler menjadi tempat pertukaran zat.",
       "Sel darah merah membawa oksigen, sel darah putih berperan dalam pertahanan, dan trombosit membantu pembekuan.",
       "Sirkulasi menghubungkan kebutuhan berbagai jaringan tubuh."],
      "Otot yang aktif membutuhkan lebih banyak oksigen sehingga aliran darah ke jaringan tersebut dapat meningkat.",
      ["jantung","arteri","vena","kapiler","darah"], "circulation"],

    ["ekskresi|ginjal|urine|hati|kulit",
      "Sistem ekskresi",
      ["Ekskresi mengeluarkan zat sisa metabolisme dan membantu menjaga kondisi internal tubuh.",
       "Ginjal menyaring darah dan mengatur air serta ion.",
       "Kulit membantu mengeluarkan keringat dan mengatur suhu.",
       "Paru-paru mengeluarkan karbon dioksida dan uap air."],
      "Saat tubuh kekurangan air, ginjal dapat menghasilkan urine yang lebih pekat.",
      ["ekskresi","ginjal","urine","homeostasis"], "kidney"],

    ["saraf|neuron|refleks|endokrin|hormon|alat indra|sistem koordinasi",
      "Sistem koordinasi",
      ["Neuron menerima dan menghantarkan sinyal.",
       "Otak dan sumsum tulang belakang menjadi pusat pemrosesan utama.",
       "Refleks memungkinkan respons cepat terhadap rangsang tertentu.",
       "Hormon dibawa darah dan mengatur banyak proses tubuh dengan pola waktu berbeda dari sinyal saraf."],
      "Tangan dapat segera ditarik ketika menyentuh benda panas melalui jalur refleks.",
      ["neuron","saraf","refleks","hormon","indra"], "nervous"],

    ["imun|kekebalan|antigen|antibodi|vaksin",
      "Sistem kekebalan tubuh",
      ["Tubuh memiliki pertahanan fisik, bawaan, dan spesifik.",
       "Antigen adalah bagian yang dapat dikenali sistem imun.",
       "Limfosit tertentu menghasilkan atau membantu respons antibodi.",
       "Sel memori membantu respons berikutnya berlangsung lebih cepat."],
      "Vaksinasi mengenalkan target secara aman sehingga sistem imun dapat membangun memori.",
      ["imun","antigen","antibodi","limfosit","memori"], "immune"],

    ["pertumbuhan|perkembangan|hormon tumbuhan|pubertas",
      "Pertumbuhan dan perkembangan",
      ["Pertumbuhan adalah perubahan ukuran atau jumlah yang dapat diukur.",
       "Perkembangan adalah perubahan menuju fungsi dan organisasi yang lebih matang.",
       "Gen, hormon, nutrisi, air, suhu, dan cahaya dapat memengaruhi proses tersebut.",
       "Pola pertumbuhan berbeda antarorganisme dan tahap kehidupan."],
      "Dua tanaman sejenis dapat tumbuh berbeda jika mendapat jumlah cahaya atau air yang berbeda.",
      ["pertumbuhan","perkembangan","hormon","gen","lingkungan"], "growth"],

    ["metabolisme|enzim|katabolisme|respirasi sel|fermentasi|anabolisme|fotosintesis",
      "Metabolisme dan energi sel",
      ["Metabolisme adalah seluruh reaksi kimia yang berlangsung di dalam sel.",
       "Enzim mempercepat reaksi dengan menurunkan energi aktivasi.",
       "Katabolisme memecah molekul dan biasanya melepaskan energi; anabolisme menyusun molekul dan memerlukan energi.",
       "Respirasi menghasilkan ATP, sedangkan fotosintesis menangkap energi cahaya untuk membentuk molekul organik."],
      "Energi dari makanan dipindahkan ke ATP sebelum digunakan untuk berbagai aktivitas sel.",
      ["metabolisme","enzim","ATP","respirasi","fotosintesis"], "metabolism"],

    ["dna|rna|gen|kromosom|materi genetik|replikasi|transkripsi|translasi|sintesis protein",
      "Materi genetik",
      ["DNA menyimpan informasi genetik dalam urutan nukleotida.",
       "Gen adalah bagian DNA yang membawa informasi fungsional tertentu.",
       "Kromosom mengemas DNA bersama protein.",
       "Secara umum informasi DNA dapat ditranskripsi menjadi RNA dan diterjemahkan untuk membentuk protein."],
      "Perubahan urutan DNA dapat mengubah urutan protein dan pada kondisi tertentu memengaruhi sifat.",
      ["DNA","RNA","gen","kromosom","protein"], "dna"],

    ["mitosis|meiosis|pembelahan sel|gametogenesis",
      "Pembelahan sel",
      ["Mitosis menghasilkan sel anak dengan jumlah kromosom yang umumnya sama dengan sel induk.",
       "Meiosis menghasilkan sel dengan jumlah kromosom setengah.",
       "DNA digandakan sebelum pembelahan agar informasi dapat dibagikan.",
       "Meiosis juga menghasilkan variasi genetik."],
      "Pertumbuhan jaringan menggunakan mitosis, sedangkan pembentukan gamet melibatkan meiosis.",
      ["mitosis","meiosis","kromosom","gamet"], "division"],

    ["pewarisan|mendel|monohibrid|dihibrid|genotipe|fenotipe|dominan|resesif|pedigri",
      "Pewarisan sifat",
      ["Genotipe adalah susunan alel, sedangkan fenotipe adalah sifat yang dapat diamati.",
       "Alel dominan dapat tampak pada heterozigot; alel resesif biasanya tampak saat tidak tertutupi.",
       "Kotak Punnett membantu menghitung peluang kombinasi alel.",
       "Banyak sifat nyata dipengaruhi lebih dari satu gen dan lingkungan."],
      "Pada Aa × Aa, peluang genotipe keturunan adalah AA, Aa, Aa, dan aa atau 1:2:1.",
      ["alel","genotipe","fenotipe","dominan","Mendel"], "dna"],

    ["evolusi|seleksi alam|adaptasi|spesiasi",
      "Evolusi",
      ["Evolusi adalah perubahan karakteristik genetik populasi dari generasi ke generasi.",
       "Variasi membuat individu dalam populasi tidak identik.",
       "Seleksi alam terjadi ketika variasi memengaruhi peluang bertahan hidup dan reproduksi.",
       "Populasi yang terpisah dan berubah secara berbeda dapat akhirnya membentuk spesies baru."],
      "Sifat yang menguntungkan pada satu lingkungan belum tentu menguntungkan pada lingkungan yang berbeda.",
      ["evolusi","variasi","seleksi alam","adaptasi","spesiasi"], "evolution"],

    ["bioteknologi|fermentasi|kultur jaringan|rekayasa genetika|bioetika",
      "Bioteknologi",
      ["Bioteknologi memanfaatkan organisme, sel, atau komponen biologis untuk menghasilkan produk atau proses bermanfaat.",
       "Fermentasi merupakan contoh bioteknologi konvensional.",
       "Teknik modern menggunakan pengetahuan sel dan molekuler yang lebih terkontrol.",
       "Manfaat, keamanan, dampak lingkungan, dan etika perlu dipertimbangkan."],
      "Pembuatan makanan fermentasi memanfaatkan aktivitas mikroorganisme untuk mengubah bahan awal.",
      ["bioteknologi","fermentasi","mikroorganisme","bioetika"], "biotech"],

    ["vektor|skalar|resultan vektor|komponen vektor",
      "Vektor",
      ["Skalar hanya memiliki besar, sedangkan vektor memiliki besar dan arah.",
       "Vektor dapat digambarkan sebagai panah.",
       "Komponen memecah vektor pada sumbu yang dipilih.",
       "Resultan mewakili efek gabungan beberapa vektor."],
      "Berjalan 3 m ke timur lalu 4 m ke utara menghasilkan perpindahan diagonal 5 m.",
      ["skalar","vektor","arah","komponen","resultan"], "vector"],

    ["fluida|pascal|archimedes|bernoulli|kontinuitas|debit|tekanan hidrostatis",
      "Fluida",
      ["Tekanan adalah gaya per luas.",
       "Dalam cairan diam, tekanan meningkat dengan kedalaman.",
       "Prinsip Pascal menjelaskan penerusan tekanan pada fluida tertutup.",
       "Gaya apung Archimedes berkaitan dengan berat fluida yang dipindahkan."],
      "Dongkrak hidrolik memperbesar gaya dengan memanfaatkan perbedaan luas penampang.",
      ["fluida","tekanan","Pascal","Archimedes","Bernoulli"], "fluid"],

    ["getaran|gelombang|periode|frekuensi|bunyi|doppler|resonansi",
      "Getaran dan gelombang",
      ["Getaran adalah gerak bolak-balik di sekitar titik keseimbangan.",
       "Frekuensi adalah jumlah getaran per sekon; periode adalah waktu satu getaran.",
       "Gelombang membawa energi melalui gangguan yang merambat.",
       "Bunyi adalah gelombang mekanik sehingga memerlukan medium."],
      "Nada sirene terdengar berubah ketika kendaraan mendekat atau menjauh karena efek Doppler.",
      ["getaran","frekuensi","periode","gelombang","bunyi"], "wave"],

    ["cahaya|pemantulan|pembiasan|cermin|lensa|optik|mata|mikroskop|teleskop",
      "Cahaya dan optik",
      ["Cahaya dapat dipantulkan dan dibiaskan.",
       "Pemantulan mengikuti hubungan sudut datang dan sudut pantul.",
       "Pembiasan terjadi ketika cahaya berpindah medium dan kecepatannya berubah.",
       "Cermin serta lensa membentuk bayangan dan digunakan pada berbagai alat optik."],
      "Sedotan di dalam air tampak bengkok karena cahaya dibiaskan ketika berpindah dari air ke udara.",
      ["cahaya","pemantulan","pembiasan","lensa","bayangan"], "optics"],

    ["listrik statis|muatan listrik|coulomb|medan listrik|potensial listrik|kapasitor",
      "Listrik statis",
      ["Muatan sejenis tolak-menolak dan muatan berbeda jenis tarik-menarik.",
       "Hukum Coulomb menjelaskan besar gaya antara muatan titik.",
       "Medan listrik menggambarkan pengaruh listrik di sekitar muatan.",
       "Kapasitor dapat menyimpan pemisahan muatan dan energi listrik."],
      "Penggaris plastik yang digosok dapat menarik potongan kertas kecil karena interaksi muatan.",
      ["muatan","Coulomb","medan listrik","potensial"], "atom"],

    ["arus|tegangan|hambatan|ohm|rangkaian seri|rangkaian paralel|kirchhoff|daya listrik",
      "Rangkaian listrik",
      ["Arus adalah laju aliran muatan.",
       "Tegangan berkaitan dengan perbedaan energi per muatan.",
       "Hambatan menunjukkan seberapa kuat komponen menghambat arus.",
       "Pada komponen ohmik berlaku V = IR."],
      "Lampu rumah dipasang paralel agar setiap lampu memperoleh tegangan sumber dan dapat bekerja relatif mandiri.",
      ["arus","tegangan","hambatan","Ohm","seri","paralel"], "circuit"],

    ["magnet|lorentz|induksi elektromagnetik|faraday|lenz|generator|transformator|fluks",
      "Magnet dan induksi",
      ["Arus listrik menghasilkan medan magnet.",
       "Muatan bergerak dapat mengalami gaya dalam medan magnet.",
       "Perubahan fluks magnet dapat menghasilkan tegangan induksi.",
       "Generator mengubah energi mekanik menjadi listrik melalui induksi elektromagnetik."],
      "Dinamo sepeda menghasilkan tegangan ketika gerak menyebabkan perubahan fluks magnet pada kumparan.",
      ["magnet","medan","Lorentz","Faraday","induksi"], "magnet"],

    ["struktur atom|proton|neutron|elektron|nomor atom|isotop|konfigurasi elektron",
      "Struktur atom",
      ["Atom memiliki inti berisi proton dan neutron serta elektron di sekitarnya.",
       "Nomor atom sama dengan jumlah proton dan menentukan identitas unsur.",
       "Isotop adalah atom dari unsur sama dengan jumlah neutron berbeda.",
       "Susunan elektron sangat penting dalam menentukan sifat kimia."],
      "Karbon-12 dan karbon-14 sama-sama memiliki enam proton tetapi jumlah neutron berbeda.",
      ["atom","proton","neutron","elektron","isotop"], "atom"],

    ["periodik|golongan|periode|elektron valensi|elektronegativitas|energi ionisasi|jari-jari atom",
      "Sistem periodik unsur",
      ["Tabel periodik menyusun unsur menurut nomor atom dan pola sifat berulang.",
       "Unsur satu golongan sering memiliki elektron valensi serupa.",
       "Sifat seperti jari-jari atom dan elektronegativitas menunjukkan kecenderungan periodik.",
       "Letak unsur membantu memprediksi perilaku kimianya."],
      "Unsur satu golongan sering menunjukkan pola reaksi mirip karena konfigurasi elektron terluarnya serupa.",
      ["periode","golongan","valensi","elektronegativitas"], "periodic"],

    ["ikatan kimia|ikatan ion|ikatan kovalen|ikatan logam|lewis|bentuk molekul|kepolaran",
      "Ikatan kimia",
      ["Ikatan terbentuk dari interaksi elektron dan inti yang membuat sistem lebih stabil.",
       "Ikatan ion melibatkan tarik-menarik ion bermuatan berlawanan.",
       "Ikatan kovalen menggunakan pasangan elektron bersama.",
       "Bentuk molekul dan distribusi muatan menentukan kepolaran."],
      "Air bersifat polar karena bentuk molekul dan distribusi muatannya tidak simetris.",
      ["ion","kovalen","Lewis","molekul","polar"], "bond"],

    ["mol|avogadro|massa molar|volume molar|stoikiometri|pereaksi pembatas",
      "Mol dan stoikiometri",
      ["Mol adalah satuan jumlah zat untuk jumlah partikel yang sangat besar.",
       "Massa molar menghubungkan mol dengan massa yang dapat diukur.",
       "Persamaan reaksi setara memberikan perbandingan mol pereaksi dan produk.",
       "Pereaksi pembatas menentukan jumlah maksimum produk yang dapat terbentuk."],
      "Jika massa molar suatu zat 40 g/mol, maka 20 g zat setara dengan 0,5 mol.",
      ["mol","Avogadro","massa molar","koefisien","stoikiometri"], "mole"],

    ["larutan|elektrolit|nonelektrolit|molaritas|pengenceran",
      "Larutan dan konsentrasi",
      ["Larutan adalah campuran homogen antara pelarut dan zat terlarut.",
       "Molaritas menyatakan mol zat terlarut per liter larutan.",
       "Pengenceran menurunkan konsentrasi dengan menambahkan pelarut.",
       "Elektrolit menghasilkan ion bergerak sehingga dapat menghantarkan listrik."],
      "Larutan garam menghantarkan listrik karena memiliki ion yang dapat bergerak.",
      ["larutan","molaritas","elektrolit","pengenceran"], "solution"],

    ["asam|basa|ph|indikator|titrasi|buffer|hidrolisis",
      "Asam, basa, dan pH",
      ["Asam dan basa dapat dijelaskan dengan beberapa teori, termasuk Arrhenius dan Brønsted-Lowry.",
       "pH berhubungan dengan konsentrasi ion H⁺ dan menggunakan skala logaritmik.",
       "Selisih satu unit pH berarti perbedaan konsentrasi H⁺ sekitar sepuluh kali.",
       "Larutan penyangga membantu menahan perubahan pH dalam batas tertentu."],
      "Larutan pH 3 memiliki konsentrasi H⁺ sekitar 100 kali lebih besar daripada larutan pH 5.",
      ["asam","basa","pH","indikator","buffer"], "ph"],

    ["eksponen|berpangkat|akar|logaritma",
      "Eksponen, akar, dan logaritma",
      ["Eksponen menuliskan perkalian berulang secara ringkas.",
       "Pangkat negatif menyatakan kebalikan dan pangkat pecahan berkaitan dengan akar.",
       "Logaritma merupakan operasi kebalikan dari perpangkatan.",
       "Sifat logaritma dapat diturunkan dari sifat eksponen."],
      "Karena 10³ = 1000 maka log₁₀(1000) = 3.",
      ["eksponen","akar","logaritma","basis"], "exponent"],

    ["persamaan linear|pertidaksamaan|nilai mutlak",
      "Persamaan dan pertidaksamaan",
      ["Persamaan menyatakan dua bentuk memiliki nilai sama.",
       "Operasi yang sama pada kedua sisi mempertahankan kesetaraan.",
       "Tanda pertidaksamaan berbalik jika dikali atau dibagi bilangan negatif.",
       "Nilai mutlak dapat dipahami sebagai jarak terhadap nol."],
      "2x + 4 = 10 dapat diselesaikan menjadi 2x = 6 lalu x = 3.",
      ["persamaan","pertidaksamaan","variabel","nilai mutlak"], "equation"],

    ["sistem persamaan|spldv|spltv|eliminasi|substitusi",
      "Sistem persamaan",
      ["Solusi sistem harus memenuhi semua persamaan sekaligus.",
       "Substitusi mengganti variabel dengan bentuk setaranya.",
       "Eliminasi menghilangkan satu variabel dengan mengombinasikan persamaan.",
       "Secara grafik, solusi SPLDV adalah titik perpotongan dua garis."],
      "Jika dua garis berpotongan di (2,3), pasangan itu memenuhi kedua persamaan.",
      ["sistem","eliminasi","substitusi","solusi"], "system"],

    ["fungsi|domain|range|komposisi|invers",
      "Fungsi",
      ["Fungsi memasangkan setiap input pada domain dengan tepat satu output.",
       "Domain adalah input yang diperbolehkan, sedangkan range adalah output yang benar-benar diperoleh.",
       "Grafik memperlihatkan hubungan input-output secara visual.",
       "Komposisi menjalankan fungsi secara berurutan, sementara invers membalik hubungan jika memungkinkan."],
      "Jika f(x)=2x+1 maka f(3)=7, artinya input 3 dipetakan ke output 7.",
      ["fungsi","domain","range","grafik","invers"], "quadratic"],

    ["kuadrat|diskriminan|titik puncak",
      "Fungsi kuadrat",
      ["Fungsi kuadrat berbentuk f(x)=ax²+bx+c dengan a ≠ 0.",
       "Grafiknya berupa parabola.",
       "Akar adalah nilai x saat f(x)=0.",
       "Diskriminan memberi informasi jumlah akar real dan titik puncak menunjukkan nilai maksimum atau minimum."],
      "x²−5x+6=(x−2)(x−3), sehingga akarnya 2 dan 3.",
      ["parabola","akar","diskriminan","titik puncak"], "quadratic"],

    ["trigonometri|sinus|cosinus|tangen|aturan sinus|aturan cosinus",
      "Trigonometri",
      ["Sinus, cosinus, dan tangen menghubungkan sudut dengan perbandingan sisi segitiga siku-siku.",
       "sin θ = depan/miring, cos θ = samping/miring, dan tan θ = depan/samping.",
       "Rasio tersebut tetap untuk segitiga-segitiga sebangun dengan sudut yang sama.",
       "Aturan sinus dan cosinus memperluas analisis pada segitiga umum."],
      "Sudut elevasi dan jarak mendatar dapat digunakan untuk memperkirakan tinggi suatu objek.",
      ["sinus","cosinus","tangen","sudut","segitiga"], "trig"],

    ["statistika|mean|median|modus|kuartil|varians|simpangan baku|korelasi",
      "Statistika",
      ["Mean menggunakan seluruh nilai data tetapi dapat dipengaruhi pencilan.",
       "Median adalah nilai tengah setelah data diurutkan.",
       "Simpangan baku menunjukkan tingkat penyebaran data.",
       "Korelasi menunjukkan pola hubungan tetapi tidak otomatis membuktikan sebab-akibat."],
      "Satu nilai sangat besar dapat menaikkan mean secara tajam sementara median hanya berubah sedikit.",
      ["data","mean","median","simpangan baku","korelasi"], "stats"],

    ["peluang|ruang sampel|peluang bersyarat|bayes|nilai harapan",
      "Peluang",
      ["Peluang bernilai antara 0 dan 1.",
       "Ruang sampel berisi semua hasil yang mungkin.",
       "Peluang kejadian dapat dihitung dari hasil yang mendukung dibanding total hasil yang setara peluang.",
       "Peluang bersyarat memperhitungkan informasi bahwa kejadian lain telah terjadi."],
      "Pada dadu adil, peluang bilangan prima adalah 3/6=1/2 karena hasilnya 2, 3, dan 5.",
      ["peluang","ruang sampel","kejadian","bersyarat"], "probability"],

    ["barisan|deret|aritmetika|geometri",
      "Barisan dan deret",
      ["Barisan adalah urutan bilangan; deret adalah penjumlahan suku-sukunya.",
       "Barisan aritmetika memiliki beda tetap.",
       "Barisan geometri memiliki rasio tetap.",
       "Pola memungkinkan suku tertentu dihitung tanpa menuliskan semua suku sebelumnya."],
      "2, 5, 8, 11, ... adalah barisan aritmetika dengan beda 3.",
      ["barisan","deret","beda","rasio"], "sequence"],

    ["matriks|determinan|invers matriks",
      "Matriks",
      ["Matriks adalah susunan bilangan dalam baris dan kolom.",
       "Ukuran matriks menentukan operasi yang dapat dilakukan.",
       "Determinan memberikan informasi penting pada matriks persegi.",
       "Matriks dapat digunakan untuk menyelesaikan sistem persamaan dan merepresentasikan transformasi."],
      "Data penjualan beberapa produk dan bulan dapat disusun sebagai matriks agar lebih mudah diolah.",
      ["matriks","baris","kolom","determinan","invers"], "matrix"],

    ["limit",
      "Limit",
      ["Limit menggambarkan nilai yang didekati fungsi ketika input mendekati titik tertentu.",
       "Nilai limit tidak selalu sama dengan nilai fungsi tepat pada titik tersebut.",
       "Limit dapat dianalisis melalui grafik, tabel, atau aljabar.",
       "Konsep limit menjadi dasar turunan dan integral."],
      "Grafik dapat mempunyai lubang pada satu titik tetapi tetap mempunyai limit jika nilai dari kiri dan kanan mendekati angka yang sama.",
      ["limit","mendekati","grafik","aljabar"], "quadratic"],

    ["turunan|gradien|optimasi|maksimum|minimum",
      "Turunan",
      ["Turunan mengukur laju perubahan sesaat.",
       "Secara geometris turunan berkaitan dengan gradien garis singgung.",
       "Turunan positif biasanya menunjukkan fungsi meningkat secara lokal dan turunan negatif menunjukkan penurunan.",
       "Optimasi menggunakan turunan untuk mencari nilai maksimum atau minimum."],
      "Kecepatan sesaat adalah turunan posisi terhadap waktu.",
      ["turunan","gradien","laju perubahan","optimasi"], "quadratic"],

    ["rangka|tulang|persendian|sendi|otot|sistem gerak",
      "Sistem gerak",
      ["Rangka menopang tubuh, melindungi organ, dan menjadi tempat melekatnya otot.",
       "Sendi menghubungkan tulang dan menentukan jenis gerakan yang dapat dilakukan.",
       "Otot menghasilkan gaya melalui kontraksi dan bekerja bersama tulang sebagai sistem gerak.",
       "Gerak tubuh terjadi karena koordinasi tulang, sendi, otot, dan sistem saraf."],
      "Ketika siku ditekuk, beberapa otot berkontraksi dan otot pasangannya mengendur sehingga tulang bergerak pada sendi.",
      ["rangka","tulang","sendi","otot","gerak"], "force"],

    ["pesawat sederhana|tuas|katrol|bidang miring|roda berporos",
      "Pesawat sederhana",
      ["Pesawat sederhana membantu melakukan pekerjaan dengan mengubah besar atau arah gaya.",
       "Tuas menggunakan titik tumpu dan lengan gaya.",
       "Katrol dapat mengubah arah gaya dan pada susunan tertentu memberi keuntungan mekanis.",
       "Bidang miring mengurangi gaya yang diperlukan dengan memperbesar jarak tempuh."],
      "Papan miring memudahkan menaikkan barang ke tempat lebih tinggi karena gaya yang diperlukan lebih kecil walaupun jaraknya lebih panjang.",
      ["tuas","katrol","bidang miring","keuntungan mekanis"], "force"],

    ["zat aditif|pewarna|pemanis|pengawet|penyedap|label pangan|pola hidup sehat",
      "Zat aditif dan pilihan sehat",
      ["Zat aditif ditambahkan pada pangan untuk tujuan tertentu seperti warna, rasa, tekstur, atau daya simpan.",
       "Keamanan penggunaan bergantung pada jenis bahan dan jumlah yang digunakan.",
       "Label pangan membantu kita membaca komposisi dan informasi gizi.",
       "Pilihan sehat dibuat dengan melihat pola makan secara keseluruhan, bukan menilai satu bahan secara terpisah."],
      "Membandingkan label dua minuman dapat membantu melihat perbedaan kandungan gula dan ukuran sajian.",
      ["zat aditif","label pangan","komposisi","gizi"], "generic"],

    ["reproduksi|penyerbukan|pembuahan|vegetatif|generatif",
      "Reproduksi makhluk hidup",
      ["Reproduksi menghasilkan individu baru dan mempertahankan keberlanjutan spesies.",
       "Reproduksi seksual melibatkan peleburan sel reproduksi dan menghasilkan kombinasi genetik baru.",
       "Reproduksi aseksual tidak melibatkan peleburan gamet dan keturunannya cenderung lebih mirip secara genetik.",
       "Pada tumbuhan berbunga, penyerbukan membawa serbuk sari menuju bagian yang memungkinkan proses pembuahan."],
      "Stek batang merupakan contoh perbanyakan vegetatif, sedangkan pembentukan biji setelah penyerbukan dan pembuahan merupakan reproduksi generatif.",
      ["reproduksi","seksual","aseksual","penyerbukan","pembuahan"], "growth"],

    ["tanah|sumber daya alam|energi terbarukan|energi matahari|energi angin|energi air",
      "Sumber daya dan energi berkelanjutan",
      ["Tanah terbentuk melalui pelapukan batuan dan akumulasi bahan organik dalam waktu panjang.",
       "Sumber daya alam perlu digunakan dengan mempertimbangkan kemampuan alam memperbaruinya.",
       "Energi terbarukan berasal dari aliran energi yang terus tersedia seperti cahaya Matahari, angin, dan air.",
       "Teknologi ramah lingkungan tetap perlu dinilai berdasarkan manfaat, biaya, bahan, dan dampak selama siklus hidup."],
      "Panel surya mengubah energi cahaya menjadi listrik tanpa proses pembakaran saat digunakan.",
      ["tanah","sumber daya","energi terbarukan","keberlanjutan"], "environment"],

    ["dinamika rotasi|momen gaya|momen inersia|momentum sudut|titik berat",
      "Dinamika rotasi",
      ["Momen gaya mengukur kemampuan gaya memutar benda terhadap sumbu.",
       "Momen inersia menunjukkan kelembaman rotasi dan bergantung pada sebaran massa.",
       "Benda tegar seimbang jika resultan gaya dan resultan momen sama dengan nol.",
       "Momentum sudut kekal ketika momen gaya eksternal netto sama dengan nol."],
      "Pintu lebih mudah dibuka dengan mendorong dekat gagang daripada dekat engsel karena lengan momennya lebih besar.",
      ["rotasi","momen gaya","momen inersia","kesetimbangan"], "force"],

    ["elastisitas|tegangan|regangan|modulus|hukum hooke|pegas",
      "Elastisitas",
      ["Benda elastis dapat kembali mendekati bentuk awal setelah gaya dihilangkan selama batas elastis belum terlampaui.",
       "Tegangan membandingkan gaya dengan luas penampang, sedangkan regangan membandingkan perubahan ukuran dengan ukuran awal.",
       "Pada daerah elastis tertentu, pertambahan panjang pegas sebanding dengan gaya menurut Hukum Hooke.",
       "Pegas dapat menyimpan energi potensial elastis."],
      "Pegas pada timbangan memanjang ketika diberi beban dan kembali ketika beban dilepas selama masih berada pada daerah elastis.",
      ["elastisitas","tegangan","regangan","Hooke","pegas"], "force"],

    ["teori kinetik gas|gas ideal|persamaan gas ideal|tekanan gas|energi kinetik gas",
      "Teori kinetik gas",
      ["Tekanan gas muncul dari tumbukan partikel dengan dinding wadah.",
       "Suhu mutlak berkaitan dengan energi kinetik rata-rata partikel.",
       "Persamaan gas ideal menghubungkan tekanan, volume, jumlah zat, dan suhu.",
       "Model gas ideal adalah pendekatan yang paling baik pada kondisi tertentu."],
      "Gas dalam wadah tertutup yang dipanaskan dapat mengalami kenaikan tekanan karena partikel bergerak lebih cepat.",
      ["gas ideal","tekanan","volume","suhu","partikel"], "matter"],

    ["termodinamika|usaha gas|hukum i|hukum ii|mesin kalor",
      "Termodinamika",
      ["Termodinamika mempelajari kalor, usaha, dan perubahan energi internal.",
       "Hukum I Termodinamika merupakan bentuk kekekalan energi untuk sistem termal.",
       "Proses dapat dibedakan berdasarkan besaran yang tetap seperti suhu atau volume.",
       "Hukum II menjelaskan arah alami proses dan mengapa mesin kalor tidak dapat mengubah seluruh kalor menjadi usaha."],
      "Mesin kendaraan mengubah sebagian energi kimia menjadi kerja, tetapi sebagian energi tetap dilepas sebagai panas.",
      ["kalor","usaha","energi internal","mesin kalor","efisiensi"], "heat"],

    ["hidrokarbon|alkana|alkena|alkuna|isomer|minyak bumi",
      "Hidrokarbon",
      ["Hidrokarbon tersusun hanya atas karbon dan hidrogen.",
       "Alkana memiliki ikatan tunggal, alkena memiliki ikatan rangkap dua, dan alkuna memiliki ikatan rangkap tiga.",
       "Isomer mempunyai rumus molekul sama tetapi susunan atom berbeda.",
       "Minyak bumi adalah campuran kompleks hidrokarbon yang dipisahkan berdasarkan perbedaan sifat fisik."],
      "Dua hidrokarbon dengan rumus molekul sama dapat mempunyai titik didih berbeda karena struktur rantainya berbeda.",
      ["karbon","alkana","alkena","alkuna","isomer"], "bond"],

    ["termokimia|eksoterm|endoterm|entalpi|hukum hess|energi ikatan",
      "Termokimia",
      ["Reaksi eksoterm melepaskan energi ke lingkungan, sedangkan reaksi endoterm menyerap energi.",
       "Perubahan entalpi digunakan untuk menyatakan perubahan energi pada banyak proses kimia.",
       "Hukum Hess menyatakan perubahan entalpi hanya bergantung pada keadaan awal dan akhir.",
       "Energi ikatan dapat digunakan untuk memperkirakan perubahan energi reaksi."],
      "Pembakaran bahan bakar bersifat eksoterm karena melepaskan energi ke lingkungan.",
      ["eksoterm","endoterm","entalpi","Hess","energi ikatan"], "heat"],

    ["laju reaksi|teori tumbukan|katalis",
      "Laju reaksi",
      ["Reaksi terjadi ketika partikel bertumbukan dengan orientasi dan energi yang sesuai.",
       "Konsentrasi dan luas permukaan dapat mengubah frekuensi tumbukan.",
       "Suhu lebih tinggi meningkatkan energi kinetik rata-rata partikel.",
       "Katalis menyediakan jalur reaksi dengan energi aktivasi lebih rendah."],
      "Serbuk padat biasanya bereaksi lebih cepat daripada bongkahan dengan massa sama karena luas permukaannya lebih besar.",
      ["laju reaksi","tumbukan","energi aktivasi","katalis"], "matter"],

    ["kesetimbangan kimia|reversibel|kesetimbangan dinamis|le chatelier|kc|kp",
      "Kesetimbangan kimia",
      ["Pada kesetimbangan dinamis, reaksi maju dan balik tetap berlangsung tetapi lajunya sama.",
       "Konsentrasi zat pada keadaan setimbang tidak harus sama.",
       "Tetapan kesetimbangan menyatakan hubungan komposisi pada suhu tertentu.",
       "Prinsip Le Chatelier membantu memprediksi respons sistem terhadap perubahan kondisi."],
      "Menambah salah satu pereaksi dapat mendorong sistem menyesuaikan komposisi sehingga sebagian pereaksi tambahan digunakan.",
      ["reversibel","kesetimbangan","Kc","Kp","Le Chatelier"], "generic"],

    ["kelarutan|ksp|pengendapan|ion senama",
      "Kelarutan dan Ksp",
      ["Kelarutan menyatakan jumlah maksimum zat yang dapat larut pada kondisi tertentu.",
       "Ksp menggambarkan kesetimbangan ion dari senyawa yang sukar larut.",
       "Perbandingan hasil kali ion dengan Ksp dapat digunakan untuk memprediksi terbentuknya endapan.",
       "Ion senama dapat menggeser kesetimbangan dan menurunkan kelarutan."],
      "Penambahan ion yang sudah ada dalam kesetimbangan dapat mendorong pembentukan kembali padatan.",
      ["kelarutan","Ksp","endapan","ion senama"], "matter"],

    ["koloid|tyndall|gerak brown|koagulasi|sistem dispersi",
      "Koloid",
      ["Koloid memiliki ukuran partikel antara larutan sejati dan suspensi kasar.",
       "Efek Tyndall adalah penghamburan cahaya oleh partikel koloid.",
       "Gerak Brown merupakan gerak acak partikel akibat tumbukan dengan medium.",
       "Koagulasi adalah penggabungan partikel sehingga kestabilan koloid berkurang."],
      "Berkas cahaya tampak jelas di kabut karena tetesan kecil menghamburkan cahaya.",
      ["koloid","Tyndall","Brown","koagulasi"], "matter"],

    ["mutasi",
      "Mutasi",
      ["Mutasi adalah perubahan pada materi genetik.",
       "Mutasi dapat terjadi pada tingkat gen maupun kromosom.",
       "Dampaknya dapat netral, merugikan, atau pada kondisi tertentu menguntungkan.",
       "Mutasi merupakan salah satu sumber variasi genetik dalam populasi."],
      "Perubahan satu bagian DNA tidak selalu menghasilkan perubahan sifat karena dampaknya bergantung pada lokasi dan fungsi bagian tersebut.",
      ["mutasi","DNA","gen","kromosom","variasi"], "dna"],

    ["arus bolak-balik|rangkaian rlc|induktor|kapasitor",
      "Arus bolak-balik",
      ["Pada AC, nilai dan arah arus berubah secara periodik.",
       "Resistor, induktor, dan kapasitor memberi respons berbeda terhadap perubahan sinyal.",
       "Induktor menentang perubahan arus, sedangkan kapasitor berkaitan dengan penyimpanan muatan.",
       "Rangkaian RLC dapat mengalami resonansi pada frekuensi tertentu."],
      "Sistem distribusi listrik menggunakan AC karena tegangannya mudah diubah menggunakan transformator.",
      ["AC","resistor","induktor","kapasitor","RLC"], "wave"],

    ["gelombang elektromagnetik|spektrum elektromagnetik|radio|inframerah|ultraviolet|sinar-x|gamma",
      "Gelombang elektromagnetik",
      ["Gelombang elektromagnetik dapat merambat tanpa medium material.",
       "Spektrum mencakup radio, mikro, inframerah, cahaya tampak, ultraviolet, sinar-X, dan gamma.",
       "Frekuensi dan panjang gelombang saling berbanding terbalik pada kecepatan tetap.",
       "Energi foton meningkat ketika frekuensi meningkat."],
      "Gelombang radio digunakan untuk komunikasi, sedangkan sinar-X dimanfaatkan untuk pencitraan karena interaksinya dengan materi berbeda.",
      ["spektrum","frekuensi","panjang gelombang","foton"], "wave"],

    ["fisika modern|relativitas|kuantum|efek fotolistrik|dualisme|spektrum atom",
      "Fisika modern",
      ["Relativitas memperluas pemahaman ruang, waktu, energi, dan gerak.",
       "Teori kuantum menjelaskan perilaku sistem mikroskopik yang tidak selalu sesuai gambaran klasik.",
       "Efek fotolistrik menunjukkan cahaya mentransfer energi dalam paket yang disebut foton.",
       "Materi dan cahaya dapat menunjukkan sifat gelombang maupun partikel tergantung eksperimen."],
      "Pada efek fotolistrik, energi tiap foton ditentukan frekuensi cahaya, bukan hanya intensitasnya.",
      ["relativitas","kuantum","foton","dualisme"], "atom"],

    ["fisika inti|radioaktivitas|waktu paruh|fisi|fusi|inti atom",
      "Fisika inti",
      ["Inti atom tersusun atas proton dan neutron.",
       "Radioaktivitas adalah perubahan spontan inti yang tidak stabil.",
       "Waktu paruh adalah waktu yang dibutuhkan jumlah inti belum meluruh menjadi setengah.",
       "Fisi membelah inti berat, sedangkan fusi menggabungkan inti ringan."],
      "Waktu paruh berlaku secara statistik pada kumpulan atom dan bukan waktu pasti untuk satu atom tertentu.",
      ["inti","radioaktivitas","waktu paruh","fisi","fusi"], "atom"],

    ["sifat koligatif|tekanan uap|titik didih|titik beku|tekanan osmotik",
      "Sifat koligatif larutan",
      ["Sifat koligatif terutama bergantung pada jumlah partikel zat terlarut, bukan identitas kimianya.",
       "Zat terlarut nonvolatil dapat menurunkan tekanan uap pelarut.",
       "Akibatnya titik didih dapat naik dan titik beku dapat turun.",
       "Tekanan osmotik berkaitan dengan kecenderungan pelarut berpindah melalui membran semipermeabel."],
      "Penambahan zat terlarut tertentu dapat menurunkan titik beku air karena mengganggu pembentukan struktur padat pelarut.",
      ["koligatif","tekanan uap","titik didih","titik beku","osmosis"], "matter"],

    ["redoks|oksidasi|reduksi|bilangan oksidasi|oksidator|reduktor",
      "Reaksi redoks",
      ["Oksidasi berkaitan dengan pelepasan elektron atau kenaikan bilangan oksidasi.",
       "Reduksi berkaitan dengan penerimaan elektron atau penurunan bilangan oksidasi.",
       "Oksidasi dan reduksi selalu terjadi berpasangan.",
       "Oksidator direduksi, sedangkan reduktor dioksidasi."],
      "Elektron berpindah dari spesies yang teroksidasi menuju spesies yang direduksi.",
      ["oksidasi","reduksi","elektron","bilangan oksidasi"], "atom"],

    ["elektrokimia|sel galvani|elektrolisis|anoda|katoda|potensial elektrode|hukum faraday",
      "Elektrokimia",
      ["Elektrokimia menghubungkan reaksi redoks dengan energi listrik.",
       "Oksidasi selalu berlangsung di anoda dan reduksi di katoda.",
       "Sel galvani menghasilkan listrik dari reaksi spontan.",
       "Elektrolisis menggunakan energi listrik untuk mendorong reaksi yang tidak spontan."],
      "Baterai saat digunakan mengubah energi kimia menjadi energi listrik melalui reaksi redoks terpisah.",
      ["anoda","katoda","sel galvani","elektrolisis"], "circuit"],

    ["korosi",
      "Korosi",
      ["Korosi adalah proses elektrokimia yang merusak material, terutama logam.",
       "Air dan oksigen berperan pada banyak proses korosi besi.",
       "Ion terlarut dapat mempercepat korosi dengan meningkatkan konduktivitas.",
       "Korosi dapat diperlambat melalui pelapisan atau perlindungan elektrokimia."],
      "Cat menghambat korosi dengan mengurangi kontak langsung besi dengan air dan oksigen.",
      ["korosi","oksidasi","besi","pelapisan"], "generic"],

    ["kimia unsur|golongan utama|unsur transisi|mineral",
      "Kimia unsur",
      ["Sifat unsur berkaitan dengan struktur elektron dan letaknya dalam tabel periodik.",
       "Unsur dalam satu golongan sering menunjukkan pola reaktivitas yang mirip.",
       "Banyak unsur ditemukan di alam dalam bentuk mineral atau senyawa.",
       "Pemanfaatan unsur perlu mempertimbangkan sifat, kelimpahan, pengolahan, dan dampak lingkungan."],
      "Logam yang berbeda dipilih untuk kegunaan berbeda karena sifat mekanik, kimia, dan konduktivitasnya tidak sama.",
      ["unsur","golongan","mineral","sifat periodik"], "periodic"],

    ["senyawa karbon|alkohol|eter|aldehida|keton|asam karboksilat|ester|benzena",
      "Senyawa karbon dan gugus fungsi",
      ["Gugus fungsi adalah bagian molekul yang menentukan banyak pola sifat dan reaksi senyawa organik.",
       "Alkohol memiliki gugus hidroksil; aldehida dan keton memiliki gugus karbonil.",
       "Asam karboksilat memiliki gugus karboksil, sedangkan ester memiliki struktur turunan tertentu dari asam.",
       "Benzena memiliki cincin aromatik dengan sifat khas."],
      "Dua senyawa dengan jumlah atom karbon mirip dapat memiliki bau atau kelarutan berbeda karena gugus fungsinya berbeda.",
      ["gugus fungsi","alkohol","karbonil","ester","benzena"], "bond"],

    ["makromolekul|polimer|karbohidrat|protein|lemak|plastik",
      "Makromolekul",
      ["Polimer tersusun dari unit berulang yang disebut monomer.",
       "Karbohidrat berperan sebagai sumber energi dan struktur tertentu.",
       "Protein tersusun dari asam amino dan memiliki fungsi sangat beragam.",
       "Lipid berperan pada penyimpanan energi, membran, dan sinyal."],
      "Plastik dan protein sama-sama dapat berupa polimer, tetapi unit penyusun dan sifatnya sangat berbeda.",
      ["polimer","monomer","karbohidrat","protein","lipid"], "generic"],

    ["transformasi geometri|translasi|refleksi|rotasi|dilatasi",
      "Transformasi geometri",
      ["Translasi menggeser setiap titik dengan vektor yang sama.",
       "Refleksi mencerminkan titik terhadap garis atau sumbu.",
       "Rotasi memutar titik terhadap pusat tertentu.",
       "Dilatasi mengubah ukuran berdasarkan faktor skala."],
      "Memperbesar gambar terhadap pusat tertentu merupakan dilatasi dengan faktor skala lebih dari satu.",
      ["translasi","refleksi","rotasi","dilatasi"], "generic"],

    ["lingkaran|garis singgung",
      "Lingkaran",
      ["Lingkaran adalah himpunan titik yang berjarak sama dari pusat.",
       "Jari-jari menentukan ukuran lingkaran.",
       "Garis singgung menyentuh lingkaran pada satu titik dan tegak lurus terhadap jari-jari di titik tersebut.",
       "Persamaan lingkaran menerjemahkan sifat jarak tetap ke koordinat."],
      "Lingkaran berpusat di (0,0) dengan jari-jari r memiliki persamaan x²+y²=r².",
      ["lingkaran","pusat","jari-jari","garis singgung"], "quadratic"],

    ["kaidah pencacahan|faktorial|permutasi|kombinasi",
      "Kaidah pencacahan",
      ["Aturan perkalian digunakan ketika proses terdiri atas beberapa tahap pilihan.",
       "Faktorial n! adalah hasil kali bilangan positif dari n sampai 1.",
       "Permutasi memperhatikan urutan.",
       "Kombinasi tidak memperhatikan urutan."],
      "Memilih ketua dan wakil berbeda dengan memilih dua anggota biasa karena urutan jabatan penting.",
      ["pencacahan","faktorial","permutasi","kombinasi"], "probability"],

    ["pemodelan matematika|model pertumbuhan|model optimasi|evaluasi model",
      "Pemodelan matematika",
      ["Model menerjemahkan situasi nyata menjadi variabel dan hubungan matematika.",
       "Setiap model menggunakan asumsi sehingga merupakan penyederhanaan realitas.",
       "Parameter dapat diperkirakan dari data.",
       "Hasil model harus diterjemahkan kembali ke konteks dan diuji apakah masuk akal."],
      "Model pertumbuhan pengguna dapat bekerja baik dalam satu periode tetapi perlu dievaluasi ketika kondisi nyata berubah.",
      ["model","variabel","asumsi","parameter","validasi"], "stats"],

    ["integral|anti-turunan|luas daerah",
      "Integral",
      ["Integral dapat dipahami sebagai proses akumulasi.",
       "Integral tak tentu mencari keluarga antiturunan.",
       "Integral tentu menghitung akumulasi pada suatu interval.",
       "Integral dan turunan dihubungkan oleh Teorema Dasar Kalkulus."],
      "Integral fungsi kecepatan terhadap waktu memberikan perubahan posisi.",
      ["integral","antiturunan","akumulasi","luas"], "quadratic"]
  ].map(x => ({ rx:new RegExp(x[0]), title:x[1], points:x[2], example:x[3], keywords:x[4], visual:x[5] }));

  function get(subject, lesson, chapter, level = null, grade = null) {
    const smpExact = level === "SMP" ? window.BISASMPContent?.[grade]?.[lesson] : null;
    if (smpExact) return { ...smpExact, subject, lesson, chapter, level, grade };

    const exact = window.BISAExactContent?.[subject]?.[lesson];
    if (exact) {
      const material = { ...exact, subject, lesson, chapter };
      return window.BISADeepContent?.enrich(material) || material;
    }
    const text = norm(lesson+" "+chapter);
    const r = rules.find(x => x.rx.test(text));
    const common = base[subject] || base.IPA;
    if (r) return {
      ...r, subject, lesson, chapter,
      intro: `${common} Pada subbab “${lesson}”, kita mempelajari ${r.title.toLowerCase()} secara bertahap agar konsepnya mudah digunakan, bukan sekadar dihafal.`,
      summary: `Inti materi ${lesson}: pahami pengertian, hubungan antarbagian, contoh, serta alasan di balik proses atau perhitungannya.`,
      questions: [`Jelaskan ${lesson} dengan bahasamu sendiri.`, `Berikan satu contoh penerapan ${lesson} dan jelaskan alasannya.`]
    };
    return {
      subject, lesson, chapter, title:lesson,
      intro:`${common} Subbab “${lesson}” merupakan bagian dari bab “${chapter}”. Pelajari konsepnya dari pengertian, unsur penting, hubungan sebab-akibat, dan contoh penerapan.`,
      points:[
        `Tuliskan pengertian ${lesson} dengan bahasamu sendiri.`,
        `Kenali bagian, besaran, struktur, atau langkah yang paling penting pada ${lesson}.`,
        `Hubungkan ${lesson} dengan materi sebelum dan sesudahnya agar tidak dipahami sebagai fakta terpisah.`,
        `Gunakan contoh nyata, gambar, data, atau soal sederhana untuk menguji pemahaman.`
      ],
      example:`Carilah satu contoh ${lesson} di lingkungan, teknologi, tubuh, data, atau masalah sehari-hari. Tunjukkan bagian mana yang mewakili konsep yang sedang dipelajari.`,
      keywords:[lesson,chapter,"konsep","penerapan"],
      summary:`${lesson} perlu dipahami melalui makna, hubungan, dan penerapannya.`,
      questions:[`Apa pengertian ${lesson}?`,`Apa satu contoh ${lesson} dalam kehidupan atau masalah nyata?`],
      visual:"generic"
    };
  }

  const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const color = {IPA:"#2fbf71",Biologi:"#29a36a",Fisika:"#4a78ff",Kimia:"#ef6c8f",Matematika:"#f0a12b"};

  function diagram(d) {
    const c=color[d.subject]||"#6d5dfc", t=esc(d.lesson);
    if(d.visual==="heat") return `<svg viewBox="0 0 820 330"><rect width="820" height="330" rx="28" fill="${c}" opacity=".07"/><rect x="80" y="90" width="220" height="140" rx="22" fill="#ff9a80"/><text x="190" y="155" text-anchor="middle" font-size="28" font-weight="800">PANAS</text><path d="M330 160 H490" stroke="${c}" stroke-width="9"/><polygon points="490,160 462,144 462,176" fill="${c}"/><text x="410" y="125" text-anchor="middle" font-size="17" font-weight="700">kalor berpindah</text><rect x="520" y="90" width="220" height="140" rx="22" fill="#93d7ff"/><text x="630" y="155" text-anchor="middle" font-size="28" font-weight="800">DINGIN</text></svg>`;
    if(d.visual==="cell") return `<svg viewBox="0 0 820 330"><rect width="820" height="330" rx="28" fill="${c}" opacity=".07"/><circle cx="410" cy="160" r="118" fill="white" stroke="${c}" stroke-width="5"/><circle cx="380" cy="155" r="42" fill="${c}" opacity=".3"/><ellipse cx="485" cy="115" rx="35" ry="18" fill="${c}" opacity=".35"/><ellipse cx="485" cy="215" rx="40" ry="20" fill="${c}" opacity=".25"/><text x="380" y="160" text-anchor="middle" font-size="15" font-weight="800">Nukleus</text><text x="410" y="305" text-anchor="middle" font-size="18" font-weight="800" fill="${c}">Sel = unit dasar kehidupan</text></svg>`;
    if(d.visual==="ecosystem") return `<svg viewBox="0 0 820 330"><rect width="820" height="330" rx="28" fill="${c}" opacity=".07"/><circle cx="100" cy="75" r="34" fill="#ffd45b"/><rect x="150" y="150" width="150" height="80" rx="18" fill="#8bd58d"/><rect x="340" y="150" width="150" height="80" rx="18" fill="#88c8ff"/><rect x="530" y="150" width="150" height="80" rx="18" fill="#b69cff"/><text x="225" y="196" text-anchor="middle" font-weight="800">Produsen</text><text x="415" y="196" text-anchor="middle" font-weight="800">Konsumen</text><text x="605" y="196" text-anchor="middle" font-weight="800">Predator</text><path d="M300 190 H340 M490 190 H530" stroke="${c}" stroke-width="6"/><polygon points="340,190 325,181 325,199" fill="${c}"/><polygon points="530,190 515,181 515,199" fill="${c}"/></svg>`;
    if(d.visual==="motion"||d.visual==="force") return `<svg viewBox="0 0 820 330"><rect width="820" height="330" rx="28" fill="${c}" opacity=".07"/><line x1="90" y1="245" x2="730" y2="245" stroke="#9aa1b4" stroke-width="4"/><rect x="330" y="145" width="160" height="95" rx="18" fill="${c}"/><text x="410" y="200" text-anchor="middle" fill="white" font-size="22" font-weight="800">BENDA</text><path d="M505 175 H665" stroke="${c}" stroke-width="9"/><polygon points="665,175 638,160 638,190" fill="${c}"/><text x="585" y="145" text-anchor="middle" font-weight="800" fill="${c}">arah / gaya</text></svg>`;
    if(d.visual==="wave") {let p=[];for(let x=70;x<750;x+=8)p.push(`${x},${180-Math.sin((x-70)/55*Math.PI)*65}`);return `<svg viewBox="0 0 820 330"><rect width="820" height="330" rx="28" fill="${c}" opacity=".07"/><line x1="70" y1="180" x2="750" y2="180" stroke="#999" stroke-width="2"/><polyline points="${p.join(" ")}" fill="none" stroke="${c}" stroke-width="7"/><text x="410" y="300" text-anchor="middle" font-size="18" font-weight="800" fill="${c}">Pola gelombang periodik</text></svg>`;}
    if(d.visual==="circuit") return `<svg viewBox="0 0 820 330"><rect width="820" height="330" rx="28" fill="${c}" opacity=".07"/><path d="M150 90 H660 V250 H150 Z" fill="none" stroke="${c}" stroke-width="6"/><line x1="150" y1="135" x2="150" y2="205" stroke="${c}" stroke-width="6"/><line x1="135" y1="150" x2="165" y2="150" stroke="${c}" stroke-width="5"/><line x1="125" y1="195" x2="175" y2="195" stroke="${c}" stroke-width="10"/><circle cx="660" cy="170" r="38" fill="white" stroke="${c}" stroke-width="5"/><path d="M635 145 L685 195 M685 145 L635 195" stroke="${c}" stroke-width="4"/></svg>`;
    if(d.visual==="atom"||d.visual==="dna"||d.visual==="periodic") return `<svg viewBox="0 0 820 330"><rect width="820" height="330" rx="28" fill="${c}" opacity=".07"/><circle cx="410" cy="160" r="32" fill="${c}"/><ellipse cx="410" cy="160" rx="160" ry="60" fill="none" stroke="${c}" stroke-width="4"/><ellipse cx="410" cy="160" rx="80" ry="150" fill="none" stroke="${c}" stroke-width="4" transform="rotate(35 410 160)"/><circle cx="565" cy="160" r="10" fill="${c}"/><circle cx="350" cy="40" r="10" fill="${c}"/><text x="410" y="310" text-anchor="middle" font-size="18" font-weight="800" fill="${c}">${t}</text></svg>`;
    if(d.visual==="trig") return `<svg viewBox="0 0 820 330"><rect width="820" height="330" rx="28" fill="${c}" opacity=".07"/><polygon points="180,260 650,260 650,80" fill="${c}" opacity=".13" stroke="${c}" stroke-width="5"/><path d="M245 260 A65 65 0 0 1 282 208" fill="none" stroke="${c}" stroke-width="4"/><text x="270" y="235" font-size="20" font-weight="800" fill="${c}">θ</text><text x="415" y="295" text-anchor="middle">sisi samping</text><text x="675" y="180">sisi depan</text></svg>`;
    if(d.visual==="stats") return `<svg viewBox="0 0 820 330"><rect width="820" height="330" rx="28" fill="${c}" opacity=".07"/><line x1="120" y1="275" x2="710" y2="275" stroke="#999" stroke-width="3"/><rect x="180" y="190" width="80" height="85" rx="8" fill="${c}" opacity=".55"/><rect x="310" y="125" width="80" height="150" rx="8" fill="${c}" opacity=".75"/><rect x="440" y="80" width="80" height="195" rx="8" fill="${c}"/><rect x="570" y="160" width="80" height="115" rx="8" fill="${c}" opacity=".65"/></svg>`;
    if(d.visual==="quadratic") return `<svg viewBox="0 0 820 330"><rect width="820" height="330" rx="28" fill="${c}" opacity=".07"/><line x1="100" y1="265" x2="720" y2="265" stroke="#999" stroke-width="3"/><line x1="180" y1="300" x2="180" y2="45" stroke="#999" stroke-width="3"/><path d="M240 75 Q410 315 650 70" fill="none" stroke="${c}" stroke-width="7"/></svg>`;
    return `<svg viewBox="0 0 820 330"><rect width="820" height="330" rx="28" fill="${c}" opacity=".07"/><rect x="300" y="115" width="220" height="100" rx="22" fill="${c}"/><text x="410" y="158" text-anchor="middle" fill="white" font-size="19" font-weight="800">${t.length>28?t.slice(0,27)+"…":t}</text><text x="410" y="188" text-anchor="middle" fill="white">konsep utama</text><circle cx="145" cy="115" r="58" fill="white" stroke="${c}" stroke-width="3"/><circle cx="675" cy="115" r="58" fill="white" stroke="${c}" stroke-width="3"/><circle cx="410" cy="278" r="38" fill="white" stroke="${c}" stroke-width="3"/><line x1="203" y1="125" x2="300" y2="150" stroke="${c}" stroke-width="3"/><line x1="617" y1="125" x2="520" y2="150" stroke="${c}" stroke-width="3"/><line x1="410" y1="215" x2="410" y2="240" stroke="${c}" stroke-width="3"/></svg>`;
  }

  function render(d){
    const formula = d.deep?.formula?.length ? `
      <section class="reading-section formula-section">
        <span class="reading-label">RUMUS / NOTASI PENTING</span>
        <h3>Gunakan dengan memahami arti setiap besaran</h3>
        <div class="formula-grid">
          ${d.deep.formula.map(row => `<div><span>${esc(row[0])}</span><strong>${esc(row[1])}</strong></div>`).join("")}
        </div>
      </section>` : "";

    const comparison = d.deep?.comparison ? `
      <section class="reading-section comparison-section">
        <span class="reading-label">BANDINGKAN KONSEP</span>
        <h3>Perbedaan yang perlu diperhatikan</h3>
        <div class="material-table-wrap">
          <table class="material-table">
            <thead><tr>${d.deep.comparison.headers.map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead>
            <tbody>${d.deep.comparison.rows.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </div>
      </section>` : "";

    const worked = d.deep?.worked ? `
      <section class="reading-section worked-section">
        <span class="reading-label">CONTOH SOAL / ANALISIS</span>
        <h3>${esc(d.deep.worked.q)}</h3>
        <div class="worked-steps">
          ${d.deep.worked.steps.map((step,i)=>`<div><span>${i+1}</span><p>${esc(step)}</p></div>`).join("")}
        </div>
        <div class="worked-answer"><strong>Jawaban:</strong> ${esc(d.deep.worked.answer)}</div>
      </section>` : "";

    const deeper = d.deep ? `
      <section class="reading-section chapter-perspective">
        <span class="reading-label">GAMBARAN BESAR BAB</span>
        <p>${esc(d.deep.chapterContext)}</p>
      </section>

      <section class="reading-section deep-focus-section">
        <span class="reading-label">PEMBAHASAN LEBIH MENDALAM</span>
        <h3>Cara memahami dan menalar materi</h3>
        <p>${esc(d.deep.focus)}</p>
      </section>

      ${formula}
      ${comparison}

      <section class="reading-section connection-section">
        <span class="reading-label">HUBUNGAN ANTARSUBBAB</span>
        <h3>Hubungkan dengan materi sebelum dan sesudahnya</h3>
        <p>${esc(d.deep.connections)}</p>
      </section>

      ${worked}
    ` : "";

    return `<div class="bisa-reading">
      <div class="learning-visual">${diagram(d)}</div>

      <section class="reading-section">
        <span class="reading-label">DASAR PENGETAHUAN</span>
        <h3>${d.title}</h3>
        <p>${d.intro}</p>
      </section>

      ${d.detail ? `<section class="reading-section discussion-section">
        <span class="reading-label">PEMBAHASAN MATERI</span>
        <h3>Penjelasan konsep</h3>
        <p>${d.detail}</p>
      </section>` : ""}

      ${deeper}

      <section class="reading-section">
        <span class="reading-label">PAHAMI BERTAHAP</span>
        <h3>Konsep penting yang harus dikuasai</h3>
        <div class="reading-points">
          ${d.points.map((p,i)=>`<article><span>${i+1}</span><p>${p}</p></article>`).join("")}
        </div>
      </section>

      <section class="reading-section example-section">
        <span class="reading-label">CONTOH KONTEKSTUAL</span>
        <h3>Hubungkan dengan kehidupan</h3>
        <p>${d.example}</p>
      </section>

      ${d.misconception ? `<section class="reading-section misconception-section">
        <span class="reading-label">JANGAN TERTUKAR</span>
        <h3>Miskonsepsi yang sering terjadi</h3>
        <p>${d.misconception}</p>
      </section>` : ""}

      <section class="reading-section">
        <span class="reading-label">KATA KUNCI</span>
        <div class="keyword-cloud">${d.keywords.map(k=>`<span>${esc(k)}</span>`).join("")}</div>
      </section>

      <section class="reading-section summary-section">
        <span class="reading-label">RANGKUMAN 1 MENIT</span>
        <p><strong>${d.summary}</strong></p>
      </section>

      ${d.deep ? `<section class="reading-section mastery-section">
        <span class="reading-label">TARGET PENGUASAAN</span>
        <h3>Sebelum lanjut, pastikan kamu bisa:</h3>
        <div class="mastery-checklist">
          ${d.deep.mastery.map(item=>`<label><input type="checkbox"> <span>${esc(item)}</span></label>`).join("")}
        </div>
      </section>` : ""}

      <section class="reading-section check-section">
        <span class="reading-label">CEK PEMAHAMAN</span>
        <h3>Jawab tanpa melihat kembali materi</h3>
        <ol>${d.questions.map(q=>`<li>${q}</li>`).join("")}</ol>
      </section>
    </div>`;
  }

  return {get,render};
})();
