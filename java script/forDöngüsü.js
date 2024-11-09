//DÖNGÜLER

//FOR DÖNGÜSÜ




// for(let i=0 ; i<= 150 ; ++i){
//     console.log(i);
// }



let sayilar = [1,5,4,2,5,7,8,4,75]

let toplam = 0 ;
for(let i=0 ; i<sayilar.length ; ++i){
    console.log(sayilar[i]);
}


for (let index = 0; index < sayilar.length; index++) {
   toplam += sayilar[index]
   
}console.log(`toplam değer : ${toplam}`)    