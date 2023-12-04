function add(a , b) {
    console.log("Welcome");
    return function () {
        return a + b;
    }
}

const ans = add(5 , 3);
console.log(ans())


