"use strict";







// ----------------- ==== USING EVENTS ==== ----------------- //

// let btn = document.querySelector('#submit');
// console.log(btn);

// ----------------- first way Event ----------------- //
// function firstWay(){
//     console.log("First Way");
// };
/* <button id="submit" onclick="firstWay()">success</button> */



// ----------------- second way Event ----------------- //
// btn.onclick = function(ev){
//     console.log(ev); 
//     console.log("second way");
// };



// ----------------- third way Event ----------------- //
// btn.addEventListener('click',()=>{console.log("third way")});











// ---- Extra ---- //
// btn.onclick = function(ev){
//     console.log(ev); 
//     ev.target.style.color='lime';
//     ev.target.style.borderRadius='20px'
//     console.log("TtargeT:", ev.target);
// };


// let card = document.querySelector('.card');
// // console.log(card);

// card.addEventListener('click', (evt)=>{
//     console.log(evt);

// });





// let btn = document.querySelector('#submit'); 
// console.log(btn.textContent);  //return -> success
// console.log(btn.id);           //return -> submit
// console.log(btn.className);    //return -> buttonSub
// console.log(btn.attributes);   //return -> NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}
// console.log(btn.outerHTML);    //return -> <button id="submit" class="buttonSub">success</button> (string xolatda qaytadi)
// console.log(btn.localName);    //return -> button  (return name of tag)
// console.log(btn.classList);    //return -> DOM tooken list []



// btn.textContent='submitted';
// btn.style.border="3px solid lime ";




// let linkFb = document.querySelector('#link');

// btn.addEventListener('click',(evt)=>{
//     linkFb.href="https://google.com";
//     linkFb.textContent="GOOGLE";
//     card.style.display='none'

// });






// let card = document.querySelector('.card');
// console.log(card.children);      //return children elements
// console.log(card.firstChild);    //return first child element
// console.log(card.lastChild);     //return last child element
// console.log(card.childNodes);    //return NodeList
// console.log(card.childElementCount); //return count of child












// ------------------- Experiments on the Events ------------------- //
function $(selector) {
    return document.querySelector(selector);
};
function $$(selector) {
    return document.querySelectorAll(selector);
};


const submitButton = $('#submit'),
    link = $('#link'),
    card = $('.card'),
    input = $('#enter-input');

// console.log(submitButton, link, card, input);




//  --------------------- (kursor) Events list ---------------------  //
// 1: "click"
// 2: "dblclick"
// 2: "dblclick"
// 3: "mouseover"
// 4: "mouseenter"
// 5: "mouseleave"
// 6: "mousedown"
// 7: "mouseup"


// // 1: "click"
// card.addEventListener('click',()=>{console.log('click.!')});

// // 2: "dblclick"
// card.addEventListener('dblclick', ()=>{console.log('dblClick.!')});

// // 3: "mouseover"
// card.addEventListener('mouseover',()=>{console.log("mouseOver.!")});

// // 4: "mouseenter"
// card.addEventListener("mouseenter",()=>{console.log("mouseEnter.!")});

// // 5: "mouseleave"
// card.addEventListener("mouseleave",()=>{console.log("mouseLeave.!")});

// // 6: "mousedown"
// card.addEventListener("mousedown",()=>{console.log("mouseDown.!")});

// // 7: "mouseUp"
// card.addEventListener("mouseup",()=>{console.log("mouseUp.!")});





//  --------------------- (keyboard) Events list ---------------------  //
// 1: "keydown"
// 2: "keypress"
// 3: "keyup"


// // 1: "keydown"
// input.addEventListener("keydown",(evt)=>{
//     // console.log("keyDown.!!! "),
//     // console.log(evt.key);
//     console.log(evt.target.value );
// });

// // 2: "keypress"
// input.addEventListener("keypress",(evt)=>{
//     // console.log("keyDown.!!! "),
//     // console.log(evt.key);
//     console.log(evt.target.value );
// });

// 3: "keyup"
// input.addEventListener("keyup",(evt)=>{
//     // console.log("keyDown.!!! "),
//     // console.log(evt.key);
//     console.log(evt.target.value );
// });


// input.addEventListener('keyup',(evt)=>{

//    if(evt.keyCode===13){
//     if(evt.target.value.trim().length>6){
//         input.style.border='2px solid green'
//     };
//     if(evt.target.value.trim().length<6){
//         input.style.border='2px solid red'
//     };
//    };

//     // console.log(evt.target.value);

// });


















// window.addEventListener('scroll',(evt)=>{
//     console.log(evt);
    
// })