class product{
    //propertise
    name;
    price;
    description;
    image;
    constructor(){
        console.log("Creating a object");
        //return {x : "Rupam"}
    }

    //behavious -> class methods
    buyProduct(){
        console.log("Bought a product");
    }
}

const obj = new product();
console.log(obj);