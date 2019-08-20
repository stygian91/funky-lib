"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _curry = _interopRequireDefault(require("../function/curry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var divide = function divide(divisor, divident) {
  if (divisor === 0) {
    throw new Error('Divide by zero error');
  }

  return divident / divisor;
};

var _default = (0, _curry["default"])(divide);

exports["default"] = _default;