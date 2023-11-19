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

let balance =100
if(balance >= 100)
    console.log(`${balance}`),
    console.log("Hi")

//build a rating system for pizzahat
let star = "6"
star = parseInt(star)
if(star == 1){
    console.log("Poor")
}
else if(star == 2){
    console.log("emn , ok")
}
else if(star == 3){
    console.log("Average")
}
else if(star == 4){
    console.log("Cool")
}
else if(star == 5){
    console.log("Great")
}
else if(star == 6){
    console.log("Awesome")
}
else if(star == 7){
    console.log("Nailed it")
}


//login system

//falsy values
/*


false
0       (-0 and BigInt 0n are also falsy values)
""
null
undefined
NaN


*/

const email = "Rupam@gmail.com"
if(email){
    console.log("Pls enter your password")
}
else{
    console.log("Enter your email")
}



//if user provides email and password  then allow login else ask for it.
const email1 = "Rupam@gmail.com"
const password = "abc"
if(email && password){
    console.log("Logged in");
}
else{
    console.log("Enter email and password")
}
// allow user to sign in with github or google
const githubLoginToken = ""
const googleLoginToken = ""
if(githubLoginToken || googleLoginToken){
    console.log("Logged in");
}
else{
    console.log("pls login again");
}

let age = 15
if(age >= 18){
    console.log("You get driving license");
}
else{
    console.log("Not possible");
}

const ans = age >= 18 ? true : age >=16 ? "You will get a learner license" : "No chance man";    // (nested)ternary opertor
console.log(ans);

