"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _curry = _interopRequireDefault(require("../function/curry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var multiply = function multiply(termToMultiply, term) {
  return term * termToMultiply;
};

var _default = (0, _curry["default"])(multiply);

exports["default"] = _default;