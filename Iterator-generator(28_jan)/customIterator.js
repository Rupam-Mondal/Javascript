/**
 * Three propertise
 * value :- which value we are pointing at
 * done :- if more value can fetched or not
 * next :- it is a function that return a object with value and done
*/

function iterator(arr) {
    let idx = 0;

    function next() {
        if(idx == arr.lenght){
            return {value : undef , done : true};
        }

        const ele = arr[idx];
        idx++;
        return { value: ele , done: false };
    }

    return {next};
}


const x = iterator([1 ,2  ,3  ,4 ,5 , 6]);

console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());