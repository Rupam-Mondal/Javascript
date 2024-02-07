class student{
    name;
    roll;
    sec;
    sub;
    constructor(name , roll , sec , sub){
        this.name = name;
        this.roll = roll;
        this.sec = sec;
        this.sub = sub;
    }
}
const st = new student("Rupam" , 2251146 , "C" , "Operating system");

console.log(st.name);