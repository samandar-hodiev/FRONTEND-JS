"use strict";

// ----------------------- Browser Storage ----------------------- //
// const locSt = localStorage;
// console.log(locSt);


// ----------------------- setItem, getItem ----------------------- //
// localStorage.setItem('name','samandar');


// let getIt = localStorage.getItem('name');
// console.log(getIt);
// samandar



// const number = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29];

// localStorage.setItem('numbers',number);
// const getNum = localStorage.getItem('numbers');
// console.log(getNum);
// // 1,3,5,7,9,11,13,15,17,19,21,23,25,27,29


// const user = {
//     fName:'Samandar',
//     lName:'Hodiev',
//     age:22,
//     phoneNumber:943371102,
//     occupation:'Programmer',
//     hobbies:['sleep','coding','trawel']
// };

// localStorage.setItem('person',user);
// // const getPer = localStorage.getItem('person');
// // console.log(getPer);
// // //[object Object]

// localStorage.setItem('person', JSON.stringify(user));

// const getPerI = localStorage.getItem('person');
// console.log(getPerI);
// // {"fName":"Samandar","lName":"Hodiev","age":22,"phoneNumber":943371102,"occupation":"Programmer","hobbies":["sleep","coding","trawel"]}

// const prUsr = JSON.parse(getPerI);
// console.log(prUsr);
// // {fName: 'Samandar', lName: 'Hodiev', age: 22, phoneNumber: 943371102, occupation: 'Programmer', …}



// ----------------------- removeItem and clear ----------------------- //
// localStorage.removeItem('person');
// localStorage.clear();

/*
  removeItem va clear o'rtasidagi farq shundaki: removeItem elementlarni faqat tanlanganini o'chiradi clear() hammasini bittadayoq o'chiradi.!!!
*/



// ----------------------- cookies ----------------------- //

/*
   sintaksis: document.cookie="key1=value1; key2=value2; key3=value3;..."
*/

// document.cookie='name=JavaScript';
// let cook = document.cookie='JavaScript';
// console.log(cook);
