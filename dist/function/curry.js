"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _placeholderArgument = _interopRequireDefault(require("./placeholderArgument"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var curry = function curry(func) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!args.includes(_placeholderArgument["default"]) && func.length <= args.length) {
      return func.apply(void 0, args);
    }

    return function () {
      var actualArgs = [];
      var curryIndex = 0;

      for (var index = 0; index < func.length; index++) {
        if (args[index] === _placeholderArgument["default"] || index >= args.length) {
          var _ref;

          actualArgs.push((_ref = curryIndex++, _ref < 0 || arguments.length <= _ref ? undefined : arguments[_ref]));
        } else {
          actualArgs.push(args[index]);
        }
      }

      return func.apply(void 0, actualArgs);
    };
  };
};

var _default = curry;
exports["default"] = _default;