const promisefour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // let error = true;
        let error = false;
        if(!error){
            resolve({ username: "Rupam", email: "example@gmail.com" });
        }
        else{
            console.log("Some thuing wrong happened");
        }
    }, 1000);
});

promisefour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise either resolved or rejected");
})


const promiseFive = new Promise((resolve , reject) => {
    setTimeout(function () {
      // let error = true;
        let error = false;
        if (!error) {
            resolve({ username: "Rupam", password: "123" });
        } else {
            console.log("js went wrong");
        }
    }, 1000);
});


async function consumePromiseFive(){
    const response = await promiseFive;
    console.log(response);
}

consumePromiseFive();