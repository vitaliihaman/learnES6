function greet(greeting = "Hello", name = "Friend ") {

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

function sum(...values) {

    let sum = 0;

    values.forEach(function (value) {
        sum+= value;
    });
    console.log(sum);
}

//с использованием reduce

function sumRed(...values) {
    console.log(values.reduce(function (prev, curr) {
        return prev + curr
    }));
}

sum(5,7,613,45);
sumRed(5,7,613,45);