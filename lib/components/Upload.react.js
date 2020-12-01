"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _upload = _interopRequireDefault(require("../utils/LazyLoader/upload"));

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

var RealUpload = (0, _react.lazy)(_upload.default);
/**
 * Upload components allow your app to accept user-uploaded files via drag'n'drop
 */

var Upload =
/*#__PURE__*/
function (_Component) {
  _inherits(Upload, _Component);

  function Upload() {
    _classCallCheck(this, Upload);

    return _possibleConstructorReturn(this, _getPrototypeOf(Upload).apply(this, arguments));
  }

  _createClass(Upload, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.Suspense, {
        fallback: null
      }, _react.default.createElement(RealUpload, this.props));
    }
  }]);

  return Upload;
}(_react.Component);

exports.default = Upload;
Upload.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: _propTypes.default.string,

  /**
   * The contents of the uploaded file as a binary string
   */
  contents: _propTypes.default.oneOfType([
  /**
   * If `multiple` is `false`, then the contents will be a string
   */
  _propTypes.default.string,
  /**
   * If `multiple` is `true`, then the contents will be a list of strings
   */
  _propTypes.default.arrayOf(_propTypes.default.string)]),

  /**
   * The name of the file(s) that was(were) uploaded.
   * Note that this does not include the path of the file
   * (for security reasons).
   */
  filename: _propTypes.default.oneOfType([
  /**
   * If `multiple` is `false`, then the contents will be a string
   */
  _propTypes.default.string,
  /**
   * If `multiple` is `true`, then the contents will be a list of strings
   */
  _propTypes.default.arrayOf(_propTypes.default.string)]),

  /**
   * The last modified date of the file that was uploaded in unix time
   * (seconds since 1970).
   */
  last_modified: _propTypes.default.oneOfType([
  /**
   * If `multiple` is `false`, then the contents will be a number
   */
  _propTypes.default.number,
  /**
   * If `multiple` is `true`, then the contents will be a list of numbers
   */
  _propTypes.default.arrayOf(_propTypes.default.number)]),

  /**
   * Contents of the upload component
   */
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]),

  /**
   * Allow specific types of files.
   * See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across
   * platforms. CSV files, for example, are reported as text/plain
   * under macOS but as application/vnd.ms-excel under Windows.
   * In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   */
  accept: _propTypes.default.string,

  /**
   * Enable/disable the upload component entirely
   */
  disabled: _propTypes.default.bool,

  /**
   * Disallow clicking on the component to open the file dialog
   */
  disable_click: _propTypes.default.bool,

  /**
   * Maximum file size. If `-1`, then infinite
   */
  max_size: _propTypes.default.number,

  /**
   * Minimum file size
   */
  min_size: _propTypes.default.number,

  /**
   * Allow dropping multiple files
   */
  multiple: _propTypes.default.bool,

  /**
   * HTML class name of the component
   */
  className: _propTypes.default.string,

  /**
   * HTML class name of the component while active
   */
  className_active: _propTypes.default.string,

  /**
   * HTML class name of the component if rejected
   */
  className_reject: _propTypes.default.string,

  /**
   * HTML class name of the component if disabled
   */
  className_disabled: _propTypes.default.string,

  /**
   * CSS styles to apply
   */
  style: _propTypes.default.object,

  /**
   * CSS styles to apply while active
   */
  style_active: _propTypes.default.object,

  /**
   * CSS styles if rejected
   */
  style_reject: _propTypes.default.object,

  /**
   * CSS styles if disabled
   */
  style_disabled: _propTypes.default.object,

  /**
   * Dash-supplied function for updating props
   */
  setProps: _propTypes.default.func,

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
Upload.defaultProps = {
  disabled: false,
  disable_click: false,
  max_size: -1,
  min_size: 0,
  multiple: false,
  style: {},
  style_active: {
    borderStyle: 'solid',
    borderColor: '#6c6',
    backgroundColor: '#eee'
  },
  style_disabled: {
    opacity: 0.5
  },
  style_reject: {
    borderStyle: 'solid',
    borderColor: '#c66',
    backgroundColor: '#eee'
  }
};
var propTypes = Upload.propTypes;
exports.propTypes = propTypes;
var defaultProps = Upload.defaultProps;
exports.defaultProps = defaultProps;