function createsyncPromise() {
    return new Promise((res, rej) => {
        for(let i = 0 ; i < 100000 ; i++){
            //blocking piece of code
        }
        res(100);
    });
}


const responce = createsyncPromise();