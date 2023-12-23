function customMap(fn , array) {
    const arr = Array(array.length);
    for(let i = 0 ; i < array.length ; i++){
        arr[i] = fn(array[i]);
    }
    return arr;
}

const arr = [1 , 2 , 3 , 4 , 5];

const res = customMap((a) => {
    return a * a;
} , arr);

console.log(res);
console.log(arr);