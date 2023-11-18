const user = {
    username : "Rupam",
    age: 20,
    isLoggedin: true,
    tea:["lemon" , "peach",  "ginger"],
    address:{
        city: "Jaipur",
        state: "Rajasthan"
    }

}
//if the there is a space you can not access by dot notation you have to apply second way
//two ways to acess that
console.log(user.username)
console.log(user["age"])
console.log(user.address.state)
console.log(user)

console.log(Object.keys(user))

//delete
delete user.username
//hasOwnPropery learn about it