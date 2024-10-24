"use strict";

const createElement = (tagName, classList, content)=>{
    const element = document.createElement(tagName);
    if(classList){
        element.setAttribute('class', classList);
    };
    if(content){
        element.innerHTML=content;
    };
    return element;
};


