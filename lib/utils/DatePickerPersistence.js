"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  extract: function extract(propValue) {
    if (!(0, _ramda.isNil)(propValue)) {
      return (0, _moment.default)(propValue).startOf('day').format('YYYY-MM-DD');
    }

    return propValue;
  },
  apply: function apply(storedValue) {
    return storedValue;
  }
};
exports.default = _default;