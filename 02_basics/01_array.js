//Array 
// JavaScript arrays are resizable and can contain a mix of different data types.

// mix of different datatypes means arr=[1,2,3,4,5,true,"Hiiii"] we use different datatypes in an array

const myArr=[1,2,3,4,5];  //array indexing start from zero and ends array length-1
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);
console.log(myArr[4]);

const Heroes=["Shaktimaan","Naagraj"];
const myArr2=new Array(1,2,3,4,5); //this the also anither type to declare a Array

// Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.push(8);
// myArr.pop()
// myArr.pop()
// myArr.pop()  //pop() method do not take any arguement it directly start removing element from last

// myArr.unshift(0) //unshift() method add element at index zero by shifting other elements from there index
// myArr.unshift(9)

// myArr.shift() 
// myArr.shift()  //shift() method is remove the unshifted element


// console.log(myArr.includes(9));
// console.log(myArr.includes(5));

// console.log(myArr.indexOf(9));   //if the element is not in index then it will gives -1 as output

// console.log(myArr.indexOf(5));

// const newArr=myArr.join(); //join() method converts array into string types
// console.log(myArr)
// console.log(newArr);
// console.log(typeof newArr);

// slice and splice 
//what is the difference betwwen slice and splice
// splice() method can manipulate the original Array while slice() method can not manipulate original Array

console.log("A",myArr);
const myN1=myArr.slice(1,3);
console.log(myN1);

console.log("B",myArr);
const myN2=myArr.splice(1,3)
console.log(myN2);

console.log("C",myArr) //now the splice part removed from the Array and only rest of the elements are there
//so we understand that the splice() method can manipulate the array



