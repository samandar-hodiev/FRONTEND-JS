"use strict";

// ------------------------- non-primative data types ------------------------- //
/*
non-primative data tiplari o'zida birnechta qimatlarni saqlashi mumkin
*/

/*
let obj = {
    number:12,
    name:'JavaScript',
    bool:true,
    mix:[12,'Array', true, null, undefined],
    und:undefined,
    nol:null
};
*/










// ------------------------------------- Math object ------------------------------------- //
// console.log(window.Math);


//1: Math.round(x) - kiritilgan raqamni haqqoniy yaxlitlaydi.!

// let result1=Math.round(12.1);
// console.log(result1);
// //natija - 12
// let result2=Math.round(12.5);
// console.log(result2);
// //natija - 13
// let result3=Math.round(12.9);
// console.log(result3);
// //natija - 13



//2: Math.ciel(x)- kiritilgan raqamni katta tomonga yaxlitlaydi.!

// let result1=Math.ceil(12.001);
// console.log(result1);
// //natija - 13
// let result2=Math.ceil(12.5);
// console.log(result2);
// //natija - 13
// let result3=Math.ceil(12.9);
// console.log(result3);
// //natija - 13



//3: Math.floor(x) - kiritilgan raqamni kichik tomonga yaxlitlaydi.!

// let result1=Math.floor(12.001);
// console.log(result1);
// //natija - 12
// let result2=Math.floor(12.5);
// console.log(result2);
// //natija - 12
// let result3=Math.floor(12.9);
// console.log(result3);
// //natija - 12



// 4: Math.trunc(x) - kiritilgan raqamni butun qismini qaytaradi.!

// let result1=Math.trunc(0.9);
// console.log(result1);
// //natija - 0
// let result2=Math.trunc(-12.5);
// console.log(result2);
// //natija - (-12)
// let result3=Math.trunc(12.9);
// console.log(result3);
// //natija - 12





// 5: Math.sign(x) - Agar argument musbat bo'lsa 1 qaytaradi, argument manfiy bo'lsa -1 qaytaradi, argument nol bo'lsa nol qaytaradi manfiy nol bo'lsa manfiy nol qaytaradi.!

// let result1=Math.sign(12.12);
// console.log(result1);
// //natija -> 1

// let result2=Math.sign(0);
// console.log(result2);
// //natija -> 0

// let result3=Math.sign(-9.4);
// console.log(result3);
// //natija -> (-1)






// 6: Math.pow(x,y) - x argumentni y argument marta darajaga ko'tarib natijani qaytaradi.!

// let result1=Math.pow(3,4);
// console.log(result1);
// //natija - 81

// let result2=Math.pow(25,2);
// console.log(result2);
// //natija - 625






// 7: Math.sqrt(x)- Argumentni kvadrat ildizdan chiqarib natijani qaytaradi.!

// let result1=Math.sqrt(25);
// console.log(result1);
// //natija - 5

// let result2=Math.sqrt(1200);
// console.log(result2);
// //natija - 34.64101615137755







// 8:  Math.abs(x) -> Argumentni moduldan chiqarib natijani qaytaradi.!

// let result1=Math.abs(-2);
// console.log(result1);
// //natija -> 2

// let result2=Math.abs(2);
// console.log(result2);
// //natija -> 2







// 9:  Math.min(), Math.max() -> Ushbu metod jadvaldagi raqamlar ichidan eng kattasi va eng kichigini topishda yordam beradi.!

// let result1=Math.max(12,13,14,24,26,-1,-12,77);
// console.log(result1);
// //natija -> 77

// let result2=Math.min(12,13,14,24,26,-1,-12,77);
// console.log(result2);
// //natija -> -12







// 10:  Math.log(x) -> x ning natural logarifmini qaytaradi.!

// let result1=Math.log(1);
// console.log(result1);
// //natija -> 0

// let result2=Math.log(10);
// console.log(result2);
// //natija -> 2.302585092994046









// 11: Math.log2(x) -> x ning 2 ta logarifmini qaytaradi.!

// let result1=Math.log2(1);
// console.log(result1);
// //natija -> 0

// let result2=Math.log2(1024);
// console.log(result2);
// //natija -> 10







// 12: Math.log10(x)-x ning 10 ta logarifmini qaytaradi.!

