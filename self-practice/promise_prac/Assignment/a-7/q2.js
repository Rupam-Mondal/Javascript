function retryPromise(n) { // n number of try
    return new Promise((res , rej) => {
        for(let i = 0 ; i < n ; i++){
            let num = 4;
            if (num < 5) {
                res(num);
            }
            if(i == n - 1){
                rej(num)
            }
            else{
                continue;
            }
        }
    })
}


retryPromise(10000000).then((value) => {
    console.log("Promise resolved " , value);
} , (value) => {
    console.log("Promise failed " , value);
});