//own custom forech

function Foreach(array , fn) {
    for(let i = 0 ; i < 5 ; i++){
        array[i] = fn(array[i])
    }
    return array;
}

console.log(Foreach([1 , 2 ,3 , 4 , 5] ,  (a) => {
    return a * a;
}));