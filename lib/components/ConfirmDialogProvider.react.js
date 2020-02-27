"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ConfirmDialog = _interopRequireDefault(require("./ConfirmDialog.react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A wrapper component that will display a confirmation dialog
 * when its child component has been clicked on.
 *
 * For example:
 * ```
 * dcc.ConfirmDialogProvider(
 *     html.Button('click me', id='btn'),
 *     message='Danger - Are you sure you want to continue.'
 *     id='confirm')
 * ```
 */
var ConfirmDialogProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConfirmDialogProvider, _React$Component);

  function ConfirmDialogProvider() {
    _classCallCheck(this, ConfirmDialogProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConfirmDialogProvider).apply(this, arguments));
  }

  _createClass(ConfirmDialogProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          displayed = _this$props.displayed,
          id = _this$props.id,
          setProps = _this$props.setProps,
          children = _this$props.children,
          loading_state = _this$props.loading_state; // Will lose the previous onClick of the child

      var wrapClick = function wrapClick(child) {
        var props = (0, _ramda.clone)(child.props);

        props._dashprivate_layout.props.onClick = function () {
          setProps({
            displayed: true
          });
        };

        return _react.default.cloneElement(child, props);
      };

      return _react.default.createElement("div", {
        id: id,
        "data-dash-is-loading": loading_state && loading_state.is_loading || undefined
      }, Array.isArray(children) ? children.map(wrapClick) : wrapClick(children), _react.default.createElement(_ConfirmDialog.default, _extends({}, this.props, {
        displayed: displayed
      })));
    }
  }]);

  return ConfirmDialogProvider;
}(_react.default.Component);

exports.default = ConfirmDialogProvider;
ConfirmDialogProvider.defaultProps = {
  submit_n_clicks: 0,
  submit_n_clicks_timestamp: -1,
  cancel_n_clicks: 0,
  cancel_n_clicks_timestamp: -1
};
ConfirmDialogProvider.propTypes = {
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
   * Number of times the submit was clicked
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
   * Is the modal currently displayed.
   */
  displayed: _propTypes.default.bool,

  /**
   * Dash-assigned callback that gets fired when the value changes.
   */
  setProps: _propTypes.default.func,

  /**
   * The children to hijack clicks from and display the popup.
   */
  children: _propTypes.default.any,

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