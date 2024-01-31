var once = function (fn) {
    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            called = true;
            result = fn.apply(this, args);
            return result;
        } else {
            return undefined;
        }
    };
};