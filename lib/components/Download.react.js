"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _base64Js = require("base64-js");

var _fileSaver = require("file-saver");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var getValue = function getValue(src, fallback, key) {
  return key in src ? src[key] : fallback[key];
};
/**
 * The Download component opens a download dialog when the data property changes.
 */


var Download = /*#__PURE__*/function (_Component) {
  _inherits(Download, _Component);

  var _super = _createSuper(Download);

  function Download() {
    _classCallCheck(this, Download);

    return _super.apply(this, arguments);
  }

  _createClass(Download, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var data = this.props.data; // If the data hasn't changed, do nothing.

      if (!data || data === prevProps.data) {
        return;
      } // Extract options from data if provided, fallback to props.


      var type = getValue(data, this.props, 'type');
      var base64 = getValue(data, this.props, 'base64'); // Invoke the download using a Blob.

      var content = base64 ? (0, _base64Js.toByteArray)(data.content) : data.content;
      var blob = new Blob([content], {
        type: type
      });
      (0, _fileSaver.saveAs)(blob, data.filename);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Download;
}(_react.Component);

exports.default = Download;
Download.propTypes = {
  /**
   * The ID of this component, used to identify dash components in callbacks.
   */
  id: _propTypes.default.string,

  /**
   * On change, a download is invoked.
   */
  data: _propTypes.default.exact({
    /**
     * Suggested filename in the download dialogue.
     */
    filename: _propTypes.default.string.isRequired,

    /**
     * File content.
     */
    content: _propTypes.default.string.isRequired,

    /**
     * Set to true, when data is base64 encoded.
     */
    base64: _propTypes.default.bool,

    /**
     * Blob type, usually a MIME-type.
     */
    type: _propTypes.default.string
  }),

  /**
   * Default value for base64, used when not set as part of the data property.
   */
  base64: _propTypes.default.bool,

  /**
   * Default value for type, used when not set as part of the data property.
   */
  type: _propTypes.default.string,

  /**
   * Dash-supplied function for updating props.
   */
  setProps: _propTypes.default.func
};
Download.defaultProps = {
  type: 'text/plain',
  base64: false
};