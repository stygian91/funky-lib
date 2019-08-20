"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "always", {
  enumerable: true,
  get: function get() {
    return _always["default"];
  }
});
Object.defineProperty(exports, "compose", {
  enumerable: true,
  get: function get() {
    return _compose["default"];
  }
});
Object.defineProperty(exports, "curry", {
  enumerable: true,
  get: function get() {
    return _curry["default"];
  }
});
Object.defineProperty(exports, "flip", {
  enumerable: true,
  get: function get() {
    return _flip["default"];
  }
});
Object.defineProperty(exports, "identity", {
  enumerable: true,
  get: function get() {
    return _identity["default"];
  }
});
Object.defineProperty(exports, "pipe", {
  enumerable: true,
  get: function get() {
    return _pipe["default"];
  }
});
Object.defineProperty(exports, "__", {
  enumerable: true,
  get: function get() {
    return _placeholderArgument["default"];
  }
});
Object.defineProperty(exports, "thunkify", {
  enumerable: true,
  get: function get() {
    return _thunkify["default"];
  }
});

var _always = _interopRequireDefault(require("./always"));

var _compose = _interopRequireDefault(require("./compose"));

var _curry = _interopRequireDefault(require("./curry"));

var _flip = _interopRequireDefault(require("./flip"));

var _identity = _interopRequireDefault(require("./identity"));

var _pipe = _interopRequireDefault(require("./pipe"));

var _placeholderArgument = _interopRequireDefault(require("./placeholderArgument"));

var _thunkify = _interopRequireDefault(require("./thunkify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }