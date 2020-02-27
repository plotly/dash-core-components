"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.privateDefaultProps = exports.privatePropTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var privatePropTypes = {
  _dashprivate_transformConfig: _propTypes.default.func,
  _dashprivate_transformFigure: _propTypes.default.func
};
exports.privatePropTypes = privatePropTypes;
var privateDefaultProps = {
  _dashprivate_transformConfig: function _dashprivate_transformConfig(c) {
    return c;
  },
  _dashprivate_transformFigure: function _dashprivate_transformFigure(f) {
    return f;
  }
};
exports.privateDefaultProps = privateDefaultProps;