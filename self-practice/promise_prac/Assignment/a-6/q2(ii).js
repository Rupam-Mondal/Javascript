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