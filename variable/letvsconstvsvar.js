//major diff btw let ,const and var is around scoping mechanism.

//let and const support block scope if block is not present then global scope.
//var support functional support and if func is not presnet then global scope.

//let and scope support tdz.
//var does not support this type of thing.

//diff etween let and const.
//re assignment is not possible in const but not for let.

function name1() {
    const obj = {x : 10 , y : 20};
    obj = {z : 50} // not allowed bacause we are changing the reference
    console.log(obj);
}
name1()
function opjectval() {
    const obj = {x : 10 , y : 20}
    console.log(obj);
    obj.x = 50;   // it is completely okay because we are updating the inside value not the reference
    console.log(obj);
}
opjectval();