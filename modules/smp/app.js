const lessons = [
  {
    id:'VII-1', grade:'VII', number:1, icon:'🔬', title:'Hakikat IPA dan Metode Ilmiah',
    intro:'Mengenal IPA sebagai cara memahami alam melalui pengamatan, pengukuran, percobaan, dan penarikan kesimpulan berdasarkan bukti.',
    sections:[
      {title:'Apa itu Ilmu Pengetahuan Alam?', body:`IPA adalah ilmu yang mempelajari gejala alam dan segala sesuatu yang ada di dalamnya, mulai dari makhluk hidup, materi, energi, Bumi, hingga benda langit. IPA bukan sekadar kumpulan fakta, tetapi juga cara berpikir secara logis dan sistematis.<br><br>Cabang IPA antara lain <b>Biologi</b> (makhluk hidup), <b>Fisika</b> (materi, gerak, gaya, energi), <b>Kimia</b> (zat dan perubahannya), <b>Ilmu Bumi</b>, dan <b>Astronomi</b>.`},
      {title:'Langkah metode ilmiah', body:`Metode ilmiah membantu kita menjawab pertanyaan dengan bukti. Urutannya: <b>pengamatan → merumuskan masalah → membuat hipotesis → merancang eksperimen → mengumpulkan data → menganalisis → menyimpulkan</b>.<div class="callout">Contoh: “Apakah cahaya memengaruhi pertumbuhan tanaman?” Hipotesis harus diuji melalui percobaan, bukan hanya dipercaya.</div>`},
      {title:'Variabel percobaan', body:`<ul><li><b>Variabel bebas:</b> faktor yang sengaja diubah.</li><li><b>Variabel terikat:</b> hasil yang diamati.</li><li><b>Variabel kontrol:</b> faktor lain yang dibuat sama agar percobaan adil.</li></ul>`},
      {title:'Besaran, satuan, dan pengukuran', body:`Besaran adalah sesuatu yang dapat diukur dan memiliki nilai serta satuan. Contoh: panjang (meter), massa (kilogram), waktu (sekon), dan suhu (kelvin). Alat ukur yang digunakan harus sesuai, misalnya penggaris untuk panjang, neraca untuk massa, stopwatch untuk waktu, dan termometer untuk suhu.`},
      {title:'Keselamatan laboratorium', body:`Gunakan alat sesuai fungsi, baca label bahan, jangan mencicipi bahan kimia, gunakan perlengkapan keselamatan bila diperlukan, jangan bercanda saat praktikum, dan segera laporkan kejadian yang tidak aman kepada guru.`}
    ],
    quiz:{q:'Dalam percobaan pengaruh cahaya terhadap pertumbuhan tanaman, tinggi tanaman termasuk ...', options:['variabel bebas','variabel terikat','variabel kontrol','satuan pokok'], answer:1, explain:'Tinggi tanaman adalah hasil yang diukur, sehingga menjadi variabel terikat.'},
    visual:'method'
  },
  {
    id:'VII-2', grade:'VII', number:2, icon:'🧪', title:'Zat dan Perubahannya',
    intro:'Memahami materi, susunan partikel, perubahan wujud, unsur, senyawa, campuran, serta perubahan fisika dan kimia.',
    sections:[
      {title:'Materi dan partikel', body:`Materi adalah segala sesuatu yang mempunyai massa dan menempati ruang. Materi tersusun dari partikel yang sangat kecil. Perbedaan susunan dan gerak partikel menyebabkan sifat zat padat, cair, dan gas berbeda.`},
      {title:'Padat, cair, dan gas', body:`<ul><li><b>Padat:</b> bentuk dan volume tetap; partikel rapat.</li><li><b>Cair:</b> volume tetap, bentuk mengikuti wadah; partikel dapat bergeser.</li><li><b>Gas:</b> bentuk dan volume mengikuti ruang; partikel berjauhan dan bergerak bebas.</li></ul>`},
      {title:'Perubahan wujud', body:`Perubahan wujud meliputi mencair (padat→cair), membeku (cair→padat), menguap (cair→gas), mengembun (gas→cair), menyublim (padat→gas), dan mengkristal/deposisi (gas→padat). Perubahan wujud termasuk perubahan fisika karena tidak menghasilkan zat baru.`},
      {title:'Unsur, senyawa, dan campuran', body:`<b>Unsur</b> tersusun dari satu jenis atom, misalnya besi dan oksigen. <b>Senyawa</b> tersusun dari dua atau lebih unsur yang berikatan kimia, misalnya H₂O. <b>Campuran</b> adalah gabungan beberapa zat tanpa membentuk zat baru. Campuran homogen tampak seragam, sedangkan campuran heterogen tidak seragam.`},
      {title:'Perubahan fisika dan kimia', body:`Perubahan fisika tidak menghasilkan zat baru, misalnya es mencair. Perubahan kimia menghasilkan zat baru, misalnya besi berkarat dan kayu terbakar. Tanda reaksi kimia dapat berupa perubahan warna, terbentuk gas/endapan, perubahan suhu, atau muncul bau tertentu.`}
    ],
    quiz:{q:'Peristiwa yang menghasilkan zat baru adalah ...', options:['es mencair','air membeku','besi berkarat','gula larut'], answer:2, explain:'Besi berkarat menghasilkan senyawa baru, sehingga termasuk perubahan kimia.'},
    visual:'matter'
  },
  {
    id:'VII-3', grade:'VII', number:3, icon:'🌡️', title:'Suhu, Kalor, dan Pemuaian',
    intro:'Mempelajari suhu, kalor, perpindahan panas, perubahan suhu dan wujud, serta pemuaian benda.',
    sections:[
      {title:'Suhu dan termometer', body:`Suhu menyatakan tingkat panas atau dingin suatu benda. Suhu diukur menggunakan termometer. Skala yang sering dijumpai antara lain Celsius, Fahrenheit, dan Kelvin.`},
      {title:'Kalor sebagai energi', body:`Kalor adalah energi yang berpindah karena perbedaan suhu. Kalor mengalir secara spontan dari benda bersuhu lebih tinggi menuju benda bersuhu lebih rendah sampai tercapai keseimbangan termal.`},
      {title:'Pengaruh kalor', body:`Kalor dapat menaikkan atau menurunkan suhu, mengubah wujud zat, dan menyebabkan pemuaian. Banyaknya kalor yang diperlukan dipengaruhi massa, jenis bahan, dan besar perubahan suhu.`},
      {title:'Konduksi, konveksi, radiasi', body:`<ul><li><b>Konduksi:</b> perpindahan kalor tanpa perpindahan zat secara keseluruhan, umum pada padatan.</li><li><b>Konveksi:</b> perpindahan kalor bersama aliran fluida.</li><li><b>Radiasi:</b> perpindahan energi melalui gelombang elektromagnetik dan tidak memerlukan medium.</li></ul>`},
      {title:'Pemuaian', body:`Ketika dipanaskan, banyak bahan memuai. Celah sambungan rel atau jembatan dibuat untuk memberi ruang bagi perubahan panjang akibat perubahan suhu.`}
    ],
    quiz:{q:'Panas Matahari sampai ke Bumi terutama melalui ...', options:['konduksi','konveksi','radiasi','pemuaian'], answer:2, explain:'Ruang antara Matahari dan Bumi hampir hampa, sehingga perpindahan panas berlangsung melalui radiasi.'},
    visual:'heat'
  },
  {
    id:'VII-4', grade:'VII', number:4, icon:'🚲', title:'Gerak, Gaya, dan Energi',
    intro:'Mempelajari perubahan posisi, jarak, kelajuan, gaya, serta berbagai bentuk dan perubahan energi.',
    sections:[
      {title:'Gerak dan titik acuan', body:`Benda dikatakan bergerak apabila posisinya berubah terhadap titik acuan. Karena bergantung pada acuan, gerak bersifat relatif.`},
      {title:'Jarak, waktu, dan kelajuan', body:`Kelajuan menunjukkan jarak yang ditempuh tiap satuan waktu.<div class="formula">v = s / t</div>Jika sepeda menempuh 100 m dalam 20 s, kelajuannya 5 m/s.`},
      {title:'Gaya', body:`Gaya adalah tarikan atau dorongan. Gaya dapat membuat benda bergerak, berhenti, berubah arah, berubah kecepatan, atau berubah bentuk. Satuan SI gaya adalah newton (N).`},
      {title:'Jenis gaya', body:`Contoh gaya antara lain gaya gravitasi, gesek, pegas, magnet, listrik, dan gaya otot. Gaya gesek dapat menguntungkan, misalnya membantu ban mencengkeram jalan, tetapi juga dapat menyebabkan keausan.`},
      {title:'Energi dan perubahannya', body:`Energi adalah kemampuan untuk melakukan usaha atau menyebabkan perubahan. Bentuk energi antara lain kinetik, potensial, kimia, listrik, panas, cahaya, dan bunyi. Energi dapat berubah dari satu bentuk ke bentuk lain.`}
    ],
    quiz:{q:'Sepeda menempuh 150 m dalam 30 s. Kelajuannya adalah ...', options:['3 m/s','5 m/s','10 m/s','180 m/s'], answer:1, explain:'v = 150 ÷ 30 = 5 m/s.'},
    visual:'motion'
  },
  {
    id:'VII-5', grade:'VII', number:5, icon:'🌿', title:'Makhluk Hidup dan Lingkungannya',
    intro:'Mempelajari ciri makhluk hidup, klasifikasi, ekosistem, rantai makanan, dan pencemaran lingkungan.',
    sections:[
      {title:'Ciri makhluk hidup', body:`Makhluk hidup bernapas, membutuhkan nutrisi, bergerak, tumbuh dan berkembang, berkembang biak, peka terhadap rangsangan, melakukan ekskresi, dan mampu menyesuaikan diri terhadap lingkungan.`},
      {title:'Klasifikasi', body:`Klasifikasi mengelompokkan makhluk hidup berdasarkan persamaan dan perbedaan ciri. Urutan kelompok dari besar ke kecil: kingdom, filum/divisio, kelas, ordo, famili, genus, spesies.`},
      {title:'Ekosistem', body:`Ekosistem adalah hubungan timbal balik antara komponen <b>biotik</b> dan <b>abiotik</b>. Biotik meliputi makhluk hidup; abiotik meliputi cahaya, air, udara, tanah, suhu, dan mineral.`},
      {title:'Rantai dan jaring makanan', body:`Produsen membuat makanan sendiri, konsumen memperoleh energi dengan memakan organisme lain, dan pengurai mengembalikan materi ke lingkungan. Beberapa rantai makanan yang saling berhubungan membentuk jaring-jaring makanan.`},
      {title:'Pencemaran dan 3R', body:`Pencemaran dapat terjadi pada air, udara, dan tanah. Upaya sederhana yang dapat dilakukan adalah <b>Reduce, Reuse, Recycle</b> serta membuang limbah sesuai aturan.`}
    ],
    quiz:{q:'Pada rantai rumput → belalang → katak → ular, produsen adalah ...', options:['rumput','belalang','katak','ular'], answer:0, explain:'Rumput membuat makanan sendiri melalui fotosintesis sehingga berperan sebagai produsen.'},
    visual:'ecosystem'
  },

  {
    id:'VIII-1', grade:'VIII', number:1, icon:'🧫', title:'Sel, Jaringan, Organ, dan Sistem Organ',
    intro:'Memahami sel sebagai unit dasar kehidupan dan tingkatan organisasi dari sel hingga organisme.',
    sections:[
      {title:'Sel sebagai unit kehidupan', body:`Sel adalah unit struktural dan fungsional terkecil makhluk hidup. Organisme uniseluler terdiri atas satu sel, sedangkan organisme multiseluler tersusun atas banyak sel yang memiliki pembagian tugas.`},
      {title:'Bagian umum sel', body:`Membran sel mengatur pertukaran zat, sitoplasma menjadi tempat banyak reaksi, inti menyimpan materi genetik, dan mitokondria berperan dalam respirasi seluler.`},
      {title:'Sel tumbuhan dan hewan', body:`Sel tumbuhan memiliki dinding sel, kloroplas, dan umumnya vakuola besar. Sel hewan tidak memiliki dinding sel dan kloroplas. Keduanya mempunyai membran sel, sitoplasma, inti, dan banyak organel lain.`},
      {title:'Organisasi kehidupan', body:`Tingkatan organisasi: <b>sel → jaringan → organ → sistem organ → organisme</b>. Contoh: sel otot membentuk jaringan otot, jaringan menjadi bagian jantung, dan jantung bekerja dalam sistem peredaran darah.`}
    ],
    quiz:{q:'Organel tumbuhan yang berperan dalam fotosintesis adalah ...', options:['mitokondria','kloroplas','inti','membran sel'], answer:1, explain:'Kloroplas mengandung klorofil dan merupakan tempat utama fotosintesis pada sel tumbuhan.'},
    visual:'cell'
  },
  {
    id:'VIII-2', grade:'VIII', number:2, icon:'🫀', title:'Sistem Tubuh Manusia',
    intro:'Mempelajari sistem pencernaan, pernapasan, peredaran darah, ekskresi, dan kebutuhan zat gizi manusia.',
    sections:[
      {title:'Sistem pencernaan', body:`Saluran pencernaan utama: mulut → kerongkongan → lambung → usus halus → usus besar → rektum → anus. Pencernaan mekanik memperkecil ukuran makanan, sedangkan pencernaan kimiawi melibatkan enzim.`},
      {title:'Zat gizi', body:`Tubuh memerlukan karbohidrat, protein, lemak, vitamin, mineral, dan air. Kebutuhan setiap orang berbeda sesuai usia, aktivitas, dan kondisi tubuh.`},
      {title:'Sistem pernapasan', body:`Udara melewati hidung, faring, laring, trakea, bronkus, bronkiolus, lalu mencapai alveolus. Di alveolus terjadi pertukaran oksigen dan karbon dioksida dengan darah.`},
      {title:'Peredaran darah', body:`Jantung memompa darah melalui arteri, vena, dan kapiler. Sel darah merah terutama mengangkut oksigen, sel darah putih berperan dalam pertahanan, dan keping darah membantu pembekuan.`},
      {title:'Sistem ekskresi', body:`Ginjal membentuk urine, kulit mengeluarkan keringat, paru-paru mengeluarkan karbon dioksida serta uap air, dan hati berperan dalam berbagai proses detoksifikasi dan metabolisme.`}
    ],
    quiz:{q:'Tempat utama pertukaran oksigen dan karbon dioksida di paru-paru adalah ...', options:['trakea','bronkus','alveolus','laring'], answer:2, explain:'Alveolus memiliki dinding tipis dan berdekatan dengan kapiler sehingga cocok untuk pertukaran gas.'},
    visual:'body'
  },
  {
    id:'VIII-3', grade:'VIII', number:3, icon:'⚙️', title:'Usaha, Energi, dan Pesawat Sederhana',
    intro:'Memahami konsep usaha, energi kinetik dan potensial, hukum kekekalan energi, serta alat yang mempermudah pekerjaan.',
    sections:[
      {title:'Usaha dalam fisika', body:`Usaha terjadi ketika gaya menyebabkan perpindahan.<div class="formula">W = F × s</div>Satuan usaha adalah joule (J). Jika gaya 10 N memindahkan benda 3 m searah gaya, usaha yang dilakukan adalah 30 J.`},
      {title:'Energi kinetik dan potensial', body:`Energi kinetik dimiliki benda karena bergerak, sedangkan energi potensial berkaitan dengan posisi atau keadaan benda. Makin cepat benda bergerak, makin besar energi kinetiknya.`},
      {title:'Kekekalan energi', body:`Energi tidak diciptakan atau dimusnahkan, tetapi dapat berubah bentuk. Pada PLTA, energi potensial air berubah menjadi energi gerak dan akhirnya menjadi energi listrik.`},
      {title:'Pesawat sederhana', body:`Pesawat sederhana meliputi pengungkit, katrol, bidang miring, serta roda dan poros. Alat ini membantu dengan mengubah besar atau arah gaya, walaupun tidak “menciptakan” energi.`}
    ],
    quiz:{q:'Gaya 20 N memindahkan benda sejauh 4 m searah gaya. Usaha yang dilakukan ...', options:['5 J','24 J','80 J','100 J'], answer:2, explain:'W = F × s = 20 × 4 = 80 joule.'},
    visual:'lever'
  },
  {
    id:'VIII-4', grade:'VIII', number:4, icon:'〰️', title:'Getaran, Gelombang, Bunyi, dan Cahaya',
    intro:'Mempelajari getaran, frekuensi, periode, gelombang, bunyi, cahaya, pemantulan, dan pembiasan.',
    sections:[
      {title:'Getaran, frekuensi, periode', body:`Getaran adalah gerak bolak-balik melalui titik keseimbangan. Frekuensi adalah jumlah getaran tiap sekon dan bersatuan hertz (Hz).<div class="formula">f = n/t &nbsp;&nbsp; dan &nbsp;&nbsp; T = 1/f</div>`},
      {title:'Gelombang', body:`Gelombang adalah getaran yang merambat. Pada gelombang transversal, arah getaran tegak lurus arah rambat; pada longitudinal, arah getaran sejajar arah rambat.`},
      {title:'Bunyi', body:`Bunyi berasal dari benda bergetar dan memerlukan medium untuk merambat. Bunyi tidak merambat di ruang hampa. Frekuensi memengaruhi tinggi-rendah nada.`},
      {title:'Cahaya', body:`Cahaya dapat merambat lurus, dipantulkan, dibiaskan, dan diuraikan. Pemantulan memungkinkan kita melihat bayangan di cermin, sedangkan pembiasan terjadi ketika cahaya melewati medium berbeda.`},
      {title:'Mata', body:`Cahaya masuk melalui kornea dan pupil, dibiaskan oleh lensa, lalu membentuk bayangan pada retina. Sinyal diteruskan melalui saraf optik menuju otak.`}
    ],
    quiz:{q:'Jika frekuensi getaran 5 Hz, periodenya adalah ...', options:['0,2 s','2 s','5 s','25 s'], answer:0, explain:'T = 1/f = 1/5 = 0,2 sekon.'},
    visual:'wave'
  },
  {
    id:'VIII-5', grade:'VIII', number:5, icon:'💧', title:'Tekanan, Fluida, dan Penerapannya',
    intro:'Memahami tekanan pada padat, cair, gas, Hukum Pascal, serta gaya apung menurut Archimedes.',
    sections:[
      {title:'Tekanan zat padat', body:`Tekanan adalah gaya per satuan luas.<div class="formula">P = F/A</div>Untuk gaya sama, semakin kecil luas bidang sentuh maka semakin besar tekanannya.`},
      {title:'Tekanan hidrostatis', body:`Tekanan dalam zat cair bertambah ketika kedalaman bertambah. Karena itu bagian bawah bendungan dibuat lebih tebal daripada bagian atas.`},
      {title:'Hukum Pascal', body:`Tekanan yang diberikan pada fluida dalam ruang tertutup diteruskan ke segala arah. Prinsip ini digunakan pada dongkrak dan rem hidrolik.`},
      {title:'Hukum Archimedes', body:`Benda yang berada dalam fluida mendapat gaya ke atas. Besarnya gaya apung berkaitan dengan berat fluida yang dipindahkan. Hal ini menjelaskan mengapa benda dapat terapung, melayang, atau tenggelam.`},
      {title:'Tekanan udara', body:`Udara memiliki massa sehingga memberikan tekanan. Tekanan udara umumnya berkurang ketika ketinggian bertambah.`}
    ],
    quiz:{q:'Jika gaya tetap tetapi luas bidang tekan diperkecil, tekanan akan ...', options:['mengecil','tetap','membesar','menjadi nol'], answer:2, explain:'P = F/A. Jika F tetap dan A diperkecil, nilai P membesar.'},
    visual:'pressure'
  },

  {
    id:'IX-1', grade:'IX', number:1, icon:'🌱', title:'Pertumbuhan, Perkembangan, dan Sistem Reproduksi',
    intro:'Mempelajari pertumbuhan, perkembangan, faktor yang memengaruhi, serta reproduksi tumbuhan dan manusia secara ilmiah.',
    sections:[
      {title:'Pertumbuhan dan perkembangan', body:`Pertumbuhan adalah perubahan ukuran yang dapat diukur, misalnya tinggi dan massa. Perkembangan adalah perubahan menuju kematangan struktur dan fungsi.`},
      {title:'Faktor yang memengaruhi', body:`Faktor internal meliputi gen dan hormon. Faktor eksternal antara lain nutrisi, air, suhu, cahaya, dan kondisi lingkungan.`},
      {title:'Reproduksi tumbuhan', body:`Reproduksi vegetatif tidak melibatkan peleburan sel kelamin, misalnya tunas, umbi, stek, dan cangkok. Reproduksi generatif melibatkan penyerbukan dan pembuahan.`},
      {title:'Penyerbukan', body:`Penyerbukan adalah berpindahnya serbuk sari ke kepala putik. Proses ini dapat dibantu angin, air, atau hewan. Setelah pembuahan, bakal biji berkembang menjadi biji.`},
      {title:'Pubertas dan sistem reproduksi manusia', body:`Pubertas adalah masa pematangan fungsi reproduksi yang dipengaruhi hormon. Perubahan dapat meliputi pertumbuhan cepat, perubahan suara, dan perubahan fungsi organ reproduksi. Kecepatan dan waktu pubertas dapat berbeda pada setiap orang.`}
    ],
    quiz:{q:'Perubahan yang dapat diukur dengan angka, seperti tinggi badan bertambah, disebut ...', options:['perkembangan','pertumbuhan','adaptasi','reproduksi'], answer:1, explain:'Pertumbuhan bersifat kuantitatif sehingga dapat diukur, misalnya dalam cm atau kg.'},
    visual:'growth'
  },
  {
    id:'IX-2', grade:'IX', number:2, icon:'🧬', title:'Pewarisan Sifat dan Bioteknologi',
    intro:'Memahami DNA, gen, kromosom, pewarisan sifat sederhana, serta pemanfaatan organisme dalam bioteknologi.',
    sections:[
      {title:'Materi genetik', body:`DNA membawa informasi genetik. Bagian DNA yang berfungsi sebagai unit informasi disebut gen. DNA dikemas bersama protein membentuk kromosom di dalam sel.`},
      {title:'Pewarisan sifat', body:`Keturunan menerima materi genetik dari orang tua. Beberapa ciri dapat dipelajari dengan model alel dominan dan resesif, tetapi banyak sifat nyata dipengaruhi banyak gen dan lingkungan.`},
      {title:'Model persilangan sederhana', body:`Kotak Punnett membantu memperkirakan kombinasi alel pada keturunan. Hasil kotak Punnett menunjukkan peluang, bukan jaminan hasil pada setiap anak.`},
      {title:'Bioteknologi konvensional', body:`Bioteknologi konvensional memanfaatkan proses biologis, terutama fermentasi. Contohnya pembuatan tempe, tape, yoghurt, dan produk pangan fermentasi lain.`},
      {title:'Bioteknologi modern', body:`Bioteknologi modern menggunakan teknik lebih maju seperti kultur jaringan dan rekayasa genetika. Penerapannya dapat ditemukan dalam pertanian, kesehatan, pangan, dan pengelolaan lingkungan.`}
    ],
    quiz:{q:'Bagian DNA yang membawa informasi untuk suatu karakter disebut ...', options:['gen','jaringan','organ','enzim'], answer:0, explain:'Gen merupakan bagian dari DNA yang membawa informasi biologis tertentu.'},
    visual:'genetics'
  },
  {
    id:'IX-3', grade:'IX', number:3, icon:'⚡', title:'Listrik dan Kemagnetan',
    intro:'Mempelajari muatan listrik, arus, tegangan, hambatan, rangkaian, daya, magnet, medan magnet, dan elektromagnet.',
    sections:[
      {title:'Muatan dan listrik statis', body:`Muatan listrik terdiri atas positif dan negatif. Muatan sejenis tolak-menolak, sedangkan muatan berbeda jenis tarik-menarik. Listrik statis dapat diamati ketika benda yang digosok menarik potongan kertas kecil.`},
      {title:'Arus, tegangan, hambatan', body:`Arus listrik adalah aliran muatan. Tegangan adalah beda potensial, dan hambatan menyatakan hambatan terhadap aliran arus.<div class="formula">V = I × R</div>`},
      {title:'Rangkaian seri dan paralel', body:`Pada rangkaian seri, komponen berada dalam satu jalur. Pada rangkaian paralel terdapat beberapa cabang. Instalasi rumah umumnya menggunakan susunan paralel agar peralatan dapat bekerja relatif independen.`},
      {title:'Daya listrik', body:`Daya adalah laju penggunaan energi listrik.<div class="formula">P = V × I</div>Satuan daya adalah watt (W).`},
      {title:'Magnet dan elektromagnet', body:`Magnet memiliki kutub utara dan selatan. Arus listrik dapat menghasilkan medan magnet. Prinsip ini digunakan pada elektromagnet, motor listrik, relai, dan berbagai perangkat.`}
    ],
    quiz:{q:'Jika V = 12 V dan R = 4 Ω, kuat arusnya ...', options:['2 A','3 A','4 A','48 A'], answer:1, explain:'I = V/R = 12/4 = 3 ampere.'},
    visual:'electric'
  },
  {
    id:'IX-4', grade:'IX', number:4, icon:'⚗️', title:'Reaksi Kimia, Asam, Basa, dan Lingkungan',
    intro:'Memahami reaksi kimia, asam-basa dan pH, indikator, pencemaran, efek rumah kaca, serta upaya menjaga lingkungan.',
    sections:[
      {title:'Reaksi kimia', body:`Reaksi kimia mengubah reaktan menjadi produk. Tanda yang mungkin tampak antara lain terbentuk gas, endapan, perubahan warna, perubahan suhu, cahaya, atau bau.`},
      {title:'Asam, basa, dan pH', body:`Skala pH digunakan untuk menggambarkan keasaman atau kebasaan larutan. Secara umum, pH < 7 bersifat asam, pH 7 netral, dan pH > 7 bersifat basa.`},
      {title:'Indikator', body:`Indikator digunakan untuk membantu mengenali sifat asam atau basa, misalnya kertas lakmus, indikator universal, serta beberapa bahan alami yang warnanya berubah pada kondisi berbeda.`},
      {title:'Pencemaran', body:`Pencemaran air, udara, dan tanah terjadi ketika zat atau energi masuk ke lingkungan hingga kualitasnya menurun. Pencegahan memerlukan pengurangan sumber polusi dan pengelolaan limbah yang tepat.`},
      {title:'Efek rumah kaca dan pemanasan global', body:`Gas rumah kaca membantu menjaga Bumi tetap hangat. Jika konsentrasinya meningkat, lebih banyak panas tertahan. Penghematan energi, perlindungan hutan, pengurangan limbah, dan energi lebih bersih dapat membantu menekan emisi.`}
    ],
    quiz:{q:'Larutan dengan pH 3 termasuk ...', options:['asam','netral','basa','selalu berbahaya'], answer:0, explain:'Pada skala pH sederhana, nilai di bawah 7 dikategorikan asam.'},
    visual:'ph'
  },
  {
    id:'IX-5', grade:'IX', number:5, icon:'🪐', title:'Bumi, Tata Surya, dan Teknologi Ramah Lingkungan',
    intro:'Mempelajari struktur Bumi, lempeng tektonik, gempa, tata surya, gerak Bumi dan Bulan, energi terbarukan, dan teknologi ramah lingkungan.',
    sections:[
      {title:'Struktur Bumi', body:`Secara umum Bumi tersusun atas kerak, mantel, inti luar, dan inti dalam. Kondisi suhu, tekanan, dan komposisi berubah dengan kedalaman.`},
      {title:'Lempeng tektonik dan gempa', body:`Bagian luar Bumi terbagi menjadi lempeng yang bergerak sangat lambat. Interaksi lempeng berhubungan dengan pembentukan pegunungan, aktivitas gunung api, dan banyak gempa tektonik.`},
      {title:'Tata surya', body:`Tata Surya terdiri atas Matahari dan benda yang bergerak dalam pengaruh gravitasinya. Delapan planet utama: Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, dan Neptunus.`},
      {title:'Rotasi, revolusi, Bulan, dan gerhana', body:`Rotasi Bumi menyebabkan pergantian siang-malam. Revolusi Bumi bersama kemiringan sumbu berkaitan dengan musim. Bulan mengelilingi Bumi dan menampilkan fase-fase. Gerhana terjadi ketika Matahari, Bumi, dan Bulan berada pada susunan tertentu.`},
      {title:'Energi dan teknologi ramah lingkungan', body:`Energi terbarukan mencakup energi surya, angin, air, dan panas bumi. Teknologi ramah lingkungan berusaha memenuhi kebutuhan manusia dengan mengurangi penggunaan sumber daya dan dampak pencemaran.`}
    ],
    quiz:{q:'Planet yang berada paling dekat dengan Matahari adalah ...', options:['Venus','Bumi','Merkurius','Mars'], answer:2, explain:'Merkurius adalah planet pertama dari Matahari.'},
    visual:'solar'
  }
];

