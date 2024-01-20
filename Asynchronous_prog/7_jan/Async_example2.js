for(let i = 0 ; i < 10000000; i++){
    //some work
}
console.log("First loop done");
for (let i = 0; i < 10000000; i++) {
  //some work
}
console.log("second loop done");
setTimeout(() => {
    console.log("Timer 1 done");
} , 2000);
setTimeout(() => {
    console.log("Timer 2 done");
}, 0);
console.log("Third loop started");
for (let i = 0; i < 2000000000; i++) {
  //some work
}
console.log("Third loop closed");
setTimeout(() => {
    console.log("Timer 3 done");
}, 100);