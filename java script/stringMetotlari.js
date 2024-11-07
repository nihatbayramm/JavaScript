// METOTLAR 

var kursAdi = "Web Programlama Kursu"; // Kurs adı değişkeni tanımlanıyor.

var sonuc;

// kursAdi değişkeninin tüm harflerini büyük harf yapar
sonuc = kursAdi.toUpperCase(); 
console.log(sonuc); 

// kursAdi değişkeninin tüm harflerini küçük harf yapar
sonuc = kursAdi.toLowerCase(); 
console.log(sonuc);

// kursAdi değişkeninin kaç karakterden oluştuğunu yazar
sonuc = kursAdi.length; 
console.log(sonuc); 

// kursAdi değişkeninin 0. indexinden 6. indexine kadar olan kısmı yazar (6. index dahil değil)
sonuc = kursAdi.slice(0, 6); 
console.log(sonuc); 

// slice komutu ile aynı işlevi görür
sonuc = kursAdi.substring(0, 6);
console.log(sonuc);

// soldan döndürerek 10. indexten -5. indexe kadar olan kısmı yazar
sonuc = kursAdi.slice(-10, -5); 
console.log(sonuc);

// 10. indexten sonraki kısmı yazdırır
sonuc = kursAdi.slice(10); 
console.log(sonuc);

// "Kursu" kelimesini "Eğitimi" ile değiştirir
sonuc = kursAdi.replace("Kursu", "Eğitimi"); 
console.log(sonuc);

// baştaki ve sondaki boşlukları temizler (varsa)
sonuc = kursAdi.trim(); 
console.log(sonuc);

// "Programlama" kelimesinin başlangıç indexini bulur
sonuc = kursAdi.indexOf("Programlama"); 
console.log(sonuc); 

// kursAdi'ni boşluk karakterine göre böler ve bir dizi oluşturur
sonuc = kursAdi.split(" "); 
console.log(sonuc);
