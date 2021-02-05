var once = (function(fn, context) {
    var result;

    return function() {
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }

        return result;
    };
})


// function add(a, b) {
//     return a + b;
// }
// const onceAdd = once(add);
// console.log(onceAdd(1, 2)); // 3
// console.log(onceAdd(2, 2)); // 3