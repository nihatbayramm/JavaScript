// Scope (Kapsam) Aciklamalari:

// **Global Scope**: 
// Degiskenler fonksiyonlarin disinda tanimlanirsa global scope kapsamindadir.
// Bu degiskenler programin her yerinden erisilebilir.

// **Function Scope (Fonksiyon Kapsami)**: 
// Fonksiyon icinde tanimlanan degiskenler sadece o fonksiyonun icinden erisilebilir.
// Fonksiyon disinda bu degiskenlere erisilemez.

// **Block Scope (Blok Kapsami)**: 
// if, for, while gibi bloklar icinde tanimlanan degiskenler sadece o blok içinde gecerlidir.
// Ancak "var" ile tanimlanan degiskenler block scope'a sahip degildir (sadece let ve const block scope'a sahiptir).

// var isim = "Nihat"; // Global Scope: Bu degisken her yerden erisilebilir

function yazdir() {
    // Function Scope: Bu kapsamda tanimlanan degiskenler sadece bu fonksiyon icinde gecerlidir
    var isim = "Bayram";
    console.log(isim); // Cikti: Bayram
}

yazdir();

// Burada "isim" degiskenine erismeye calisirsak hata aliriz,
// cunku yukarida "yazdir()" fonksiyonu icindeki "isim" sadece o fonksiyona ozeldir.
// console.log(isim); // Eger bu satiri acarsak hata aliriz (ReferenceError)

// Global scope'da tanimli "isim" degiskeni olmadigi icin hata almaz,
// ancak asagida if bloğunda "var" ile tanimlanmis degisken bu satirda kullanilabilir.
if (true) {
    // Block Scope: Ancak "var" ile tanimlandigi icin block scope gecerli degildir
    var isim = "Batu";
    console.log(isim); // Cikti: Batu
}

// "var" ile tanimlandigi icin if bloğu disindaki kodlardan da erisilebilir
console.log(isim); // Cikti: Batu
