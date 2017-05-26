/**
 * Created by Vetal_Haman on 12.05.2017.
 */

class Task {
    constructor(title) {
        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log("Создание задачи");
    }

    get title(){
        return this._title;
    }

    set title(value){
        this._title = value;
    }

    setTask(value){
        this.title = value;
    }

    static getDefaultTitle(){
        return"Задача";
    }



    complete() {
        this.done = true;
        console.log(`Задача "${this.title}" выполнена`);
    }
}

Task.count = 0;

class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        console.log("Создание подзадачи");
    }

    complete(){
        super.complete();
        console.log(`Подзадача "${this.title}" выполнена`);
    }
}

let task = new Task("Изучить Javascript");
let subTask = new SubTask("Изучить ES6",task);

task.complete();
subTask.complete();

console.log(task);
console.log(subTask);

console.log(task.title);
console.log(task.setTask("НОвая задача"));
console.log(task.title);

