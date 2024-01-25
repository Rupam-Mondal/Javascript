console.log(Math.random()); // by default it return real number btw 0 to 1

//you have to genarate a random number btw x and y
//x is lower limit and y is higher limit

function randomInrange(x , y) {
    return Math.floor(Math.random() * (y - x + 1) + x);
}
console.log(randomInrange(10 , 20));