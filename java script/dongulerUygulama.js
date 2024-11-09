// for döngüsü ile çarpanlar tablosu oluşturma

// 0'dan 10'a kadar olan sayılar için dış döngü
for (let i = 0; i <= 10; ++i) {
    // 0'dan 10'a kadar olan sayılar için iç döngü
    for (let a = 0; a <= 10; ++a) {
        // Çarpanlar tablosunu console'a yazdırma
        console.log(`${i} x ${a} => ${i * a}`);
    }
    // Her çarpanlar tablosu seti arasına çizgi ekleme
    console.log("-------------------------------------------------------------------------");
}


// While döngüsü ile sayı artırma işlemi

// Kullanıcıdan bir sayı girmesini isteme
let sayi = parseInt(prompt("BİR SAYI GİRİNİZ: "));

// Döngü koşulunu belirleme
let Boolean = true;

// while döngüsü, Boolean true olduğu sürece devam eder
while (Boolean == true) {
    // Eğer sayı 10 ise, döngü durur
    if (sayi == 10) {
        Boolean = false; // Döngü sonlandırılır
        console.log(sayi); // Sonuç olarak 10'u yazdırır
    } else {
        // Sayı 10'a ulaşana kadar 1 arttırılır
        sayi += 1;
        console.log(sayi); // Her adımda artan sayıyı yazdırır
    }
}