const gradeDescriptions = {
  VII:'Fondasi IPA: metode ilmiah, materi, kalor, gerak, dan ekosistem.',
  VIII:'Organisasi kehidupan, sistem tubuh, energi, gelombang, dan tekanan.',
  IX:'Pertumbuhan, genetika, listrik, kimia lingkungan, Bumi, dan tata surya.'
};

const BISAQuery = new URLSearchParams(location.search);
const BISAUserKey = BISAQuery.get('user') || 'guest';
const BISALocked = BISAQuery.get('locked') === '1';
const BISAProgressKey = `bisa-ipa-progress-${BISAUserKey}`;
let currentGrade = ['VII','VIII','IX'].includes(BISAQuery.get('grade')) ? BISAQuery.get('grade') : 'VII';
let currentLessonId = null;
let completed = new Set(JSON.parse(localStorage.getItem(BISAProgressKey) || '[]'));

function bridgeProgress(){
  if (window.parent !== window) window.parent.postMessage({type:'BISA_MODULE_SNAPSHOT', subject:'IPA', level:'SMP', keys:[...completed]}, '*');
}


const content = document.getElementById('content');
const chapterNav = document.getElementById('chapterNav');
const pageTitle = document.getElementById('pageTitle');
const sidebar = document.getElementById('sidebar');
const searchInput = document.getElementById('searchInput');
const toast = document.getElementById('toast');

