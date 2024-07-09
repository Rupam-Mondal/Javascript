//Object literals

const obj = {
    name : "Rupam",
    Gender : "Male",
    greet : function (){
        console.log("Hello")
    }
}

obj.greet()

//Object constructor
const obj1 = new Object()
obj1.Name = "Rupam"
obj1.greet = () => {
    console.log("Hello")
}

obj1.greet()

//Function constructor
function person(name , age){
    this.name = name
    this.age = age
    this.greet = () => {
        console.log("Hello")
    }
}

const obj2 = new person("Rupam" , 20)
obj.greet()

//By creating class

class Person{
    constructor(name , age){
        this.name = name
        this.age = age
    }

    greet() {
        console.log(this.name)
    }
}

const obj4 = new Person("Rupam" , 20)
obj4.greet()

// Object.create()

const proto = {
    greet() {
        console.log(`This is ${this.name}`)
    }
}

const obj5 = Object.create(proto)

obj5.name = "Rupam"
obj5.age = 12
obj5.greet()