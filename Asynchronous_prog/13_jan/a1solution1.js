console.log("A");
setTimeout(() => console.log("B"), 1000);
console.log("C");

// ans --> ACB

setTimeout(() => {
    console.log("A");
    setTimeout(() => console.log("B"), 1000);
}, 1000);
console.log("C");

//ans --> CAB

setTimeout(() => console.log("A"), 3000);
setTimeout(() => console.log("B"), 2000);
setTimeout(() => console.log("C"), 1000);

//ams --> CBA

console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");

//I predicted little wrong i thought 0 sec will execute just after A but
//it will take time than to print c

//ans --> ACB


for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
} 
//one of the best question i have ever faced 

//var is making i a global scope as loop will close before 1 sec that why now the value of i is
//3 so it is printing 3 3 3

//ans --> 333

setTimeout(() => {
    console.log("A");
    setTimeout(() => {
        console.log("B");
        setTimeout(() => console.log("C"), 500);
    }, 1000);
}, 1500);

//ANS --> ABC