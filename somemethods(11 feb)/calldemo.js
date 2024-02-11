const player = {
    firstname: 'Virat',
    lastName: 'Kohli'
}

const details = function (x , y) {
    console.log(this.firstname);
}

details.call(player , 10 , 10);

//first argument is the object you wanna bind this keyword
//others are the arguments of details function same happens with bind