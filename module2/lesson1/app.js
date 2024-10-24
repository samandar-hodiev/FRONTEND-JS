"use strict";



/*
.box{
    width: 400px;
    height: 420px;
    padding: 10px;                 10px <-- D.F!!!
    margin-top: 100px;
    margin-left: 110px;
    background-color: seagreen;
    border:4px solid red;          4px <--  D.F!!!
    overflow:scroll;
}
*/


 /* -------------------------- scroll -------------------------- */

//  const box = $(".box");
 
// 1: offsetWidth
// console.log(box.offsetWidth);
// result -> 400


// 2: clientWidth
// console.log(box.clientWidth);
// result -> 392


// 3: offsetHeight
// console.log(box.offsetHeight);
// result -> 420


// 4: clientHeight
// console.log(box.clientHeight);
// result -> 440


// 5: offsetTop
// console.log(box.offsetTop);
// result -> 100


// 6: clientTop
// console.log(box.clientTop);
// result -> 4


// 7: offsetLeft
// console.log(box.offsetLeft);
// result -> 128


// 8: clientLeft
// console.log(box.clientLeft)
// result -> 4

// // 9: scrollTop
// console.log(box.scrollTop);
// // result -> 0

// // 10: scrollHeight
// console.log(box.scrollHeight);
// // result -> 2248


/* -------- scrollX scrollY -------- */
// console.log('scrollX:',window.scrollX); //return scroll count of X
// console.log('scrollY',window.scrollY); //return scroll count of Y





/* ---------------- Experiment ---------------- */

// const box = $(".box");

// box.addEventListener('scroll',()=>{
//     console.log(box.scrollTop);
//     if(box.scrollTop>200){
//         box.style.backgroundColor='red';
//     };
//     if(box.scrollTop>400){
//         box.style.backgroundColor='gray';
//     };
//     if(box.scrollTop>600){
//         box.style.backgroundColor='yellow';
//     };
//     if(box.scrollTop>800){
//         box.style.backgroundColor='lime';
//     };
//     if(box.scrollTop>1000){
//         box.style.backgroundColor='purple';
//     };
// });










 /* -------------------------- Page - Load -------------------------- */
//  window.addEventListener('load',()=>{
//     console.log("Loaded.!")
// });

// window.addEventListener("DOMContentLoaded",()=>{
//     console.log('Page loading...');
// });

// window.addEventListener('unload',()=>{
//     console.log("Page unload...")
// });

// window.addEventListener('beforeunload',()=>{
//     console.log("Page beforeunload... ")
// });












 /* -------------------------- classList -------------------------- */

//  classList  -> retur  -> Dom tooken List

// let classL = $("h1");
// console.log(classL);
// console.log(classL.classList);

// classL.classList.add('bg-info','text-danger');
// classL.classList.remove('text-danger','bg-info');
// let contain = classL.classList.contains('bg-info');
// console.log(contain);
// classL.classList.toggle('head1');



