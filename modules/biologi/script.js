const BISAQuery = new URLSearchParams(location.search);
const BISAUserKey = BISAQuery.get('user') || 'guest';
const BISALocked = BISAQuery.get('locked') === '1';
const BISACompletedKey = `bioCompleted-${BISAUserKey}`;
const BISAThemeKey = `bioTheme-${BISAUserKey}`;

const biologyData = {"X": [{"title": "Ruang Lingkup Biologi dan Metode Ilmiah", "desc": "Mengenal Biologi sebagai ilmu kehidupan, tingkat organisasi kehidupan, cabang Biologi, variabel penelitian, metode ilmiah, dan keselamatan kerja di laboratorium.", "visual": "organization", "topics": [["Apa itu Biologi?", "Biologi adalah ilmu yang mempelajari makhluk hidup dan proses kehidupan. Kajian Biologi mencakup tingkat molekul, sel, jaringan, organ, organisme, populasi, komunitas, ekosistem, hingga biosfer."], ["Cabang-cabang Biologi", "Contoh cabang Biologi: Botani mempelajari tumbuhan, Zoologi mempelajari hewan, Mikrobiologi mempelajari mikroorganisme, Genetika mempelajari pewarisan sifat, Ekologi mempelajari hubungan organisme dengan lingkungan, dan Fisiologi mempelajari fungsi tubuh."], ["Tingkat organisasi kehidupan", "Urutannya: molekul → organel → sel → jaringan → organ → sistem organ → organisme → populasi → komunitas → ekosistem → bioma → biosfer."], ["Metode ilmiah", "Langkah umum: observasi, merumuskan masalah, membuat hipotesis, merancang eksperimen, mengumpulkan data, menganalisis, menarik kesimpulan, dan mengomunikasikan hasil."], ["Variabel penelitian", "Variabel bebas adalah faktor yang diubah, variabel terikat adalah faktor yang diamati, sedangkan variabel kontrol dibuat tetap agar eksperimen adil."], ["Keselamatan laboratorium", "Gunakan alat pelindung, ikuti prosedur, pahami simbol bahaya, jangan makan atau minum, gunakan alat sesuai fungsi, dan laporkan kecelakaan kepada guru."]], "quiz": [["Variabel yang sengaja diubah dalam penelitian disebut...", "Variabel bebas", ["Variabel kontrol", "Variabel terikat", "Variabel bebas", "Konstanta"]], ["Urutan yang benar setelah jaringan adalah...", "Organ", ["Sel", "Organ", "Populasi", "Molekul"]], ["Cabang Biologi yang mempelajari pewarisan sifat adalah...", "Genetika", ["Ekologi", "Anatomi", "Genetika", "Botani"]]]}, {"title": "Keanekaragaman Hayati dan Klasifikasi", "desc": "Memahami variasi makhluk hidup pada tingkat gen, spesies, dan ekosistem serta cara ilmuwan mengelompokkan organisme.", "visual": "biodiversity", "topics": [["Keanekaragaman gen", "Variasi gen terjadi dalam satu spesies. Contoh: beberapa varietas mangga memiliki rasa, ukuran, atau warna yang berbeda."], ["Keanekaragaman spesies", "Menunjukkan perbedaan antarjenis makhluk hidup, misalnya kucing, harimau, singa, dan macan tutul."], ["Keanekaragaman ekosistem", "Contohnya hutan hujan, savana, rawa, mangrove, sungai, dan laut yang memiliki komponen biotik dan abiotik berbeda."], ["Klasifikasi makhluk hidup", "Klasifikasi membantu mengenali, mempelajari, dan mengetahui kekerabatan organisme."], ["Tingkatan takson", "Urutan umum: Kingdom → Filum/Divisio → Kelas → Ordo → Famili → Genus → Spesies."], ["Binomial nomenclature", "Nama ilmiah terdiri dari dua kata: nama genus dan epitet spesifik. Contoh: Homo sapiens."]], "quiz": [["Perbedaan varietas dalam satu spesies termasuk keanekaragaman...", "Gen", ["Ekosistem", "Gen", "Spesies", "Komunitas"]], ["Tingkatan takson paling khusus adalah...", "Spesies", ["Kingdom", "Famili", "Genus", "Spesies"]], ["Nama ilmiah menggunakan sistem...", "Binomial nomenclature", ["Trinomial", "Numerik", "Binomial nomenclature", "Ekologis"]]]}, {"title": "Virus, Bakteri, Protista, dan Fungi", "desc": "Mempelajari kelompok mikroorganisme dan organisme sederhana, ciri-ciri, cara hidup, serta perannya bagi kehidupan.", "visual": "virus", "topics": [["Virus", "Virus bukan sel. Virus tersusun terutama atas materi genetik DNA atau RNA dan kapsid protein. Virus memperbanyak diri hanya di dalam sel inang."], ["Siklus litik dan lisogenik", "Pada siklus litik, virus memperbanyak diri lalu menyebabkan sel inang pecah. Pada lisogenik, materi genetik virus dapat bergabung dengan materi genetik inang untuk sementara."], ["Bakteri", "Bakteri adalah organisme prokariotik uniseluler. Bentuk umum: kokus, basil, dan spiril. Reproduksi utamanya melalui pembelahan biner."], ["Protista", "Protista adalah organisme eukariotik sederhana. Dalam pembelajaran dasar dapat dibahas sebagai protista mirip hewan, mirip tumbuhan, dan mirip jamur."], ["Fungi", "Jamur bersifat eukariotik dan heterotrof. Dinding selnya umumnya mengandung kitin. Banyak jamur tersusun atas hifa yang membentuk miselium."], ["Peranan mikroorganisme", "Ada yang bermanfaat untuk fermentasi, penguraian, produksi pangan, dan bioteknologi; ada pula yang menyebabkan penyakit."]], "quiz": [["Bakteri termasuk organisme...", "Prokariotik", ["Eukariotik", "Prokariotik", "Multiseluler", "Aviral"]], ["Benang penyusun tubuh jamur disebut...", "Hifa", ["Kapsid", "Hifa", "Flagel", "Pili"]], ["Virus hanya dapat memperbanyak diri di dalam...", "Sel hidup", ["Air", "Tanah", "Sel hidup", "Udara"]]]}, {"title": "Plantae dan Animalia", "desc": "Mengenal kelompok utama tumbuhan dan hewan beserta ciri serta contoh anggotanya.", "visual": "plant", "topics": [["Ciri Plantae", "Tumbuhan umumnya eukariotik, multiseluler, memiliki klorofil, mampu fotosintesis, dan memiliki dinding sel selulosa."], ["Bryophyta", "Lumut berukuran kecil dan belum memiliki jaringan pembuluh sejati seperti tumbuhan berpembuluh."], ["Pteridophyta", "Tumbuhan paku memiliki akar, batang, daun, dan jaringan pembuluh tetapi berkembang biak dengan spora."], ["Spermatophyta", "Tumbuhan berbiji terdiri atas Gymnospermae dan Angiospermae."], ["Invertebrata", "Kelompok hewan tanpa tulang belakang seperti Porifera, Cnidaria, Mollusca, Arthropoda, dan Echinodermata."], ["Vertebrata", "Kelompok hewan bertulang belakang yang umum dipelajari: ikan, amfibi, reptil, aves, dan mamalia."]], "quiz": [["Tumbuhan paku berkembang biak dengan...", "Spora", ["Biji", "Spora", "Tunas selalu", "Fragmentasi saja"]], ["Kelompok hewan berkaki berbuku-buku adalah...", "Arthropoda", ["Mollusca", "Arthropoda", "Porifera", "Cnidaria"]], ["Gymnospermae memiliki biji yang...", "Tidak tertutup buah", ["Tidak tertutup buah", "Selalu tanpa embrio", "Berada dalam buah", "Tidak memiliki kulit biji"]]]}, {"title": "Ekologi dan Perubahan Lingkungan", "desc": "Memahami interaksi makhluk hidup dengan lingkungan, aliran energi, rantai makanan, siklus materi, dan pencemaran.", "visual": "foodchain", "topics": [["Ekosistem", "Ekosistem tersusun atas komponen biotik dan abiotik yang saling berinteraksi."], ["Tingkat ekologi", "Individu → populasi → komunitas → ekosistem → bioma → biosfer."], ["Rantai makanan", "Menunjukkan perpindahan energi melalui hubungan makan dan dimakan."], ["Jaring-jaring makanan", "Gabungan beberapa rantai makanan yang saling terhubung dalam suatu ekosistem."], ["Piramida ekologi", "Dapat menggambarkan jumlah, biomassa, atau energi pada tingkat trofik."], ["Pencemaran dan konservasi", "Pencemaran dapat terjadi pada air, tanah, udara, dan lingkungan. Konservasi dilakukan melalui pengelolaan limbah, daur ulang, penghijauan, dan perlindungan habitat."]], "quiz": [["Organisme yang membuat makanan sendiri disebut...", "Produsen", ["Konsumen", "Produsen", "Detritivor", "Predator"]], ["Gabungan beberapa rantai makanan disebut...", "Jaring-jaring makanan", ["Piramida", "Suksesi", "Jaring-jaring makanan", "Bioma"]], ["Komponen tak hidup disebut...", "Abiotik", ["Biotik", "Abiotik", "Produsen", "Populasi"]]]}], "XI": [{"title": "Sel dan Transport Membran", "desc": "Mempelajari struktur sel, organel, perbedaan sel prokariotik dan eukariotik, serta mekanisme perpindahan zat melalui membran.", "visual": "cell", "topics": [["Teori sel", "Makhluk hidup tersusun atas satu atau lebih sel, sel merupakan unit dasar kehidupan, dan sel berasal dari sel sebelumnya."], ["Prokariotik vs eukariotik", "Prokariotik tidak memiliki inti bermembran. Eukariotik memiliki inti sejati dan organel bermembran."], ["Membran sel", "Membran sel bersifat selektif dan mengatur pertukaran zat antara bagian dalam dan luar sel."], ["Organel", "Mitokondria menghasilkan ATP, ribosom mensintesis protein, Golgi memodifikasi dan mengemas molekul, dan nukleus menyimpan materi genetik."], ["Difusi dan osmosis", "Difusi adalah perpindahan partikel dari konsentrasi tinggi ke rendah. Osmosis adalah perpindahan air melalui membran selektif."], ["Transport aktif", "Transport aktif memerlukan energi untuk memindahkan zat melawan gradien konsentrasi."]], "quiz": [["Organel utama penghasil ATP adalah...", "Mitokondria", ["Ribosom", "Mitokondria", "Lisosom", "Golgi"]], ["Perpindahan air melalui membran selektif disebut...", "Osmosis", ["Difusi", "Osmosis", "Eksositosis", "Fagositosis"]], ["Sel bakteri termasuk...", "Prokariotik", ["Eukariotik", "Prokariotik", "Multiseluler", "Acellular"]]]}, {"title": "Jaringan Tumbuhan dan Hewan", "desc": "Mengenal jaringan penyusun tubuh tumbuhan dan hewan serta hubungan struktur dan fungsinya.", "visual": "tissue", "topics": [["Meristem", "Jaringan meristem terdiri atas sel yang aktif membelah. Meristem apikal berperan dalam pertumbuhan panjang."], ["Epidermis dan parenkim", "Epidermis melindungi permukaan. Parenkim berperan sebagai pengisi, penyimpan, dan pada bagian tertentu sebagai tempat fotosintesis."], ["Xilem dan floem", "Xilem mengangkut air dan mineral. Floem mengangkut hasil fotosintesis."], ["Jaringan epitel", "Melapisi permukaan dan rongga tubuh."], ["Jaringan ikat", "Berfungsi menghubungkan dan menopang jaringan. Contohnya darah, tulang, dan jaringan lemak."], ["Otot dan saraf", "Jaringan otot menghasilkan gerak, sedangkan jaringan saraf menerima dan menghantarkan impuls."]], "quiz": [["Jaringan pengangkut air pada tumbuhan adalah...", "Xilem", ["Floem", "Xilem", "Epidermis", "Meristem"]], ["Jaringan yang melapisi permukaan tubuh adalah...", "Epitel", ["Ikat", "Saraf", "Epitel", "Otot"]], ["Jaringan aktif membelah pada tumbuhan adalah...", "Meristem", ["Parenkim", "Meristem", "Sklerenkim", "Floem"]]]}, {"title": "Sistem Gerak, Peredaran Darah, dan Pernapasan", "desc": "Mempelajari bagaimana tulang, otot, jantung, pembuluh darah, dan paru-paru bekerja menjaga fungsi tubuh.", "visual": "human", "topics": [["Sistem gerak", "Gerak manusia melibatkan tulang, sendi, dan otot. Rangka menopang tubuh dan melindungi organ."], ["Jenis sendi", "Contoh sendi: engsel, peluru, putar, pelana, dan geser."], ["Darah", "Komponen darah meliputi plasma, eritrosit, leukosit, dan trombosit."], ["Jantung dan pembuluh darah", "Arteri membawa darah keluar dari jantung, vena membawa darah menuju jantung, dan kapiler menjadi lokasi pertukaran zat."], ["Peredaran darah", "Peredaran kecil: jantung → paru-paru → jantung. Peredaran besar: jantung → tubuh → jantung."], ["Pernapasan", "Udara melewati hidung, faring, laring, trakea, bronkus, bronkiolus, dan sampai ke alveolus."]], "quiz": [["Pembuluh yang membawa darah keluar dari jantung adalah...", "Arteri", ["Vena", "Kapiler", "Arteri", "Venula"]], ["Pertukaran gas terutama terjadi di...", "Alveolus", ["Trakea", "Bronkus", "Alveolus", "Laring"]], ["Sel darah pembawa oksigen adalah...", "Eritrosit", ["Leukosit", "Trombosit", "Eritrosit", "Plasma"]]]}, {"title": "Pencernaan, Ekskresi, dan Koordinasi", "desc": "Mempelajari pengolahan makanan, pembuangan zat sisa, serta sistem saraf dan hormon.", "visual": "digestive", "topics": [["Pencernaan", "Saluran pencernaan: mulut → esofagus → lambung → usus halus → usus besar → rektum → anus."], ["Usus halus", "Merupakan lokasi utama pencernaan lanjutan dan penyerapan zat gizi."], ["Ekskresi", "Ekskresi adalah pembuangan zat sisa metabolisme. Organ penting: ginjal, kulit, paru-paru, dan hati."], ["Ginjal", "Unit fungsional ginjal adalah nefron. Pembentukan urine secara sederhana melibatkan filtrasi, reabsorpsi, dan sekresi."], ["Sistem saraf", "Sistem saraf pusat terdiri atas otak dan sumsum tulang belakang, sedangkan sistem perifer menghubungkannya dengan bagian tubuh."], ["Hormon", "Hormon adalah pembawa pesan kimia. Contohnya insulin, glukagon, tiroksin, dan adrenalin."]], "quiz": [["Unit fungsional ginjal adalah...", "Nefron", ["Neuron", "Nefron", "Alveolus", "Vili"]], ["Penyerapan zat gizi terutama terjadi di...", "Usus halus", ["Lambung", "Usus halus", "Mulut", "Esofagus"]], ["Pembawa pesan kimia dalam tubuh disebut...", "Hormon", ["Enzim", "Hormon", "Antibodi", "Pigmen"]]]}, {"title": "Reproduksi dan Pertahanan Tubuh", "desc": "Mempelajari pembentukan gamet, fertilisasi, siklus reproduksi, dan mekanisme sistem imun.", "visual": "immune", "topics": [["Gametogenesis", "Spermatogenesis membentuk sperma, sedangkan oogenesis membentuk dan mematangkan sel telur."], ["Fertilisasi", "Fertilisasi adalah peleburan sperma dan ovum sehingga terbentuk zigot."], ["Siklus reproduksi", "Siklus ovarium dan rahim dikendalikan oleh hormon seperti FSH, LH, estrogen, dan progesteron."], ["Pertahanan nonspesifik", "Meliputi kulit, selaput lendir, fagositosis, dan respons peradangan."], ["Pertahanan spesifik", "Melibatkan sistem imun adaptif, termasuk limfosit B dan limfosit T."], ["Vaksinasi", "Vaksin membantu sistem imun membentuk memori terhadap patogen tertentu."]], "quiz": [["Sel yang menghasilkan antibodi adalah...", "Limfosit B", ["Eritrosit", "Limfosit B", "Trombosit", "Neuron"]], ["Peleburan sperma dan ovum disebut...", "Fertilisasi", ["Ovulasi", "Fertilisasi", "Implantasi", "Mitosis"]], ["Vaksin membantu membentuk...", "Memori imun", ["Tulang", "Memori imun", "Hemoglobin", "Glukosa"]]]}], "XII": [{"title": "Pertumbuhan dan Perkembangan", "desc": "Mempelajari pertambahan ukuran organisme, proses diferensiasi, pertumbuhan tumbuhan, dan faktor-faktor yang memengaruhinya.", "visual": "growth", "topics": [["Pertumbuhan", "Pertumbuhan adalah pertambahan ukuran, massa, volume, atau jumlah sel yang dapat diukur secara kuantitatif."], ["Perkembangan", "Perkembangan adalah perubahan menuju tingkat struktur dan fungsi yang lebih matang."], ["Perkecambahan", "Biji menyerap air melalui imbibisi, metabolisme aktif kembali, lalu embrio tumbuh."], ["Pertumbuhan primer", "Terjadi di meristem apikal dan menyebabkan pertambahan panjang akar serta batang."], ["Pertumbuhan sekunder", "Terjadi karena aktivitas meristem lateral tertentu dan menambah diameter batang atau akar."], ["Faktor pertumbuhan", "Faktor internal: gen dan hormon. Faktor eksternal: air, cahaya, suhu, nutrisi, oksigen, dan kelembapan."]], "quiz": [["Pertambahan panjang batang terutama terjadi karena...", "Meristem apikal", ["Meristem lateral", "Meristem apikal", "Epidermis", "Floem"]], ["Penyerapan air oleh biji disebut...", "Imbibisi", ["Difusi", "Imbibisi", "Ekskresi", "Transpirasi"]], ["Contoh faktor internal pertumbuhan adalah...", "Hormon", ["Suhu", "Cahaya", "Hormon", "Air"]]]}, {"title": "Metabolisme", "desc": "Mempelajari kerja enzim, respirasi sel, fermentasi, fotosintesis, katabolisme, dan anabolisme.", "visual": "metabolism", "topics": [["Metabolisme", "Metabolisme adalah seluruh reaksi kimia yang berlangsung di dalam organisme."], ["Katabolisme dan anabolisme", "Katabolisme memecah molekul dan biasanya melepaskan energi. Anabolisme menyusun molekul dan memerlukan energi."], ["Enzim", "Enzim adalah katalis biologis. Aktivitasnya dipengaruhi suhu, pH, konsentrasi substrat, inhibitor, dan faktor lain."], ["Respirasi aerob", "Tahap utamanya: glikolisis, oksidasi piruvat, siklus Krebs, dan rantai transpor elektron."], ["Fermentasi", "Fermentasi berlangsung tanpa menggunakan oksigen sebagai penerima elektron akhir seperti pada respirasi aerob."], ["Fotosintesis", "Reaksi bergantung cahaya menghasilkan ATP dan NADPH, sedangkan siklus Calvin menggunakan keduanya untuk membantu membentuk molekul organik."]], "quiz": [["Katalis biologis disebut...", "Enzim", ["Hormon", "Enzim", "Antibodi", "Vitamin"]], ["Tahap awal pemecahan glukosa adalah...", "Glikolisis", ["Siklus Calvin", "Glikolisis", "Transkripsi", "Replikasi"]], ["Fotosintesis berlangsung di organel...", "Kloroplas", ["Nukleus", "Kloroplas", "Lisosom", "Ribosom"]]]}, {"title": "Materi Genetik dan Sintesis Protein", "desc": "Mempelajari DNA, RNA, gen, kromosom, transkripsi, translasi, dan hubungan informasi genetik dengan protein.", "visual": "dna", "topics": [["DNA", "DNA menyimpan informasi genetik. DNA tersusun dari nukleotida yang mengandung gula deoksiribosa, fosfat, dan basa nitrogen."], ["Pasangan basa", "A berpasangan dengan T, sedangkan G berpasangan dengan C."], ["RNA", "RNA menggunakan gula ribosa dan basa A, U, G, C. Jenis penting: mRNA, tRNA, dan rRNA."], ["Gen", "Gen adalah bagian DNA yang membawa informasi untuk menghasilkan produk fungsional tertentu."], ["Transkripsi", "Informasi DNA digunakan untuk membentuk RNA."], ["Translasi", "Informasi mRNA dibaca ribosom untuk menyusun urutan asam amino menjadi protein."]], "quiz": [["Basa DNA yang berpasangan dengan Adenin adalah...", "Timin", ["Urasil", "Guanin", "Timin", "Sitosin"]], ["RNA menggunakan basa...", "Urasil", ["Timin", "Urasil", "Timidin", "Xantin"]], ["Translasi berlangsung pada...", "Ribosom", ["Lisosom", "Ribosom", "Sentriol", "Vakuola"]]]}, {"title": "Pembelahan Sel dan Pewarisan Sifat", "desc": "Mempelajari siklus sel, mitosis, meiosis, hukum Mendel, genotipe, fenotipe, dan pola pewarisan.", "visual": "mitosis", "topics": [["Siklus sel", "Siklus sel mencakup interfase dan fase pembelahan. Replikasi DNA berlangsung pada fase S."], ["Mitosis", "Tahap utama: profase, metafase, anafase, telofase, lalu sitokinesis."], ["Meiosis", "Meiosis menghasilkan sel dengan jumlah kromosom setengah dari sel awal diploid dan menciptakan variasi genetik."], ["Hukum segregasi", "Pasangan alel memisah ketika gamet dibentuk."], ["Genotipe dan fenotipe", "Genotipe adalah susunan genetik, sedangkan fenotipe adalah sifat yang dapat diamati sebagai hasil genotipe dan lingkungan."], ["Persilangan Mendel", "Pada Aa × Aa dengan dominansi penuh, rasio genotipe 1:2:1 dan rasio fenotipe 3:1."]], "quiz": [["Replikasi DNA berlangsung pada fase...", "S", ["G1", "S", "G2", "M akhir"]], ["Pembelahan pembentuk gamet adalah...", "Meiosis", ["Mitosis", "Meiosis", "Amitosis saja", "Biner"]], ["Aa disebut genotipe...", "Heterozigot", ["Homozigot dominan", "Heterozigot", "Homozigot resesif", "Haploid"]]]}, {"title": "Evolusi dan Bioteknologi", "desc": "Mempelajari perubahan populasi dari generasi ke generasi, seleksi alam, bukti evolusi, spesiasi, dan penerapan bioteknologi.", "visual": "evolution", "topics": [["Evolusi", "Evolusi adalah perubahan karakteristik genetik populasi dari generasi ke generasi."], ["Variasi genetik", "Variasi muncul melalui mutasi, rekombinasi, dan reproduksi seksual."], ["Seleksi alam", "Individu dengan sifat yang sesuai dengan lingkungannya cenderung memiliki keberhasilan reproduksi lebih tinggi."], ["Bukti evolusi", "Bukti dapat berasal dari fosil, anatomi perbandingan, biogeografi, genetika, dan biologi molekuler."], ["Bioteknologi konvensional", "Memanfaatkan proses biologis alami seperti fermentasi pada tempe, yoghurt, roti, dan kecap."], ["Bioteknologi modern", "Mencakup kultur jaringan, DNA rekombinan, rekayasa genetika, diagnostik molekuler, dan produksi protein tertentu."]], "quiz": [["Perubahan genetik populasi dari generasi ke generasi disebut...", "Evolusi", ["Ekologi", "Evolusi", "Respirasi", "Suksesi"]], ["Contoh bioteknologi konvensional adalah...", "Fermentasi tempe", ["PCR", "Fermentasi tempe", "Sekuensing DNA", "Kloning gen"]], ["Terbentuknya spesies baru disebut...", "Spesiasi", ["Mutasi", "Spesiasi", "Adaptasi", "Homeostasis"]]]}]};


