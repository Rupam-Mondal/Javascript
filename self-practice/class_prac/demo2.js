const obj = {
    x : 10,
    y : 20,
    
    display : function op() {
        console.log(`${this.x} and ${this.y}`);
    }
}

const obj1 = {
    x: 10,
    y: 20,

    display: () => {
        console.log(`${this.x} and ${this.y}`);
    }
}

this.x = 20;



obj1.display();