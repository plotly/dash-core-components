"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _highlight = _interopRequireDefault(require("highlight.js/lib/highlight"));

require("../components/css/highlight.css");

var _bash = _interopRequireDefault(require("highlight.js/lib/languages/bash"));

var _css = _interopRequireDefault(require("highlight.js/lib/languages/css"));

var _http = _interopRequireDefault(require("highlight.js/lib/languages/http"));

var _javascript = _interopRequireDefault(require("highlight.js/lib/languages/javascript"));

var _json = _interopRequireDefault(require("highlight.js/lib/languages/json"));

var _markdown = _interopRequireDefault(require("highlight.js/lib/languages/markdown"));

var _python = _interopRequireDefault(require("highlight.js/lib/languages/python"));

var _r = _interopRequireDefault(require("highlight.js/lib/languages/r"));

var _ruby = _interopRequireDefault(require("highlight.js/lib/languages/ruby"));

var _shell = _interopRequireDefault(require("highlight.js/lib/languages/shell"));

var _sql = _interopRequireDefault(require("highlight.js/lib/languages/sql"));

var _xml = _interopRequireDefault(require("highlight.js/lib/languages/xml"));

var _yaml = _interopRequireDefault(require("highlight.js/lib/languages/yaml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_highlight.default.registerLanguage('bash', _bash.default);

_highlight.default.registerLanguage('css', _css.default);

_highlight.default.registerLanguage('http', _http.default);

_highlight.default.registerLanguage('javascript', _javascript.default);

_highlight.default.registerLanguage('json', _json.default);

_highlight.default.registerLanguage('markdown', _markdown.default);

_highlight.default.registerLanguage('python', _python.default);

_highlight.default.registerLanguage('r', _r.default);

_highlight.default.registerLanguage('ruby', _ruby.default);

_highlight.default.registerLanguage('shell', _shell.default);

_highlight.default.registerLanguage('sql', _sql.default);

_highlight.default.registerLanguage('xml', _xml.default);

_highlight.default.registerLanguage('yaml', _yaml.default);

var _default = _highlight.default;
exports.default = _default;