"use strict";

function greet() {
    var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Hello";
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Friend ";
}

//код на ES5
/*function sum() {
    var sum = 0;
    Array.prototype.forEach.call(arguments, function (value) {
        sun+=sum;
    });
    console.log(sum);
}*/

//код на ES6

function sum() {

    var sum = 0;

    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    values.forEach(function (value) {
        sum += value;
    });
    console.log(sum);
}

//с использованием reduce

function sumRed() {
    for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        values[_key2] = arguments[_key2];
    }

    console.log(values.reduce(function (prev, curr) {
        return prev + curr;
    }));
}

sum(5, 7, 613, 45);
sumRed(5, 7, 613, 45);