"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./css/logout.css");

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
 * Logout button to submit a form post request to the `logout_url` prop.
 * Usage is intended for dash-deployment-server authentication.
 *
 * DDS usage:
 *
 * `dcc.LogoutButton(logout_url=os.getenv('DASH_LOGOUT_URL'))`
 *
 * Custom usage:
 *
 * - Implement a login mechanism.
 * - Create a flask route with a post method handler.
 * `@app.server.route('/logout', methods=['POST'])`
 *   - The logout route should perform what's necessary for the user to logout.
 *   - If you store the session in a cookie, clear the cookie:
 *   `rep = flask.Response(); rep.set_cookie('session', '', expires=0)`
 *
 * - Create a logout button component and assign it the logout_url
 * `dcc.LogoutButton(logout_url='/logout')`
 *
 * See https://dash.plotly.com/dash-core-components/logout_button
 * for more documentation and examples.
 */
var LogoutButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LogoutButton, _React$Component);

  function LogoutButton() {
    _classCallCheck(this, LogoutButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(LogoutButton).apply(this, arguments));
  }

  _createClass(LogoutButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          logout_url = _this$props.logout_url,
          label = _this$props.label,
          className = _this$props.className,
          style = _this$props.style,
          method = _this$props.method,
          loading_state = _this$props.loading_state;
      var url, submitMethod;

      if (!logout_url) {
        url = logout_url || 'https://dash.plotly.com/dash-core-components/logout_button';
        submitMethod = 'get';
      } else {
        url = logout_url;
        submitMethod = method;
      }

      return _react.default.createElement("form", {
        "data-dash-is-loading": loading_state && loading_state.is_loading || undefined,
        action: url,
        method: submitMethod,
        className: "dash-logout-frame"
      }, _react.default.createElement("button", {
        className: "dash-logout-btn ".concat(className || ''),
        style: style,
        id: id,
        type: "submit"
      }, label));
    }
  }]);

  return LogoutButton;
}(_react.default.Component);

exports.default = LogoutButton;
LogoutButton.defaultProps = {
  label: 'Logout',
  method: 'post'
};
LogoutButton.propTypes = {
  /**
   * Id of the button.
   */
  id: _propTypes.default.string,

  /**
   * Text of the button
   */
  label: _propTypes.default.string,

  /**
   * Url to submit a post logout request.
   */
  logout_url: _propTypes.default.string,

  /**
   * Style of the button
   */
  style: _propTypes.default.object,

  /**
   * Http method to submit the logout form.
   */
  method: _propTypes.default.string,

  /**
   * CSS class for the button.
   */
  className: _propTypes.default.string,

  /**
   * Dash-assigned callback that gets fired when the value changes.
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