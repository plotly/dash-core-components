"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GraphSpinner = _interopRequireDefault(require("../fragments/Loading/spinners/GraphSpinner.jsx"));

var _DefaultSpinner = _interopRequireDefault(require("../fragments/Loading/spinners/DefaultSpinner.jsx"));

var _CubeSpinner = _interopRequireDefault(require("../fragments/Loading/spinners/CubeSpinner.jsx"));

var _CircleSpinner = _interopRequireDefault(require("../fragments/Loading/spinners/CircleSpinner.jsx"));

var _DotSpinner = _interopRequireDefault(require("../fragments/Loading/spinners/DotSpinner.jsx"));

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function getSpinner(spinnerType) {
  switch (spinnerType) {
    case 'graph':
      return _GraphSpinner.default;

    case 'cube':
      return _CubeSpinner.default;

    case 'circle':
      return _CircleSpinner.default;

    case 'dot':
      return _DotSpinner.default;

    default:
      return _DefaultSpinner.default;
  }
}

var hiddenContainer = {
  visibility: 'hidden',
  position: 'relative'
};
var coveringSpinner = {
  visibility: 'visible',
  position: 'absolute',
  top: '0',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
/**
 * A Loading component that wraps any other component and displays a spinner until the wrapped component has rendered.
 */

var Loading =
/*#__PURE__*/
function (_Component) {
  _inherits(Loading, _Component);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, _getPrototypeOf(Loading).apply(this, arguments));
  }

  _createClass(Loading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          loading_state = _this$props.loading_state,
          color = _this$props.color,
          className = _this$props.className,
          style = _this$props.style,
          parent_className = _this$props.parent_className,
          parent_style = _this$props.parent_style,
          fullscreen = _this$props.fullscreen,
          debug = _this$props.debug,
          spinnerType = _this$props.type;
      var isLoading = loading_state && loading_state.is_loading;
      var Spinner = isLoading && getSpinner(spinnerType);
      return _react.default.createElement("div", {
        className: parent_className,
        style: isLoading ? (0, _ramda.mergeRight)(hiddenContainer, parent_style) : parent_style
      }, this.props.children, _react.default.createElement("div", {
        style: isLoading ? coveringSpinner : {}
      }, isLoading && _react.default.createElement(Spinner, {
        className: className,
        style: style,
        status: loading_state,
        color: color,
        debug: debug,
        fullscreen: fullscreen
      })));
    }
  }]);

  return Loading;
}(_react.Component);

exports.default = Loading;
Loading._dashprivate_isLoadingComponent = true;
Loading.defaultProps = {
  type: 'default',
  color: '#119DFF'
};
Loading.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: _propTypes.default.string,

  /**
   * Array that holds components to render
   */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),

  /**
   * Property that determines which spinner to show
   * one of 'graph', 'cube', 'circle', 'dot', or 'default'.
   */
  type: _propTypes.default.oneOf(['graph', 'cube', 'circle', 'dot', 'default']),

  /**
   * Boolean that makes the spinner display full-screen
   */
  fullscreen: _propTypes.default.bool,

  /**
   * If true, the spinner will display the component_name and prop_name
   * while loading
   */
  debug: _propTypes.default.bool,

  /**
   * Additional CSS class for the spinner root DOM node
   */
  className: _propTypes.default.string,

  /**
   *  Additional CSS class for the outermost dcc.Loading parent div DOM node
   */
  parent_className: _propTypes.default.string,

  /**
   * Additional CSS styling for the spinner root DOM node
   */
  style: _propTypes.default.object,

  /**
   * Additional CSS styling for the outermost dcc.Loading parent div DOM node
   */
  parent_style: _propTypes.default.object,

  /**
   * Primary colour used for the loading spinners
   */
  color: _propTypes.default.string,

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
  })
};