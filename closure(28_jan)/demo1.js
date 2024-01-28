function f() {
    let i = 0
    setTimeout(() => {
        i++;
        console.log(i);;
    } , 3000);
}


f(); //before 3 sec the function is being shut down still how we are accessing the i

//so this phenomena is know as closure