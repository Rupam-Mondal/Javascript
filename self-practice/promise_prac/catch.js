function createpromise() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Rupam");
        }, 4000);
    });
}

const pr = createpromise();

pr.then((value) => {
    console.log("First promise done with value ", value);
    return 100;
})
    .then((value) => {
        console.log(value);
        throw 700;
    })
    .then((value) => {
        console.log(value);
        throw 700;
    })
    .catch(() => {
        console.log("Something wrong happened");
    });
