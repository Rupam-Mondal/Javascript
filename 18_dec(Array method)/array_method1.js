const arr = [2 , 3 , 1 , 4 , 5]

const res = arr.map((a) => { // map returns something , it returns array
    return a * a;
})

console.log(res);
console.log(arr);       //original array is not changing
/**
 * content of the array
 * it returns every element in a array
 */

//use case of for each
const products = [{id : 1 , price: 2000} , {id : 2 , price: 2000}]
const modified = products.map((product) => {
    return {id : product.id}
})
console.log(modified);