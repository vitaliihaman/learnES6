'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by Vetal_Haman on 12.05.2017.
 */

var firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

var person = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sayHello: function sayHello() {
        console.log('Hi my Name ' + this.firstName + ' ' + lastName);
    },


    get fullName() {
        return this.firstName + ' ' + this.lastName; //Геттеры и сеттеры
    },

    set fullName(value) {
        this.firstName = value;
    }
};

var property = 'firstName';
person[property]; //person['firstName'] // Указываем значение свойства уже существующего обьекта(задаем его)
person['firstName'];
console.log(person);

// Динамичское указания свойств в объектах

person = _defineProperty({}, property, 'Rick');

console.log(person);

function createCar(property, value) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, property, value), _defineProperty(_ref, '_' + property, value), _defineProperty(_ref, property.toUpperCase(), value), _defineProperty(_ref, 'get' + property, function () {
        return this[property];
    }), _ref;
}

console.log(createCar('vin', 1));