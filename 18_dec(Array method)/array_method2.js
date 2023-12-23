const arr = [1 , 2 , 3 , 4 , 5 , 6 , 7];

const oddelements = arr.filter((a) => {
    return a % 2 != 0; // if you do not return any thing then it will return a empty array
})

console.log(oddelements); // true values will go to new array