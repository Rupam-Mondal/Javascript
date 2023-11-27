function factorial(p) {
    let fact = 1
    for(let i = 1 ; i <= p ; i++){
        fact = fact * i;
    }
    console.log(`The factorial is = ${fact}`);
}


factorial(5)