function blockingcode() {
    for(let i = 0 ; i < 10000000000 ; i++){

    }
}

function createPromise() {
    return new Promise((res, rej) => {
        res("sanket");
    });
}


let a = 10;
blockingcode();

setTimeout(() => {
    console.log("Timer 1 done");
    console.log("Value of a is = " , a);
} , 3000);

setTimeout(() => {
    console.log("Timer 2 done");
    console.log("Value of a is = ", a);
}, 0);

a++;

let pr = createPromise();

pr.then(function success(value) {
    a++;
    console.log("Pr promise fullfilled with value , " , value);
} , function fail(value) {
    console.log("Rejected with value");
});
a++;
blockingcode();