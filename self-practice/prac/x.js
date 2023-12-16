let n = 5

for(let i = 0 ; i < n ; i++){
    for(let j = 0 ; j < n ; j++){
        if(i == j){
            process.stdout.write("* ");
        }
        else if(i + j == n - 1){
            process.stdout.write("* ");
        }
        else{
            process.stdout.write(" ");
        }
    }
    console.log();
}
console.log();

for(let i = 0 ; i < 7 ; i++){
    for(let j = 0 ; j < 7 ; j++){
        if(i == 0 || i == 6 || j == 3){
            process.stdout.write("*");
        }
        else{
            process.stdout.write(" ");
        }
    }

    process.stdout.write("       ");

    for(let j = 0 ; j < 7 ; j++){
        if(j == 0 || i == 6){
            process.stdout.write("*");
        }
        else{
            process.stdout.write(" ");
        }
    }

    process.stdout.write(" ");

    for(let j = 0 ; j < 7 ; j++){
        if(i == 0 || i == 6 || j == 0 || j == 6){
            process.stdout.write("*");
        }
        else{
            process.stdout.write(" ");
        }
    }
    console.log();
}