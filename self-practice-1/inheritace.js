class car{
    fuel(){
        console.log("This take petrol or diseal");
    }
}

class lamborgini extends car{
 // internally it takes help of prototype mechanism
 //
}

const l = new lamborgini();
l.fuel();