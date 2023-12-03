function fun() {
    console.log(x);
    let x = 10;
    console.log(x);
}
function gun() {
    console.log(x);     //Temporal dead zone
    let x = 10;
    console.log(x);
}

fun();
gun();