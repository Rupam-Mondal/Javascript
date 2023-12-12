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