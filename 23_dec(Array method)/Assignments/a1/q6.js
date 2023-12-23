const arrayLike = {length : 5}
const newArray = Array.from(arrayLike , (_ , i) => i);
console.log(newArray);