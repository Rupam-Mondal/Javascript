const arr = [1 , 2 , 3 , 4 , 5];


const res = arr.reduce((ac , curr) => {
    return ac + curr * curr;
} , 0);

console.log(res);