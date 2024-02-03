function downloader(url) {
    return new Promise((res, rej) => {
        console.log("Started downloading from", url);
        setTimeout(() => {
            console.log("Download completed");
            let downloadedData = "Dummy content";
            rej(downloadedData);
        }, 4000);
    });
}

function writeFile(data) {
    return new Promise((res, rej) => {
        console.log("Started writing data", data);
        setTimeout(() => {
            console.log("Writing completed");
            // with the written content, whatever you want to do you can do
            let fileName = "Dummy.txt";
            res(fileName); // cb -> any callback
        }, 2000);
    });
}

function uploadFile(fileName, newUrl) {
    return new Promise((res, rej) => {
        console.log("Started uploading file", fileName, "on the url", newUrl);
        setTimeout(() => {
            console.log("Upload completed");
            // with the uploaded content, whatever you want to do you can do
            let uploadResponse = "SUCESSS";
            res(uploadResponse); // cb -> any callback
        }, 3000);
    });
}


async function execute() {
    try {
        const downloadedData = await downloader("www.google.com"); // start a timer in runtime, and returng pending promise
        console.log("Data downloaded is", downloadedData);
        const fileName = await writeFile(downloadedData);
        console.log("File written", fileName);
        const upload = await uploadFile(fileName, "www.drive.google.com");
        console.log("Upload response", upload);
    } catch (error) {
        console.log("error handled");
    }
} // async function always return a promise

console.log("Start");
execute(); //main thread have to clear then only it will go to the function
console.log("End");