/**
 * Created by Vetal_Haman on 12.05.2017.
 */

let firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

let person = {
    firstName,
    lastName,
    email,
    sayHello(){
        console.log(`Hi my Name ${this.firstName} ${lastName}`);
    },

    get fullName(){
        return this.firstName + ' ' + this.lastName;  //Геттеры и сеттеры
    },

    set fullName(value){
        this.firstName = value;
    }
};




let property = 'firstName';
person[property]; //person['firstName'] // Указываем значение свойства уже существующего обьекта(задаем его)
person['firstName'];
console.log(person);

// Динамичское указания свойств в объектах

person = {
    [property]: 'Rick'
};

console.log(person);


function createCar(property, value) {
    return {
        [property]: value,
        ['_' + property]: value,
        [property.toUpperCase()]: value,
        ['get' + property](){
            return this[property];
        }

    }
}

console.log(createCar('vin', 1));























