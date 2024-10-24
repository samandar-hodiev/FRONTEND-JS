"use strict";

//  ------------------- Lesson: 9 ------------------- //



// ----------------------------------------- Recursion Funtion ----------------------------------------- //

// funksiyani o'zini ichida chaqirish (call) qilish rekursiv funksiya deyiladi.!!!
// function rec(a){
//     console.log('Call'+a);
//     // rec(2);
// };
// rec(1);


// 100 dan 1 gacha bo'lgan raqamlarni recurion funksiya orqali chiqarish.!
// function decrease(num){
//     console.log(num);
//     if(num>1){
//         num=num-1;
//         decrease(num);
//     }else{
//         return;
//     };
// };
// decrease(100);

// 1 dan 100  gacha bo'lgan raqamlarni recurion funksiya orqali chiqarish.!
// function increase(num){
//     if(num<-1){
//         num=num+1;
//         increase(num);
//     }else{
//         return;
//     };
//     console.log(num*(-1));
// };
// increase(-100);









// ----------------------------------------- Closure Funtion ----------------------------------------- //

/*
(Biror bir funksiya ishlabturgan bo'lsaham) global scopedagi yoki o'zidan bitta kata (parent) scopedagi o'zgaruvchini  ishlatishga ruxsat olishiga (closure) deyiladi.!!!

Closure xususiyati - ichki scope tashai skopdagi o'zgaruvchilarni o'zida saglash
xususiyati;

closure funksiya - o'sha ichki scope tegishlik funksiya; 
*/


// function makeCounter(){
//     let count = 0;
//     return function(){
//         return count++
//     };
// };
// let counter = makeCounter();
// alert(counter());
// alert(counter());
// alert(counter());










// ----------------------------------------- JSON - JavaScript object notion ----------------------------------------- //

// const mac = {
//     name:'MacBook Pro',
//     version:'M1',
//     ram:'8GB',
//     memory:'1024GB',
//     color:'Gray',
//     price:'2000$'
// };
// console.log(mac);

// Object to JSON
// let tojson = JSON.stringify(mac)
// console.log(tojson);
// result - {"name":"MacBook Pro","version":"M1","ram":"8GB","memory":"1024GB","color":"Gray","price":"2000$"}

// JSON to Object
// let toObj = JSON.parse(tojson);
// console.log(toObj);
// result - {name: 'MacBook Pro', version: 'M1', ram: '8GB', memory: '1024GB', color: 'Gray', …}











// ----------------------------------------- Object copying ----------------------------------------- //

                             // ------- Deep clone & SHallow clone ------- //


// ------------ SHallow clone  ------------ //
// const shallowclone = {
//     name:'JavaScript',
//     frameworks:['react','vue','angular'],
//     year:1999
// };

// const shallowclone2 = shallowclone;
// shallowclone2.version='ES24';
// console.log(shallowclone);
// console.log(shallowclone2);



//  ------------ Deep clone  ------------ //
// 1-usul.!
// const deepClone = {
//     name:'PhP',
//     framework:'Laravel'
// };

// const deepClone2 = Object.assign({},deepClone);
// deepClone2.extraFramework='Django';
// console.log(deepClone);
// console.log(deepClone2);


// 2-usul.!
// const deepClone = {
//     name:'PhP',
//     framework:'Laravel'
// };

// const deepClone2 = {...deepClone};
// deepClone2.extraFramework='Django';
// console.log(deepClone);
// console.log(deepClone2);











// ----------------------------------------- Function constructor ----------------------------------------- //

// function Car(name, brand, color, power, maxSpeed){
//     this.name=name;7
//     this.brand=brand;
//     this.color=color;
//     this.power=power;
//     this.maxSpeed=maxSpeed;
//     this.allInfo=function(){
//         console.log(`${this.name} \n${this.brand}`);
//     };
// };


// Car.prototype.getColor=function(){
//     return this.color;
// };

// const bmw = new Car('BMW X7','BMW','Black','4000','400');
// console.log(bmw);
// bmw.allInfo();
// console.log(bmw.getColor());


// const nexia = new Car('nexia','chevrolet','white','75','220km/h');
// console.log(nexia);
// nexia.allInfo();
// console.log(nexia.getColor());



