function expandBiologyQuizToTen(){
  Object.values(biologyData).flat().forEach(ch=>{
    const topics=ch.topics||[];
    const summaries=topics.map(t=>String(t[1]||'').split(/(?<=[.!?])\s+/)[0]);
    let i=0;
    while(ch.quiz.length<10 && topics.length){
      const idx=i%topics.length, topic=topics[idx], title=topic[0], answer=summaries[idx]||topic[1];
      const distract=summaries.filter((_,j)=>j!==idx).slice(0,3);
      while(distract.length<3)distract.push(`Pernyataan yang tidak sesuai dengan ${title}.`);
      ch.quiz.push([`Pernyataan yang paling tepat tentang ${title} adalah...`,answer,[answer,...distract]]);
      i++;
    }
  });
}
expandBiologyQuizToTen();

let currentClass = ["X","XI","XII"].includes(BISAQuery.get("grade")) ? BISAQuery.get("grade") : "X";
let currentChapter = 0;
const completed = JSON.parse(localStorage.getItem(BISACompletedKey) || "{}");
const theme = localStorage.getItem(BISAThemeKey);
if(theme === "dark") document.body.classList.add("dark");

const el = id => document.getElementById(id);
const chapterList = el("chapterList");
const lessonContent = el("lessonContent");
const visualArea = el("visualArea");
const visualInfo = el("visualInfo");

