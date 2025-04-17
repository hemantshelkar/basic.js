
const Marvel_Heros=["IronMan","Thor","SpiderMan","Groot"];
const Dc_Heros=["SuperMan","BatMan","Flash"];
                                                    
// Marvel_Heros.push(Dc_Heros); //isme array ke andar array de diya lekin hame to marge karna h
// console.log(Marvel_Heros)   
// console.log(Marvel_Heros[4][1])

// const new_heros=Marvel_Heros.concat(Dc_Heros);
// console.log(new_heros)

//Spread Operator --> is Spread he all array element in individual elements in a new array
// const allNewHeros=[...Marvel_Heros,...Dc_Heros];
// console.log(allNewHeros);

// flat() method 
const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
// console.log(anotherArray);
// const real_another_arr=anotherArray.flat(1);
// const real_another_arr=anotherArray.flat(Infinity);
// console.log(real_another_arr);

// console.log(Array .isArray("Hemant"));
// console.log(Array .from("Hemant"));
// console.log(Array .from({name:"Hemant"}));   // Empty array return honga kyuki object ka array nhi ban paa raha h isliye

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3))

