function customIterator(arr) {
    let idx = 0;
    function next() {
        if(idx == arr.length){
            return {
                value : undefined,
                done: true
            }
        }
        let ele = arr[idx];
        idx++;
        return {
            value: ele,
            done: false
        }
    }

    return {next};
}

let ans = customIterator([1 , 2 , 3]);
console.log(ans.next());
console.log(ans.next());
console.log(ans.next());
console.log(ans.next());