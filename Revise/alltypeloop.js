let num = 0
for(let i = 0 ; i < 5 ; i++){
    num = num + 1
}
console.log(num)

while(num > 0){
    console.log(num)
    num--
}

do{
    num++
}while(num < 5);
console.log(num)

// for in loop
// for(key in object){

// }

const person = {
    name : "Rupam",
    age : 20,
    Gender : "Male"
}

console.log(person["name"])

// console.log(person)
for(let i in person){
    console.log(i + ': ' + person[i])
}

// for .. of loop

const array = [1 , 2, 3]
for(let a of array){
    console.log(a)
}

// for each loop

array.forEach((number , index , a) => {
    number = number * 2
    a[index] = number
})

console.log(array);