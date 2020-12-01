"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return Promise.resolve(window.hljs || import(
  /* webpackChunkName: "highlight" */
  '../../third-party/highlight.js').then(function (result) {
    return result.default;
  }));
};

exports.default = _default;