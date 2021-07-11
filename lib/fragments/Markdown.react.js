"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ramda = require("ramda");

var _reactJsxParser = _interopRequireDefault(require("react-jsx-parser"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _MarkdownHighlighter = _interopRequireDefault(require("../utils/MarkdownHighlighter"));

var _Markdown = require("../components/Markdown.react");

var _Link = _interopRequireDefault(require("./../components/Link.react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DashMarkdown = /*#__PURE__*/function (_Component) {
  _inherits(DashMarkdown, _Component);

  var _super = _createSuper(DashMarkdown);

  function DashMarkdown(props) {
    var _this;

    _classCallCheck(this, DashMarkdown);

    _this = _super.call(this, props);

    if (_MarkdownHighlighter.default.isReady !== true) {
      _MarkdownHighlighter.default.isReady.then(function () {
        _this.setState({});
      });
    }

    _this.highlightCode = _this.highlightCode.bind(_assertThisInitialized(_this));
    _this.dedent = _this.dedent.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DashMarkdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.highlightCode();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.highlightCode();
    }
  }, {
    key: "highlightCode",
    value: function highlightCode() {
      if (this.mdContainer) {
        var nodes = this.mdContainer.querySelectorAll('pre code');

        if (_MarkdownHighlighter.default.hljs) {
          for (var i = 0; i < nodes.length; i++) {
            _MarkdownHighlighter.default.hljs.highlightElement(nodes[i]);
          }
        } else {
          _MarkdownHighlighter.default.loadhljs();
        }
      }
    }
  }, {
    key: "dedent",
    value: function dedent(text) {
      var lines = text.split(/\r\n|\r|\n/);
      var commonPrefix = null;

      var _iterator = _createForOfIteratorHelper(lines),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var line = _step.value;
          var preMatch = line && line.match(/^\s*(?=\S)/);

          if (preMatch) {
            var prefix = preMatch[0];

            if (commonPrefix !== null) {
              for (var i = 0; i < commonPrefix.length; i++) {
                // Like Python's textwrap.dedent, we'll remove both
                // space and tab characters, but only if they match
                if (prefix[i] !== commonPrefix[i]) {
                  commonPrefix = commonPrefix.substr(0, i);
                  break;
                }
              }
            } else {
              commonPrefix = prefix;
            }

            if (!commonPrefix) {
              break;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var commonLen = commonPrefix ? commonPrefix.length : 0;
      return lines.map(function (line) {
        return line.match(/\S/) ? line.substr(commonLen) : '';
      }).join('\n');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          id = _this$props.id,
          style = _this$props.style,
          className = _this$props.className,
          highlight_config = _this$props.highlight_config,
          loading_state = _this$props.loading_state,
          dangerously_allow_html = _this$props.dangerously_allow_html,
          children = _this$props.children,
          dedent = _this$props.dedent;
      var textProp = (0, _ramda.type)(children) === 'Array' ? children.join('\n') : children;
      var displayText = dedent && textProp ? this.dedent(textProp) : textProp;
      var componentTransforms = {
        dccLink: function dccLink(props) {
          return /*#__PURE__*/_react.default.createElement(_Link.default, props);
        },
        dccMarkdown: function dccMarkdown(props) {
          return /*#__PURE__*/_react.default.createElement(_reactMarkdown.default, (0, _ramda.mergeDeepRight)((0, _ramda.pick)(['dangerously_allow_html', 'dedent'], _this2.props), (0, _ramda.pick)(['children'], props)));
        }
      };
      return /*#__PURE__*/_react.default.createElement("div", {
        id: id,
        ref: function ref(node) {
          _this2.mdContainer = node;
        },
        style: style,
        className: (highlight_config && highlight_config.theme || className) && "".concat(className ? className : '', " ").concat(highlight_config && highlight_config.theme && highlight_config.theme === 'dark' ? 'hljs-dark' : ''),
        "data-dash-is-loading": loading_state && loading_state.is_loading || undefined
      }, /*#__PURE__*/_react.default.createElement(_reactMarkdown.default, {
        source: displayText,
        escapeHtml: !dangerously_allow_html,
        renderers: {
          html: function html(props) {
            return props.escapeHtml ? props.value : /*#__PURE__*/_react.default.createElement(_reactJsxParser.default, {
              jsx: props.value,
              components: componentTransforms,
              renderInWrapper: false
            });
          }
        }
      }));
    }
  }]);

  return DashMarkdown;
}(_react.Component);

exports.default = DashMarkdown;
DashMarkdown.propTypes = _Markdown.propTypes;
DashMarkdown.defaultProps = _Markdown.defaultProps;