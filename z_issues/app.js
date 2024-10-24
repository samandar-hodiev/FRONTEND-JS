"use strict";



/*---------------------------- 1-masala ----------------------------*/
//  Ushbu arraydagi string indeksini toping.!

// const myArray=[[false,true],'123', [1,2], 99, 'Good.!'];

// //first way: for
// for(let i=0; i<myArray.length; i++){
//     if(typeof myArray[i]==='string'){
//         console.log("String indekisi:",i);
//     };
// };

// //second way: forEach()
// myArray.forEach((element, index)=>{
//     if(typeof element==='string'){
//         console.log("String indesn nomeri:",index);
//     };
// });





/*---------------------------- 2-masala ----------------------------*/
// Array ichidagi faqat arraylarni ajratiboling.!

const data = [[1, 24, 32], 'red', [9, 78, 60], true, false];
const newData = [];

data.forEach((el) => {
    const natija = Array.isArray(el);
    if (natija) {
        el.forEach((ele) => { newData.push(ele) });
    };
})

console.log(newData);
// [1, 24, 32, 9, 78, 60]
