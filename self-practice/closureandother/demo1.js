
/**
 * closure
*/
function f() {
    let i = 0;
    console.log(i);
    return function g() {
        setTimeout(() => {
            i++;
            console.log(i + x);
        } , 4000);
    }
}

let x = 2;
const ans = f();
ans();
console.log("Came back from f function");