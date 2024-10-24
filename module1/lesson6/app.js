"use strict";
// ------------ lesson: 6 ------------ //



// ---------------------------------- Object ---------------------------------- //
// const man = {
//     name:"John",
//     age:22,
//     job:"programmer"
// };

// console.log(man);
// console.log(man.name); //John
// console.log(man['name']) //John



// --------------- with constructor ------------------ //
// const  car = Object ({
//     name:"BMW",
//     year:2024
// });
// console.log(car);
// console.log(car.name); //BMW
// console.log(car['year']) //2024



// const person = {
//     name:"Islom",
//     age:20,
//     job:"singer",
//     hobbies:['singing', ' play the piano'],
//     redBook:function(){
//         console.log("Hi, i am Islombek, my lovely work is reding book.!")
//     },
//     sayHEllo:function(){
//         console.log("Assalomu alaykum.!")
//     }, // agarda obyektning qaysidir "key"i yani xususiyati funksiyaga teng bo'lsa bu "method" deyiladi.!
//     getAllInfo: function(){
//         console.log(`name: ${this.name}, age: ${this.age}, job: ${this.job}, hobbies: ${this.hobbies}`);
//     }
// };

// console.log(person);
// person.name="Ilxom"
// console.log(person);

// delete person.age;
// person.age=12;
// console.log(person);

// console.log(person);
// console.log(person.hobbies[1])
// console.log(person.redBook);
// person.redBook();
// person.sayHEllo();
// person.getAllInfo();







// const lang = {
//     uz:{
//         title:"xush kelibsiz",
//         about:"biz haqimizda"
//     },
//     en:{
//         title:"welcome to",
//         about:"about us"
//     }
// };

// console.log(lang)

// function changeLang(langType){
//     console.log(lang[langType]);
//     console.log(langType);
// };

// changeLang('en');





// create object with function

//  function  createCar(name, color, year, price, other){
//     return({
//         name:name,
//         color:color,
//         year:year,
//         price:price,
//         ...other
//     });
// };

// const merc = createCar('merc','red','2024','45000$',{key1:'key1'});
// console.log(merc);
// const bmw = createCar('BmW','black','2024','50000$');
// console.log(bmw);




// const person2={
//     fName:"Jonh",
//     lName:"Doe",
//     greet: function(){
//         console.log("hello");
//     }
// };

// const person2={
//     fName:"Jonh",
//     lName:"Doe",
//     greet(){
//         console.log("hello");
//     }

// person2.greet();





// for of, for in 
const obj3 = {
    color: 'red',
    width: 300,
    height: 400,
    weight: 120
};
console.log(obj3?.max?.length);


// for(let kalit in obj3){
//     // console.log(kalit);
//     console.log(`${kalit}: ${obj3[kalit]}`);
// };





// const obj1={
//     name:'name 1',
//     key:'key 1',
//     max:24
// };


// const obj2={
//     name:'name 2',
//     key:'key 2',
//     min:14,
//     ...obj1
// };

// console.log(obj1, obj2);






// ---------------------------------- This ---------------------------------- //

// console.log(this);
// result -> global window



//--- function decloration ---//
function dec() {
    console.log(this)
};
// dec();
// result - undefined

// this function decloration ichida kelsa va "use strict" qatiy ishlash rejimida bo'lsa "undefined" qaytaradi , agarda qatiy ishlash rejimida bo'lmasa global "window"ni olibberadi.!!!



//--- function expression ---//
const exp = function () {
    console.log(this);
};
// exp();
// result - undefined

// this function expression ichida kelsa va "use strict" qatiy ishlash rejimida bo'lsa "undefined" qaytaradi , agarda qatiy ishlash rejimida bo'lmasa global "window"ni olibberadi.!!!




//--- arrow function ---//
const arrow = () => {
    console.log(this);
};
// arrow();

// this arrow function ichida kelganida qatiy ishlash rejimi yoqilganidaham yoqilmaganidaham global "window" qaytaradi.!!!













// ======================================== rebuild.!!!  ======================================== //

function person(name, age, job, hobbies, freeTime, other) {
    return ({
        name: name,
        age: age,
        job: job,
        hobbies: hobbies,
        freeTime: freeTime,
        ...other
    });
};
const personality = person('samandar', 21, 'programmer', ['sleep', 'coding'], 'every day: since 20:00pm - until 07:00am', { height: '195sm' }, { weight: '82kg' });
// console.log(personality);



console.log(person?.exp?.length)





