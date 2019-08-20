"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _curry = _interopRequireDefault(require("../function/curry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var allPass = function allPass() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return funcs.reduce(function (accumulator, current) {
      return accumulator && current.apply(void 0, args);
    }, true);
  };
};

var _default = (0, _curry["default"])(allPass);

exports["default"] = _default;