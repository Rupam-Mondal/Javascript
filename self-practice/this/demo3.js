const obj = {
    x : 20,
    y : 30,
    display : function () {
        console.log(`${this.x} and ${this.y}`); // as it is a normal function then it is refering to
        //call site....
        const inner = () => {
            console.log(`${this.x} and ${this.y}`); // through lexical scoping it is using scope
            //of just the upper function
        }
        inner();
    }
}

obj.display();