let temp = -2

if(temp > 0){
    console.log("It is really cold");
}
else{
    console.log("It is really hot");
}

let score = 100
let life = 3
let bullets = 1000
if(score > 99){
    console.log("Life up")
    score = score - 100;
    life++;
    let bullets = 2000
    //if we printf here we will get 2000 but if we print bulletr ouside then we will get
    //1000 because that value is in the outside of the scope we can define two same variable in difff scope
    console.log(`${bullets}`)
}

else{
    console.log("No life up")
}

console.log(`${life}  ${bullets}`)

