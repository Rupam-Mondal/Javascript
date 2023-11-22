const array = [1 , 2 , 3 , 4 , 5]
const element = 5
let left = 0
let right = array.length - 1
while(left <= right){
    let mid = Math.floor(left + (right - left) / 2);
    if(array[mid] == element){
        console.log(mid);
        break;
    }
    else if(array[mid] > element){
        right = mid - 1;
    }
    else{
        left = mid + 1;
    }
}