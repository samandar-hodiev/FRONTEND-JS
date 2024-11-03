"use strict";

function $(select){
    return document.querySelector(select);
};

function $$(select){
    return document.querySelectorAll(select);
};




function createElement(tagName, classList, content){
    const element = document.createElement(tagName);
    if(classList){
        element.setAttribute('class',classList);
    };
    if(content){
        element.innerHTML = content;
    };
    return element;
};

