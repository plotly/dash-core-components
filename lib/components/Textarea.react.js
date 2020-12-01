"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ramda = require("ramda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
 * A basic HTML textarea for entering multiline text.
 *
 */
var Textarea =
/*#__PURE__*/
function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(Textarea).apply(this, arguments));
  }

  _createClass(Textarea, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          setProps = _this$props.setProps,
          loading_state = _this$props.loading_state,
          value = _this$props.value;
      return _react.default.createElement("textarea", _extends({
        "data-dash-is-loading": loading_state && loading_state.is_loading || undefined,
        value: value,
        onChange: function onChange(e) {
          setProps({
            value: e.target.value
          });
        },
        onBlur: function onBlur() {
          setProps({
            n_blur: _this.props.n_blur + 1,
            n_blur_timestamp: Date.now()
          });
        },
        onClick: function onClick() {
          setProps({
            n_clicks: _this.props.n_clicks + 1,
            n_clicks_timestamp: Date.now()
          });
        }
      }, (0, _ramda.omit)(['setProps', 'value'], this.props)));
    }
  }]);

  return Textarea;
}(_react.Component);

exports.default = Textarea;
Textarea.defaultProps = {
  n_blur: 0,
  n_blur_timestamp: -1,
  n_clicks: 0,
  n_clicks_timestamp: -1,
  persisted_props: ['value'],
  persistence_type: 'local'
};
Textarea.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: _propTypes.default.string,

  /**
   * The value of the textarea
   */
  value: _propTypes.default.string,

  /**
   * The element should be automatically focused after the page loaded.
   */
  autoFocus: _propTypes.default.string,

  /**
   * Defines the number of columns in a textarea.
   */
  cols: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Indicates whether the user can interact with the element.
   */
  disabled: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),

  /**
   * Indicates the form that is the owner of the element.
   */
  form: _propTypes.default.string,

  /**
   * Defines the maximum number of characters allowed in the element.
   */
  maxLength: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Defines the minimum number of characters allowed in the element.
   */
  minLength: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Name of the element. For example used by the server to identify the fields in form submits.
   */
  name: _propTypes.default.string,

  /**
   * Provides a hint to the user of what can be entered in the field.
   */
  placeholder: _propTypes.default.string,

  /**
   * Indicates whether the element can be edited.
   * readOnly is an HTML boolean attribute - it is enabled by a boolean or
   * 'readOnly'. Alternative capitalizations `readonly` & `READONLY`
   * are also acccepted.
   */
  readOnly: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['readOnly', 'readonly', 'READONLY'])]),

  /**
   * Indicates whether this element is required to fill out or not.
   * required is an HTML boolean attribute - it is enabled by a boolean or
   * 'required'. Alternative capitalizations `REQUIRED`
   * are also acccepted.
   */
  required: _propTypes.default.oneOfType([_propTypes.default.oneOf(['required', 'REQUIRED']), _propTypes.default.bool]),

  /**
   * Defines the number of rows in a text area.
   */
  rows: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Indicates whether the text should be wrapped.
   */
  wrap: _propTypes.default.string,

  /**
   * Defines a keyboard shortcut to activate or add focus to the element.
   */
  accessKey: _propTypes.default.string,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: _propTypes.default.string,

  /**
   * Indicates whether the element's content is editable.
   */
  contentEditable: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),

  /**
   * Defines the ID of a <menu> element which will serve as the element's context menu.
   */
  contextMenu: _propTypes.default.string,

  /**
   * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
   */
  dir: _propTypes.default.string,

  /**
   * Defines whether the element can be dragged.
   */
  draggable: _propTypes.default.oneOfType([// enumerated property, not a boolean property: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable
  _propTypes.default.oneOf(['true', 'false']), _propTypes.default.bool]),

  /**
   * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
   */
  hidden: _propTypes.default.string,

  /**
   * Defines the language used in the element.
   */
  lang: _propTypes.default.string,

  /**
   * Indicates whether spell checking is allowed for the element.
   */
  spellCheck: _propTypes.default.oneOfType([// enumerated property, not a boolean property: https://www.w3.org/TR/html51/editing.html#spelling-and-grammar-checking
  _propTypes.default.oneOf(['true', 'false']), _propTypes.default.bool]),

  /**
   * Defines CSS styles which will override styles previously set.
   */
  style: _propTypes.default.object,

  /**
   * Overrides the browser's default tab order and follows the one specified instead.
   */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Text to be displayed in a tooltip when hovering over the element.
   */
  title: _propTypes.default.string,

  /**
   * Number of times the textarea lost focus.
   */
  n_blur: _propTypes.default.number,

  /**
   * Last time the textarea lost focus.
   */
  n_blur_timestamp: _propTypes.default.number,

  /**
   * Number of times the textarea has been clicked.
   */
  n_clicks: _propTypes.default.number,

  /**
   * Last time the textarea was clicked.
   */
  n_clicks_timestamp: _propTypes.default.number,

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
  }),

  /**
   * Used to allow user interactions in this component to be persisted when
   * the component - or the page - is refreshed. If `persisted` is truthy and
   * hasn't changed from its previous value, a `value` that the user has
   * changed while using the app will keep that change, as long as
   * the new `value` also matches what was given originally.
   * Used in conjunction with `persistence_type`.
   */
  persistence: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string, _propTypes.default.number]),

  /**
   * Properties whose user interactions will persist after refreshing the
   * component or the page. Since only `value` is allowed this prop can
   * normally be ignored.
   */
  persisted_props: _propTypes.default.arrayOf(_propTypes.default.oneOf(['value'])),

  /**
   * Where persisted user changes will be stored:
   * memory: only kept in memory, reset on page refresh.
   * local: window.localStorage, data is kept after the browser quit.
   * session: window.sessionStorage, data is cleared once the browser quit.
   */
  persistence_type: _propTypes.default.oneOf(['local', 'session', 'memory'])
};