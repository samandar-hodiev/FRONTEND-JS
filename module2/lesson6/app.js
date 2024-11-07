"use strict";

const wrapperBox = $(".wrapper");
const box = $$(".box");
// console.log(wrapperBox, box);
const div = $(".div");
const form = $(".form");
const btn = $(".btn");
// console.log(div, form, btn);
const submitForm = $("#form");











// --------------- rendered element events --------------- //
for (let i = 0; i < 10; i++) {
    const boxItem = createElement('div', 'box', `
           <div>
               <button id="sub">read more..</button>
               <button data-id="${Math.ceil(Math.random()*100)+i}" id="sup">like</button>
           </div>        
        `);
    // console.log(boxItem);
    boxItem.dataset.id = `userID: ${Math.ceil(Math.random()*1000)+i}`;
    wrapperBox.appendChild(boxItem);
};


// --------------- static element events --------------- //
box.forEach((e, i, a) => {
    // console.log(e);
    e.addEventListener('click', () => {
        console.log(`box ${i +1} clicked`);
    });
});





// --------------- bubling --------------- //
div.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('DIV is clicked.!');
});

form.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('FORM is clicked.!');
});

btn.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('BTN is clicked.!');
});

// e.stopPropagation(); -> ushbu metod elementlar Bubling bo'lishini oldini oladi.!!! (STOP POROPAGATION.!!!)

// form
submitForm.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log("all info submitted");
});

// e.preventDefault(); -> ushbu metod sahifa (reload)bo'lishini, yangilanishini oldini oladi.!!!






// --------------- capturing --------------- //
wrapperBox.addEventListener('click', (e)=>{
    // console.log("wrappber box clicked.!!!"); 
    // console.log(e.target);

    // if(e.target.classList.contains('box')){
    //     console.log(e.target);
    // };
    


    if(e.target.id==='sub' && e.target.nodeName==="BUTTON"){
        console.log(e.target);
    };

    if( e.target.id==="sup"){
        console.log(e.target);
    };
    
});




 






// --------------- data-set attribute --------------- //
const button = $('#button');
console.log(button);

button.className='btn btn-success';
button.setAttribute('qandaydir', 'nimadir');
button.dataset.id='23nc83ns20m';










