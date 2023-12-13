function cal() {
    return 2 / 0;
}

const ans = cal();
console.log(ans);
console.log(Infinity == -Infinity);
console.log(2/0);
console.log(2 / -0);
console.log(Infinity == Infinity);
console.log(Infinity == -Infinity);

const a = 0
const b = -0
const c = +0

console.log(a == b);
console.log(b);

//what us the diff btn == and ===

console.log(11 == "11"); // coercion --> type conversion
console.log(11 === "11"); // this particular statement is satisfyuing our expectation