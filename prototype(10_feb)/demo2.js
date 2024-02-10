class electronics{
    getCategory(){
        return 'Electronics'
    }
}

class camera extends electronics{
    getSpecs(){
        console.log("Specs of camera ...");
    }
}


const obj = new camera();
obj.getSpecs();
console.log(obj.getCategory()); // internally it is prototype chaining
console.log(obj.toString());