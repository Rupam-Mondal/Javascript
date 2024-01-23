const promiseone = new Promise(function(resolve , reject){
    //Do an async task
    //like - DB calls , cryptography , network call like that

    setTimeout(function(){
        console.log("Async task is completed");
        resolve();// it is important to write this to connect with then
    } , 1000)
});


promiseone.then(function(){
    console.log("Promise consumed");
})


new Promise((resolve , reject) => {
    setTimeout(function() {
        console.log("Async task 2");
        resolve();
    })
} , 1000).then(function(){
    console.log("Async 2 resolved");
})


const promise3 = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username : "Rupam" , email : "example@gmail.com"})
    } , 1000)
})

promise3.then(function(op){
    console.log(op);
})