function createAsyncPromise() {
    return new Promise((res, rej) => {
    setTimeout(function timerCompleted() {
        const value = Math.random();
        if (value < 0.5) {
        res(value);
        } else {
        rej(value);
        }
        }, 5000);
    });
}

const response = createAsyncPromise();

response.then((value) => {
    console.log("Promise fullfilled " , value);
} , (value) => {
    console.log("Promise rejected " ,value);
});

for(let i = 0 ; i < 100 ; i++)[
    //blocking piece of code
]
