"use strict";
// ------------ lesson: 7 ------------ //


// ============================Array destructuring.!============================ //
const arr = ['apple','limon','bliss'];
const [a,l,b] = arr;
// console.log(a);
// result - apple




// ============================ Objectni quyidagi xolatda: funcsiyaga berib yanada osonroq ishlatish mumkin.!============================ //
const person = {
    name:'Bek',
    age:23,
    occupation:'programmer'
};
// console.log(person.occupation)

function getUserData(userData){
    console.log(`Name: ${person.name} \nAge: ${person.age} \nOccupation: ${person.occupation}`);
}
// getUserData(person);





// ============================ Object destructuring.! ============================ //
const myself = {
    fName:'Samandar',
    lName:'Hodiev',
    age:21,
    occupation:'programmer',
};
const {fName,lName,age,occupation}=myself;
// console.log(occupation);

// using function in object 
function getMyData(myDAta){
    const {fName,lName,age,occupation}=myDAta;
    console.log(`Ismi: ${fName} \nFamiliya: ${lName} \nYoshi: ${age} \nKasbi: ${occupation}`);
};
// getMyData(myself);

// ushbu xoltni yanada qisqa qilib quyidagicha yozishimiz mumkmin.!
function getMyData({fName,lName,age,occupation}){
    console.log(`Ismi: ${fName} \nFamiliya: ${lName} \nYoshi: ${age} \nKasbi: ${occupation}`);
};
// getMyData(myself);






// ============================ Spread operation (in Object).! ============================ //
const car = {
    name:'BMW',
    year:2024,
    color:'Black',
};
// console.log(car);

const carExtraInfo = {
    price:'50000$',
    height:'200sm',
    weight:'2400kg'
};
// console.log(carExtraInfo);

const allInfoOfCar = {
    ...car,
    ...carExtraInfo
};
// console.log(allInfoOfCar);


//destructuring allInfoOfCar 
function GetCarData(carDta){
    const {name,year,color,price,height,weight} = carDta;
    console.log(`Nomi: ${carDta.name} \nYili: ${carDta.year} \nRangi: ${carDta.color} \nNarxi: ${carDta.price} \nBalandligi: ${carDta.height} \nOg'rligi: ${carDta.weight}`);
};
// GetCarData(allInfoOfCar);

// yanada qulayroq usul bilan destructuring qilish
function GetCarData({name,year,color,price,height,weight}){
    console.log(`Nomi: ${name} \nYili: ${year} \nRangi: ${color} \nNarxi: ${price} \nBalandligi: ${height} \nOg'rligi: ${weight}`);
};
// GetCarData(allInfoOfCar);






// ============================ Object constructor (methods).! ============================ //
 const myCar = {
    name:'BMW',
    year:2024,
    color:'Black',
    price:'50000$',
    height:'200sm',
    weight:'2400kg'
};

// 1. keys - ushbu metod object "key"larini array xolatida olibberadi.!
// console.log(Object.keys(myCar));
// result -  ['name', 'year', 'color', 'price', 'height', 'weight']

// 2. value - ushbu metod object "value"larini array xolatida olibberadi.!
// console.log(Object.values(myCar));
// result -  ['BMW', 2024, 'Black', '50000$', '200sm', '2400kg']

// 3. entries - ushbu metod object "key" va "value"larini alohida alohida array xolatida olibberadi.!
// console.log(Object.entries(myCar));
// reuslt -  ['name', 'BMW']  ['year', 2024]  ['color', 'Black'] ['price', '50000$'] ['height', '200sm'] ['weight', '2400kg']

// 4. fromEntries - ushbu metod entries dan xosil bo'lgan natijani asl xoliga o'giribberadi.!
// let methodFromEntries = Object.entries(myCar);
// console.log(methodFromEntries);
// reuslt -  ['name', 'BMW']  ['year', 2024]  ['color', 'Black'] ['price', '50000$'] ['height', '200sm'] ['weight', '2400kg']
// console.log(Object.fromEntries(methodFromEntries));
// result - {name: 'BMW', year: 2024, color: 'Black', price: '50000$', height: '200sm', weight:'2400kg};

// 5. freeze - ushbu metod qo'llanilgan objectga yangi qiymat qo'shibbo'lmaydi, qiymatini o'chiribbo'lmaydi va qiymatini o'zgartiribbo'lmaydi.!
// Object.freeze(myCar);

// 6. isFrozen - objectimiz "freeze"qilingan yoki qilinmaganini aniqlab true yoki false qiymat qaytaradi.!
// console.log(Object.isFrozen(myCar));
// result - true

// 7. seal - ushbu metod objectni qiymatini  tashqaridan o'chirishga va tashqaridan qiymat qo'shishga ruxsat bermaydi ammo qiymatini o'zgartirish imkoni mavjud.!
// Object.seal(myCar);
// myCar.speed='300km/h';
// console.log(myCar);
// myCar.name="MERC";
// console.log(myCar)

// 8. isSealed - ushbu metod object seal qilingan qilinmaganiga qarab true yoki false qiymat qaytaradi.!
// console.log(Object.isSealed(myCar));
// result - true







// ============================ Advanced funtions.! ============================ //

// ------------- rest & spread operation.! ------------- //
function getData(a, b, c, ...e){
    console.log(a,b,c,e);
    console.log(...e);
};
// call
// getData(1,2,3,4,5,6,7,8,9,10);
// result - 1 2 3 [4, 5, 6, 7, 8, 9, 10]




// -- mix -- //
function toArray(str){

    const arr = str.split("");

    for(let i=0; i<arr.length; i++){
        if(arr[i]!=="l"){
            console.log(arr[i]);
        }
    };
};
// toArray('hello');






// ============================ pure funtions.! ============================ //
function pure(a,b){
    console.log(a+b);
};
// pure(1,4);
// result - 5






// ============================ inpure funtions.! ============================ //
const c = 127;
function inpure(a,b){
    console.log(a+b+c)
};
// inpure(1,2);




// ============================ factory funtions.! ============================ //
const createCar = (name, brand, year, color) => {
    return({name,brand,year,color});
};
const BMW = createCar("BMW X7", "BMW", 2024, "Black");
// console.log(BMW);
// result - {name: 'BMW X7', brand: 'BMW', year: 2024, color: 'Black'}
const Nexia = createCar('Neaxia 3','Chevrolet',2019,'White');
// console.log(Nexia);
// result - {name: 'Neaxia 3', brand: 'Chevrolet', year: 2019, color: 'White'}






// ============================ Pipe funtions.! ============================ //
const one = (x) => x+4;
const two = (x) => x*2;
const three = (x) => x**3;

let result = three(two(one(1)));
// console.log(result);





// ============================ Currying funtions.! ============================ //

const curry=(a)=>{
    return (b)=>{
        return (c)=>{
            return (d)=>{
                return a+b+c+d;
            };
        };
    };
};

// const curry=(a)=>(b)=>(c)=>(d)=>a+b+c+d;

// console.log(curry(1) (2) (3) (4));
// result - 10






// ============================ Height order funtions.! ============================ //
// structure
// const app = (func) => {
//     return func;
// };

// O'zining parametirida funcsiya qabul qilsa va funcsiya return qilsa bu funcsiya "hay order funksuya" deyiladi.!

const app=(func)=>{
    return func;
};

function test(){
    return [1,2,3,4,5];
};
const res = app(test);
// console.log(res());
// result - [1, 2, 3, 4, 5]



// pipe function 
const test1=(a)=>a+10;
const test2=(b)=>b/10;
const test3=(c)=>c*2;

console.log(test1(test2(test3(2))));
// result - 10.4
