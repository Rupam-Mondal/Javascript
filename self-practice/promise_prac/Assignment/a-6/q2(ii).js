
function fetchFromGoogle(url) {
    return new Promise((res , rej) => {
        setTimeout(() => {
            res("Downloaded from ", url);
        } , 2000)
    })
}
function fetchFromFlipkart(url) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Downloaded from ", url);
        }, 2000)
    })
}

function fetchFromAmazon(url) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Downloaded from ", url);
            
        }, 2000)
    })
}

function concurrently(arr) {
    return Promise.all([fetchFromGoogle(arr[0]) , fetchFromFlipkart(arr[1]) , fetchFromAmazon(arr[2])]);
}
const arr = [
    "www.google.com",
    "www.flipkart.com",
    "www.amazon.com"
]

concurrently(arr).then(() => {
    console.log("fetched data successfully");
    console.log(performance.now());
})