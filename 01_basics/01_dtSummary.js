// types of datatypes in js
// 2 types of datatypes in js
// 1-> Premitive datatypes

const Premitive_DT=["Number","String","Bigint","Null","Undefined","Symbol","Boolean"]
const score=100;
const newScore=100.3;
const isLogged=false;
const outsideTemp=null;
let userEmail;
const userName="Ram";
// console.log(typeof userName);
const id=Symbol('123');
const newId=Symbol('123');
console.log(id===newId);     //symbols are always unique no matter they contain same value but variable considered the value always unique

//2-> reference (non-premitive datatypes)

const reference_DT=["Array","Object","Function"]

const Heros=["Shaktiman","Krrish","Flying jatt"]
let myObj={
    name:"Hemant",      //null is also a object
    age:24,
    temp:null
}
console.log(myObj);


const myFunction=function(){
    console.log("Hello World");
    
}