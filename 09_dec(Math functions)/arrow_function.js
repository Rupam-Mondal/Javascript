//lamda functions --> Arrow function () => {}

function processarray(array , fn) { //fn is function passed as arguments
    for(let i = 0 ; i < array.length ; i++){
        console.log("Index" , i , "Value" , array[i] , "after going to funtion" , fn(array[i]));
    }
}

processarray([2 , 1 , 3 , 4] , (x) => {return x * x * x;}); 
// if you have only one linein that case you can also remove return statement 
//as well as curle bracies also semicolon. also you can remove parameter parenthesis
//if there is one parameter