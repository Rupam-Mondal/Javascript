function fun() {
    console.log("Called the function fun");


    return function cleanup() {
        console.log("Cleaning up the resources");
    }
}


const text = fun();
text();