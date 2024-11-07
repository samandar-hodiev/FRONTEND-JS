"use strict";

// ---------------------- setTtimeOut() ---------------------- //
// setTimeout(()=>{
//     console.log("this is set time out function.!");
// }, 1000);

// setTimeout(()=>{
//     console.log("this is set time out function.!");
// }, 2000);

// setTimeout((text)=>{
//     console.log("this is set time out function.!"+text);
// }, 3000, " vue.js 3");





// ---------------------- setInterval() ---------------------- //
// setInterval(()=>{console.log('step1')},1000);

// let btnStop = document.getElementById('stop');
// let btnStart = document.getElementById('start');
// let timeText = document.getElementById('time');
// let allCount = document.querySelector('#count');


// // console.log(btnStop, btnStart, timeText);


// let timer = 0;

// const timeCount = setInterval(() => {
//     timeText.innerHTML = `${timer}`;
//     timer++;
// }, 1000);



// btnStart.addEventListener('click', () => {
//     setInterval(() => {
//         timeText.innerHTML = `${timer}`;
//         timer++;
//     }, 1000);
// });


// btnStop.addEventListener('click', () => {
//     clearInterval(timeCount);
// });





// ---------------------- counter------------------//
// let btnStop = document.getElementById('stop');
// let btnStart = document.getElementById('start');
// let timeText = document.getElementById('time');
// let allCount = document.querySelector('#count');



// let all = 0;
// let count = 0;



// const autoCount = setInterval(()=>{
//     count++;
//     timeText.innerHTML=`${count}`;

//     if(count===33){
//         all=all+count;
//         allCount.innerHTML=`${all}`;
//         count=0;
//     };
// },100)

// btnStart.addEventListener('click', () => {
//     autoCount
// });


// btnStop.addEventListener('click', () => {
//     count=0;
//     clearInterval(autoCount);
// });







// ------------------------- - Object.getOwnPropertyDescriptor(Object,"value") ------------------------- //
// console.log(Object());


// let editor = {
//     namee:"VScode",
//     theme:"Darck",
// };


// let defin =  Object.defineProperty(editor, 'theme', {
//     value:'TailwinCss blueDarck',
//     numberable:false,
//     writeable:false,
//     configurable:false,
// });
// console.log(defin);


// console.log(editor);


// let descriptor = Object.getOwnPropertyDescriptor(editor, 'namee');
// console.log(descriptor);




































// ------------------------- - call - appply - bind ------------------------- //
// let obj = {
//     test:'testting',
//     fun:function(){
//        console.log(this);   
//     }
// };

// obj.fun();



// let person1 = {
//     namee:"Islomxoja",
//     age:20,
//     hobbies:['play the guitar', 'smoking'],
//     getAllInfo(){
//         console.log(`Ismi: ${this.namee},\nYoshi: ${this.age},\nQiziqishi: ${this.hobbies}`);
//     },
//     getAge(){
//         console.log(this.age);
//     }
// };


// const person2 = {
//     namee:'Azamat',
//     age:25,
//     hobbies:['sleep','watching 18+'],
//     getAge(){
//         console.log(this.age);
//     }
// }



// const thisFunc = function(a){
//     console.log(a);
//     this.hobbies.push(a);
//     return this.hobbies;
// };



// thisFunc.call(person1, 'watching horror movies');
// thisFunc.call(person2, 'play football')


// console.log(person1);
// console.log(person2);

