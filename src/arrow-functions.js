/**
 * Created by Vetal_Haman on 20.05.2017.
 */

/*function add(x,y) {
 return x+y;
 }

 console.log(add(2,5));*/

//Та же функция только стрелочная

let add = (x, y) => x + y;

console.log(add(2, 5));
console.log(typeof add);

let square = x => x * x; // если функ. принимает только 1 парам. можно без скобок
console.log(square(5));

let giveMeAnswer = () => 42;
console.log(giveMeAnswer());

let log = () => console.log("Logging message");

let multiply = (x, y) => {
    let result = x * y;
    return result;
};

console.log(multiply(5, 7));

let getPersonEs5 = function () {
    return {name: 'John'}
};

let getPersonEs6 = () => {
    return {name: 'John'}
};
// Или

let getPersonEs6_2 = () =>({name: "John"});

console.log(getPersonEs6());

(function () {
    console.log('IIFE function ES5 ');
})();

// тоже самое в ES6

(() => console.log('IIFE function ES6'))();


// Практическое применение стрелочных функций:

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

//ES5
numbers.forEach(function (num) {
    sum += num;
});

//ES6
numbers.forEach(num => sum += num);

let squared = numbers.map(n => n * n); // вернет массив в котором каждый элемент массива возведен в квадрат

//Работа стрелочных функций с объектами:

let person = {
    name: 'Bob',
    //ES5
    greetES5: function () {
        window.setTimeout(function () { // setTimeout является методом window(для наглядности написал)
            console.log('Hello my name is ' + this.name); // this.name не найдет! для решения проблемы нужно привязать контекст var self = this;
            console.log(this);
        }, 2000); //this будет указывать на window т.к функц внутр функции

        console.log('Hello my name is ' + this.name);
        console.log(this); // Указывает на person(обычная ES5 функция - метод ссылается на сам обьект в котором обьявлена)
    },

    //ES6
    greetES6: function () {
        window.setTimeout(() => {
            console.log('Hello my name is ' + this.name + " in 2 seconds later");
            console.log(this); // контекстом для стрелочной функции будет служить объект person
        },2000);

        console.log('Hello my name is ' + this.name);
        console.log(this); // будет указывать на window(this берется в стрелочных функциях из контекста), т.к контекстом объекта person и всех его свойств и методов будет объект window.
    }

};





