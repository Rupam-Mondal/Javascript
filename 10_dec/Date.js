const d = Date();

//Date function returns a new string
console.log(d);

const dt = new Date();// in other classes we will learn about new keyword
console.log(dt , typeof dt); // in this case it return object

console.log(dt.getDate());
console.log(dt.getMonth()); //jan -> 0
console.log(dt.getFullYear());
console.log(dt.getDay());


//This below method is very special it return total second from 1st jan of 1970
console.log(dt.getTime());



//Big integer in js two ways to make big int
//after a big number just write a small n 6675........90n then it will be the okay
//also
const big = BigInt("4453456788909876545678998765456789009876543456909876543212345678909876543")
console.log(big);

///check output
console.log(0n == 0);
console.log(0n === 0);