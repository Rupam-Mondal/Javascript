class product {
    //propertise
    // name;
    // price;
    // description;   //in this case also it will not give error
    // image;
    constructor( n, p , d , i) {
        console.log("Before allocation " , this);
        this.name = n
        this.price = p;
        this.description = d;
        this.image = i;
    }

    //behavious -> class methods
    buyProduct() {
        console.log("Bought a product");
    }
}

const obj = new product("Iphone" , 100000 , "Good one" , "op"); //helps to allocate
console.log(obj);

const obj1 = new product("samsung", 100000, "Good one", "op"); //helps to allocate
console.log(obj1);