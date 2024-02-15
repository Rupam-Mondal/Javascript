let a = 5;
function increase() {
    return new Promise((res , rej) => {
        a++;
        console.log("Value increased");
        res(a);
    })
}
function decrease() {
    return new Promise((res, rej) => {
        a--;
        console.log("Value decreased");
        res(a);
    })
}

const pr = Promise.all([increase() , decrease()]);
console.log(a);