"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

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

/**
 * ConfirmDialog is used to display the browser's native "confirm" modal,
 * with an optional message and two buttons ("OK" and "Cancel").
 * This ConfirmDialog can be used in conjunction with buttons when the user
 * is performing an action that should require an extra step of verification.
 */
var ConfirmDialog =
/*#__PURE__*/
function (_Component) {
  _inherits(ConfirmDialog, _Component);

  function ConfirmDialog() {
    _classCallCheck(this, ConfirmDialog);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConfirmDialog).apply(this, arguments));
  }

  _createClass(ConfirmDialog, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this._update(!prevProps.displayed && this.props.displayed);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._update(this.props.displayed);
    }
  }, {
    key: "_update",
    value: function _update(shouldTriggerDisplay) {
      var _this$props = this.props,
          message = _this$props.message,
          setProps = _this$props.setProps,
          cancel_n_clicks = _this$props.cancel_n_clicks,
          submit_n_clicks = _this$props.submit_n_clicks;

      if (shouldTriggerDisplay) {
        new Promise(function (resolve) {
          return resolve(window.confirm(message));
        }).then(function (result) {
          if (result) {
            setProps({
              submit_n_clicks: submit_n_clicks + 1,
              submit_n_clicks_timestamp: Date.now(),
              displayed: false
            });
          } else {
            setProps({
              cancel_n_clicks: cancel_n_clicks + 1,
              cancel_n_clicks_timestamp: Date.now(),
              displayed: false
            });
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ConfirmDialog;
}(_react.Component);

exports.default = ConfirmDialog;
ConfirmDialog.defaultProps = {
  submit_n_clicks: 0,
  submit_n_clicks_timestamp: -1,
  cancel_n_clicks: 0,
  cancel_n_clicks_timestamp: -1
};
ConfirmDialog.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: _propTypes.default.string,

  /**
   * Message to show in the popup.
   */
  message: _propTypes.default.string,

  /**
   * Number of times the submit button was clicked
   */
  submit_n_clicks: _propTypes.default.number,

  /**
   * Last time the submit button was clicked.
   */
  submit_n_clicks_timestamp: _propTypes.default.number,

  /**
   * Number of times the popup was canceled.
   */
  cancel_n_clicks: _propTypes.default.number,

  /**
   * Last time the cancel button was clicked.
   */
  cancel_n_clicks_timestamp: _propTypes.default.number,

  /**
   *  Set to true to send the ConfirmDialog.
   */
  displayed: _propTypes.default.bool,

  /**
   * Dash-assigned callback that gets fired when the value changes.
   */
  setProps: _propTypes.default.func
};