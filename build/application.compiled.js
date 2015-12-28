'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

angular.module('todoApp', []).controller('TodoListController', function () {
  var todoList = this;
  todoList.todos = [{ text: 'learn angular', done: true }, { text: 'build an angular app', done: false }];

  todoList.addTodo = function () {
    todoList.todos.push({ text: todoList.todoText, done: false });
    todoList.todoText = '';
  };

  todoList.remaining = function () {
    var count = 0;
    angular.forEach(todoList.todos, function (todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  todoList.archive = function () {
    var oldTodos = todoList.todos;
    todoList.todos = [];
    angular.forEach(oldTodos, function (todo) {
      if (!todo.done) {
        todoList.todos.push(todo);
      }
    });
  };
});

// angular.module('todoApp', [])
//   .controller('TodoListController', TodoListController);

//   class TodoListController {
//     constructor() {}

//     addTodo() {
//       todoList.todos.push({text:todoList.todoText, done:false});
//       todoList.todoText = '';
//     }

//     remaining() {
//       var count = 0;
//       angular.forEach(todoList.todos, function(todo) {
//         count += todo.done ? 0 : 1;
//       });
//       return count;     
//     }

//     archive() {
//       var oldTodos = todoList.todos;
//       todoList.todos = [];
//       angular.forEach(oldTodos, function(todo) {
//         if (!todo.done) {
//           todoList.todos.push(todo);
//         }
//       });     
//     }

//     // TODO: Exports like this break compilation due to jshint ...
//     // export { TodoListController }
//   }
var MyModule = (function () {
  function sayHi(name) {
    return "Hi, " + name + "!";
  }

  return { sayHi: sayHi };
})();

var Person = (function () {
  function Person() {
    _classCallCheck(this, Person);

    console.log('person object instantiated');
  }

  _createClass(Person, [{
    key: 'greet',
    value: function greet(name) {
      console.log('Hello ' + name);
      alert('hi');
    }
  }]);

  return Person;
})();

function h1(text) {
  return "<h1>" + text + "</h1>";
}
function blah() {
  return 1 + 1;
}

// exports.h1 = h1;
