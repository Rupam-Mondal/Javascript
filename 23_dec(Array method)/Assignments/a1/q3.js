const arrays = [[1 , 2 , 3] , [4 , 5 , 6] , [7 , 8 , 9]];

const result = arrays.map(arr => arr.filter(num => num % 2 == 0));

console.log(result); // ans => [[2] , [4 , 6] , [8]] (checked before run)