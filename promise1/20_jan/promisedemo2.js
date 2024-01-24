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

console.log("Promise :" , response);
for(let i = 0 ; i < 100000000 ; i++){
    //this loopwill block some time
}

console.log("Promise :", response);
for (let i = 0; i < 100000000; i++)
{
    //this loopwill block some time
};