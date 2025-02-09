// Given a function fn and a time in milliseconds t, return a debounced version of that function.

// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

var debounce = function (fn, t) {
    let timeout = null;
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, t)

    }
};
