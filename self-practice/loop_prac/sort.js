const array = [2 , 5 , 1 , 0 , 4]
let swapped;
for(let i = 0 ; i < 5 ; i++){
    swapped = 0;
    for(let j = i + 1 ; j < 5 ; j++){
        if(array[i] > array[j]){
            let t = array[i];
            array[i] = array[j];
            array[j] = t;
            swapped = 1;
        }
    }
    if(!swapped){
        break;
    }
}
console.log(array);