function chapterKey(c=currentClass, i=currentChapter){ return `${c}-${i}`; }

function renderChapterList(filter=""){
  chapterList.innerHTML = "";
  const chapters = biologyData[currentClass];
  chapters.forEach((ch,i)=>{
    const hay = (ch.title+" "+ch.desc+" "+ch.topics.flat().join(" ")).toLowerCase();
    if(filter && !hay.includes(filter.toLowerCase())) return;
    const btn = document.createElement("button");
    btn.className = "chapter-item" + (i===currentChapter ? " active" : "");
    btn.innerHTML = `
      <span class="chapter-num">${completed[chapterKey(currentClass,i)] ? "✓" : i+1}</span>
      <span><strong>Bab ${i+1}</strong><small>${ch.title}</small></span>`;
    btn.onclick = ()=>{currentChapter=i; renderAll(); if(innerWidth<980) el("sidebar").classList.remove("open");};
    chapterList.appendChild(btn);
  });
}

function renderLesson(){
  const ch = biologyData[currentClass][currentChapter];
  el("pageTitle").textContent = `Kelas ${currentClass} — ${ch.title}`;
  el("heroBadge").textContent = `Kelas ${currentClass} • Bab ${currentChapter+1}`;
  el("heroTitle").textContent = ch.title;
  el("heroDesc").textContent = ch.desc;
  lessonContent.innerHTML = "";
  ch.topics.forEach((t,i)=>{
    const box=document.createElement("div");
    box.className="topic"+(i===0?" open":"");
    box.innerHTML=`<button><span>${i+1}. ${t[0]}</span><span>＋</span></button><div class="topic-body">${t[1]}</div>`;
    box.querySelector("button").onclick=()=>box.classList.toggle("open");
    lessonContent.appendChild(box);
  });
  const done = !!completed[chapterKey()];
  el("markDoneBtn").classList.toggle("done",done);
  el("markDoneBtn").textContent = done ? "✓ Sudah Selesai" : "✓ Tandai Selesai";
}

