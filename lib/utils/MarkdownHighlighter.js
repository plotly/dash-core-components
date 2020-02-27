"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hljs = _interopRequireDefault(require("./LazyLoader/hljs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkdownHighlighter = {
  loadhljs: function loadhljs() {
    var _this = this;

    return (0, _hljs.default)().then(function (hljs) {
      _this.hljs = hljs;

      _this.hljsResolve();

      _this.isReady = true;
    });
  }
};
var isReady = new Promise(function (resolve) {
  MarkdownHighlighter.hljsResolve = resolve;
});
MarkdownHighlighter.isReady = isReady;
var _default = MarkdownHighlighter;
exports.default = _default;