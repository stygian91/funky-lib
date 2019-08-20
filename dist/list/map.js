"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _curry = _interopRequireDefault(require("../function/curry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var map = function map(func, list) {
  return list.map(func);
};

var _default = (0, _curry["default"])(map);

exports["default"] = _default;