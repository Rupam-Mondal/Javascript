const arr = [1 , 2 , 3, 4 , 5]
arr.reverse();// actually reverse whole array
console.log(arr);



//join method
let result = arr.join(";") // you can chnage separator

console.log(result);

//delete operator

let arr4 = [33 , 222 , 444 , 555 , 66]
delete arr4[2]; // It removes the value only index is still present 
console.log(arr4);

//splice method
let arr3 = [8 ,9 , 7 , 5 , 2 , 1];
console.log(arr3.splice(1 , 3)); // return the portion of array you want from index 1 remove three element after that
console.log(arr3);