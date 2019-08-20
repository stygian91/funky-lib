"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _curry = _interopRequireDefault(require("../function/curry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reduce = function reduce(func, initialValue, list) {
  return list.reduce(func, initialValue);
};

var _default = (0, _curry["default"])(reduce);

exports["default"] = _default;