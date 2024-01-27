/**
 * 
 * if you do not have rejection handler then you need a catch function
 * otherwise you do not need it ....
 * so be carefull if you do not handle that program will be terminated...
 *  
 */

function createPromise(time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej(time);
        }, time);
    });
}

const pr1 = createPromise(1000);
const pr2 = pr1.then(
    (val) => {
        console.log("Resolving ", val);
        return 100;
    },
    () => {
        console.log("Executing r1 whoooooo");
        // return 700;
        throw 700;
    }
);
pr2
    .then(
        (value) => {
            console.log("pr 2 is also passed", value);
            return 10;
        }
        // if you do not write rejection handler it will give you error.. it got a exception
    )
    .then((value) => {
        console.log("Promise 3 is also passed", value);
        return 5;
    })
    .then((value) => {
        console.log("last promise done ", value);
    }).catch((error) => {
        console.log(error);
    })