function saveProgress(){
  localStorage.setItem(BISAProgressKey, JSON.stringify([...completed]));
  bridgeProgress();
  updateProgress();
  renderChapterNav(searchInput.value);
}
function updateProgress(){
  const pct = Math.round((completed.size / lessons.length) * 100);
  document.getElementById('miniProgressText').textContent = pct + '%';
  document.getElementById('miniProgressBar').style.width = pct + '%';
}
function showToast(msg){
  toast.textContent = msg; toast.classList.add('show');
  clearTimeout(showToast.t); showToast.t = setTimeout(()=>toast.classList.remove('show'), 1800);
}
function closeSidebar(){ if(innerWidth <= 1000) sidebar.classList.remove('open'); }

function renderChapterNav(query=''){
  const q = query.trim().toLowerCase();
  const filtered = lessons.filter(l => l.grade === currentGrade && (!q || (l.title+' '+l.intro).toLowerCase().includes(q)));
  chapterNav.innerHTML = filtered.length ? filtered.map(l => `
    <button class="chapter-link ${currentLessonId===l.id?'active':''}" data-lesson="${l.id}" type="button">
      <span class="chapter-number">${l.number}</span>
      <span><b>Bab ${l.number}</b><br><small>${l.title}</small></span>
      ${completed.has(l.id)?'<span class="done-dot" title="Selesai"></span>':''}
    </button>`).join('') : '<div class="empty-state">Materi tidak ditemukan.</div>';
  chapterNav.querySelectorAll('[data-lesson]').forEach(btn=>btn.addEventListener('click',()=>openLesson(btn.dataset.lesson)));
}

