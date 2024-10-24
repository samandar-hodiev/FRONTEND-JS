"use strict";

const navList = $(".nav__list"),
      menuButton = $(".menuButton");
// console.log(navList,menuButton);


menuButton.addEventListener('click',()=>{
    navList.classList.toggle('hider')

    if(navList.classList.contains('hider')){
       menuButton.innerHTML=` <div class="menuButton">
                    <div class="menuBtn">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>`;
    }else{
        menuButton.innerHTML=`<h1 style="color:white; font-size:24px;" > X </h1>`;
    }
});




// shrink

let navTop = $('.nav__top')
window.addEventListener('scroll',(evt)=>{
    // console.log(window.scrollY);
    if(window.scrollY>20){
        navTop.classList.add('shrink')
    }else{
        navTop.classList.remove('shrink')
    }

});
