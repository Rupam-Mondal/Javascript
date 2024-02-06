function makeEgg() {
    console.log("Egg making started");
    return new Promise((res , rej) => {
        setTimeout(() => {
            res("Egg is ready to eat");
        } , 4000);
    })
}

function makeToast() {
    console.log("Toast making started");
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Toast making done");
        }, 3000);
    });
}
function makeTea() {
    console.log("Tea making started");
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Tea is ready");
        }, 2000);
    })
}

async function breakfast() {
    console.log("Preparing breakfast...");

    const egg = await makeEgg();
    console.log(egg);

    const toast = await makeToast();
    console.log(toast);

    const tea = await makeTea();
    console.log(tea);


    Promise.all([egg , toast , tea]).then(() => {
        console.log("Breakfirst is ready to eat");
    })
}

breakfast();
