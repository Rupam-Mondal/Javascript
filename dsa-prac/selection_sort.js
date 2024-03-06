function selection(arr) {
    for(let i = 0 ; i < arr.length - 1 ; i++){
        let min_index = i;
        for(let j = i + 1 ; j < arr.length ; j++){
            if(arr[j] < arr[min_index]){
                min_index = j;
            }
        }
        if(min_index != i){
            let temp = arr[min_index];
            arr[min_index] = arr[i];
            arr[i] = temp;
        }
    }
}
const arr = [4, 6, 2, 1, 10, 9]
selection(arr);
console.log(arr);