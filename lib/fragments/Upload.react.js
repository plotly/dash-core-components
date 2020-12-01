"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _Upload = require("../components/Upload.react");

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

var Upload =
/*#__PURE__*/
function (_Component) {
  _inherits(Upload, _Component);

  function Upload() {
    var _this;

    _classCallCheck(this, Upload);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Upload).call(this));
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Upload, [{
    key: "onDrop",
    value: function onDrop(files) {
      var _this$props = this.props,
          multiple = _this$props.multiple,
          setProps = _this$props.setProps;
      var newProps = {
        contents: [],
        filename: [],
        last_modified: []
      };
      files.forEach(function (file) {
        var reader = new FileReader();

        reader.onload = function () {
          /*
           * I'm not sure if reader.onload will be executed in order.
           * For example, if the 1st file is larger than the 2nd one,
           * the 2nd file might load first.
           */
          newProps.contents.push(reader.result);
          newProps.filename.push(file.name); // eslint-disable-next-line no-magic-numbers

          newProps.last_modified.push(file.lastModified / 1000);

          if (newProps.contents.length === files.length) {
            if (multiple) {
              setProps(newProps);
            } else {
              setProps({
                contents: newProps.contents[0],
                filename: newProps.filename[0],
                last_modified: newProps.last_modified[0]
              });
            }
          }
        };

        reader.readAsDataURL(file);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          children = _this$props2.children,
          accept = _this$props2.accept,
          disabled = _this$props2.disabled,
          disable_click = _this$props2.disable_click,
          max_size = _this$props2.max_size,
          min_size = _this$props2.min_size,
          multiple = _this$props2.multiple,
          className = _this$props2.className,
          className_active = _this$props2.className_active,
          className_reject = _this$props2.className_reject,
          className_disabled = _this$props2.className_disabled,
          style = _this$props2.style,
          style_active = _this$props2.style_active,
          style_reject = _this$props2.style_reject,
          style_disabled = _this$props2.style_disabled,
          loading_state = _this$props2.loading_state;
      return _react.default.createElement("div", {
        id: id,
        "data-dash-is-loading": loading_state && loading_state.is_loading || undefined
      }, _react.default.createElement(_reactDropzone.default, {
        onDrop: this.onDrop,
        accept: accept,
        disabled: disabled,
        disableClick: disable_click,
        maxSize: max_size === -1 ? Infinity : max_size,
        minSize: min_size,
        multiple: multiple,
        className: className,
        activeClassName: className_active,
        rejectClassName: className_reject,
        disabledClassName: className_disabled,
        style: style,
        activeStyle: style_active,
        rejectStyle: style_reject,
        disabledStyle: style_disabled
      }, children));
    }
  }]);

  return Upload;
}(_react.Component);

exports.default = Upload;
Upload.propTypes = _Upload.propTypes;
Upload.defaultProps = _Upload.defaultProps;