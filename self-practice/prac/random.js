//x = 20 && y = 40

function randomGenerator(x , y) {
    return Math.floor(Math.random() * (y - x + 1) + x);
}
console.log(randomGenerator(20 , 40));