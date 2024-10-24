"use strict";


// -------------------------------- var -------------------------------- //

//======-- first status --======//
// var number = 12;
//     number = 16;
// var number = 14;
// console.log(number);
// result -> 14 


//======-- second status --======//
// console.log(carNumber);
// var carNumber = 666;
// result -> undefined


//======-- third status --======//
// {
//     var scopeLet = 202;
// }
// console.log(scopeLet);
//  result -> 202


// --------------------------SUMMARY ABOUT THE "VAR"-------------------------- //
/*
   var -> JavaScriptningn asosan  eski versiyalarida ishlatilgan.!

   1: Qayta qiymat tayinlash mumkin.! (eng oxirgi tayinlangan qiymatni qaytaradi)
      Ushbu o'zgaruvchini qayta e'lon qilish mumkin.! (eng oxirgi e'lon qilingandagi qiymatin qaytaradi)

   2: O'zidan tepada chaqirilganida (undefined) qaytaradi.!

   3: Block scope ga ega emas, ya'ni o'zgaruvchini block scope ichida e'lon qilib tashqarida chaqirsaham ishlaydi.!
*/








// -------------------------------- let -------------------------------- //

//======-- first status --======//
// let number = 12;
//     number = 16;
// let number = 14;
// console.log(number);


//======-- second status --======//
// console.log(carNumber);
// let carNumber = 666;
// result -> Uncaught ReferenceError: Cannot access 'carNumber' before initialization


//======-- third status --======//
// {
//     let scopeLet = 202;
// }
// console.log(scopeLet);
// Uncaught ReferenceError: scopeLet is not defined


// --------------------------SUMMARY ABOUT THE "let"-------------------------- //
/*
   let -> JavaScriptningn ES6 versiyasida qo'shilgan.!

   1: Qayta qiymat tayinlash mumkin.! (eng oxirgi tayinlangan qiymatni qaytaradi)
      Ushbu o'zgaruvchini qayta e'lon qilish mumkin emas agar qayta e'lon qilinsa xatolikka olibkeladi.!

   2: O'zidan tepada chaqirilganida xatolikka olibkeladi.!

   3: Block scope ga ega, ya'ni o'zgaruvchini block scope ichida e'lon qilib tashqarida chaqirganimizda ishlamaydi.!
*/








// -------------------------------- const -------------------------------- //

//======-- first status --======//
// const number = 12;
    //   number = 16;
// const number = 14;
// console.log(number);


//======-- second status --======//
// console.log(carNumber);
// const carNumber = 666;
// result -> Uncaught ReferenceError: Cannot access 'carNumber' before initialization


//======-- third status --======//
// {
//     const scopeLet = 202;
// }
// console.log(scopeLet);
// Uncaught ReferenceError: scopeLet is not defined



// --------------------------SUMMARY ABOUT THE "const"-------------------------- //
/*
   const -> JavaScriptningn ES6 versiyasida qo'shilgan.!

   1: Qayta qiymat tayinlash mumkin emas.!
      Qayta e'lon qilishham mumkin emas, agar qayta e'lon qilinsa xatolikka olibkeladi.!

   2: O'zidan tepada chaqirilganida xatolikka olibkeladi.!

   3: Block scope ga ega, ya'ni o'zgaruvchini block scope ichida e'lon qilib tashqarida chaqirganimizda ishlamaydi.!
*/















// -------------------------------- Data types -------------------------------- //

// -------------------===> string <===------------------- //
// const str = 'ushbu o\'lcham noto\'g\'ri';
// console.log(str);
// // result -> ushbu o'lcham noto'g'ri

// console.log(typeof str);
// // result -> string


//--------------- some experiments --------------- //

// const strNum = 'String'+12;
// console.log(strNum);
// // result -> String12
// console.log(typeof strNum);
// // result -> string

// string + number; return --> typeof (string);


// const strNum = '12'-11;
// console.log(strNum);
// // result -> 1 |  type -> number

// const strNum = 12-'11';
// console.log(strNum);
// // result -> 1 |  type -> number

// const strNum = '12'+11;
// console.log(strNum);
// // result -> 1211 |  type -> string

// const strNum = 14+'11';
// console.log(strNum);
// // result -> 1411 |  type -> string

// const strNum = 14*'11a';
// console.log(strNum);
// // result -> NaN |  type -> number

// const strNum = '11a'-12;
// console.log(strNum);
// // result -> NaN |  type -> number

// const strNum = '11a'/12;
// console.log(strNum);
// // result -> NaN |  type -> number

// const strNum = '11'-12;
// console.log(strNum);
// // result -> -1 |  type -> number

// const strNum = '11'/0;
// console.log(typeof strNum);
// // result -> Infinity |  type -> number










// -------------------===> number <===------------------- //
// let num = 12+'0';
// console.log(num);
// // result -> 120  |  type -> string

// let num = 12+'1';
// console.log(num);
// // result -> 121  |  type -> string









// -------------------===> Boolean <===------------------- //

/*
Boolean data tipi o'zida ikta qiymat saqlaydi 
1:(true)
2:(false)
*/


// let bol = true;
// console.log(bol);
// // result -> true
// console.log(typeof bol);
// // result -> boolean










// -------------------===> Undefined <===------------------- //
// let a;
// console.log(a);
// // result -> undefined
// console.log(typeof a);
// // result -> undefined
// console.log(a+a);
// // result -> NaN
// console.log(a+2);
// // result -> NaN
// console.log(a-12);
// // result -> NaN










// -------------------===> null <===------------------- //
// let nol = null;
// console.log(nol);
// // result -> null
// console.log(typeof null);
// // type -> object
// console.log(null + null);
// // result -> 0
// console.log(null - null);
// // result -> 0
// console.log(null*null);
// // result -> 0
// console.log(null/null);
// // result -> NaN










// -------------------===> bigInteger <===------------------- //
// const bigInt = 123456789123456789123456789123456789123456789n;
// console.log(typeof bigInt);
// // result -> bigint

// // BigInt constructor
// const myBig = BigInt(12121212232323343434454545);
// console.log(myBig);
// // result -> 12121212232323343520366592n










// -------------------===> Symbol <===------------------- //
// let a = Symbol('hello');
// let b = Symbol('hello');

// console.log(a,b);
// // result -> Symbol(hello) Symbol(hello)
// console.log(a==b);
// // result -> false

/*
Symbol ning vazifasi o'zgaruvchi qiymatlarini "unique" qilibberish.!!!
*/








 































