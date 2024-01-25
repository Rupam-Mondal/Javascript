// new <-- this key word helps to initiate a object


let pr = new Promise((res , rej) => {
    let random =Math.random();
    if(random < 0.5){
        res(random);
    }
    else{
        rej(random);
    }
});


pr.then((value) => {
    console.log("Promise fullfilled " , value);
} , (value) => {
    console.log("Promise rejcted " , value);
});