// Değişken türleri

// String değer tipi
var firstName = "NİHAT"; 
// Integer değer tipino
var years = 1903;  
// Float değer tipi
var number = 15.5;  

// Değişken türlerini konsola yazdır
console.log(typeof firstName); // "string"
console.log(typeof years);      // "number"
console.log(typeof number);     // "number"

// JS'de sayı olan tüm değer tiplerine "number" denir. Örneğin, integer ve float gibi değerler bu gruba girer.

var x;
var y;
// Değişkenlere değer atama
x = 5;
y = 7;

// Toplamı konsola yazdır. (Not: Bu ifade string birleştirme yapıyor)
console.log("toplam : " + x + y); // "toplam : 57"

// Yeni bir değişken tanımlama
var name = "nihat";
var number = 10;

// Değişkenleri birleştirip konsola yazdır
console.log(name + " " + number); // "nihat 10"

var not = 35;

// Başarı durumunu kontrol et (not 50 veya üzerindeyse başarılı)
var basariDurumu = (not >= 50);

// Başarı durumunu konsola yazdır
console.log("Başarı Durumu => " + basariDurumu); // Boolean durumu => true veya false
