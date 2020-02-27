"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(newProps, momentProps) {
  var dest = {};
  momentProps.forEach(function (key) {
    var value = newProps[key];

    if (value === null || value === undefined) {
      dest[key] = null;

      if (key === 'initial_visible_month') {
        dest[key] = (0, _moment.default)(newProps.start_date || newProps.min_date_allowed || newProps.end_date || newProps.max_date_allowed || undefined);
      }
    } else {
      dest[key] = (0, _moment.default)(value);

      if (key === 'max_date_allowed' && (0, _ramda.has)(key, dest)) {
        dest[key].add(1, 'days');
      }
    }
  });
  return dest;
};

exports.default = _default;