// let result1=Math.log10(10);
// console.log(result1);
// //natija - 1

// let result2=Math.log10(10000);
// console.log(result2);
// //natija - 4






// // 13: Math.random() - Ushbu metod 0 va 1 orasidagi sonlarni tasodifiy tanlaydi, xar safar xar-hil sonni tanlaydi.!

// let result1=Math.random();
// console.log(result1);
// //natija - 0.473185904988334

// let result2=Math.random();
// console.log(result2);
// //natija - 0.9435319265037021
// // Masalan 0 dan 100 gacha bo'lgan sonlarni tasodifan tanlamoqchimiz, ushbu xolat quyidagicha bo'ladi..

// let results=Math.floor(Math.random()*100);
// console.log(results);
// //natija1-80
// //natija2-72
// //natija3-6
// //natija4-68
// // etc...











// ------------------------------------- Number constructor ------------------------------------- //


// ---------- Number.isInteger(argument) ---------- //
// let num = 12;
// let isIn = Number.isInteger(num);
// console.log(isIn);
// // true

// let noNum = '12';
// let isNoNum = Number.isInteger(noNum);
// console.log(isNoNum);
// // false





// ---------- Number.isNaN(argument) ---------- //
// let num = 'ssd'/18;
// console.log(num);
// // NaN
// console.log(Number.isNaN(num));
// // true







// ------------------------------------- Number methods ------------------------------------- //

/*
1: toString()	   -> Returns a number as a string
2: toExponential() -> Returns a number written in exponential notation
3: toFixed()	   -> Returns a number written with a number of decimals
4: toPrecision()   -> Returns a number written with a specified length
5: valueOf()	   -> Returns a number as a number
*/

// 1: toString()
// let num = 18;
// let numToStr = num.toString();
// console.log(numToStr);
// // 18
// console.log(typeof numToStr);
// // string



// 2: toExponential()
// let num = 22;
// let numToExp = num.toExponential();
// console.log(numToExp);
// // 2.2e+1
// console.log(typeof numToExp);
// // string



// // 3: toFixed()
// let num = 34.5;
// let numToFix = num.toFixed();
// console.log(numToFix);
// // 35
// console.log(typeof numToFix);
// // string



// 4: toPrecision() 
// let num = 46.9;
// let numToPer = num.toPrecision();
// console.log(numToPer);
// // 46.9
// console.log(typeof numToPer);
// // string



// // 5: valueOf()
// let num = 288.88;
// let numVal = num.valueOf();
// console.log(numVal);
// // 288.88
// console.log(typeof numVal);
// // number











// ------------------------------------- Type conversion ------------------------------------- //
// const num = 333.000005;
// console.log(typeof num);
// // number

// let toStr = num.toString();
// console.log(typeof toStr);
// // string

// let constrStr = String(num);
// console.log(typeof constrStr);
// // string



// ------------------------------------- Type corection ------------------------------------- //
// let num = 232323;
// console.log(typeof num);
// // number

// let toStr = num + "";
// console.log(typeof toStr);
// // string



// let str = '121212343434';
// console.log(typeof str);
// // string
// let strToNum = 1*str;
// console.log(typeof strToNum);
// //  number




















// ------------------------------------- Conditional operators ------------------------------------- //


// let date=30;
// if(date==30){
//     console.log('data is true.!');
// }else{
//     console.log("date is false.!");
// };




// let year = 2002;
// let age = 21;

// if(year==2003){
//     console.log('Your age is 21.!');
//     if(age==21){
//         console.log('siz 21 yoshdasiz.!');   
//     }else{
//         console.log('Sizning yoshingiz aniqlanmadi.!');
//     }
// }else{
//     console.log('Your age not fount.!')
// };
// Your age not fount.!











// ------------------------------------- thruthy and falsy values ------------------------------------- //

// FALSY values
/*
1: false
2: 0
3: -0
4: 0n
5: ""
6: null
7: undefined
8: NaN
*/




// TRUTHY values
/*
1: true
2: {}
3: []
4: 233454
5: 13n
6: infinity
7: -infinity
8: "0"
9: "false"
10: etc...
*/









// ------------------------------------- Logical operators ------------------------------------- //
// ||
// &&



