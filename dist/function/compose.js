"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pipe = _interopRequireDefault(require("./pipe"));

var _flip = _interopRequireDefault(require("./flip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _flip["default"])(_pipe["default"]);

exports["default"] = _default;