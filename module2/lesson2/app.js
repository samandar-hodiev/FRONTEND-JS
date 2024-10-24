"use strict";




// --------------- createElement --------------- //
// const div = document;
// console.log(div);


// ------------ selected container ------------ //
// const kontainer = $(".container");
// console.log(kontainer);


// const div=document.createElement("div"); 
// div.classList.add('p-5', 'bg-danger', 'card', 'w-50','mt-2');
// div.innerHTML="<h1>append</h1>";
// console.log(div);
// // --------------- append --------------- //
// kontainer.append(div);


// const h1=document.createElement("h1");
// h1.classList.add('bg-danger','p-5','w-50');
// h1.innerText='prepend';
// console.log(h1);
// // --------------- prepend --------------- //
// kontainer.prepend(h1);





// function createElement(count) {
//     for (let i = 0; i < count; i++) {
//         const div = document.createElement("div");
//         div.classList.add('p-5', 'bg-danger', 'card', 'w-50', 'mt-2');
//         div.innerHTML = `<h1>Append ${i}</h1>`;
//         console.log(div);
//         // --------------- append --------------- //
//         kontainer.append(div);
//     }
// };
// // createElement(20);






// --------------- before , after --------------- //
// const button = $(".btn");
//  console.log(button);

// const afterBtn = document.createElement('button');
// afterBtn.classList.add('btn', 'btn-info', 'px-3');
// afterBtn.textContent = 'After Btn';
// --------------- after --------------- //
//  button.after(afterBtn);


// const beforeBtn = document.createElement('button');
// beforeBtn.classList.add('btn', 'btn-warning', 'px-2');
// beforeBtn.textContent = "Before Btn";
// --------------- before --------------- //
//   button.before(beforeBtn);











// ---------------------- getAttribute  ---------------------- //
// const button = $(".btn-success");
// console.log(button);

// let gotAtt = button.getAttribute('class');
// console.log(gotAtt);
// // btn btn-success m-5

// console.log(button.getAttribute('id'));
// // null

// ---------------------- setAttribute---------------------- //
// sintaksis: element.setAttribute("attributName", "attributValue");

// button.setAttribute("id", "idBtn");
// console.log(button.getAttribute('id'));
// // idBtn
// button.setAttribute('disabled','true');
// button.setAttribute('title','button');

// console.log(button);


// const input = $('.input');
// console.log(input);

// let setAttNum = input.setAttribute('type','number')
// let setAttPlace = input.setAttribute('placeholder','enter your number');


// ---------------------- hasAttribute---------------------- //








// ---------------------- expriment getAttribute and setAttribute ---------------------- //
// const input = $("#password");
// const controlInput = $("#control-input");


// controlInput.addEventListener('click',()=>{
//     // console.log(input.hasAttribute('type'));
    

//     if(input.getAttribute('type')==='password'){
//         input.setAttribute('type','text');
//         controlInput.innerHTML=`<i class="bx bx-show-alt m-2"></i> `
//     }else{
//         input.setAttribute('type','password');
//         controlInput.innerHTML=`<i class='bx bxs-low-vision m-2'></i>`;
//     }
// });








// ---------------------- <template> </template> ---------------------- //
const template = document.querySelector('#content');
console.log(template);
const cloneTemplate = template.content.cloneNode(true);
// console.log(cloneTemplate);
const parentContent = document.querySelector('#cloneTemplateRender');
parentContent.appendChild(template.content.cloneNode(true));











// <!-- ------------------- createEtlement ------------------- -->
const randerPlace = document.querySelector(".randerPlace");
// <!-- render -->
const div = document.createElement('div');
console.log(div);
div.classList.add('d-flex', 'card',  'p-3',  'bg-info', 'w-25', 'h-50');
div.innerHTML=`
      <h4>content tittle</h4>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quam placeat enim optio animi consequatur modi a cum! Dicta aut et assumenda at excepturi!
        </p>
        <img src="https://picsum.photos/id/123/300/300" alt="foto">
`


    randerPlace.append(div);
    