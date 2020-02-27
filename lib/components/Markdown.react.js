"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _markdown = _interopRequireDefault(require("../utils/LazyLoader/markdown"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RealDashMarkdown = (0, _react.lazy)(_markdown.default); // eslint-disable-next-line valid-jsdoc

/**
 * A component that renders Markdown text as specified by the
 * GitHub Markdown spec. These component uses
 * [react-markdown](https://rexxars.github.io/react-markdown/) under the hood.
 */

var DashMarkdown =
/*#__PURE__*/
function (_Component) {
  _inherits(DashMarkdown, _Component);

  function DashMarkdown() {
    _classCallCheck(this, DashMarkdown);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashMarkdown).apply(this, arguments));
  }

  _createClass(DashMarkdown, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.Suspense, {
        fallback: null
      }, _react.default.createElement(RealDashMarkdown, this.props));
    }
  }]);

  return DashMarkdown;
}(_react.Component);

exports.default = DashMarkdown;
DashMarkdown.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: _propTypes.default.string,

  /**
   * Class name of the container element
   */
  className: _propTypes.default.string,

  /**
   * A boolean to control raw HTML escaping.
   * Setting HTML from code is risky because it's easy to
   * inadvertently expose your users to a cross-site scripting (XSS)
   * (https://en.wikipedia.org/wiki/Cross-site_scripting) attack.
   */
  dangerously_allow_html: _propTypes.default.bool,

  /**
   * A markdown string (or array of strings) that adhreres to the CommonMark spec
   */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),

  /**
   * Remove matching leading whitespace from all lines.
   * Lines that are empty, or contain *only* whitespace, are ignored.
   * Both spaces and tab characters are removed, but only if they match;
   * we will not convert tabs to spaces or vice versa.
   */
  dedent: _propTypes.default.bool,

  /**
   * Config options for syntax highlighting.
   */
  highlight_config: _propTypes.default.exact({
    /**
     * Color scheme; default 'light'
     */
    theme: _propTypes.default.oneOf(['dark', 'light'])
  }),

  /**
   * Object that holds the loading state object coming from dash-renderer
   */
  loading_state: _propTypes.default.shape({
    /**
     * Determines if the component is loading or not
     */
    is_loading: _propTypes.default.bool,

    /**
     * Holds which property is loading
     */
    prop_name: _propTypes.default.string,

    /**
     * Holds the name of the component that is loading
     */
    component_name: _propTypes.default.string
  }),

  /**
   * User-defined inline styles for the rendered Markdown
   */
  style: _propTypes.default.object
};
DashMarkdown.defaultProps = {
  dangerously_allow_html: false,
  highlight_config: {},
  dedent: true
};
var propTypes = DashMarkdown.propTypes;
exports.propTypes = propTypes;
var defaultProps = DashMarkdown.defaultProps;
exports.defaultProps = defaultProps;