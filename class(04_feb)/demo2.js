const obj = {
    x: 10,
    y: 20,

    nested : {
        z : 30,
        y : 22,

        displayInner : function (){
            console.log(`${this.x} and ${this.y}`);
        }
    },
    displayOuter: function () {
        console.log(`${this.x} and ${this.y} and ${this.z}`);
    }
}

obj.displayOuter();
obj.nested.displayInner();