//if we have an array empty or having some values we can add more values to it

let arr = [1 ,2 , 3,4 ,5 ,6]
console.log(arr);

arr.push(10);// add element at the end of array
console.log(arr);

arr.unshift(-1);
console.log(arr); // -1 is added to the first index of array


arr.shift(); //delete first index elements
console.log(arr);