/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    let pr1val = 0;
    let pr2val = 0;
    await promise1.then((value) => {
        pr1val = value;
    })
    await promise2.then((value) => {
        pr2val = value;
    })
    return new Promise((res, rej) => {
        res(pr1val + pr2val);
    })
};