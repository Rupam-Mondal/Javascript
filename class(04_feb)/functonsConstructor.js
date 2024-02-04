function product(n , p , d , i) {
    this.name = n
    this.price = p;
    this.description = d;
    this.image = i;

    return {};
}

const p1 = new product("Iphone" , 10000 , "Apple" , "Imgae");

console.log(p1); // this is old concept before class introduce in js