function renderHome(){
  currentLessonId = null;
  pageTitle.textContent = 'Beranda';
  document.getElementById('homeBtn').classList.add('active');
  renderChapterNav(searchInput.value);
  const pct = Math.round((completed.size/lessons.length)*100);
  content.innerHTML = `
    <section class="hero">
      <div>
        <p class="eyebrow" style="color:#a9ddcc">BISA • Belajar IPA Sambil Asyik</p>
        <h3>Belajar IPA dengan melihat, mencoba, dan memahami.</h3>
        <p>Pilih kelas dan bab. Setiap materi dilengkapi gambar interaktif, contoh, rumus penting, kuis singkat, dan pencatatan progres belajar.</p>
        <div class="hero-actions">
          <button class="primary-btn" id="startBtn" type="button">Mulai dari Kelas VII</button>
          <button class="secondary-btn" id="continueBtn" type="button">Lanjutkan belajar</button>
        </div>
      </div>
      <div class="hero-visual" aria-label="Ilustrasi atom">
        <div class="atom"><span class="nucleus"></span><span class="orbit"><span class="electron"></span></span><span class="orbit"></span><span class="orbit"></span></div>
      </div>
    </section>
    <div class="stats-grid">
      <div class="stat-card"><strong>15</strong><span>Total bab Kelas VII–IX</span></div>
      <div class="stat-card"><strong>${completed.size}</strong><span>Bab sudah selesai</span></div>
      <div class="stat-card"><strong>${pct}%</strong><span>Progres keseluruhan</span></div>
    </div>
    <div class="section-title"><div><h3>Pilih tingkat kelas</h3><p>Setiap kelas memiliki 5 bab utama.</p></div></div>
    <div class="grade-grid">
      ${['VII','VIII','IX'].map(g=>`<article class="grade-card"><span class="grade-badge">Kelas ${g}</span><h4>${lessons.filter(x=>x.grade===g).length} Bab Pembelajaran</h4><p>${gradeDescriptions[g]}</p><button class="ghost-btn open-grade" data-grade="${g}" type="button">Lihat materi</button></article>`).join('')}
    </div>
    <div class="section-title"><div><h3>Bab Kelas ${currentGrade}</h3><p>Pilih salah satu untuk membuka materi interaktif.</p></div></div>
    <div class="chapter-grid">
      ${lessons.filter(l=>l.grade===currentGrade).map(chapterCard).join('')}
    </div>`;
  document.getElementById('startBtn').addEventListener('click',()=>openLesson('VII-1'));
  document.getElementById('continueBtn').addEventListener('click',()=>{
    const next = lessons.find(l=>!completed.has(l.id)) || lessons[0]; openLesson(next.id);
  });
  content.querySelectorAll('.open-grade').forEach(b=>b.addEventListener('click',()=>selectGrade(b.dataset.grade,true)));
  content.querySelectorAll('[data-card-lesson]').forEach(b=>b.addEventListener('click',()=>openLesson(b.dataset.cardLesson)));
}
function chapterCard(l){
  return `<article class="chapter-card"><div class="icon">${l.icon}</div><div><h4>Bab ${l.number}. ${l.title}</h4><p>${l.intro}</p><button class="ghost-btn" data-card-lesson="${l.id}" type="button">Buka bab ${completed.has(l.id)?'✓':''}</button></div></article>`;
}

