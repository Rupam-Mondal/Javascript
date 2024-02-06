function fetchData(url) {
    console.log("Fetching from " , url);
    return new Promise((res , rej) => {
        console.log("Data fetched successfully");
        res([2 , -3 , 5 , 6]);
    } , 2000);
}

function analyzeData(arr) {
    console.log("Analizing data");
    return new Promise((res , rej) => {
        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i] < 0){
                rej("There is negetive value not possible for further operation");
            }
        }
        let sum = 0;
        let avg = 0;
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        avg = sum / arr.length;
        res({Sum : sum , Average : avg});
    });
}
const ans = fetchData("WWW.razopay.com");
ans.then((value) => {
    return analyzeData(value);
}).then((value) => {
    console.log(value);
} , (value) => {
    console.log(value);
})