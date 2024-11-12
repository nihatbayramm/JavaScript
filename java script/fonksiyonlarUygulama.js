// Uygulama 0

// Kullanıcıdan bir kelime girmesini ister
let kelime = prompt("Kelimeyi giriniz: ");

// Kullanıcıdan kaç kez yazdırmak istediğini alır
let adet = parseInt(prompt("Adet sayısını giriniz: "));

// Kelimeyi belirli bir sayıda tekrarlayan fonksiyon
function kelimeAdeti(kelime, adet) {
    // Belirtilen adet kadar döngü oluşturur
    for (let i = 0; i < adet; i++) {
        // Her döngüde kelimeyi konsola yazdırır
        console.log(kelime);
    }
}

// Fonksiyonu çağırır ve kullanıcıdan alınan kelimeyi 10 kez yazdırır
kelimeAdeti(kelime, 10);



// Uygulama 1 

// Kullanıcıdan dikdörtgenin uzun kenarını girmesini ister
let uzunKose = parseInt(prompt("Uzun kenarı giriniz: "));

// Kullanıcıdan dikdörtgenin kısa kenarını girmesini ister
let kisaKose = parseInt(prompt("Kısa kenarı giriniz: "));

// Dikdörtgenin alan ve çevresini hesaplayan fonksiyon
function alanCevreHesaplama(uzunKose, kisaKose) {
    // Alanı hesaplar: uzun kenar * kısa kenar
    let alan = uzunKose * kisaKose;
    // Çevreyi hesaplar: 2 * (uzun kenar + kısa kenar)
    let cevre = 2 * (uzunKose + kisaKose);
    // Hesaplanan alan ve çevreyi konsola yazdırır
    console.log(`Verilen kenar uzunluklarına sahip dikdörtgenin alanı: ${alan}, çevresi: ${cevre}`);
}

// Fonksiyonu çağırır ve alan ile çevreyi hesaplar
alanCevreHesaplama(uzunKose, kisaKose);



// Uygulama 2

// Kullanıcıdan tahminini alır (YAZI veya TURA)
let Tahmin = prompt("YAZI MI - TURA MI?");

// Rastgele bir sayı üretir: 1 veya 2
let sayi = Math.floor(Math.random() * 2) + 1;

// Üretilen sayıya göre sonucu belirler
let sonuc;
if (sayi == 1) {
    sonuc = "YAZI";
} else {
    sonuc = "TURA";
}

// Tahmin ile sonucu karşılaştıran fonksiyon
function yaziTura(Tahmin, sonuc) {
    // Kullanıcının tahmini doğruysa tebrik mesajı gösterir
    if (sonuc === Tahmin) {
        console.log("TEBRİKLER KAZANDINIZ!");
    } else {
        // Kullanıcının tahmini yanlışsa tekrar deneyin mesajı gösterir
        console.log("TEKRAR DENEYİNİZ :(");
    }
}

// Fonksiyonu çağırır ve sonucu kontrol eder
yaziTura(Tahmin, sonuc);
