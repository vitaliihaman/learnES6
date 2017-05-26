"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Vetal_Haman on 12.05.2017.
 */

var Task = function () {
    function Task(title) {
        _classCallCheck(this, Task);

        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log("Создание задачи");
    }

    _createClass(Task, [{
        key: "setTask",
        value: function setTask(value) {
            this.title = value;
        }
    }, {
        key: "complete",
        value: function complete() {
            this.done = true;
            console.log("\u0417\u0430\u0434\u0430\u0447\u0430 \"" + this.title + "\" \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430");
        }
    }, {
        key: "title",
        get: function get() {
            return this._title;
        },
        set: function set(value) {
            this._title = value;
        }
    }], [{
        key: "getDefaultTitle",
        value: function getDefaultTitle() {
            return "Задача";
        }
    }]);

    return Task;
}();

Task.count = 0;

var SubTask = function (_Task) {
    _inherits(SubTask, _Task);

    function SubTask(title, parent) {
        _classCallCheck(this, SubTask);

        var _this = _possibleConstructorReturn(this, (SubTask.__proto__ || Object.getPrototypeOf(SubTask)).call(this, title));

        _this.parent = parent;
        console.log("Создание подзадачи");
        return _this;
    }

    _createClass(SubTask, [{
        key: "complete",
        value: function complete() {
            _get(SubTask.prototype.__proto__ || Object.getPrototypeOf(SubTask.prototype), "complete", this).call(this);
            console.log("\u041F\u043E\u0434\u0437\u0430\u0434\u0430\u0447\u0430 \"" + this.title + "\" \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430");
        }
    }]);

    return SubTask;
}(Task);

var task = new Task("Изучить Javascript");
var subTask = new SubTask("Изучить ES6", task);

task.complete();
subTask.complete();

console.log(task);
console.log(subTask);

console.log(task.title);
console.log(task.setTask("НОвая задача"));
console.log(task.title);