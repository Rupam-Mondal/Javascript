let bankBalance = '-1'

let bankBalanceInt = Number(bankBalance);

// console.log(typeof bankBalance)
// console.log(typeof bankBalanceInt)

console.log(bankBalance)
console.log(typeof bankBalanceInt)
//empty value in string is cosidered as false and non empty string is true

//interview question
console.log(NaN == NaN) //answer is false
console.log(5 + null) // answer is 5
console.log(5 + undefined) //answer is NaN
console.log(null == undefined) //true

const a = "2";
const b = parseInt(a)
console.log(typeof a);
console.log(typeof b);
console.log(typeof NaN);
console.log(typeof null);


console.log(parseInt("40")) //output will be 40
console.log(parseInt("years 40")) //output will be NaN