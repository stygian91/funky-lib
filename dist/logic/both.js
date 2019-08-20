"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _curry = _interopRequireDefault(require("../function/curry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var both = function both(f1, f2) {
  return function () {
    return f1.apply(void 0, arguments) && f2.apply(void 0, arguments);
  };
};

var _default = (0, _curry["default"])(both);

exports["default"] = _default;