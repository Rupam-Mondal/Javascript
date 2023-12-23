let sum = 0;
const number = [1 , 2 , 3 , 4 , 5];
number.forEach((num , index) => {
    if(index % 2 == 0) sum = sum + num;
});

console.log(sum);