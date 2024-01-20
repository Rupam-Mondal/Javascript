for(let i = 0 ; i < 1000000 ; i++){}

console.log("starting time");
setTimeout(() => {
    console.log("Work from set time out");
} , 5000);

console.log("Time triggered");