function info(title, text){
  visualInfo.innerHTML = `<strong>${title}</strong><br>${text}`;
}

function svgWrap(inner, viewBox="0 0 520 360"){
  return `<svg class="bio-svg" viewBox="${viewBox}" role="img" aria-label="Diagram Biologi interaktif">${inner}</svg>`;
}

function renderVisual(type){
  const titleMap = {
    organization:"Tingkat Organisasi Kehidupan", biodiversity:"Keanekaragaman Hayati",
    virus:"Struktur Virus", plant:"Bagian Tumbuhan", foodchain:"Rantai Makanan",
    cell:"Sel Hewan", tissue:"Jaringan Tumbuhan", human:"Sistem Organ",
    digestive:"Sistem Pencernaan", immune:"Pertahanan Tubuh", growth:"Pertumbuhan Tumbuhan",
    metabolism:"Metabolisme", dna:"DNA", mitosis:"Mitosis", evolution:"Evolusi"
  };
  el("visualTitle").textContent=titleMap[type]||"Visualisasi";
  visualInfo.textContent="Klik bagian gambar untuk melihat penjelasan.";

  const c = "var(--accent)";
  const m = "var(--muted)";
  const p = "var(--panel)";
  const p2 = "var(--panel2)";
  const line = "var(--line)";

  if(type==="organization"){
    const labels=["Sel","Jaringan","Organ","Organisme","Populasi","Ekosistem"];
    visualArea.innerHTML=svgWrap(labels.map((x,i)=>`
      <g class="hotspot" data-title="${x}" data-info="${[
        "Unit struktural dan fungsional dasar kehidupan.",
        "Kumpulan sel sejenis yang bekerja bersama.",
        "Struktur yang tersusun atas beberapa jaringan.",
        "Satu individu makhluk hidup.",
        "Sekelompok organisme sejenis di tempat dan waktu yang sama.",
        "Interaksi komunitas dengan lingkungan abiotik."
      ][i]}">
        <circle cx="${65+i*78}" cy="${180+(i%2?35:-35)}" r="33" fill="${i%2?c:p}" stroke="${c}" stroke-width="3"/>
        <text x="${65+i*78}" y="${185+(i%2?35:-35)}" text-anchor="middle" font-size="12" fill="${i%2?'white':m}">${x}</text>
      </g>
      ${i<labels.length-1?`<line x1="${98+i*78}" y1="${180+(i%2?35:-35)}" x2="${110+i*78}" y2="${180+((i+1)%2?35:-35)}" stroke="${c}" stroke-width="3"/>`:""}
    `).join(""));
  } else if(type==="biodiversity"){
    visualArea.innerHTML=svgWrap(`
      <g class="hotspot" data-title="Keanekaragaman Gen" data-info="Variasi di dalam satu spesies, misalnya varietas mangga.">
        <circle cx="130" cy="175" r="72" fill="${p}" stroke="${c}" stroke-width="4"/>
        <text x="130" y="170" text-anchor="middle" font-weight="700" fill="${c}">GEN</text>
        <text x="130" y="192" text-anchor="middle" font-size="12" fill="${m}">dalam satu spesies</text>
      </g>
      <g class="hotspot" data-title="Keanekaragaman Spesies" data-info="Perbedaan antarjenis organisme dalam suatu wilayah.">
        <circle cx="260" cy="175" r="72" fill="${p2}" stroke="${c}" stroke-width="4"/>
        <text x="260" y="170" text-anchor="middle" font-weight="700" fill="${c}">SPESIES</text>
        <text x="260" y="192" text-anchor="middle" font-size="12" fill="${m}">antarjenis</text>
      </g>
      <g class="hotspot" data-title="Keanekaragaman Ekosistem" data-info="Variasi habitat beserta komunitas makhluk hidup di dalamnya.">
        <circle cx="390" cy="175" r="72" fill="${p}" stroke="${c}" stroke-width="4"/>
        <text x="390" y="170" text-anchor="middle" font-weight="700" fill="${c}">EKOSISTEM</text>
        <text x="390" y="192" text-anchor="middle" font-size="12" fill="${m}">antarhabitat</text>
      </g>`);
  } else if(type==="virus"){
    visualArea.innerHTML=svgWrap(`
      <g class="hotspot" data-title="Kapsid" data-info="Lapisan protein yang melindungi materi genetik virus.">
        <polygon points="260,70 330,110 330,190 260,230 190,190 190,110" fill="${p}" stroke="${c}" stroke-width="6"/>
        <text x="260" y="145" text-anchor="middle" fill="${c}" font-weight="700">KAPSID</text>
      </g>
      <g class="hotspot" data-title="Materi Genetik" data-info="Berupa DNA atau RNA, bergantung jenis virus.">
        <path d="M230 160 C245 120,275 200,292 145 C300 120,315 155,320 170" fill="none" stroke="${c}" stroke-width="5"/>
        <text x="260" y="260" text-anchor="middle" fill="${m}">Klik kapsid atau asam nukleat</text>
      </g>`);
  } else if(type==="plant"){
    visualArea.innerHTML=svgWrap(`
      <g class="hotspot" data-title="Akar" data-info="Menyerap air dan mineral serta membantu menopang tumbuhan.">
        <path d="M260 235 L260 310 M260 260 L225 300 M260 270 L295 305" stroke="${c}" stroke-width="7" stroke-linecap="round"/>
      </g>
      <g class="hotspot" data-title="Batang" data-info="Menopang organ tumbuhan dan menjadi jalur transportasi.">
        <path d="M260 235 L260 120" stroke="${c}" stroke-width="10" stroke-linecap="round"/>
      </g>
      <g class="hotspot" data-title="Daun" data-info="Tempat utama fotosintesis pada banyak tumbuhan.">
        <ellipse cx="210" cy="170" rx="50" ry="25" fill="${p}" stroke="${c}" stroke-width="4" transform="rotate(-25 210 170)"/>
        <ellipse cx="310" cy="155" rx="50" ry="25" fill="${p2}" stroke="${c}" stroke-width="4" transform="rotate(25 310 155)"/>
      </g>
      <g class="hotspot" data-title="Bunga" data-info="Organ reproduksi pada tumbuhan berbunga.">
        <circle cx="260" cy="85" r="22" fill="${c}"/>
        <circle cx="230" cy="85" r="20" fill="${p}" stroke="${c}" stroke-width="4"/>
        <circle cx="290" cy="85" r="20" fill="${p}" stroke="${c}" stroke-width="4"/>
        <circle cx="260" cy="55" r="20" fill="${p2}" stroke="${c}" stroke-width="4"/>
      </g>`);
  } else if(type==="foodchain"){
    const items=[["Rumput",70],["Belalang",170],["Katak",270],["Ular",370],["Elang",470]];
    visualArea.innerHTML=svgWrap(items.map((it,i)=>`
      <g class="hotspot" data-title="${it[0]}" data-info="${[
        "Produsen yang mengubah energi cahaya menjadi energi kimia melalui fotosintesis.",
        "Konsumen primer yang memakan produsen.",
        "Konsumen sekunder yang memakan belalang.",
        "Predator pada tingkat trofik lebih tinggi.",
        "Konsumen puncak pada contoh rantai makanan ini."
      ][i]}">
        <circle cx="${it[1]}" cy="170" r="37" fill="${i%2?p:p2}" stroke="${c}" stroke-width="4"/>
        <text x="${it[1]}" y="175" text-anchor="middle" font-size="12" fill="${m}">${it[0]}</text>
      </g>
      ${i<items.length-1?`<text x="${it[1]+50}" y="176" font-size="26" fill="${c}">→</text>`:""}
    `).join(""));
  } else if(type==="cell"){
    visualArea.innerHTML=svgWrap(`
      <g class="hotspot" data-title="Membran Sel" data-info="Mengatur keluar-masuk zat secara selektif.">
        <ellipse cx="260" cy="180" rx="190" ry="120" fill="${p}" stroke="${c}" stroke-width="6"/>
      </g>
      <g class="hotspot" data-title="Nukleus" data-info="Menyimpan materi genetik dan mengatur banyak aktivitas sel.">
        <circle cx="255" cy="180" r="52" fill="${p2}" stroke="${c}" stroke-width="5"/>
        <circle cx="270" cy="165" r="12" fill="${c}"/>
      </g>
      <g class="hotspot" data-title="Mitokondria" data-info="Berperan penting dalam respirasi sel dan pembentukan ATP.">
        <ellipse cx="155" cy="135" rx="42" ry="22" fill="${p2}" stroke="${c}" stroke-width="4"/>
        <path d="M125 135 q20 -18 35 0 t35 0" fill="none" stroke="${c}" stroke-width="3"/>
      </g>
      <g class="hotspot" data-title="Badan Golgi" data-info="Memodifikasi, mengemas, dan menyalurkan berbagai molekul.">
        <path d="M340 215 q50 -30 80 0 M350 230 q40 -25 65 0 M365 244 q25 -18 45 0" fill="none" stroke="${c}" stroke-width="5"/>
      </g>
      <g class="hotspot" data-title="Ribosom" data-info="Tempat sintesis protein.">
        ${[ [150,220],[190,95],[330,105],[375,160],[210,260] ].map(a=>`<circle cx="${a[0]}" cy="${a[1]}" r="5" fill="${c}"/>`).join("")}
      </g>`);
  } else if(type==="tissue"){
    visualArea.innerHTML=svgWrap(`
      <g class="hotspot" data-title="Epidermis" data-info="Lapisan pelindung permukaan tumbuhan.">
        <rect x="80" y="70" width="360" height="55" rx="12" fill="${p}" stroke="${c}" stroke-width="3"/>
        <text x="260" y="102" text-anchor="middle" fill="${m}">Epidermis</text>
      </g>
      <g class="hotspot" data-title="Parenkim" data-info="Jaringan dasar untuk fotosintesis, penyimpanan, dan pengisi jaringan.">
        <rect x="80" y="130" width="360" height="80" rx="12" fill="${p2}" stroke="${c}" stroke-width="3"/>
        <text x="260" y="176" text-anchor="middle" fill="${m}">Parenkim</text>
      </g>
      <g class="hotspot" data-title="Xilem" data-info="Mengangkut air dan mineral dari akar ke bagian lain tumbuhan.">
        <rect x="135" y="225" width="90" height="70" rx="12" fill="${p}" stroke="${c}" stroke-width="3"/>
        <text x="180" y="266" text-anchor="middle" fill="${m}">Xilem</text>
      </g>
      <g class="hotspot" data-title="Floem" data-info="Mengangkut hasil fotosintesis ke bagian tumbuhan yang membutuhkan.">
        <rect x="295" y="225" width="90" height="70" rx="12" fill="${p}" stroke="${c}" stroke-width="3"/>
        <text x="340" y="266" text-anchor="middle" fill="${m}">Floem</text>
      </g>`);
  } else if(type==="human"){
    visualArea.innerHTML=svgWrap(`
      <circle cx="260" cy="75" r="38" fill="${p}" stroke="${c}" stroke-width="4"/>
      <path d="M260 113 L260 250 M260 150 L195 205 M260 150 L325 205 M260 250 L220 330 M260 250 L300 330" stroke="${c}" stroke-width="8" stroke-linecap="round"/>
      <g class="hotspot" data-title="Paru-paru" data-info="Tempat pertukaran oksigen dan karbon dioksida di alveolus.">
        <ellipse cx="225" cy="165" rx="30" ry="45" fill="${p2}" stroke="${c}" stroke-width="3"/>
        <ellipse cx="295" cy="165" rx="30" ry="45" fill="${p2}" stroke="${c}" stroke-width="3"/>
      </g>
      <g class="hotspot" data-title="Jantung" data-info="Memompa darah melalui sirkulasi kecil dan besar.">
        <path d="M260 205 C235 180 215 220 260 250 C305 220 285 180 260 205" fill="${c}"/>
      </g>
      <g class="hotspot" data-title="Sistem Gerak" data-info="Tulang, sendi, dan otot bekerja bersama menghasilkan gerakan.">
        <circle cx="260" cy="285" r="15" fill="${p}" stroke="${c}" stroke-width="3"/>
      </g>`);
  } else if(type==="digestive"){
    visualArea.innerHTML=svgWrap(`
      <g class="hotspot" data-title="Mulut" data-info="Pencernaan mekanik dimulai oleh gigi dan pencernaan kimiawi dimulai oleh enzim tertentu.">
        <circle cx="260" cy="55" r="20" fill="${p}" stroke="${c}" stroke-width="4"/>
      </g>
      <path d="M260 75 L260 130" stroke="${c}" stroke-width="7"/>
      <g class="hotspot" data-title="Lambung" data-info="Mengaduk makanan dan mencerna terutama protein dalam suasana asam.">
        <path d="M260 130 C315 125 330 190 290 215 C250 235 225 190 245 155 Z" fill="${p2}" stroke="${c}" stroke-width="4"/>
      </g>
      <g class="hotspot" data-title="Usus Halus" data-info="Lokasi utama pencernaan lanjutan dan penyerapan zat gizi.">
        <path d="M215 235 q90 -30 90 20 q-90 20 0 40 q-90 20 0 40" fill="none" stroke="${c}" stroke-width="7"/>
      </g>
      <g class="hotspot" data-title="Usus Besar" data-info="Berperan terutama dalam penyerapan air dan pembentukan feses.">
        <rect x="185" y="220" width="150" height="120" rx="30" fill="none" stroke="${c}" stroke-width="5"/>
      </g>`);
  } else if(type==="immune"){
    visualArea.innerHTML=svgWrap(`
      <g class="hotspot" data-title="Patogen" data-info="Mikroorganisme atau agen biologis yang dapat menyebabkan penyakit.">
        <circle cx="160" cy="180" r="48" fill="${p}" stroke="${c}" stroke-width="4"/>
        ${[0,45,90,135,180,225,270,315].map(a=>`<line x1="160" y1="180" x2="${160+70*Math.cos(a*Math.PI/180)}" y2="${180+70*Math.sin(a*Math.PI/180)}" stroke="${c}" stroke-width="4"/>`).join("")}
      </g>
      <text x="245" y="188" font-size="32" fill="${c}">→</text>
      <g class="hotspot" data-title="Antibodi" data-info="Protein yang mengenali antigen tertentu.">
        <path d="M330 125 L360 165 L390 125 M360 165 L360 225" fill="none" stroke="${c}" stroke-width="9" stroke-linecap="round"/>
        <path d="M400 145 L430 185 L460 145 M430 185 L430 245" fill="none" stroke="${c}" stroke-width="9" stroke-linecap="round"/>
      </g>`);
  } else if(type==="growth"){
    visualArea.innerHTML=svgWrap(`
      <line x1="80" y1="300" x2="450" y2="300" stroke="${line}" stroke-width="4"/>
      ${[
        [120,260,35],[220,220,75],[330,155,140],[430,95,200]
      ].map((a,i)=>`
        <g class="hotspot" data-title="Tahap ${i+1}" data-info="${[
          "Biji mulai menyerap air dan metabolisme kembali aktif.",
          "Radikula dan plumula mulai berkembang.",
          "Batang memanjang dan daun muda berkembang.",
          "Tumbuhan semakin besar dan organ berkembang lebih matang."
        ][i]}">
          <line x1="${a[0]}" y1="300" x2="${a[0]}" y2="${a[1]}" stroke="${c}" stroke-width="7"/>
          <ellipse cx="${a[0]-16}" cy="${a[1]+10}" rx="22" ry="11" fill="${p2}" stroke="${c}" stroke-width="3" transform="rotate(-25 ${a[0]-16} ${a[1]+10})"/>
          <ellipse cx="${a[0]+16}" cy="${a[1]+10}" rx="22" ry="11" fill="${p}" stroke="${c}" stroke-width="3" transform="rotate(25 ${a[0]+16} ${a[1]+10})"/>
        </g>`).join("")} `);
  } else if(type==="metabolism"){
    visualArea.innerHTML=svgWrap(`
      <g class="hotspot" data-title="Katabolisme" data-info="Pemecahan molekul kompleks menjadi lebih sederhana dan umumnya menghasilkan energi.">
        <circle cx="155" cy="180" r="85" fill="${p}" stroke="${c}" stroke-width="4"/>
        <text x="155" y="170" text-anchor="middle" fill="${c}" font-weight="800">KATABOLISME</text>
        <text x="155" y="195" text-anchor="middle" fill="${m}" font-size="12">kompleks → sederhana</text>
      </g>
      <g class="hotspot" data-title="Anabolisme" data-info="Penyusunan molekul sederhana menjadi kompleks dan membutuhkan energi.">
        <circle cx="365" cy="180" r="85" fill="${p2}" stroke="${c}" stroke-width="4"/>
        <text x="365" y="170" text-anchor="middle" fill="${c}" font-weight="800">ANABOLISME</text>
        <text x="365" y="195" text-anchor="middle" fill="${m}" font-size="12">sederhana → kompleks</text>
      </g>`);
  } else if(type==="dna"){
    visualArea.innerHTML=svgWrap(`
      <path d="M150 50 C400 90 120 130 370 170 C120 210 400 250 150 310" fill="none" stroke="${c}" stroke-width="6"/>
      <path d="M370 50 C120 90 400 130 150 170 C400 210 120 250 370 310" fill="none" stroke="${c}" stroke-width="6"/>
      ${[75,110,145,180,215,250,285].map((y,i)=>`
        <g class="hotspot" data-title="Pasangan Basa" data-info="${i%2===0?'Adenin berpasangan dengan Timin melalui ikatan hidrogen.':'Guanin berpasangan dengan Sitosin melalui ikatan hidrogen.'}">
          <line x1="${i%2?195:180}" y1="${y}" x2="${i%2?325:340}" y2="${y}" stroke="${m}" stroke-width="3"/>
          <text x="260" y="${y-6}" text-anchor="middle" font-size="12" fill="${c}">${i%2?'G — C':'A — T'}</text>
        </g>`).join("")}`);
  } else if(type==="mitosis"){
    const labs=["Profase","Metafase","Anafase","Telofase"];
    visualArea.innerHTML=svgWrap(labs.map((x,i)=>`
      <g class="hotspot" data-title="${x}" data-info="${[
        "Kromatin memadat menjadi kromosom dan struktur pembelahan mulai terbentuk.",
        "Kromosom berjajar di bidang ekuator sel.",
        "Kromatid saudara berpisah menuju kutub berlawanan.",
        "Inti baru terbentuk dan pembelahan mendekati akhir."
      ][i]}">
        <circle cx="${70+i*125}" cy="180" r="48" fill="${i%2?p:p2}" stroke="${c}" stroke-width="4"/>
        ${i===0?`<path d="M50 160 l40 40 M90 160 l-40 40" stroke="${c}" stroke-width="5"/>`:""}
        ${i===1?`<line x1="${70+i*125}" y1="140" x2="${70+i*125}" y2="220" stroke="${c}" stroke-width="4"/>`:""}
        ${i===2?`<path d="M${45+i*125} 160 l20 20 l-20 20 M${95+i*125} 160 l-20 20 l20 20" fill="none" stroke="${c}" stroke-width="4"/>`:""}
        ${i===3?`<circle cx="${50+i*125}" cy="180" r="18" fill="none" stroke="${c}" stroke-width="4"/><circle cx="${90+i*125}" cy="180" r="18" fill="none" stroke="${c}" stroke-width="4"/>`:""}
        <text x="${70+i*125}" y="255" text-anchor="middle" font-size="12" fill="${m}">${x}</text>
      </g>`).join(""));
  } else if(type==="evolution"){
    visualArea.innerHTML=svgWrap(`
      <path d="M260 300 C260 250 250 220 220 190 C190 160 160 130 140 90" fill="none" stroke="${c}" stroke-width="6"/>
      <path d="M260 255 C300 230 330 200 350 155" fill="none" stroke="${c}" stroke-width="6"/>
      <path d="M220 190 C250 160 275 125 285 80" fill="none" stroke="${c}" stroke-width="6"/>
      <g class="hotspot" data-title="Nenek moyang bersama" data-info="Cabang evolusi dapat menunjukkan bahwa beberapa kelompok berbagi nenek moyang yang sama.">
        <circle cx="260" cy="300" r="14" fill="${c}"/>
      </g>
      <g class="hotspot" data-title="Spesiasi" data-info="Cabang yang terpisah melambangkan terbentuknya garis keturunan berbeda melalui proses evolusi.">
        <circle cx="220" cy="190" r="14" fill="${c}"/>
      </g>
      <g class="hotspot" data-title="Variasi dan seleksi" data-info="Variasi genetik menyediakan bahan bagi seleksi alam dan perubahan populasi.">
        <circle cx="350" cy="155" r="14" fill="${c}"/>
      </g>
      <text x="120" y="70" fill="${m}">A</text><text x="285" y="60" fill="${m}">B</text><text x="360" y="135" fill="${m}">C</text>`);
  }

  visualArea.querySelectorAll(".hotspot").forEach(node=>{
    node.addEventListener("click",()=>info(node.dataset.title||"Bagian", node.dataset.info||""));
  });
}

