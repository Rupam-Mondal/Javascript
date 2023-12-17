//how can we create array in js

const x = [];

//another process
const array = Array(15);
console.log(array);

//another way to initialize a array with all zeros

const array1 = Array(6).fill(1) // initialize all index with values
console.log(array1);
//another way
const array2 = Array(6).fill(8 , 1 , 4) // [1 , 4)
console.log(array2);