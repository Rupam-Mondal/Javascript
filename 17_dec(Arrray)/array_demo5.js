//slice return a copy
// if you want congious segment of array then we use slice
//arr = [10 , 20 , 30 , 40]
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

let arr = [10 , 20 ,30 , 40 , 50];
console.log(arr.slice(2 , 4)); // last index is exclusive

console.log(arr.slice(-2 , -1)); // it visualize from last last one is -1 that's all

//let's give - , + together
console.log(); // a empty array


//Note
//in this method left traverse is not possible

//read more about slice