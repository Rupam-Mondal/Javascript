const arr = [1 , 2 , 3 , 4 , 5];


function filterSelf(arr , fn) {
    const arr1 = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(fn(arr[i]) == true){
            arr1.push(arr[i]);
        }
        else{
            continue;
        }
    }
    return arr1;
}

console.log(filterSelf(arr , a => a % 2 != 0));