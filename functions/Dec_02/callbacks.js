//A JavaScript callback is a function which is to be executed 
//after another function has finished execution.


function processarray(array , fn) { //fn is function passed as arguments
    for(let i = 0 ; i < array.length ; i++){
        console.log("Index" , i , "Value" , array[i] , "after going to funtion" , fn(array[i]));
    }
}

processarray([2 , 1 , 3 , 4] , function cube(x) {
    return x * x * x;
})