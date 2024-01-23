let x = 10;

setTimeout(() => {
    console.log("I am from settime-out function");
} , 5000);

setTimeout(() => {
    console.log("I am from settime-out function 2");
}, 3000);

console.log(x);