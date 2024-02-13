//Before :-

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function () { // shows the current step
//         alert(this.step);
//     }
// };

//After :-

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // shows the current step
        console.log(this.step);
    }
};

ladder.up().down().showStep(); //you have to return this object from every fucntion so 
//that we can get access after every call