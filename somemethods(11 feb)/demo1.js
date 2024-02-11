const player = {
    firstname : 'Virat',
    lastName : 'Kohli'
}

const details = function (x , y) {
    console.log(x + y);
    console.log(this.firstname);
}

details(); //this will print undef because there is no call site

const newDetails = details.bind(player , 10 , 2);
newDetails();