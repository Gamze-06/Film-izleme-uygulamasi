const filmler = [
    {
        id: 1,
        baslik:"ZOOTOPİA",
        poster: "images/0zootopia-2016.jpg",
        yil:2016,
        kategori:"Animasyon",
        imdb: 8.7,
        aciklama: "Ayrımcılık karşıtı mesajı ve polisiye hikayesiyle ilgi çekici bir animasyon.Tüm ahalisini hayvanların oluşturduğu Zootropolis’te minik ve idealist bir tavşan olan Judy Hopp, şehirdeki düzeni sağlamayı amaçlayan bir polis memuru olmaya çalışır daha çocukken bile.",
        youtubeFragmanId: "die5BALsMIc",
    },
    {
        id: 2,
        baslik: "ALVİN VE SİNCAPLAR",
        poster:"images/alvin-ve-sincaplar-2015.jpg",
        yil: 2015,
        kategori: "Animasyon",
        imdb: 9.2,
        aciklama: "Üç sincap kovuklarında mutlu mesut yaşarken, evleri yılbaşı ağacı satan bir firma tarafından kesilir ve lan Hawk'a gönderilir. Hawk, Los Angeles’ta müzik piyasasında çalışmaktadır ve Dave Seville' in yakın arkadaşıdır.",
        youtubeFragmanId: "iPZHlclFpCs",

    },
     {
        id: 3,
        baslik: "BAŞLANGIÇ",
        poster:"images/baslangic-2010.jpg",
        yil: 2010,
        kategori: "Aksiyon, Bilim Kurgu",
        imdb: 7.8,
        aciklama:"Dom Cobb çok yetenekli bir hırsızdır. Uzmanlık alanı, zihnin en savunmasız olduğu rüya görme anında, bilinçaltının derinliklerindeki değerli sırları çekip çıkarmak ve onları çalmaktır. Cobb’un bu ender mahareti, onu kurumsal casusluğun tehlikeli yeni dünyasında aranan bir oyuncu yapmıştır.",
        youtubeFragmanId: "CD2NyG_ApRQs",

    },
     {
        id: 4,
        baslik: "COCO",
        poster:"images/coco-2020.png",
        yil: 2020,
        kategori: "Animasyon",
        imdb: 8.9,
        aciklama:"Disney animasyon filmleri arasında özgün ve derinlikli senaryosuyla dikkat çeken Coco, Miguel adlı başkarakterin bir Meksika geleneği olan Ölüler Bayramında yanlışlıkla ölüler alemine geçmesini ve burada ünlü bir şarkıcı olan büyük büyük babasını bulmasını anlatıyor.",
        youtubeFragmanId: "V46MgKE0LsQ",
    },
     {
        id: 5,
        baslik: "KARAYİP KORSANLARI",
        poster:"images/karayip-korsanlari-2003.jpg",
        yil: 2020,
        kategori: "Aksiyon",
        imdb:6.8,
        aciklama:"Hafif üçkağıtçı fakat bir o kadar da sevimli Kaptan Jack Sparrow’un (Johnny Depp) korsanlık yaşamı, düşmanı kurnaz Kaptan Barbossa’nın (Geoffrey Rush), gemisi Siyah İnci’yi çalmasıyla altüst olur.",
        youtubeFragmanId: "xfTa5t3Rg04",
    },
     {
        id: 6,
        baslik: "MİNYONLAR",
        poster:"images/minions2-2022.jpg",
        yil: 2020,
        kategori: "Animasyon",
        imdb: 9.9,
        aciklama: "Despicable Me adlı animasyon filmini en iyi anlatan açıklama, şüphesiz Türkçe ismi olan Çılgın Hırsız! Çünkü bu filmin başkarakteri Gru, öyle banka soymak ya da bu gibi başka planlarla yetinmiyor, onun amacı çok daha büyük. Gru, küçük ekibiyle birlikte Ay’ı çalmayı planlıyor.",
        youtubeFragmanId: "P0PpjAgg2Gc",
    },
     {
        id: 7,
        baslik: "SİHİRBAZLAR ÇETESİ",
        poster:"images/sihirbazlar-cetesi.jpg",
        yil: 2016,
        kategori: "Aksiyon, Macera",
        imdb:9.6,
        aciklama:"Bir FBI ajanı ile Interpol dedektifi, büyüleyici bir maceraya atılıyor. Sahne gösterileri sırasında banka soygunları gerçekleştiren bir grup yetenekli illüzyonistin peşine düşüyorlar. Bu illüzyonistler, sahneledikleri gösterilerde sadece izleyicileri büyülemekle kalmıyor, aynı zamanda soydukları paraları seyirciler arasında dağıtarak onları şaşırtıyor ve mutlu ediyor.",
        youtubeFragmanId: "xcN2fD5BaCI",
    },
    {
        id: 8,
        baslik: "V-FOR-VANDETTA",
        poster:"images/v-for-vendetta-2006.jpg",
        yil: 2006,
        kategori: "Aksiyon, Gerilim, Bilim Kurgu",
        imdb: 9.9,
        aciklama:"V olarak bilinen maskeli bir adam, geleceğin totaliter rejimle yönetilen İngilteresi'nde korkuyla sindirilmiş halkına egemenliği geri verebilmek için şiddete başvuran biridir. V İngiltere halkını, kendisiyle Guy Fawkes günü olan 5 Kasım’da Parlamento’nun çevresinde buluşmaya davet eder.",
        youtubeFragmanId: "lSA7mAHolAw",
    },

    {
        id: 9,
        baslik: "YUKARI BAK",
        poster:"images/yukari-bak-2019.png",
        yil: 2019,
        kategori: "Animasyon",
        imdb:8.6,
        aciklama:"Son zamanların en sevilen animasyon filmleri arasında yer alan Up (Yukarı Bak), artık ömrünün sonuna yaklaşmış bir adam ile sevimli bir çocuğun arasında gelişen bir dostluk hikayesini konu ediniyor. Artık 78 yaşında dul bir adam olsa da çok sevdiği karısıyla çocukluklarından beri kurdukları hayalin peşinde koşmaktan vazgeçmeyen Carl’ın sevimli bir izci çocukla birlikte dünyayı keşfetme yolculuğu, kalpleri ısıtma garantili. ",
        youtubeFragmanId: "n0ODbDufkXM",
    },

]

