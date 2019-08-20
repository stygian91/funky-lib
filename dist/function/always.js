"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var always = function always(arg) {
  return function () {
    return arg;
  };
};

var _default = always;
exports["default"] = _default;