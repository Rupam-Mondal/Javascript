function downloader(url) {
    return new Promise((res, rej) => {
        console.log("Started downloading from", url);
        setTimeout(() => {
            console.log("Download completed");
            let downloadedData = "Dummy content";
            res(downloadedData);
        }, 4000);
    })
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
    })

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
function doafter(value) {
    const f = gen.next(value);
    if (f.done == true) return;
    f.value.then(doafter);
}

function* steps() {
    const downloadedData = yield downloader("www.google.com");
    console.log("Data downloaded is " , downloadedData);

    const fileName = yield writeFile(downloadedData);
    console.log("File written", fileName);

    const upload = yield uploadFile(fileName, "www.drive.google.com");
    console.log("Upload response", upload);
}

const gen = steps();

const x = gen.next();

x.value.then(doafter);