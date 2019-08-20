"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "add", {
  enumerable: true,
  get: function get() {
    return _add["default"];
  }
});
Object.defineProperty(exports, "div", {
  enumerable: true,
  get: function get() {
    return _divide["default"];
  }
});
Object.defineProperty(exports, "mul", {
  enumerable: true,
  get: function get() {
    return _multiply["default"];
  }
});
Object.defineProperty(exports, "sub", {
  enumerable: true,
  get: function get() {
    return _subtract["default"];
  }
});

var _add = _interopRequireDefault(require("./add"));

var _divide = _interopRequireDefault(require("./divide"));

var _multiply = _interopRequireDefault(require("./multiply"));

var _subtract = _interopRequireDefault(require("./subtract"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }