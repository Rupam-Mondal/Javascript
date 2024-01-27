function createPromise(time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej(time);
        }, time);
    });
}

const pr1 = createPromise(1000);
const pr2 = pr1.catch(
    (val) => {
        console.log("Rejecting ", val);
        return 100;
    },
);
pr2
    .then(
        (value) => {
            console.log("pr 2 is also passed", value);
            return 10;
        }
    )
    .then((value) => {
        console.log("Promise 3 is also passed", value);
        return 5;
    })
    .then((value) => {
        console.log("last promise done ", value);
    });