function bridgeProgress(){
  if (window.parent !== window) window.parent.postMessage({type:'BISA_MODULE_SNAPSHOT', subject:'Biologi', level:'SMA', keys:Object.keys(completed).filter(k=>completed[k])}, '*');
}

function renderProgress(){
  const keys = Object.keys(biologyData).flatMap(c=>biologyData[c].map((_,i)=>`${c}-${i}`));
  const count = keys.filter(k=>completed[k]).length;
  const pct = Math.round(count/keys.length*100);
  el("progressText").textContent = `${pct}%`;
  el("progressBar").style.width = `${pct}%`;
}

function renderAll(){
  renderChapterList(el("searchInput").value);
  renderLesson();
  renderVisual(biologyData[currentClass][currentChapter].visual);
  renderProgress();
}

document.querySelectorAll(".class-btn").forEach(btn=>{
  btn.onclick=()=>{
    document.querySelectorAll(".class-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    currentClass=btn.dataset.class;
    currentChapter=0;
    renderAll();
  };
});

el("searchInput").addEventListener("input",e=>renderChapterList(e.target.value));

el("markDoneBtn").onclick=()=>{
  const key=chapterKey();
  completed[key]=!completed[key];
  localStorage.setItem(BISACompletedKey,JSON.stringify(completed));
  bridgeProgress();
  renderAll();
};

el("themeBtn").onclick=()=>{
  document.body.classList.toggle("dark");
  localStorage.setItem(BISAThemeKey,document.body.classList.contains("dark")?"dark":"light");
  el("themeBtn").textContent=document.body.classList.contains("dark")?"☀️":"🌙";
};

el("menuBtn").onclick=()=>el("sidebar").classList.toggle("open");

el("prevBtn").onclick=()=>{
  if(currentChapter>0) currentChapter--;
  else {
    const classes=["X","XI","XII"]; const ci=classes.indexOf(currentClass);
    if(ci>0){currentClass=classes[ci-1]; currentChapter=biologyData[currentClass].length-1;}
  }
  document.querySelectorAll(".class-btn").forEach(b=>b.classList.toggle("active",b.dataset.class===currentClass));
  renderAll();
  scrollTo({top:0,behavior:"smooth"});
};

el("nextBtn").onclick=()=>{
  if(currentChapter<biologyData[currentClass].length-1) currentChapter++;
  else {
    const classes=["X","XI","XII"]; const ci=classes.indexOf(currentClass);
    if(ci<classes.length-1){currentClass=classes[ci+1]; currentChapter=0;}
  }
  document.querySelectorAll(".class-btn").forEach(b=>b.classList.toggle("active",b.dataset.class===currentClass));
  renderAll();
  scrollTo({top:0,behavior:"smooth"});
};

function renderQuiz(){
  const ch=biologyData[currentClass][currentChapter];
  el("quizTitle").textContent=`Kuis: ${ch.title}`;
  const quizBody=el("quizBody");
  quizBody.innerHTML="";
  let score=0, answered=0;
  ch.quiz.forEach((q,qi)=>{
    const box=document.createElement("div");
    box.className="question";
    box.innerHTML=`<p>${qi+1}. ${q[0]}</p>`;
    q[2].forEach(opt=>{
      const b=document.createElement("button");
      b.className="option";
      b.textContent=opt;
      b.onclick=()=>{
        if(box.dataset.answered) return;
        box.dataset.answered="1";
        answered++;
        box.querySelectorAll(".option").forEach(x=>{
          if(x.textContent===q[1]) x.classList.add("correct");
        });
        if(opt===q[1]) score++; else b.classList.add("wrong");
        if(answered===ch.quiz.length){
          const s=document.createElement("div");
          s.className="score-box";
          s.textContent=`Skor kamu: ${score}/${ch.quiz.length} (${Math.round(score/ch.quiz.length*100)}%)`;
          quizBody.appendChild(s);
        }
      };
      box.appendChild(b);
    });
    quizBody.appendChild(box);
  });
}

el("openQuizBtn").onclick=()=>{
  renderQuiz();
  el("quizModal").classList.add("open");
  el("quizModal").setAttribute("aria-hidden","false");
};
el("closeQuizBtn").onclick=()=>el("quizModal").classList.remove("open");
el("quizModal").onclick=e=>{if(e.target===el("quizModal"))el("quizModal").classList.remove("open")};

el("themeBtn").textContent=document.body.classList.contains("dark")?"☀️":"🌙";
renderAll();


if (BISAQuery.get('embed') === '1') document.body.classList.add('bisa-embedded');
if (BISALocked) document.querySelectorAll('.class-btn').forEach(btn => { btn.hidden = btn.dataset.class !== currentClass; });
document.querySelectorAll('.class-btn').forEach(b=>b.classList.toggle('active', b.dataset.class===currentClass));
renderAll();
bridgeProgress();
