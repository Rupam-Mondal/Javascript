const player = {
    firstname: 'Virat',
    lastName: 'Kohli'
}

const details = function (x, y) {
    console.log(x + y);
    console.log(this.firstname);
}

details.apply(player, [10 , 20]); // it works same but it just takes 
//an array