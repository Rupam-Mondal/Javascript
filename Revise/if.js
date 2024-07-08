let temp = 19

if(temp < 20){
    console.log("This is so cold");
}
else if(temp >= 20 && temp <= 40){
    console.log("Hot");
}
else{
    console.log("Something")
}

const githubLoginToken = "Rupam"
const googleLoginToken = ""
if (githubLoginToken || googleLoginToken) {
    console.log("Logged in");
}
else {
    console.log("pls login again");
}

// Ternary operator

a = 5 > 4 ? console.log("Ok"): console.log("Not ok");
console.log(a)