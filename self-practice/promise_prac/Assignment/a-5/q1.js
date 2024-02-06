function makeTea() {
    console.log("Tea making started");
    return new Promise((res , rej) => {
        setTimeout(() => {
            
            res("Tea is ready");
        } , 2000);
    })
}

const ans = makeTea();
ans.then((value) => {console.log(value);} , (value) => {console.log(value);});