const arr = [
    {properties : 'a' , value : 8},
    {properties : 'A' , value : 90},
    {properties : 'b' , value : 10},
    {properties : 'c' , value : 60},
    {properties : 'a' , value : 120}
]

const res = arr.filter((a) => {return a.properties == 'a' || a.properties == 'A'}).reduce((ac , curr)=>{return ac + curr.value} , 0);
console.log(res);