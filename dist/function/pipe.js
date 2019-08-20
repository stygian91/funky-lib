"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var pipe = function pipe() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function () {
    if (funcs.length === 0) {
      throw new Error('No functions provided.');
    }

    var res = funcs[0].apply(funcs, arguments);

    for (var index = 1; index < funcs.length; index++) {
      var func = funcs[index];
      res = func(res);
    }

    return res;
  };
};

var _default = pipe;
exports["default"] = _default;