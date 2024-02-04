const obj = {
    x: 10,
    y: 20,

    display: function () {
        console.log(`${this.x} and ${this.y}`);


        const inner = () => {
            console.log(`${this.x} and ${this.y}`);
        }
        inner();
    }
}

obj.display(); // obj is calling display
//obj is your callsite