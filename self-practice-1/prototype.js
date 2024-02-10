// this perticular conept will be more easy to understand in browser console.
function product(name , price) {
    console.log(name);
}

product.prototype.disp = function () {
    console.log("Hi bro");
}

console.log(product == product.prototype.constructor); // both are same because 
//prototype is just a mechanism by which js object takes feature of one another..