function createPromise() {
    return new Promise((res , rej) => {
        res("Rupam");
    })
}


let pr = createPromise();

for(let i = 0 ; i < 100000000 ; i++)[
    
]
pr.then((value) => {
    console.log("Promise fulfilled" , value);
} , (value) => {
    console.log("Promise rejected");
});