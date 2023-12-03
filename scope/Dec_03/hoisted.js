//imports to the top of their scope, prior to execution of the code.

greet()

function greet() {
    console.log("Hello brother"); //hoisted to the top of the code
}

//for function expression you will great error


greet1()
const greet1 = function(){
    console.log("Hello");
}