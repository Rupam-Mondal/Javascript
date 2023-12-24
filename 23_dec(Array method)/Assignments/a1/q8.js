const numbers = [1  , 2 , 3 , 4 , 5]
const result = numbers.reduce((acc , curr) => {
    if(curr % 2 === 0){
        acc.even.push(curr);
    }
    else{
        acc.odd.push(curr);
    }
    return acc;
} , {odd : [] , even : []});

console.log(result);