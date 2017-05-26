'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Vetal_Haman on 12.05.2017.
 */

var Task = function () {
    function Task() {
        var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaultTitle();

        _classCallCheck(this, Task);

        this.title = title;
        this._done = false; // Используем "_" что бы показать что это личное свойство
        Task.count += 1;
        console.log("Создание задачи");
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this.done = true;
            console.log('\u0417\u0430\u0434\u0430\u0447\u0430 ' + this.title + ' \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430');
        }
    }, {
        key: 'done',
        get: function get() {
            return this._done === true ? 'Выполнено' : 'Не выполнено';
        },
        set: function set(value) {
            if (value !== undefined && typeof value === 'boolean') {
                this._done = value;
            } else {
                console.log("Ошибка! Укажите значение true или false");
            }
        }
    }], [{
        key: 'getDefaultTitle',
        value: function getDefaultTitle() {
            return "Какая-то задача";
        }
    }]);

    return Task;
}();

Task.count = 0;

var task = new Task("Убрать комнату");
var task2 = new Task("Купить продукты");
var task3 = new Task();

console.log(task.title); // Убрать комнату
console.log(task2.title); // Купить продукты
console.log(task3.title); // Какая-то задача

console.log(Task.count); //3

console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);