"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _curry = _interopRequireDefault(require("../function/curry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var equal = function equal(left, right) {
  return left === right;
};

var _default = (0, _curry["default"])(equal);

exports["default"] = _default;