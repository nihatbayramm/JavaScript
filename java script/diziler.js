// Ürünlerin isimlerini, fiyatlarını ve renklerini içeren diziler
let urunler = ["IPHONE15", "IPHONE16", "IPHONE17"];
let fiyatlar = [99999, 109999, 119999];
let renkler = ["Beyaz", "Kırmızı", "Mavi"];

// İlk ürün için sonuç dizisi oluşturma
let sonuc = `${urunler[0]} - ${fiyatlar[0]} - ${renkler[0]}`; // IPHONE15 bilgileri
let sonuc1 = `${urunler[1]} ${fiyatlar[1]} ${renkler[1]}`; // IPHONE16 bilgileri
let sonuc2 = `${urunler[2]} ${fiyatlar[2]} ${renkler[2]}`; // IPHONE17 bilgileri

// Ürün detaylarını içeren bir dizi oluşturma
let urunle1 = [
    "IPHONE 15", // Ürün adı
    99999,       // Fiyat
    ["BEYAZ", "SİYAH", "KIRMIZI"] // Renk seçenekleri
];

// Ürün adını değiştirme
urunle1[0] = "IPHONE 16"; // Ürün adı güncellendi

// Güncellenmiş ürün bilgilerini oluşturma
let sonuc7 = `${urunle1[0]} - ${urunle1[1]} - ${urunle1[2][2]}`; // Yeni ürün bilgisi

// Tüm sonuçları konsola yazdırma
console.log(sonuc + " ***** " + sonuc1 + " ------- " + sonuc2);
console.log(sonuc7);
