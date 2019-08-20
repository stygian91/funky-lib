"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _curry = _interopRequireDefault(require("../function/curry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var when = function when(conditionFn, thenFn) {
  return function (arg) {
    return conditionFn(arg) ? thenFn(arg) : arg;
  };
};

var _default = (0, _curry["default"])(when);

exports["default"] = _default;