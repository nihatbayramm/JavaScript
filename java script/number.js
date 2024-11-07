let sayi; // 'sayi' adında bir değişken tanımlanıyor

sayi = 10; // 'sayi' değişkenine 10 atanıyor
sayi = parseInt(150.45); // 'sayi' değişkeni, 150.45 sayısının tam kısmını alarak 150 oluyor
sayi = parseFloat(10.45413); // 'sayi' değişkeni, 10.45413 sayısını ondalıklı olarak alıyor

sayi = isNaN(45); // 45 sayısı NaN değil, bu nedenle 'sayi' false oluyor
sayi = parseInt(45); // 'sayi' değişkeni 45 olarak tam sayıya dönüştürülüyor
sayi = parseFloat(45.48); // 'sayi' değişkeni 45.48 olarak ondalıklı bir sayıya dönüştürülüyor
sayi = isNaN("a45"); // "a45" bir sayı değil, bu nedenle 'sayi' true oluyor (NaN)
sayi = Number.isInteger(56.65); // 56.65 bir tam sayı değil, bu nedenle 'sayi' false oluyor

let sayi2; // 'sayi2' adında başka bir değişken tanımlanıyor
sayi2 = 10.123456789; // 'sayi2' değişkenine ondalıklı bir sayı atanıyor

sayi = sayi2.toPrecision(5); // 'sayi2' değişkenindeki sayı 5 basamağa yuvarlanarak 'sayi' değişkenine atanıyor

sayi =  Math.round(2.4); // 'sayi' değişkeninin tam kısmını gösterir

console.log(typeof sayi); // 'sayi' değişkeninin veri tipi konsola yazdırılıyor
console.log(sayi); // 'sayi' değişkeninin değeri konsola yazdırılıyor
