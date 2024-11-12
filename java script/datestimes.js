// Zaman ve Yıl Bilgileri

// Yeni bir tarih nesnesi oluşturur (geçerli tarih ve saat)
let date = new Date();

// Geçerli yıl bilgisini alır
let year = date.getFullYear();

// Geçerli ay bilgisini alır (Ocak = 0 olduğundan 1 ekleriz)
let month = date.getMonth() + 1;

// Geçerli gün bilgisini alır
let day = date.getDate();

// Geçerli saat bilgisini alır
let hour = date.getHours();

// Geçerli dakika bilgisini alır
let minute = date.getMinutes();

// Yıl, ay, gün, saat ve dakika bilgilerini konsola yazdırır
console.log("Yıl:", year);
console.log("Ay:", month);
console.log("Gün:", day);
console.log("Saat:", hour);
console.log("Dakika:", minute);

// Bir değişken tanımlar (sonuc)
let sonuc;

// Yılı 2001 olarak ayarlar ve bu yeni tarihi milisaniye cinsinden döndürür
sonuc = date.setFullYear(2001);

// Yıl değişikliğinden sonra oluşan zamanı konsola yazdırır
// (setFullYear() yöntemi, milisaniye cinsinden bir zaman damgası döndürür)
console.log(`Güncellenen zaman damgası (milisaniye): ${sonuc}`);

// Yeni tarih bilgisini okumak istersek yeniden çağırmamız gerekir
console.log("Yeni Yıl:", date.getFullYear());
