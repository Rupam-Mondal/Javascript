class calculate{
    add(real1, i1, real2, i2) {
        const realans = real1 + real2;
        const ians = i1 + i2;
        console.log(`Addition is = ${realans} + i${ians}`);
    }
    mul(real1, i1, real2, i2){
        const realans = (real1 * real2) - (i1 * i2);
        const ians = (real1*i2) + (real2*i1);
        console.log(`Multiplicxation is = ${realans} + i${ians}`);
    }
}

const obj = new calculate();
obj.add(2 , 3 , 4 , 1);
obj.mul(2 , 3 , 4 , 1);