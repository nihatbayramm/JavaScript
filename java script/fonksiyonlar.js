// Fonksiyon tanimlama
function selamlama(mesaj) {
    // Gelen mesaji konsola yazdirir
    console.log(mesaj);
}

// "selamunAleykum" mesajini selamlama fonksiyonuna gonderir
selamlama("selamunAleyküm");

// "Sleykumselam" mesajini selamlama fonksiyonuna gonderir
selamlama("Sleykumselam");

// Kullanicidan dogum yilini girmesini ister ve 'a' degiskenine atar
let a = parseInt(prompt("DOGDUNUZ YILI GIRINIZ: "));

// Kullanicinin yasini hesaplayan bir fonksiyon
function dogumTarihi(a) {
    // Gecerli yili alir
    let simdikiYil = new Date().getFullYear();
    
    // Gecerli yildan dogum yilini cikartarak yasi hesaplar
    return simdikiYil - a;
}

// Emeklilik hesaplayan bir fonksiyon
function emeklilik(dogumYili, isim) {
    // Kullanicinin yasini hesaplar
    let yas = dogumTarihi(a);
    // Emeklilige kalan yil sayisini hesaplar (Turkiye'de emeklilik yasi 65 olarak varsayilmis)
    let kalan = 65 - yas;
    
    // Eger emeklilige kalan yil pozitifse, kullaniciya kac yil kaldigini belirtir
    if (kalan > 0) {
        console.log(`Sayin ${isim}, emekli olmaniza ${kalan} yil kaldi.`);
    } else {
        // Eger kullanici 65 yasindan buyukse veya esitse, zaten emekli oldugunu belirtir
        console.log(`Sayin ${isim}, zaten emeklisiniz.`);
    }
}

// 'emeklilik' fonksiyonunu cagirir ve 'a' degiskeni ile "Nihat" ismini parametre olarak gonderir
emeklilik(a, "Nihat");