function selectGrade(grade, showOverview=false){
  currentGrade = grade;
  document.querySelectorAll('.grade-tab').forEach(b=>b.classList.toggle('active', b.dataset.grade===grade));
  renderChapterNav(searchInput.value);
  if(showOverview){
    currentLessonId = null;
    pageTitle.textContent = 'Kelas ' + grade;
    document.getElementById('homeBtn').classList.remove('active');
    content.innerHTML = `<div class="lesson-head"><div><div class="lesson-kicker">IPA SMP</div><h3>Materi Kelas ${grade}</h3><p>${gradeDescriptions[grade]} Pilih salah satu bab untuk mulai belajar.</p></div></div><div class="chapter-grid">${lessons.filter(l=>l.grade===grade).map(chapterCard).join('')}</div>`;
    content.querySelectorAll('[data-card-lesson]').forEach(b=>b.addEventListener('click',()=>openLesson(b.dataset.cardLesson)));
  }
  closeSidebar();
}


function lessonQuizSet(l){
  const qs=[l.quiz];
  const sections=l.sections||[];
  let i=0;
  while(qs.length<10 && sections.length){
    const idx=i%sections.length, sec=sections[idx];
    const clean=String(sec.body||'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
    const answer=(clean.split(/(?<=[.!?])\s+/)[0]||clean).slice(0,180);
    const other=sections.filter((_,j)=>j!==idx).map(x=>String(x.body||'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim().split(/(?<=[.!?])\s+/)[0]).slice(0,3);
    while(other.length<3)other.push(`Pernyataan lain pada bab ${l.title}.`);
    if(i%2===0){
      qs.push({q:`Pernyataan yang paling tepat tentang ${sec.title} adalah ...`,options:[answer,...other],answer:0,explain:answer});
    }else{
      const titles=[sec.title,...sections.filter((_,j)=>j!==idx).map(x=>x.title).slice(0,3)];
      qs.push({q:`Cuplikan “${answer}” paling tepat merujuk pada subbab ...`,options:titles,answer:0,explain:`Cuplikan tersebut membahas ${sec.title}.`});
    }
    i++;
  }
  return qs.slice(0,10);
}

function openLesson(id){
  const l = lessons.find(x=>x.id===id); if(!l) return;
  currentLessonId = id; currentGrade = l.grade;
  document.getElementById('homeBtn').classList.remove('active');
  document.querySelectorAll('.grade-tab').forEach(b=>b.classList.toggle('active',b.dataset.grade===l.grade));
  renderChapterNav(searchInput.value);
  pageTitle.textContent = `Kelas ${l.grade} • Bab ${l.number}`;
  content.innerHTML = `
    <div class="lesson-head">
      <div><div class="lesson-kicker">Kelas ${l.grade} • Bab ${l.number}</div><h3>${l.icon} ${l.title}</h3><p>${l.intro}</p></div>
      <button id="completeBtn" class="complete-btn ${completed.has(id)?'done':''}" type="button">${completed.has(id)?'✓ Sudah selesai':'Tandai selesai'}</button>
    </div>
    <div class="lesson-layout">
      <article class="lesson-card">
        ${l.sections.map((s,i)=>`<section class="lesson-section"><h5>${i+1}. ${s.title}</h5><p>${s.body}</p></section>`).join('')}
      </article>
      <aside class="interactive-panel">
        <h4>Gambar interaktif</h4>
        <p>Klik atau geser kontrol untuk mengamati perubahan konsep.</p>
        <div id="visualStage" class="visual-stage"></div>
        <div id="visualControls" class="visual-controls"></div>
        <div id="visualInfo" class="visual-info">Gunakan kontrol pada visual.</div>
      </aside>
    </div>
    <section class="quiz-card">
      <h4>🧠 Cek pemahaman • 10 soal</h4>
      ${lessonQuizSet(l).map((q,qi)=>`<div class="module-question"><p><strong>${qi+1}.</strong> ${q.q}</p><div class="quiz-options">${q.options.map((o,i)=>`<button class="quiz-option" data-q="${qi}" data-answer="${i}" type="button">${String.fromCharCode(65+i)}. ${o}</button>`).join('')}</div><div id="quizFeedback-${qi}" class="quiz-feedback" aria-live="polite"></div></div>`).join('')}
    </section>`;

  document.getElementById('completeBtn').addEventListener('click',()=>{
    if(completed.has(id)) completed.delete(id); else completed.add(id);
    saveProgress(); openLesson(id); showToast(completed.has(id)?'Bab ditandai selesai.':'Tanda selesai dibatalkan.');
  });
  content.querySelectorAll('.quiz-option').forEach(btn=>btn.addEventListener('click',()=>checkQuiz(l, Number(btn.dataset.q), Number(btn.dataset.answer))));
  renderVisual(l.visual);
  closeSidebar(); window.scrollTo({top:0,behavior:'smooth'});
}

function checkQuiz(l, qi, chosen){
  const q=lessonQuizSet(l)[qi];
  const buttons=[...content.querySelectorAll(`.quiz-option[data-q="${qi}"]`)];
  buttons.forEach((b,i)=>{b.disabled=true; if(i===q.answer)b.classList.add('correct'); if(i===chosen && i!==q.answer)b.classList.add('wrong');});
  const good = chosen===q.answer;
  document.getElementById(`quizFeedback-${qi}`).innerHTML = `${good?'✅ Benar!':'❌ Belum tepat.'} ${q.explain}`;
}

function stage(html, info='Klik bagian gambar untuk melihat penjelasan.'){
  document.getElementById('visualStage').innerHTML=html;
  document.getElementById('visualInfo').innerHTML=info;
  document.getElementById('visualControls').innerHTML='';
}
function info(text){ document.getElementById('visualInfo').innerHTML=text; }
function controls(html){ document.getElementById('visualControls').innerHTML=html; }
function bind(selector,event,fn){ document.querySelectorAll(selector).forEach(el=>el.addEventListener(event,fn)); }

function renderVisual(type){
  const funcs={method:visualMethod,matter:visualMatter,heat:visualHeat,motion:visualMotion,ecosystem:visualEcosystem,cell:visualCell,body:visualBody,lever:visualLever,wave:visualWave,pressure:visualPressure,growth:visualGrowth,genetics:visualGenetics,electric:visualElectric,ph:visualPH,solar:visualSolar};
  (funcs[type]||visualMethod)();
}

function visualMethod(){
  const steps=[['Amati','Perhatikan gejala dengan teliti.'],['Tanya','Rumuskan masalah yang dapat diuji.'],['Hipotesis','Buat dugaan sementara.'],['Uji','Lakukan eksperimen yang adil.'],['Data','Catat hasil pengamatan.'],['Simpulkan','Tarik kesimpulan dari bukti.']];
  stage(`<svg viewBox="0 0 420 330" role="img" aria-label="Alur metode ilmiah">
    <defs><marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#85a99f"/></marker></defs>
    ${steps.map((s,i)=>{const a=(i/6)*Math.PI*2-Math.PI/2,x=210+120*Math.cos(a),y=165+105*Math.sin(a);return `<g class="method-step" data-i="${i}" style="cursor:pointer"><circle cx="${x}" cy="${y}" r="38" fill="#e8f4f0" stroke="#177a65" stroke-width="2"/><text x="${x}" y="${y+4}" text-anchor="middle" font-size="13" fill="#18302b">${i+1}. ${s[0]}</text></g>`}).join('')}
    <circle cx="210" cy="165" r="50" fill="#177a65"/><text x="210" y="160" text-anchor="middle" fill="white" font-size="15">METODE</text><text x="210" y="180" text-anchor="middle" fill="white" font-size="15">ILMIAH</text>
  </svg>`);
  bind('.method-step','click',e=>{const i=Number(e.currentTarget.dataset.i);info(`<b>${steps[i][0]}</b><br>${steps[i][1]}`)});
}
function visualMatter(){
  stage(`<svg id="matterSvg" viewBox="0 0 420 290"><rect x="55" y="45" width="310" height="190" rx="18" fill="#ffffff" stroke="#b9d0c9" stroke-width="2"/><g id="particles"></g><text id="matterLabel" x="210" y="270" text-anchor="middle" fill="#18302b" font-size="16"></text></svg>`);
  controls(`<button data-state="solid" type="button">Padat</button><button data-state="liquid" type="button">Cair</button><button data-state="gas" type="button">Gas</button>`);
  const draw=(state)=>{
    const g=document.getElementById('particles'); let pts=[];
    if(state==='solid'){for(let r=0;r<4;r++)for(let c=0;c<6;c++)pts.push([115+c*38,85+r*35]);}
    if(state==='liquid'){for(let i=0;i<24;i++)pts.push([90+(i%6)*48+((i%2)*8),120+Math.floor(i/6)*28]);}
    if(state==='gas'){pts=[[90,80],[180,70],[300,82],[340,145],[110,180],[240,155],[290,205],[170,210],[75,140],[230,95],[350,205],[140,105]];}
    g.innerHTML=pts.map((p,i)=>`<circle cx="${p[0]}" cy="${p[1]}" r="10" fill="#177a65" opacity="${.7+(i%3)*.1}"/>`).join('');
    document.getElementById('matterLabel').textContent=state==='solid'?'PADAT: partikel rapat dan teratur':state==='liquid'?'CAIR: partikel rapat tetapi dapat bergeser':'GAS: partikel berjauhan dan bergerak bebas';
    info(state==='solid'?'<b>Padat:</b> bentuk dan volume tetap.':state==='liquid'?'<b>Cair:</b> volume tetap, bentuk mengikuti wadah.':'<b>Gas:</b> bentuk dan volume mengikuti ruang yang ditempati.');
    document.querySelectorAll('[data-state]').forEach(b=>b.classList.toggle('active',b.dataset.state===state));
  };
  bind('[data-state]','click',e=>draw(e.target.dataset.state)); draw('solid');
}
function visualHeat(){
  stage(`<svg viewBox="0 0 420 300"><g id="heatScene"></g></svg>`);
  controls(`<button data-heat="conduction" type="button">Konduksi</button><button data-heat="convection" type="button">Konveksi</button><button data-heat="radiation" type="button">Radiasi</button>`);
  const draw=(m)=>{const s=document.getElementById('heatScene');
    if(m==='conduction') s.innerHTML=`<rect x="75" y="135" width="270" height="28" rx="14" fill="#b7c9c3"/><circle cx="95" cy="149" r="35" fill="#f4c56a"/><text x="210" y="215" text-anchor="middle">Kalor merambat sepanjang benda padat</text><g stroke="#b77813" stroke-width="3">${[135,175,215,255,295].map(x=>`<path d="M${x} 120 l20 0"/>`).join('')}</g>`;
    if(m==='convection') s.innerHTML=`<rect x="100" y="70" width="220" height="160" rx="20" fill="#d9eef7" stroke="#9bbcca"/><path d="M155 185 C135 145 155 105 190 95" fill="none" stroke="#177a65" stroke-width="4"/><path d="M265 100 C290 140 275 185 235 200" fill="none" stroke="#177a65" stroke-width="4"/><text x="210" y="265" text-anchor="middle">Fluida bergerak membentuk arus konveksi</text>`;
    if(m==='radiation') s.innerHTML=`<circle cx="105" cy="145" r="48" fill="#f4c56a"/><circle cx="330" cy="145" r="35" fill="#a7d7c8"/><g stroke="#b77813" stroke-width="3" fill="none">${[0,1,2,3].map(i=>`<path d="M160 ${115+i*22} Q220 ${95+i*24} 282 ${115+i*22}"/>`).join('')}</g><text x="210" y="240" text-anchor="middle">Radiasi tidak memerlukan medium</text>`;
    info(m==='conduction'?'<b>Konduksi:</b> energi berpindah melalui tumbukan/getaran partikel tanpa aliran zat secara keseluruhan.':m==='convection'?'<b>Konveksi:</b> energi berpindah bersama aliran cairan atau gas.':'<b>Radiasi:</b> energi berpindah melalui gelombang elektromagnetik, seperti panas Matahari.');
    document.querySelectorAll('[data-heat]').forEach(b=>b.classList.toggle('active',b.dataset.heat===m));};
  bind('[data-heat]','click',e=>draw(e.target.dataset.heat)); draw('conduction');
}
function visualMotion(){
  stage(`<svg viewBox="0 0 420 270"><line x1="40" y1="200" x2="385" y2="200" stroke="#8aa59d" stroke-width="5"/><g id="bike"><circle cx="120" cy="180" r="25" fill="none" stroke="#177a65" stroke-width="5"/><circle cx="200" cy="180" r="25" fill="none" stroke="#177a65" stroke-width="5"/><path d="M120 180 L150 140 L180 180 L145 180 L165 130" fill="none" stroke="#177a65" stroke-width="5"/></g><line id="speedArrow" x1="220" y1="120" x2="280" y2="120" stroke="#b77813" stroke-width="6"/><text id="speedText" x="210" y="55" text-anchor="middle" font-size="20"></text><text id="energyText" x="210" y="90" text-anchor="middle"></text></svg>`);
  controls(`<label class="control-row" style="width:100%"><span>Kelajuan</span><strong id="speedValue">5 m/s</strong><input id="speedRange" type="range" min="0" max="20" value="5" step="1"></label>`);
  const r=document.getElementById('speedRange'); const update=()=>{const v=+r.value;document.getElementById('speedValue').textContent=v+' m/s';document.getElementById('speedText').textContent='v = '+v+' m/s';document.getElementById('speedArrow').setAttribute('x2',220+v*7);document.getElementById('energyText').textContent='Indikator energi gerak ∝ v² = '+v*v;info(`<b>Kelajuan:</b> ${v} m/s. Untuk massa yang sama, energi kinetik meningkat sangat cepat ketika kelajuan bertambah.`)}; r.addEventListener('input',update);update();
}
function visualEcosystem(){
  const nodes=[['Rumput',70,150,'Produsen: membuat makanan melalui fotosintesis.'],['Belalang',155,95,'Konsumen I: memperoleh energi dari produsen.'],['Katak',240,150,'Konsumen II: memakan belalang.'],['Ular',325,95,'Konsumen tingkat lebih tinggi.'],['Pengurai',240,230,'Jamur dan bakteri menguraikan sisa organisme dan mengembalikan unsur hara.']];
  stage(`<svg viewBox="0 0 420 300"><defs><marker id="ecoArr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0 0 L0 6 L8 3 z" fill="#7b9e94"/></marker></defs><g stroke="#7b9e94" stroke-width="2" marker-end="url(#ecoArr)"><line x1="100" y1="140" x2="125" y2="112"/><line x1="185" y1="112" x2="210" y2="140"/><line x1="270" y1="140" x2="295" y2="112"/><line x1="315" y1="125" x2="265" y2="205"/></g>${nodes.map((n,i)=>`<g class="eco-node" data-i="${i}" style="cursor:pointer"><circle cx="${n[1]}" cy="${n[2]}" r="34" fill="#e8f4f0" stroke="#177a65" stroke-width="2"/><text x="${n[1]}" y="${n[2]+4}" text-anchor="middle" font-size="12">${n[0]}</text></g>`).join('')}</svg>`);
  bind('.eco-node','click',e=>{const n=nodes[+e.currentTarget.dataset.i];info(`<b>${n[0]}</b><br>${n[3]}`)});
}
function visualCell(){
  const parts=[['Inti',210,140,36,'Menyimpan materi genetik dan mengatur banyak aktivitas sel.'],['Mitokondria',120,100,22,'Berperan penting dalam respirasi seluler dan pembentukan ATP.'],['Vakuola',290,105,28,'Ruang penyimpanan; pada sel tumbuhan biasanya berukuran besar.'],['Kloroplas',130,205,20,'Tempat utama fotosintesis pada sel tumbuhan.']];
  stage(`<svg viewBox="0 0 420 300"><path d="M75 65 Q210 20 345 65 L350 225 Q210 275 70 225 Z" fill="#eaf6ef" stroke="#177a65" stroke-width="4"/>${parts.map((p,i)=>`<g class="cell-part" data-i="${i}" style="cursor:pointer"><circle cx="${p[1]}" cy="${p[2]}" r="${p[3]}" fill="${i===0?'#9bc9bb':'#cce5dc'}" stroke="#177a65" stroke-width="2"/><text x="${p[1]}" y="${p[2]+4}" text-anchor="middle" font-size="11">${p[0]}</text></g>`).join('')}<text x="210" y="285" text-anchor="middle">Model sederhana sel tumbuhan</text></svg>`);
  bind('.cell-part','click',e=>{const p=parts[+e.currentTarget.dataset.i];info(`<b>${p[0]}</b><br>${p[4]}`)});
}
function visualBody(){
  stage(`<svg viewBox="0 0 420 310"><circle cx="210" cy="52" r="30" fill="#dfeae6"/><path d="M175 90 Q210 75 245 90 L260 230 Q210 260 160 230 Z" fill="#f4f8f7" stroke="#9eb7af" stroke-width="2"/><g id="bodyOrgan"></g><text id="bodyLabel" x="210" y="292" text-anchor="middle"></text></svg>`);
  controls(`<button data-system="digest" type="button">Pencernaan</button><button data-system="resp" type="button">Pernapasan</button><button data-system="blood" type="button">Peredaran</button><button data-system="excrete" type="button">Ekskresi</button>`);
  const draw=(s)=>{const g=document.getElementById('bodyOrgan');let html='',desc='';
    if(s==='digest'){html=`<path d="M205 100 C185 125 230 135 205 160 C180 185 225 205 200 230" fill="none" stroke="#b77813" stroke-width="12" stroke-linecap="round"/>`;desc='Pencernaan: makanan dipecah secara mekanik dan kimiawi agar zat gizi dapat diserap.';}
    if(s==='resp'){html=`<path d="M210 90 L210 125" stroke="#177a65" stroke-width="7"/><ellipse cx="188" cy="150" rx="28" ry="45" fill="#c9e7df"/><ellipse cx="232" cy="150" rx="28" ry="45" fill="#c9e7df"/>`;desc='Pernapasan: pertukaran gas utama terjadi di alveolus paru-paru.';}
    if(s==='blood'){html=`<path d="M210 135 C195 115 175 140 210 170 C245 140 225 115 210 135" fill="#b95c5c"/><path d="M210 170 C150 190 155 105 190 90 M210 170 C270 190 265 105 230 90" fill="none" stroke="#b95c5c" stroke-width="3"/>`;desc='Peredaran darah: jantung memompa darah ke seluruh tubuh melalui pembuluh.';}
    if(s==='excrete'){html=`<ellipse cx="185" cy="150" rx="20" ry="32" fill="#a47a61"/><ellipse cx="235" cy="150" rx="20" ry="32" fill="#a47a61"/><path d="M185 180 L200 225 M235 180 L220 225" stroke="#a47a61" stroke-width="4"/>`;desc='Ekskresi: ginjal menyaring darah dan membantu membentuk urine.';}
    g.innerHTML=html;document.getElementById('bodyLabel').textContent=desc;info(desc);document.querySelectorAll('[data-system]').forEach(b=>b.classList.toggle('active',b.dataset.system===s));};
  bind('[data-system]','click',e=>draw(e.target.dataset.system));draw('digest');
}
function visualLever(){
  stage(`<svg viewBox="0 0 420 280"><line id="leverBeam" x1="60" y1="150" x2="360" y2="150" stroke="#6d817a" stroke-width="10" stroke-linecap="round"/><polygon id="fulcrum" points="190,210 230,210 210,150" fill="#177a65"/><circle cx="85" cy="125" r="28" fill="#b77813" opacity=".75"/><text x="85" y="130" text-anchor="middle" fill="white">Beban</text><path d="M335 90 L335 135" stroke="#177a65" stroke-width="6"/><path d="M326 125 L335 140 L344 125" fill="#177a65"/><text id="leverText" x="210" y="255" text-anchor="middle"></text></svg>`);
  controls(`<label class="control-row" style="width:100%"><span>Posisi titik tumpu</span><strong id="fulcrumValue">50%</strong><input id="fulcrumRange" type="range" min="25" max="75" value="50"></label>`);
  const r=document.getElementById('fulcrumRange'); const up=()=>{const p=+r.value,x=60+300*p/100;document.getElementById('fulcrum').setAttribute('points',`${x-20},210 ${x+20},210 ${x},150`);document.getElementById('fulcrumValue').textContent=p+'%';const armLoad=x-85,armForce=335-x;document.getElementById('leverText').textContent=`Lengan beban ≈ ${Math.round(armLoad)} | lengan kuasa ≈ ${Math.round(armForce)}`;info(armForce>armLoad?'<b>Lebih menguntungkan:</b> lengan kuasa lebih panjang daripada lengan beban, sehingga gaya yang diperlukan dapat lebih kecil.':'<b>Kurang menguntungkan:</b> lengan kuasa lebih pendek daripada lengan beban.');};r.addEventListener('input',up);up();
}
function visualWave(){
  stage(`<svg viewBox="0 0 420 260"><line x1="20" y1="130" x2="400" y2="130" stroke="#b3c3be"/><path id="wavePath" fill="none" stroke="#177a65" stroke-width="4"/><text id="waveLabel" x="210" y="225" text-anchor="middle"></text></svg>`);
  controls(`<label class="control-row" style="width:100%"><span>Frekuensi</span><strong id="freqVal">3 Hz</strong><input id="freqRange" type="range" min="1" max="8" value="3" step="1"></label>`);
  const r=document.getElementById('freqRange'); const up=()=>{const f=+r.value;let d='M20 130';for(let x=20;x<=400;x+=4){const y=130-55*Math.sin((x-20)/380*Math.PI*2*f);d+=` L${x} ${y}`;}document.getElementById('wavePath').setAttribute('d',d);document.getElementById('freqVal').textContent=f+' Hz';document.getElementById('waveLabel').textContent=`Periode T = ${(1/f).toFixed(2)} s`;info(`<b>Frekuensi ${f} Hz:</b> terjadi ${f} getaran tiap sekon. Periodenya ${(1/f).toFixed(2)} sekon.`)};r.addEventListener('input',up);up();
}
function visualPressure(){
  stage(`<svg viewBox="0 0 420 270"><rect x="70" y="190" width="280" height="25" rx="10" fill="#dce9e5"/><rect id="pressBlock" x="150" y="95" width="120" height="95" rx="8" fill="#177a65" opacity=".8"/><text id="pressText" x="210" y="55" text-anchor="middle" font-size="18"></text><text x="210" y="245" text-anchor="middle">P = F / A</text></svg>`);
  controls(`<div style="width:100%"><label class="control-row"><span>Gaya F</span><strong id="forceVal">100 N</strong><input id="forceRange" type="range" min="20" max="200" value="100" step="10"></label><label class="control-row"><span>Luas A</span><strong id="areaVal">2 m²</strong><input id="areaRange" type="range" min="1" max="5" value="2" step="1"></label></div>`);
  const fr=document.getElementById('forceRange'), ar=document.getElementById('areaRange');const up=()=>{const F=+fr.value,A=+ar.value,P=F/A;document.getElementById('forceVal').textContent=F+' N';document.getElementById('areaVal').textContent=A+' m²';document.getElementById('pressText').textContent=`Tekanan = ${P.toFixed(1)} Pa`;const w=55+A*40;document.getElementById('pressBlock').setAttribute('width',w);document.getElementById('pressBlock').setAttribute('x',210-w/2);info(`<b>${P.toFixed(1)} Pa</b> = ${F} N ÷ ${A} m². Tekanan membesar jika gaya naik atau luas bidang tekan mengecil.`)};fr.addEventListener('input',up);ar.addEventListener('input',up);up();
}
function visualGrowth(){
  const stages=[['Biji',75,190,'Tahap awal: embrio berada di dalam biji.'],['Kecambah',160,160,'Akar dan tunas mulai tumbuh.'],['Muda',245,125,'Daun bertambah dan fotosintesis meningkat.'],['Dewasa',335,80,'Tanaman mencapai kematangan dan dapat bereproduksi.']];
  stage(`<svg viewBox="0 0 420 280"><line x1="55" y1="220" x2="370" y2="220" stroke="#9ab3aa" stroke-width="3"/>${stages.map((s,i)=>`<g class="growth-stage" data-i="${i}" style="cursor:pointer"><line x1="${s[1]}" y1="220" x2="${s[1]}" y2="${s[2]}" stroke="#177a65" stroke-width="5"/><circle cx="${s[1]}" cy="${s[2]}" r="${12+i*5}" fill="#8bc5b2"/><text x="${s[1]}" y="250" text-anchor="middle" font-size="12">${s[0]}</text></g>`).join('')}</svg>`);
  bind('.growth-stage','click',e=>{const s=stages[+e.currentTarget.dataset.i];info(`<b>${s[0]}</b><br>${s[3]}`)});
}
function visualGenetics(){
  stage(`<div style="padding:6px"><div id="punnett" style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;text-align:center"></div></div>`);
  controls(`<label style="flex:1;min-width:120px">Induk 1<select id="p1" style="width:100%;margin-top:5px"><option value="AA">AA</option><option value="Aa" selected>Aa</option><option value="aa">aa</option></select></label><label style="flex:1;min-width:120px">Induk 2<select id="p2" style="width:100%;margin-top:5px"><option value="AA">AA</option><option value="Aa" selected>Aa</option><option value="aa">aa</option></select></label>`);
  const gametes=g=>g==='AA'?['A','A']:g==='aa'?['a','a']:['A','a'];
  const up=()=>{const a=gametes(document.getElementById('p1').value),b=gametes(document.getElementById('p2').value);const combine=(x,y)=>[x,y].sort((m,n)=>m===n?0:m==='A'?-1:1).join('');const cells=[['×',''+b[0],''+b[1]],[''+a[0],combine(a[0],b[0]),combine(a[0],b[1])],[''+a[1],combine(a[1],b[0]),combine(a[1],b[1])]];document.getElementById('punnett').innerHTML=cells.flat().map((c,i)=>`<div style="padding:18px 8px;border-radius:10px;background:${i===0?'#177a65':'#eef6f4'};color:${i===0?'white':'#18302b'};font-weight:700">${c}</div>`).join('');const out=cells.slice(1).flatMap(r=>r.slice(1));const counts=out.reduce((m,x)=>(m[x]=(m[x]||0)+1,m),{});info(`<b>Prediksi kombinasi:</b> ${Object.entries(counts).map(([k,v])=>`${k} ${v*25}%`).join(', ')}. Kotak Punnett menunjukkan peluang, bukan kepastian hasil individu.`)};document.getElementById('p1').addEventListener('change',up);document.getElementById('p2').addEventListener('change',up);up();
}
function visualElectric(){
  stage(`<svg viewBox="0 0 420 280"><g id="circuit"></g></svg>`);
  controls(`<button data-circuit="series" type="button">Seri</button><button data-circuit="parallel" type="button">Paralel</button>`);
  const draw=m=>{const g=document.getElementById('circuit');
    if(m==='series')g.innerHTML=`<rect x="70" y="65" width="280" height="150" rx="12" fill="none" stroke="#177a65" stroke-width="5"/><line x1="65" y1="125" x2="85" y2="125" stroke="#18302b" stroke-width="4"/><line x1="60" y1="150" x2="90" y2="150" stroke="#18302b" stroke-width="8"/><circle cx="170" cy="65" r="25" fill="#f4c56a" stroke="#b77813"/><circle cx="270" cy="65" r="25" fill="#f4c56a" stroke="#b77813"/><text x="210" y="255" text-anchor="middle">Satu jalur arus</text>`;
    else g.innerHTML=`<path d="M70 70 H350 V220 H70 Z M70 110 H350 M70 175 H350" fill="none" stroke="#177a65" stroke-width="5"/><line x1="65" y1="130" x2="85" y2="130" stroke="#18302b" stroke-width="4"/><line x1="60" y1="155" x2="90" y2="155" stroke="#18302b" stroke-width="8"/><circle cx="210" cy="110" r="24" fill="#f4c56a" stroke="#b77813"/><circle cx="210" cy="175" r="24" fill="#f4c56a" stroke="#b77813"/><text x="210" y="255" text-anchor="middle">Beberapa cabang arus</text>`;
    info(m==='series'?'<b>Seri:</b> hanya satu jalur. Jika jalur terputus, seluruh rangkaian berhenti.':'<b>Paralel:</b> memiliki cabang. Peralatan pada cabang berbeda dapat bekerja lebih independen.');document.querySelectorAll('[data-circuit]').forEach(b=>b.classList.toggle('active',b.dataset.circuit===m));};bind('[data-circuit]','click',e=>draw(e.target.dataset.circuit));draw('series');
}
function visualPH(){
  stage(`<svg viewBox="0 0 420 220"><rect x="35" y="90" width="350" height="35" rx="17" fill="#dfeae6"/><line id="phMarker" x1="210" y1="65" x2="210" y2="145" stroke="#177a65" stroke-width="5"/><text id="phBig" x="210" y="45" text-anchor="middle" font-size="23"></text><text x="55" y="175">Asam</text><text x="195" y="175">Netral</text><text x="325" y="175">Basa</text></svg>`);
  controls(`<label class="control-row" style="width:100%"><span>Nilai pH</span><strong id="phVal">7</strong><input id="phRange" type="range" min="0" max="14" value="7" step="1"></label>`);
  const r=document.getElementById('phRange');const up=()=>{const p=+r.value,x=35+(350*p/14);document.getElementById('phMarker').setAttribute('x1',x);document.getElementById('phMarker').setAttribute('x2',x);document.getElementById('phVal').textContent=p;const cat=p<7?'ASAM':p===7?'NETRAL':'BASA';document.getElementById('phBig').textContent=`pH ${p} • ${cat}`;info(`<b>${cat}</b>. Secara sederhana, pH di bawah 7 asam, 7 netral, dan di atas 7 basa.`)};r.addEventListener('input',up);up();
}
function visualSolar(){
  const planets=[['Merkurius',35,'Planet terdekat dengan Matahari.'],['Venus',55,'Planet kedua; atmosfer sangat tebal.'],['Bumi',78,'Planet tempat kita hidup.'],['Mars',105,'Dikenal sebagai planet merah.'],['Jupiter',145,'Planet terbesar di Tata Surya.'],['Saturnus',190,'Memiliki sistem cincin yang jelas.'],['Uranus',235,'Sumbu rotasinya sangat miring.'],['Neptunus',280,'Planet utama terjauh dari Matahari.']];
  stage(`<svg viewBox="0 0 420 330"><circle cx="55" cy="165" r="38" fill="#f4c56a"/><text x="55" y="170" text-anchor="middle" font-size="11">Matahari</text>${planets.map((p,i)=>{const x=115+i*37,r=Math.min(7+i*1.4,15);return `<g class="planet" data-i="${i}" style="cursor:pointer"><circle cx="${x}" cy="165" r="${r}" fill="#177a65" opacity="${.55+i*.05}"/><text x="${x}" y="${200+(i%2)*22}" text-anchor="middle" font-size="9" transform="rotate(55 ${x} ${200+(i%2)*22})">${p[0]}</text></g>`}).join('')}<text x="210" y="310" text-anchor="middle">Urutan tidak menggambarkan jarak dan ukuran sebenarnya.</text></svg>`);
  bind('.planet','click',e=>{const p=planets[+e.currentTarget.dataset.i];info(`<b>${p[0]}</b><br>${p[2]}`)});
}

// Navigation events
document.getElementById('homeBtn').addEventListener('click',()=>{renderHome();closeSidebar();});
document.getElementById('menuBtn').addEventListener('click',()=>sidebar.classList.toggle('open'));
document.querySelectorAll('.grade-tab').forEach(btn=>btn.addEventListener('click',()=>selectGrade(btn.dataset.grade,true)));
searchInput.addEventListener('input',()=>renderChapterNav(searchInput.value));
document.getElementById('resetProgressBtn').addEventListener('click',()=>{
  if(confirm('Hapus seluruh progres belajar pada perangkat ini?')){completed.clear();saveProgress();renderHome();showToast('Progres berhasil direset.');}
});

updateProgress();
renderChapterNav();
renderHome();


// Integrasi dengan kerangka utama BISA
if (BISAQuery.get('embed') === '1') document.body.classList.add('bisa-embedded');
if (BISALocked) {
  document.querySelectorAll('.grade-tab').forEach(btn => { btn.hidden = btn.dataset.grade !== currentGrade; });
  const reset = document.getElementById('resetProgressBtn'); if (reset) reset.hidden = true;
}
selectGrade(currentGrade, false);
bridgeProgress();
