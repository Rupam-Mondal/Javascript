function pallindrome(s) {
    for(let i = 0 ; i < s.length ; i++){
        if(s.charAt(i) != s.charAt(s.length - i - 1)){
            return false;
        }
    }
    return true;
}

console.log(pallindrome("koke"));