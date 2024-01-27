function downloader(url) {
    console.log("File downloading started");
    return new Promise((res , rej) => {
        setTimeout(() => {
            res("Downloaded");
        } , 4000);
    })
}

function writeFile(data) {
    console.log("Wrinting started");
    return new Promise((res , rej) => {
        setTimeout(() => {
            res("File written successfully");
        } , 2000);
    })
}

function uploadFile(fileName, newUrl) {
    console.log("Uploading started");
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("File updated successfully");
        }, 3000);
    }); 
}

const pr = downloader("www.google.com");
const pr1 = pr.then((data) => {
    console.log(data);
    return writeFile(data);
});

const pr2 = pr1.then((data) => {
    console.log(data);
    return uploadFile("Something.txt" , "www.youtube.com");
}).then((data) => {
    console.log(data);
})