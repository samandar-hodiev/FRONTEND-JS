"use strict";

// ----------------------- Lesson 11 ----------------------- //





// -------------------------- Selectors -------------------------- //

// ------------ 1: .getElementById() ------------ //
// let h1 = document.getElementById('text');
// console.log(h1);



// ------------ 2: .getElementsByTagName() ------------ //
// let h1 = document.getElementsByTagName('h1');
// console.log(h1);



// ------------ 3: .getElementsByClassName() ------------ //
// let h1 = document.getElementsByClassName('headTag');
// console.log(h1);



// ------------ 4: .querySelector() ------------ //
// let text1 = document.querySelector('h1');
// console.log(text1);

// let text2 = document.querySelector('#text');
// console.log(text2);

// let text3 = document.querySelector('.headTag')
// console.log(text3);



// ------------ 4: .querySelectorAll() ------------ //
// let textElements = document.querySelectorAll('h1');
// console.log(textElements);



// ------------ select a few inner element... ------------ //
// let element1 = document.querySelector('.card .box1 h2');
// console.log(element1);

// let element2 = document.querySelector('.card .box2 h2');
// console.log(element2);




// ------------------- Exp... ------------------- //
// const item2 = document.querySelector('.item2');
// item2.patentElement -> return parentelement
// item2.parentNode -> return parentNode 
// item2.patentElement.patentElement.patentElement -> return drandParentElement
// item2.nextElementSibling -> return next element (item3)
// item2.previousElementSibling -> return previous element (item1)
// console.log(item2);










// -------------------------- Styling -------------------------- //
// const item2 = document.querySelector('.item2');
// item2.style.color='white';
// item2.style.backgroundColor='lime'
// item2.style.cssText='color:yellow; background-color:white; margin-left:30px;'
// console.log(item2);










// -------------------------- Events -------------------------- //
// const item2 = document.querySelector('.item2');
// const btn = document.querySelector('.btn');
// const parent1 = document.querySelector('#parent1');


// function setStyle(){
//     parent1.style.cssText="border-radius:60px"; 
// };

// btn.onclick=function(){
//     console.log("success.!!!");
//     setStyle();
//     item2.previousElementSibling.style.backgroundColor='purple';
//     item2.nextElementSibling.style.width='220px';
//     item2.parentElement.style.borderRadius='32px'
// };


//first way inline -> event attribute = "func()";







