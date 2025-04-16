const score=400
// console.log(score)

const Balance=new Number(100)
// console.log(Balance) 

// console.log(Balance.toString());
// console.log(Balance.toString().length);

// console.log(Balance.toFixed(2))
// console.log(Balance.toFixed(1))

const otherNumber=632.3763
// console.log(otherNumber.toPrecision(4))
// console.log(otherNumber.toPrecision(2))
// console.log(otherNumber.toPrecision(3))
// console.log(otherNumber.toPrecision(5))
// console.log(otherNumber.toPrecision(21))

const Hundreds=1000000
// console.log(Hundreds)
// console.log(Hundreds.toLocaleString()) //set as US standard byDefualt

// console.log(Hundreds.toLocaleString("en-IN")) //using en-IN set as Indian standard


//+++++++++++++++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4)) //abs -> absolute value can convert negative value as positive
// console.log(Math.round(5.545))
// console.log(Math.ceil(5.445)) //ceil round off the value by adding +1 if the there is 1 or higher value after decimal point
// console.log(Math.floor(5.445))//floor consider off the value as Normal, no matter what is after decimal point
// console.log(Math.min(2,3,5,6))
// console.log(Math.max(3,45,23,4,5));


// console.log(Math.random())//random can provide ramdon value between 0 or 1

// console.log(Math.round(Math.random()*5+1))

// console.log(Math.floor(Math.random()*5+1))

const Min=10
const Max=20

console.log(Math.floor(Math.random() * Max-Min+1)+Min);


