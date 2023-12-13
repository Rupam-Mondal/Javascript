//diff between == and ===
//https://262.ecma-international.org/10.0/#sec-strict-equality-comparison
//go to this link for better difference



console.log(11 == "11"); // coercion process is being done
console.log(11 === "11"); //no coercion process is being done

const x = {a : 10 , b : 20}
console.log("Rupam" + x); // why this type of behaviour explore + in

console.log(2 == true);