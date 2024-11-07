let meyveler=["kiraz","karpuz","kavun","erik"]
let sonuc ;

degerSayisi=meyveler.length;

ilkEleman=meyveler[0];
let sonEleman = meyveler[meyveler.length - 1];



elemanArama = meyveler.includes("kavun");

elemanEkleme=meyveler.push("çilek");


silinenEleman=meyveler.splice(-2, 2); 

console.log(`değer sayısı : ${degerSayisi}`)
console.log(`ilk eleman : ${ilkEleman}`)
console.log(`son eleman : ${sonEleman}`)
console.log(`aranan eleman : ${elemanArama}`)
console.log(`eklenen eleman : ${elemanEkleme}`);
console.log(`silinen eleman : ${silinenEleman}`);


