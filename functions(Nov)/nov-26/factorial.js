const ans = function fact(a) {
    if(a == 0 || a == 1){
        return a;
    }
    return a * fact(a - 1);
}

const res = ans(5);
console.log(res);