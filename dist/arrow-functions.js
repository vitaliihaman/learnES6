'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by Vetal_Haman on 20.05.2017.
 */

/*function add(x,y) {
 return x+y;
 }

 console.log(add(2,5));*/

//Та же функция только стрелочная

var add = function add(x, y) {
    return x + y;
};

console.log(add(2, 5));
console.log(typeof add === 'undefined' ? 'undefined' : _typeof(add));

var square = function square(x) {
    return x * x;
}; // если функ. принимает только 1 парам. можно без скобок
console.log(square(5));

var giveMeAnswer = function giveMeAnswer() {
    return 42;
};
console.log(giveMeAnswer());

var log = function log() {
    return console.log("Logging message");
};

var multiply = function multiply(x, y) {
    var result = x * y;
    return result;
};

console.log(multiply(5, 7));

var getPersonEs5 = function getPersonEs5() {
    return { name: 'John' };
};

var getPersonEs6 = function getPersonEs6() {
    return { name: 'John' };
};
// Или

var getPersonEs6_2 = function getPersonEs6_2() {
    return { name: "John" };
};

console.log(getPersonEs6());

(function () {
    console.log('IIFE function ES5 ');
})();

// тоже самое в ES6

(function () {
    return console.log('IIFE function ES6');
})();

// Практическое применение стрелочных функций:

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;

//ES5
numbers.forEach(function (num) {
    sum += num;
});

//ES6
numbers.forEach(function (num) {
    return sum += num;
});

var squared = numbers.map(function (n) {
    return n * n;
}); // вернет массив в котором каждый элемент массива возведен в квадрат

//Работа стрелочных функций с объектами:

var person = {
    name: 'Bob',
    //ES5
    greetES5: function greetES5() {
        window.setTimeout(function () {
            // setTimeout является методом window(для наглядности написал)
            console.log('Hello my name is ' + this.name); // this.name не найдет! для решения проблемы нужно привязать контекст var self = this;
            console.log(this);
        }, 2000); //this будет указывать на window т.к функц внутр функции

        console.log('Hello my name is ' + this.name);
        console.log(this); // Указывает на person(обычная ES5 функция - метод ссылается на сам обьект в котором обьявлена)
    },

    //ES6
    greetES6: function greetES6() {
        var _this = this;

        window.setTimeout(function () {
            console.log('Hello my name is ' + _this.name + " in 2 seconds later");
            console.log(_this); // контекстом для стрелочной функции будет служить объект person
        }, 2000);

        console.log('Hello my name is ' + this.name);
        console.log(this); // будет указывать на window(this берется в стрелочных функциях из контекста), т.к контекстом объекта person и всех его свойств и методов будет объект window.
    }

};