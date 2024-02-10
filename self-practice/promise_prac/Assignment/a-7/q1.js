function fetch1(value) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Data is successfully fetched");
        }, 2000);
    });
}
function fetch2(value) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("Data fecthing failed");
        }, 3000);
    });
}
function fetch3(value) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Data is successfully fetched");
        }, 4000);
    });
}
function fetch4(value) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("Data fecthing failed");
        }, 5000);
    });
}


function fetchMultipleResourses(arr) {
    const obj = {
        successes : [],
        Errors : []
    };
    Promise.allSettled([fetch1(arr[0]) , fetch2(arr[1]) ,fetch3(arr[2]) , fetch4(arr[3])]).then((value) => {
        for(let i = 0 ; i < value.length ; i++){
            if(value[i].status == 'fulfilled'){
                obj.successes.push(value[i]);
            }
            else{
                obj.Errors.push(value[i]);
            }
        }
        console.log(obj);
    })
}


const arr1 = [
    "www.google.com",
    "www.flipkart.com",
    "www.amazon.com",
    "www.zomato.com"
]
fetchMultipleResourses(arr1)