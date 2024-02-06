// function fetchSequestially(arr) {
//     console.log("Sequestially fethcing started");
//     const pr = new Promise((res , rej) => {
//         console.log("Fetch started from " , arr[0]);
//         setTimeout(() => {
//             console.log("Fetch succesfully completed");
//             res();
//         }, Math.floor(Math.random() * 4000) + 1000);
//     });

//     pr.then(() => {
//         return new Promise((res, rej) => {
//             console.log("Fetch started from ", arr[1]);
//             setTimeout((res, rej) => {
//                 console.log("Fetch succesfully completed");
//             }, Math.floor(Math.random() * 4000) + 1000);
//         });
//     }).then(() => {
//         return new Promise((res, rej) => {
//             console.log("Fetch started from ", arr[2]);
//             setTimeout((res, rej) => {
//                 console.log("Fetch succesfully completed");
            
//             }, Math.floor(Math.random() * 4000) + 1000);
//         });
//     })
// }



function fetch(url) {
    console.log("Fetching started from " , url);
    return new Promise((res , rej) => {
        setTimeout(() => {
            console.log("Fetched completed");
            res();
        }, Math.floor(Math.random() * 4000) + 1000);
    })
}
function fetchSequestially(arr) {
    console.log("Fetching started");
    const pr1 = fetch(arr[0]);
    pr1.then(() => {
        return fetch(arr[1]);
    }).then(() => {
        return fetch(arr[2]);
    }).then(() => {
        
    })
}
const arr = [
    "www.google.com",
    "www.flipkart.com",
    "www.amazon.com"
]
fetchSequestially(arr);