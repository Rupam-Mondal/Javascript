const obj = {
    x: 10,
    y: 20,

    display: () => {
        console.log(`${this.x} and ${this.y}`); // in this case it is refering to the 
        //global scope through lexical scoping as this.x and this.y is not present in global scope that
        //is the reason it is printing undef and undef..
    }
}

obj.display();