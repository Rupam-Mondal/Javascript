function processarray(array , fn) {
    for (let i = 0; i < array.length; i++) {
        array[i] = fn(array[i]);
    }
    console.log(array);
}

processarray([2 , 3 , 1 , 5] , function cube(num) {
    return num * num * num;
})