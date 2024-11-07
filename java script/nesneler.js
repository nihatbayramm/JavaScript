// İki kişi objesi oluşturuluyor

let kisi = {
    "ad": "Nihat",  // Ad bilgisi
    "soyad": "Bayram",  // Soyad bilgisi
    "kisisel bilgiler :":
     {  // Kişisel bilgiler objesi
        "telefon numarası : ": "05415****0",  // Telefon numarası
        "adres : ": "Şırnak"  // Adres bilgisi
    }
};

let kisi1 = {
    "ad": "Hasan",  // Ad bilççgisi
    "soyad": "Uğraş",  // Soyad bilgisi
    "kisisel bilgiler :":
    
    {  // Kişisel bilgiler objesi
            "telefon numarası : ": "05415****0",  // Telefon numarası
            "adres : ": "Hatay"  // Adres bilgisi
        }
    };

    // Kişileri içeren bir dizi oluşturuluyor
    let veriler;
veriler = [kisi, kisi1];        

// İlk kişinin adresini almak için bir değişken
let ad = kisi.ad;  // 'Şırnak' değerini alır

// İlk kişinin adını almak için
ad = veriler[0].ad;  // 'Nihat' değerini alır

// İkinci kişinin adını almak için bir değişken
let ad1;
ad1 = veriler[1].ad;  // 'Hasan' değerini alır


let adres ;

adres = veriler[0]["kisisel bilgiler :"]["adres : "]

let adres2 ;

adres2 =  veriler[1]["kisisel bilgiler :"]["adres : "]
// Değerleri konsola yazdırma
console.log(`isim : ${ad} \n şehir : ${adres}`);
console.log(`isim : ${ad1} \n şehir : ${adres2}`);


