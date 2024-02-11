const player = {
    firstname : 'Virat',
    lastName : 'Kohli'
}

const details = function () {
    console.log(this.firstname);
}

details(); //this will print undef because there is no call site

const newDetails = details.bind(player);
newDetails();