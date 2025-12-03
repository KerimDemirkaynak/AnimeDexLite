# AnimeDexTR Beta 🎌

**AnimeDexTR**, anime severler için geliştirilmiş, modern arayüze sahip, tamamen statik dosyalardan oluşan (sunucu tabanlı veritabanı gerektirmeyen) bir anime izleme platformu şablonudur.

## 🌟 Özellikler

* **Veritabanı Gerektirmez:** Tüm veriler `.js` dosyaları üzerinden yönetilir. SQL veya MongoDB kurulumuna gerek yoktur.
* **Modern & Responsive Tasarım:** Mobil, tablet ve masaüstü uyumlu karanlık mod (Dark UI) arayüzü.
* **Dinamik Spotlight Slider:** Ana sayfada öne çıkan animeler için otomatik geçiş yapan slider.
* **Gelişmiş Bölüm Seçici:** Bölümler arası hızlı geçiş ve aktif bölümü vurgulama.
* **Çoklu Kaynak Desteği:** Tek bir bölüm için birden fazla video kaynağı (Sibnet, YouTube vb.) ekleyebilme.
* **Anlık Arama:** Sayfa yenilenmeden çalışan, istemci taraflı (client-side) anime arama motoru.
* **Yorum Sistemi:** Giscus entegrasyonu ile GitHub tabanlı yorum sistemi.
* **Kategorilendirme:** Animeleri türlerine göre otomatik gruplayan ana sayfa yapısı.

## 📂 Proje Yapısı

```text
AnimeDexTR/
├── css/
│   └── style.css          # Tüm stil dosyaları
├── veri/
│   ├── seriler.js         # Tüm animelerin listesi (Ana veritabanı)
│   └── detaylar/          # Her anime için özel detay ve bölüm dosyaları
│       ├── seri1.js
│       └── ser2.js
├── static/                # Logo ve yükleme görselleri
├── index.html             # Ana sayfa
├── izle.html              # Anime izleme ve detay sayfası
├── hakkinda.html          # Hakkında sayfası
├── iletisim.html          # İletişim sayfası
└── 404.html               # Hata sayfası
````

## 🚀 Kurulum ve Kullanım

Bu proje statik olduğu için herhangi bir kurulum (npm install, composer vb.) gerektirmez.

1.  Projeyi bilgisayarınıza indirin (ZIP olarak veya `git clone`).
2.  Klasör içindeki `index.html` dosyasını tarayıcınızda açın.
3.  Veya dosyaları herhangi bir statik hosting servisine (GitHub Pages, Vercel, Netlify) yükleyerek yayına alın.

## ➕ Yeni Anime Ekleme

Sisteme yeni bir anime eklemek için iki adım gereklidir:

**1. Adım:** `veri/seriler.js` dosyasına animenin genel bilgilerini ekleyin:

```javascript
{
  "id": "yeni-anime-id", // Benzersiz olmalı (URL'de kullanılır)
  "isim": "Anime Adı",
  "poster": "resim-linki.jpg",
  "bolumSayisi": "12",
  "sure": "24 Dk.",
  "yil": "2024",
  "tur": "Aksiyon, Macera",
  "tip": "TV",
  "ozet": "Animenin kısa özeti..."
},
```

**2. Adım:** `veri/detaylar/` klasöründe `yeni-anime-id.js` adında bir dosya oluşturun ve bölüm bilgilerini girin:

```javascript
const ANIME_DETAY = {
  "isim": "Anime Adı",
  "ozet": "Uzun özet...",
  "bolumler": [
    {
      "no": 1,
      "baslik": "Bölüm Adı",
      "kaynaklar": [ // İsteğe bağlı çoklu kaynak
        { "isim": "Sibnet", "link": "video-linki" },
        { "isim": "Yedek", "link": "video-linki-2" }
      ]
    }
  ]
};
```

## ⚠️ Yasal Uyarı

Bu proje sadece bir arayüz şablonudur. Sunucularında herhangi bir video dosyası barındırmaz. Videolar 3. parti kaynaklardan (YouTube, Dailymotion, Sibnet vb.) "embed" kodları ile çekilecek şekilde tasarlanmıştır.

## 👨‍💻 Geliştirici

**Kerim Demirkaynak** tarafından geliştirilmiştir.
