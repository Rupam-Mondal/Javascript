const cart = [
    {product : "Apple" , price : 2000},
    {product : "App" , price : 2100},
];
const res = cart.reduce((ac , curr) => {
    return ac + curr.price;
} , 0);

console.log(res);