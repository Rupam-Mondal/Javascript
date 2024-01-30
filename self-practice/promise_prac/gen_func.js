function* gen(){
    console.log("Line number 1");
    console.log("Line number 1");
    console.log("Line number 1");
    yield 1;

    console.log("Line number 2");
    yield 2;

    console.log("Line number 3");
    yield 3;

    console.log("Line number 4");
    yield 4;

    console.log("Line number 5");
    yield 5;

    console.log("Line number 6");
}
const x = gen();
console.log(x.next());
console.log(x.next());