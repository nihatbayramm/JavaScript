//operatorlar

let x =5 , y = 4 , z= 3;

// 1. aritmetik operatorlar (- , + , / , *, %)

let toplam ;

toplam = x+y+z ;

let cikarma ;

cikarma = x-y ;

let carpma ;

carpma = y*z ;

let bolme ;

bolme = y/z ;

let kalan ;

kalan =x%2 ;

console.log(toplam);
console.log(cikarma);
console.log(carpma);
console.log(bolme)
console.log(kalan)


console.log("----------------------------------------------------------------------")
// 2. atama operatorlari

let sonuc = 1 ;

sonuc += x;

console.log(sonuc);

let sonuc1 = 2 ;

sonuc1 *= x;

console.log(sonuc1);


let sonuc2 = 2 ;

sonuc2 /= x;

console.log(sonuc2);


let sonuc3 = 3 ;

sonuc3 /= x;

console.log(sonuc3);

console.log("**********************************************************************")
// 3.kaarsilastirma operatorlari 


let esitdegil ;

esitdegil = x != y ;

console.log(`x ve y eşit değil \n ${esitdegil}`);


let esitMi ;

esitMi = x == y ;

console.log(`x ve y eşit mi ? \n ${esitMi}`);


let buyuk ;

buyuk = (a>b);

console.log(`a ve b  buyuk mu ? \n ${buyuk}`);



