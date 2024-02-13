function sum(a , b , c) {
    return a + b + c;
}
// console.log(sum(3 , 2 , 1));


function sum1(...arg) {
    let sum = 0;
    for(let i = 0 ; i < arg.length ; i++){
        sum = sum + arg[i];
    }
    return sum;
}

const obj = {
    a : 20,
    b : 10,
    c : 30
}
const obj1 = {
    ...obj,
    d : 40
}
console.log(obj1);
console.log(sum1(3 , 4 , 2 , 1 , 5 ,6));