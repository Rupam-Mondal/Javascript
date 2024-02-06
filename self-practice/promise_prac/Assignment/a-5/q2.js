function prepareBreakfirst() {
    console.log("Preparation of breakfirst started");
    const pr = makeTea();
    pr.then((value) => {
        console.log(value);
        return makeToast();
    }).then((value) => {
        console.log(value);
    }).catch((value) => {
        console.log("Something wrong happened");
    })
}


function makeToast() {
    console.log("Toast making started");
    return new Promise((res , rej) => {
        setTimeout(() => {
            res("Toast making done");
        } , 3000);
    });
}
function makeTea() {
    console.log("Tea making started");
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Tea is ready");
        }, 2000);
    })
}
prepareBreakfirst();
