//non primitive
const myarray = [1 , 2 , 3 , 4 , "Rupam"]
const mynewArray = new Array(1 , 2 , 3 , 4 , 5)
console.log(myarray[1])
console.log(myarray.length)
mynewArray[mynewArray.length] = "Rupam" // you can use push method
//myarray.unshift will shift evvery elemenet by one index that may cause data lose
console.log(mynewArray)
mynewArray.push("Hi man")
console.log(mynewArray)
console.log(mynewArray.join("-"))


const arr = [1 , 2 , 3 , 4 , 'w' , "Rupam"]
console.log(typeof arr);// object will be the output
console.log(arr);
