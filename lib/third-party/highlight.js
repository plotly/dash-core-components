"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = _interopRequireDefault(require("highlight.js/lib/core"));

require("highlight.js/styles/github.css");

var _bash = _interopRequireDefault(require("highlight.js/lib/languages/bash"));

var _css = _interopRequireDefault(require("highlight.js/lib/languages/css"));

var _http = _interopRequireDefault(require("highlight.js/lib/languages/http"));

var _javascript = _interopRequireDefault(require("highlight.js/lib/languages/javascript"));

var _json = _interopRequireDefault(require("highlight.js/lib/languages/json"));

var _julia = _interopRequireDefault(require("highlight.js/lib/languages/julia"));

var _markdown = _interopRequireDefault(require("highlight.js/lib/languages/markdown"));

var _plaintext = _interopRequireDefault(require("highlight.js/lib/languages/plaintext"));

var _python = _interopRequireDefault(require("highlight.js/lib/languages/python"));

var _r = _interopRequireDefault(require("highlight.js/lib/languages/r"));

var _ruby = _interopRequireDefault(require("highlight.js/lib/languages/ruby"));

var _shell = _interopRequireDefault(require("highlight.js/lib/languages/shell"));

var _sql = _interopRequireDefault(require("highlight.js/lib/languages/sql"));

var _xml = _interopRequireDefault(require("highlight.js/lib/languages/xml"));

var _yaml = _interopRequireDefault(require("highlight.js/lib/languages/yaml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core.default.registerLanguage('bash', _bash.default);

_core.default.registerLanguage('css', _css.default);

_core.default.registerLanguage('http', _http.default);

_core.default.registerLanguage('javascript', _javascript.default);

_core.default.registerLanguage('json', _json.default);

_core.default.registerLanguage('julia', _julia.default);

_core.default.registerLanguage('markdown', _markdown.default);

_core.default.registerLanguage('plaintext', _plaintext.default);

_core.default.registerLanguage('python', _python.default);

_core.default.registerLanguage('r', _r.default);

_core.default.registerLanguage('ruby', _ruby.default);

_core.default.registerLanguage('shell', _shell.default);

_core.default.registerLanguage('sql', _sql.default);

_core.default.registerLanguage('xml', _xml.default);

_core.default.registerLanguage('yaml', _yaml.default);

var _default = _core.default;
exports.default = _default;