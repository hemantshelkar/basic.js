const accountId=12345;
let accountEmail="hms@gmail.com";
var accountName="Hemant";
accountCity="Indore";

/*accountId=2121212;  
can not re-intialize the value of const
console.log(accountId);*/

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail="hemant@gmail.com";
accountName="Hemant Shelkar";
accountCity="Pune";

console.table([accountId,accountEmail,accountName,accountCity]);

