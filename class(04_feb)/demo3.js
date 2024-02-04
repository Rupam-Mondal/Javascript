const obj = {
    x: 10,
    y: 20,

    display:() => {
        console.log(`${this.x} and ${this.y}`);
    }
}
this.x = 20;

obj.display(); //for arrow function this works slightly diff
//it goes for this in global;; and in globakl this is defined
//so it will print that value so if you declare explicitly
//then it will priny that value