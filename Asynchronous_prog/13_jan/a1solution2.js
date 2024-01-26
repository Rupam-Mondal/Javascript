// console.log("A");
// setTimeout(() => console.log("B"), 1000);
// for (let i = 0; i < 1000000000; i++) {} // Long loop
// console.log("C");

//Ans -> ACB

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), i * 1000);
// }

//Now i am trained
// Ans --> 333

for(var i = 0 ; i < 3 ; i++){
    setTimeout((j) => {
        console.log(j);
        setTimeout(() => console.log(j + 1) , 1000);
    } , i * 2000 , i);
}
