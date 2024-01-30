function* gen() {
    console.log("Start");
    yield 10;

    console.log("middle");

    const x = 10 + (yield 30); // if x.next() the 10 + undefined
                                //if x.next(100) then 10 + 100 = 110 

    console.log(x);

    yield x;
}

const v = gen();
console.log(v.next());
console.log(v.next());
console.log(v.next(100));