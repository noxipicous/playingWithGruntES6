'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var MyModule = (function () {
	function sayHi(name) {
		return "Hi, " + name + "!";
	}

	return { sayHi: sayHi };
})();
function h1(text) {
	return "<h1>" + text + "</h1>";
}
function blah() {
	return 1 + 1;
}

// exports.h1 = h1;
