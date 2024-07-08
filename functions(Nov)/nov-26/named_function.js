const isEvenorodd = function process(num) {
    return num % 2 == 0;
}

const res = isEvenorodd(2); // we can not call the func by name process 
                            //we can only use the name process inside that particular scope
console.log(res);