//what is the diff btn == and ===


console.log(11 == "11"); //in this case type coercion happens
console.log(11 === "11"); // in this case type coercion does not happen

const x = {a : 10 , toString : () =>{return " Hello brother"}}
console.log("Rupam" + x);