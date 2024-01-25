console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


//convert a decimal number to binary
const x = 13
console.log(x.toString(2)); //inside the method base of number
console.log(x.toString(8)); //octal number
//if you call without argument then it just converts to string

//binary to decimal
console.log(parseInt("1101"  , 2)); // second argument is base


//NaN
//if i search a number on array not found that then what should i return 

//one option is return -1 , in python type program -1 index is also present
//undefined or null , these are not made for this type of use case
//in this type case js use NaN.. type of NaN is Number ans also NaN != NaN

console.log(NaN == NaN); // always false

//number precision
const num = 10.445
console.log(num.toPrecision(4));// number og total digit
console.log(num.toFixed(1)); // number of digit after .

//Boxing method in js(primitive to object)
//10.toString() can not be used because 10 is primitive value that does not depend on any method
//but how can we use x.toString() in this case internally js tries to convert x to obj

const op = (10).toString();
console.log(op);