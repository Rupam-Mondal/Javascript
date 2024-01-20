//this is a example of synchronous programming

console.log("Hey bro");

console.log("Starting to excecute");

for(let i = 0 ; i < 1000000000000 ; i++){ //as it is native part of js it will be 
                                        //executed in main thread that's why it is blocking
    //some time taking steps
}

console.log("End");