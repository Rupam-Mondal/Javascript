// If +0 and -0 and 0 when used with equality operators always give the ans as true,
// how can you identify whether the sign of the 0 is + or - ? 
// So write a function that can compare 0 and -0 and if user passes 0 and -0 then it returns false
// And write function getSign() which takes a number and tells you whether it is pos or neg



//how can i compare +0 and -0

function checker(a , b) {
    return a / b;
}


if(checker(2 , -0) == Infinity){
    console.log("This is possitive zero");
}
else{
    console.log("This is negetive zero");
}