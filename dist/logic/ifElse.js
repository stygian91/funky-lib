"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _curry = _interopRequireDefault(require("../function/curry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ifElse = function ifElse(conditionFn, thenFn, otherwiseFn) {
  return function () {
    return conditionFn.apply(void 0, arguments) ? thenFn.apply(void 0, arguments) : otherwiseFn.apply(void 0, arguments);
  };
};

var _default = (0, _curry["default"])(ifElse);

exports["default"] = _default;