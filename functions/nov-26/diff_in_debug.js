const isEvenorodd = function process(num) {
    // console.trace("Trace of the function calling") // this gives us the the sequence of func calling
    return num % 2 == 0;
}

const namedFunction = function exec() {
    const res = isEvenorodd(10);
}

const anonymousFunction = function exec() {
    const res = isEvenorodd(11);
}
const result = namedFunction()
console.log();