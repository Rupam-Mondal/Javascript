function add() {
    let sum = 0
    for(let i = 0 ; i < arguments.length ; i++){
        sum = sum + arguments[i];
    }
    return sum;
}
function additions(...a) {
    let sum = 0;
    for(let i = 0 ; i < a.length ; i++){
        sum = sum + a[i];
    }
    return sum;
}

console.log(add(1 , 2 , 3 , 4 , 5));
console.log(additions(1 ,2 , 3,  4, 5));