"use strict";

const menu = document.querySelector('#menu');
const menuButton = document.querySelector('#menuBtn');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('ml-[-100%]');
});






// ------------------ createElement ------------------ //
// const introCard = document.querySelector("#introCard");
// console.log(introCard);


// const card = document.createElement('div');
// console.log(card);
// card.classList.add("w-[300px]", "h-[400px]", "bg-blue-300", "rounded","p-1");

// card.innerHTML=`
//    <img src="https://picsum.photos/id/123/300/300" alt="foto" class="rounded">
//    <h1>Card tittle</h1>
//    <p>lorem ipsum dolor set amet thenj lorem pit satr gola...</p>
// `
// introCard.append(card);







// ------------------ dynamic render cards  (maping) ------------------ //
// console.log(aboutCard);

// ------------------------------------------- step 1 ------------------------------------------- //
// const introCard = document.querySelector("#introCard");
// console.log(introCard);


// const card = document.createElement('div');
// console.log(card);
// card.classList.add("w-[300px]", "h-[400px]", "bg-blue-300", "rounded","p-1");

// card.innerHTML=`
//    <img src="https://picsum.photos/id/123/300/300" alt="foto" class="rounded">
//    <h1>Card tittle</h1>
//    <p>lorem ipsum dolor set amet thenj lorem pit satr gola...</p>
// `;
// introCard.append(card);


// ------------------------------------------- step 2 ------------------------------------------- //
// aboutCard.forEach((element, index, array)=>{
//     const introCard = document.querySelector("#introCard");
//     console.log(introCard);


//     const card = document.createElement('div');
//     console.log(card);
//     card.classList.add("w-[300px]", "h-[400px]", "bg-blue-300", "rounded","p-1");

//     card.innerHTML=`
//        <img src="https://picsum.photos/id/123/300/300" alt="foto" class="rounded">
//        <h1>Card tittle</h1>
//        <p>lorem ipsum dolor set amet thenj lorem pit satr gola...</p>
//     `;
//     introCard.append(card);
// });



// ------------------------------------------- step 3 ------------------------------------------- //
// const introCard = document.querySelector("#introCard");

// aboutCard.forEach((element)=>{

//     console.log(element);


//     const card = document.createElement('div');
//     card.classList.add("w-[300px]", "h-[400px]", "bg-blue-300", "rounded","p-1",'mt-4');

//     card.innerHTML=`
//        <img src="${element.img}" alt="smth">
//        <div class="p-2 bg-red-200">
//            <h1>${element.title}</h1>
//            <p>${element.description}</p>
//            <span>${element.id}</span>
//        </div>
//     `;
//     introCard.append(card);
// });














// ------------------------------------ dynamic render cards  (maping) ------------------------------------ //

const intro = document.querySelector("#intro");

// console.log(introCard);

// const kard = document.createElement('div');
// kard.classList.add('bg-blue-500', 'w-[300px]', 'rounded', 'h-[540px]', 'p-3');
// kard.innerHTML=`
//         <img src="https://picsum.photos/id/120/300/400" alt="foto" class="rounded">
//         <div class="p-1">
//            <h1 class="text-xl text-white">Card tittle</h1>
//            <p class="text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolorum aliquid corporis?</p>
//         </div>
// `;


introCard.forEach((el) => {
    const kard = document.createElement('div');
    kard.classList.add('bg-blue-500', 'w-[300px]', 'rounded', 'h-[540px]', 'p-3', 'mt-3');
    kard.innerHTML = `
            <img src="${el.img}" alt="foto" class="rounded">
            <div class="p-1">
               <h1 class="text-xl text-white">${el.title}</h1>
               <p class="text-sm text-white"> ${el.description} </p>
            </div>
    `;

    intro.append(kard);
})




















// ------------------------------------ dynamic render cards  (maping) ------------------------------------ //
// console.log(userList);
// const info = document.querySelector("#info");



// userList.forEach((element)=>{
//     const card = document.createElement('div')
//     card.classList.add('bg-green-400', 'w-[360px]', 'rounded', 'h-[540px]', 'p-4','mt-4');
//     card.innerHTML=`
//                <img src="${element.avatar}" alt="foto" class="rounded w-full h-auto]">
//                 <div>
//                    <h1 class="text-xl text-white">${element.first_name} ${element.last_name}</h1> 
//                     <p class="text-xl text-white">${element.email}</p>
//                      <h1 class="text-xl text-white">${element.id}</h1>
//                 </div>     
//     `;

//     info.append(card);
// })






// console.log(userList); 
const info = document.querySelector("#info");

userList.forEach((element) => {
    let htmlContent = `<img src="${element.avatar}" alt="foto" class="rounded w-full h-auto]">
                <div>
                  <h1 class="text-xl text-white">${element.first_name} ${element.last_name}</h1> 
                  <p class="text-xl text-white">${element.email}</p>
                  <h1 class="text-xl text-white">${element.id}</h1>
                </div> `;
    const card = createElement('div', 'bg-green-400 w-[360px] rounded h-[540px] p-4 mt-4', htmlContent);

    info.append(card);
})






















// ------------------------------------ localization - multi language ------------------------------------ //
// console.log(lang);


const links = document.querySelectorAll(".li a");




const languages = document.querySelector("#lang");
console.log(languages);

languages.addEventListener('change', (e) => {

    // console.log(e.target.value);
    // console.log(lang[e.target.value]);
    // // console.log(links);
    // links[0].textContent=lang[e.target.value].home;
    // links[1].textContent=lang[e.target.value].about;
    // links[2].textContent=lang[e.target.value].service;
    // links[3].textContent=lang[e.target.value].contact;

    localStorage.setItem('lang', JSON.stringify(lang[e.target.value]))

    setLanguage();
});

function setLanguage() {
    const local = JSON.parse(localStorage.getItem('lang'));

    links[0].textContent = local.home;
    links[1].textContent = local.about;
    links[2].textContent = local.service;
    links[3].textContent = local.contact;

    setLanguage()
};

setLanguage()