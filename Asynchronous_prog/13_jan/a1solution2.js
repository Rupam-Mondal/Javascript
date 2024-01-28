console.log("A");
setTimeout(() => console.log("B"), 1000);
for (let i = 0; i < 1000000000; i++) { } // Long loop
console.log("C");


//Ans -> ACB

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), i * 1000);
}

//Now i am trained
// Ans --> 333

for(var i = 0 ; i < 3 ; i++){
    setTimeout((j) => {
        console.log(j);
        setTimeout(() => console.log(j + 1) , 1000);
    } , i * 2000 , i);
}
//
/**
 * j == i when you are passing extra param in setTimeout it is basicaly ref of that variable
 */
//Ans --> 0 1 1 2 2 3

setTimeout(() => console.log("A"), 2500);
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("B" + i);
        setTimeout(() => {
            console.log("C" + i);
        }, i * 500 + 500);
    }, i * 1000);
}


function first(callback) {
    setTimeout(() => {
        console.log("first");
        callback();
    }, 500);
}
function second() {
    console.log("second");
}
first(second);

//Ans --> First , Second


let count = 0;
setTimeout(() => console.log(count++), 1000);
setTimeout(() => console.log(count++), 2000);
setTimeout(() => console.log(count++), 3000);

//Ans --> 0 , 1 , 2


for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000 * i);
}

//Ans --> 0 , 1 , 2

for (var i = 0; i < 3; i++) {
    (function (j) {
        setTimeout(() => console.log(j), 2000 * j);
    })(i);
}

//Ans --> 0 , 1 , 2

console.log("1");
setTimeout(() => {
    console.log("2");
    setTimeout(() => console.log("3"), 1000);
}, 2000);
setTimeout(() => console.log("4"), 1000);
console.log("5");

//Ans --> 1 , 5 , 4 , 2 , 3