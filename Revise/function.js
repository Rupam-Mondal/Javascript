function car(){
    console.log("This is a car");
}

car()

const fruit = function(){
    console.log("This is fruit");
}

fruit()

const arrow = (a , b) => {
    console.log(a + b)
}

arrow(2 , 3);

(function (){
    console.log("This a IIFE");
})();

class person {
    constructor(name, age) {
        this.name = name;
        console.log(this.name);
    }
}

const obj = new person("Rupam" , 23)

function* genarator(){
    //Something
    yield 1;
    yield 2;
    yield 3;
}

const gen = genarator()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())


// Genarator function

function* fibo(){
    prev = 0
    curr = 1
    while(true){
        yield prev
        let c = prev + curr
        prev = curr
        curr = c
    }
}
const gen1 = fibo()
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);


console.log("factorials")
function* fact(){
    let val = 1
    let i = 1

    while(true){
        val = val * i
        yield val
        i++
    }
}


const answer = fact()
console.log(answer.next().value)
console.log(answer.next().value)

console.log(answer.next().value)
console.log(answer.next().value)
console.log(answer.next().value)

function Something(callback){
    console.log("This is main function")
    callback()
}

Something(() => {
    console.log("This is a callback")
}) 

function fact(n){
    if(n == 0 || n == 1) return n
    return n * fact(n - 1)
}