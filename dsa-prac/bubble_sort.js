function bubble(arr) {
    for(let i = 0 ; i < arr.length - 1 ; i++){
        for(let j = 0 ; j < arr.length - i - 1 ; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
const arr = [4 , 5 , 3 , 2 , 10 , 9];
bubble(arr);
console.log(arr);