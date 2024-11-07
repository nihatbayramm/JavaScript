let ogrenciler=["Nihat","Batuhan","Hasan","Mücahit","Hasan"]
let sonuc;

sonuc=ogrenciler.length;

sonuc=ogrenciler.toString();

sonuc=ogrenciler.join(" ");

//eleman silme

// sonuc=ogrenciler.pop(); // son elemanı siler

// sonuc= ogrenciler.shift();//ilk elemanı siler 

//eleman ekleme
sonuc=ogrenciler.push("EMİRHAN");
//index numarası öğrenme 
sonuc=ogrenciler.indexOf("Hasan"); 

sonuc=ogrenciler.lastIndexOf("Hasan");
sonuc = ogrenciler.includes("Nihat"); //ELEMAN VAR MI YOK MU DİYE KONTROL EDER 

sonuc=ogrenciler.splice(0,2,"ricardo","Qouresma");

console.log(sonuc);
console.log(ogrenciler);