const filmListesi = document.getElementById("film-listesi");

if (filmListesi) {
  filmler.forEach(film => {
    const kartHTML = `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${film.poster}" class="card-img-top" alt="${film.baslik}">
          <div class="card-body">
            <h5 class="card-title">${film.baslik}</h5>
            <p class="card-text"><strong>Kategori:</strong> ${film.kategori}</p>
            <button class="btn btn-primary" onclick="filmDetaySayfasinaGit(${film.id})">Detaylar</button>
          </div>
        </div>
      </div>
    `;
    filmListesi.innerHTML += kartHTML;
  });
}

// Butona tıklandığında id'yi kaydeder ve yönlendirir
function filmDetaySayfasinaGit(id) {
  localStorage.setItem("seciliFilmId", id);
  window.location.href = "product.html";
}
function renderFilmDetail() {
  const id = parseInt(localStorage.getItem("seciliFilmId"));
  const film = filmler.find(film => film.id === id);

  if (!film) {
    document.getElementById("film-detay").innerHTML = `<p>Film bulunamadı.</p>`;
    return;
  }

  const detayHTML = `
  <div class="row">
    <div class="col-md-4">
      <img src="${film.poster}" class="img-fluid" alt="${film.baslik}">
    </div>
    <div class="col-md-8">
      <h2>${film.baslik}</h2>
      <p><strong>Yıl:</strong> ${film.yil}</p>
      <p><strong>Kategori:</strong> ${film.kategori}</p>
      <p><strong>IMDB:</strong> ${film.imdb}</p>
      <p>${film.aciklama}</p>

      <div class="mt-3">
        <button class="btn btn-warning" style="margin-right:10px;" onclick="addToFavorites(${film.id})">
          Favorilere Ekle
        </button>
        <a href="https://www.youtube.com/watch?v=${film.youtubeFragmanId}" target="_blank" class="btn-trailer">
        Fragmanı İzle
        </a>
      </div>
    </div>
  </div>
`;

  document.getElementById("film-detay").innerHTML = detayHTML;
}

if (window.location.pathname.includes("product.html")) {
  renderFilmDetail();
}
function renderFavorites() {
  const favoriIds = JSON.parse(localStorage.getItem("favoriler")) || [];
  const favoriFilmler = filmler.filter(film => favoriIds.includes(film.id));
  const favoriContainer = document.getElementById("favori-filmler");

  if (!favoriContainer) return;

  if (favoriFilmler.length === 0) {
    favoriContainer.innerHTML = "<p>Henüz favori film eklenmedi.</p>";
    return;
  }

  favoriContainer.innerHTML = "";

  favoriFilmler.forEach(film => {
    const card = `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${film.poster}" class="card-img-top" alt="${film.baslik}">
          <div class="card-body">
            <h5 class="card-title">${film.baslik}</h5>
            <p class="card-text"><strong>Kategori:</strong> ${film.kategori}</p>
            <p><strong>IMDB:</strong> ${film.imdb}</p>
            <button class="btn btn-danger" onclick="removeFromFavorites(${film.id})">Favorilerden Kaldır</button>
          </div>
        </div>
      </div>
    `;
    favoriContainer.innerHTML += card;
  });
}

function addToFavorites(id) {
  let favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];
  if (!favoriler.includes(id)) {
    favoriler.push(id);
    localStorage.setItem("favoriler", JSON.stringify(favoriler));
    alert("Film favorilere eklendi!");
  } else {
    alert("Bu film zaten favorilerde!");
  }
}

function removeFromFavorites(id) {
  let favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];
  favoriler = favoriler.filter(favId => favId !== id);
  localStorage.setItem("favoriler", JSON.stringify(favoriler));
  renderFavorites(); // Sayfayı yenile
}

// Eğer favorites.html sayfasındaysa, favori filmleri göster
if (window.location.href.includes("favorites.html")) {
  renderFavorites();
}



