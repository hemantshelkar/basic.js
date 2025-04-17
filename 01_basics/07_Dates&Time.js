// Dates and Time

let myDate= new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof(myDate));

// let newDateCreated=new Date(2023,0,22);

// let newDateCreated=new Date(2023,0,23,5,4);
// let newDateCreated=new Date("01-04-2023");
let newDateCreated=new Date("2030-01-23");
// console.log(newDateCreated.toLocaleString());

// let newTimeStamp= Date.now()
// console.log(newTimeStamp);
// console.log(newDateCreated.getTime());
// console.log(Date.now()/1000)
// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"

})

