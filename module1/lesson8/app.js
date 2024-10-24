"use strict";
// ------------ lesson 8 ------------ //

// ------------------------------- forEach ------------------------------- //
//======== forEach --> ichida return ishlamaydi ammo if condition ishlaydi.!
let students = [
    { name: "Murodjon", age: 30 },
    { name: "Yulduz", age: 25 },
    { name: "Husan", age: 15 },
    { name: "Ismoil", age: 10 },
    { name: "Hasan", age: 15 },
];

// console.log(students);

// for Loop
// for(let i=0; i<students.length; i++){
//     console.log(students[i].name);
// };

// forEach 
const res = [];
students.forEach((element,index,array)=>{
    // if(element.age>15 && index<1){
    //     res.push(element);
    // };
    // console.log(index)
});
// console.log(res);
// forEach da return ishlamaydi.!!!







// ------------------------------- Map ------------------------------- //
//======== Map -->yangi array qaytaradi, Map ichida return ishlaydi ammo if condition ishlamaydi .!
const result = students.map((element,index,array) => {
    return {ism: element.name, yosh: element.age, id: index+1};
});
// console.log(result);







// ------------------------------- Filter ------------------------------- //
//======== Filter --> filterlangan new array qaytaradi.!
const resFilter = students.filter((element,index,array)=>{
    return element.name.length>7;
});
// console.log(resFilter);
 






// ------------------------------- Every ------------------------------- //
// every return boolean
const check = students.every((element,index,array)=>{
    return element.age>15;
});
// console.log(check);
// result - false 





// ------------------------------- Some ------------------------------- //
// some return boolean
const checked = students.some((element,index,array)=>{
    return element.age>15;
});
// console.log(checked);
// result - true






// ------------------------------- Find ------------------------------- //
// find((el, i, arr) → () → first element
const found = students.find((element,index,array)=>{
    return element.age>10;
});
// console.log(found);
// result - {name: 'Murodjon', age: 30}







// ------------------------------- FindIndex ------------------------------- //
// findindex((el, i, arr) → 0) → first index
const foundIndex = students.findIndex((element,index,array)=>{
    return element.age>15;
});
// console.log(foundIndex); 
// result - 0







// ------------------------------- reduce ------------------------------- //
// reduce((ac, el, i, arr) → f, initialValue) → value
const reduceSumma = students.reduce((ac,el,index,arr)=>{
    return ac+el.age;
},10);
// console.log(reduceSumma);
// result - 105






// ------------------------------- reduceRight ------------------------------- //
// reduceRight(ac, el, i, arr) → t, initialValue) → value
const reduceRightSumma = students.reduceRight((ac,element,index,array)=>{},12);







// ------------------------------- Sort ------------------------------- //
// sort((a, b) → a - b) → increase
const numbers = [1,2,3,4,5,-12,7,8,9,30, -19,11,12,13,14,15,16,-17];
const byAge = numbers.sort((a,b)=>b-a);
console.log(byAge);

const names = ['Azamat','Murodjon','Yulduzxon','Husan','Abdulloh'];
const byName = names.sort();
console.log(byName);