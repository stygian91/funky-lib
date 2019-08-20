"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _curry = _interopRequireDefault(require("../function/curry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var complement = function complement(func) {
  return function () {
    return func.apply(void 0, arguments) ? false : true;
  };
};

var _default = (0, _curry["default"])(complement);

exports["default"] = _default;