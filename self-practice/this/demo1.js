const obj = {
    x : 10,
    y : 20,

    display : function () {
        console.log(`${this.x} and ${this.y}`); // as it is not a arrow function it is not referingb to
        //global scope..it just refers to call site..and in this case the call site is object..
    }
}

obj.display();