## Key Concepts

### Prototype
Every JavaScript object has an internal link to another object called its prototype.An object's prototype can also have a prototype, and so on, forming a prototype chain.

### Prototype Chain
When accessing a property or method on an object, JavaScript looks up the chain until it finds the property or method, or reaches the end of the chain(null).


```javascript
function Person(name) {
    this.name = name;
}

const p = new Person("Rupam");

p.greet = function() {
    console.log(this.name);
};

p.greet(); // "Rupam"
