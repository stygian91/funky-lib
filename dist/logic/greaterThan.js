"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _curry = _interopRequireDefault(require("../function/curry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var greaterThan = function greaterThan(left, right) {
  return left > right;
};

var _default = (0, _curry["default"])(greaterThan);

exports["default"] = _default;