/**
 * Created by Vetal_Haman on 12.05.2017.
 */

class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this._done = false; // Используем "_" что бы показать что это личное свойство
        Task.count += 1;
        console.log("Создание задачи");
    }

    get done(){
        return this._done === true ? 'Выполнено' : 'Не выполнено'
    }

    set done(value){
        if(value !== undefined && typeof value === 'boolean'){
            this._done = value;
        }else{
            console.log("Ошибка! Укажите значение true или false");
        }
    }

    complete() {
        this.done = true;
        console.log(`Задача ${this.title} выполнена`);
    }

    static getDefaultTitle(){
        return "Какая-то задача"
    }

}

Task.count = 0;

let task = new Task("Убрать комнату");
let task2 = new Task("Купить продукты");
let task3 = new Task();

console.log(task.title); // Убрать комнату
console.log(task2.title); // Купить продукты
console.log(task3.title); // Какая-то задача

console.log(Task.count); //3

console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);






