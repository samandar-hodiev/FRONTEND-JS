"use strict";

// ---------------- Lesson 10 ---------------- //



// ------------------------------- Debugger ------------------------------- //
// function test1(){
//     console.log('test1');
// };

// function test2(){
//     console.log('test2');
// };

// function test3(){
//     console.log('test3');
// };
// debugger;
// test1();
// debugger;
// test2();
// debugger;
// test3();










// ------------------------------- JS error types ------------------------------- //

// ------------- Type Error ------------- //
// let one = 1;
// console.log(one.includes('12'));
// Uncaught TypeError: one.includes is not a function





// ------------- Syntax Error ------------- //
// let gadjet;='MacBook';
// console.log(gadjet);
// Uncaught SyntaxError: Unexpected token '='






// ------------- Reference Error ------------- //
// console.log(anything);
// Uncaught ReferenceError: anything is not defined






// ------------- Range Error ------------- //
// function rangeErr(){
//     console.log("rengeError");
//     rangeErr();
// };
// rangeErr();
// Uncaught RangeError: Maximum call stack size exceeded











// ------------------------------- Try, Catch, Finally ------------------------------- //
// function callME(data){
//     try{
//         // success
//         console.log(data);
//     }catch(error){
//         // error
//         console.log(error);
//     }finally{
//         // finish
//         console.log('finsh');
//     };
// };
// callME("DATA");




// function called(callBack){
//     try{
//         console.log(callBack);
//         callBack.map((item)=>{console.log(item);});
//     }catch(error){
//         console.log(error.message);
//     }finally{
//         console.log('CALL to ME');
//     };
// };
// called("phoned");










// ------------------------------- Throw ------------------------------- //
// artifically error make using throw

// function add(x,y){
//     if(typeof x !== 'number'){
//         throw 'The first argument must be a number';
//     };
//     if(typeof y !== 'number'){
//         throw 'The second number must be a number';
//     };
//     return x+y;
// };
// add(12,'2');



// function createError(err){
//     throw err;
// };
// createError("xatolikka yo'q qo'yildi.!");
// result - Uncaught xatolikka yo'q qo'yildi.!










// ------------------------------- Strict mode ------------------------------- //
// function str(){
//     "use strict";


// };










