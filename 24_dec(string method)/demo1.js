const result = eval("5 + 4");

console.log(result);

let x = 10;
let y = 20;

eval(`x = ${y}`);
console.log(x , y);

//never use eval
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval