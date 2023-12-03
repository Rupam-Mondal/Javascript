var teacher = "Rupam"; // global scope

function fun() {
    var teacher = "Anurag"; // fun scope
    console.log("Hello ," , teacher);
}

function gun() {
    var student = "Karthik";
    console.log("Welcome to the class", student , teacher); //gun scope
}

fun();
gun();