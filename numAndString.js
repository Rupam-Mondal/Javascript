const firstName = 'Hello'
const lastName = "HC"

console.log(firstName +' '+lastName)
console.log(`My firstname is ${firstName} and my lastname is ${lastName}`)

//behind the scene
const username = new String('Rupam')
console.log(username[0]) //indiavidual characters
console.log(username.length)
console.log(username.substring(0 , 3))

//there are lots of method of string you can go for mdn
let email = "Rupam@gmail.com"
console.log(email.replace("Ru" , "Baklol"))
console.log(email.includes("R"))