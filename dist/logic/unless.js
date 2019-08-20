"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _curry = _interopRequireDefault(require("../function/curry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var unless = function unless(conditionFn, elseFn) {
  return function (arg) {
    return conditionFn(arg) ? arg : elseFn(arg);
  };
};

var _default = (0, _curry["default"])(unless);

exports["default"] = _default;