const TUM_SERILER = [
  {
    "id": "beyblade",
    "isim": "Beyblade",
    "poster": "https://i.ebayimg.com/images/g/psMAAOSwKFFnq2Ws/s-l400.jpg",
    "bolumSayisi": "51",
    "sure": "24 Dk.",
    "yil": "2001",
    "tur": "Aksiyon, Spor",
    "tip": "TV",
    "ozet": "Takao ve arkadaşlarının efsanevi maceraları başlıyor. Kutsal canavarların gücüyle turnuvanın şampiyonu olabilecekler mi?"
  },
  {
    "id": "bakugan",
    "isim": "Bakugan",
    "poster": "https://m.media-amazon.com/images/I/612F8bfniwL._AC_UF894,1000_QL80_.jpg",
    "bolumSayisi": "52",
    "sure": "22 Dk.",
    "yil": "2007",
    "tur": "Fantezi, Oyun",
    "tip": "TV",
    "ozet": "Dan ve arkadaşlarının kartlarla başlayan oyunu, başka bir boyuttaki savaşa dönüşüyor."
  }
];

// 2 örnekten sonra kalan 58 seriyi otomatik oluşturuyoruz
for (let i = 3; i <= 60; i++) {
  TUM_SERILER.push({
    "id": "seri" + i,
    "isim": "Deneme Seri " + i,
    "poster": "https://via.placeholder.com/150",
    "bolumSayisi": String(50 + i),
    "sure": "23 Dk.",
    "yil": String(2000 + (i % 25)),
    "tur": "Aksiyon, Macera",
    "tip": "TV",
    "ozet": "Bu, deneme amaçlı seri " + i + " için kısa bir özet."
  });
}

console.log(TUM_SERILER.length); // 60 olmalı
