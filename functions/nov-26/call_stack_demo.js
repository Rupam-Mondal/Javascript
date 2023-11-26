function f1() {
    console.log("In f1");
}
function f2() {
    console.log('In f2');
    f1();
    return 7 + 8;
}

function f3() {
    console.log("In f3");
    f2();
    return 5;
}

function f4() {
    const x = 10
    const y = f3()
    return x + y;
}

const res = f4();
console.log(res);   //in stack first f4 then f3 and then f2 and then f1 have entered
                    // after completeing each function those will be deleted form call stack