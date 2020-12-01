"use strict";

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DashMarkdown =
/*#__PURE__*/
function (_Component) {
  _inherits(DashMarkdown, _Component);

  function DashMarkdown(props) {
    var _this;

    _classCallCheck(this, DashMarkdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DashMarkdown).call(this, props));

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
            _MarkdownHighlighter.default.hljs.highlightBlock(nodes[i]);
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
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
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
          return _react.default.createElement(_Link.default, props);
        },
        dccMarkdown: function dccMarkdown(props) {
          return _react.default.createElement(_reactMarkdown.default, (0, _ramda.mergeDeepRight)((0, _ramda.pick)(['dangerously_allow_html', 'dedent'], _this2.props), (0, _ramda.pick)(['children'], props)));
        }
      };
      return _react.default.createElement("div", {
        id: id,
        ref: function ref(node) {
          _this2.mdContainer = node;
        },
        style: style,
        className: (highlight_config && highlight_config.theme || className) && "".concat(className ? className : '', " ").concat(highlight_config && highlight_config.theme && highlight_config.theme === 'dark' ? 'hljs-dark' : ''),
        "data-dash-is-loading": loading_state && loading_state.is_loading || undefined
      }, _react.default.createElement(_reactMarkdown.default, {
        source: displayText,
        escapeHtml: !dangerously_allow_html,
        renderers: {
          html: function html(props) {
            return props.escapeHtml ? props.value : _react.default.createElement(_reactJsxParser.default, {
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