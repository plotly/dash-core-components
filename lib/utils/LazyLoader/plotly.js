"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return Promise.resolve(window.Plotly || import(
  /* webpackChunkName: "plotlyjs" */
  'plotly.js').then(function (_ref) {
    var Plotly = _ref.default;
    window.Plotly = Plotly;
    return Plotly;
  }));
};

exports.default = _default;