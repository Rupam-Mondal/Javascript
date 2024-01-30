function downloader(url, cb) {
    console.log("Started downloading from url" , url);
    setTimeout(() => {
        console.log("Downloaded");
        let data = "some content";
        cb(data); 
    } , 4000);
}

function writeFile(data, cb) {
    console.log("Started writing from url");
    setTimeout(() => {
        console.log("Writing completed");
        let text = "some text";
        cb(text);
    }, 2000);
}

function uploadFile(fileName, newUrl, cb) {
    console.log("Started uploading " , fileName);
    setTimeout(() => {
        console.log("Upload completed");
        let responce = "success";
        cb(responce);
    }, 3000);
}

console.log("Start the process");

downloader("www.google.com" , (data) => {
    writeFile(data , (text) => {
        uploadFile("Something.txt" , "Youtube.com" , (responce) => {
            console.log(responce);
        })
    })
})
