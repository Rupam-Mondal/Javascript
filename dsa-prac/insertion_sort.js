function insertion_sort(arr) {
    for(let i = 1 ; i < arr.length ; i++){
        let key = arr[i];
        let j;
        for(j = i - 1 ; j >= 0 ; j--){
            if(arr[j] > key){
                arr[j + 1] = arr[j];
            }
            else{
                break;
            }
        }
        arr[j + 1] = key;
    }
}
const arr = [5 , 4 , 3 , 10 , 11 , 2];
insertion_sort(arr);
console.log(arr);