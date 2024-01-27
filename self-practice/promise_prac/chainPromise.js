function createpromise() {
    return new Promise((res , rej) => {
        setTimeout(() => {
            rej("Rupam")
        } , 4000)
    })
}


const pr = createpromise();

pr.then((value) => {
    console.log("First promise done with value " , value);
    return 100;
} , () => {
    console.log("Promise rejected");
    throw 700;
}).then((value) => {
    console.log(value);
} , (value) => {
    console.log("Pormise 2 is rejected");
})