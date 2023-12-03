var teacher = "Rupam"; // global scope

function fun() {
    var teacher = "Anurag"; // fun scope
    content = "js";
    //content is not in the fun scope it is in the global scope the method is known as (auto globals)


    console.log("Hello ," , teacher);
}

function gun() {
    var student = "Karthik";
    console.log("Welcome to the class", student , teacher); //gun scope
}

fun();
gun();

console.log(teacher , content);