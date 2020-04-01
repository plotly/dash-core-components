"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fastIsnumeric = _interopRequireDefault(require("fast-isnumeric"));

require("./css/input.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// eslint-disable-next-line no-implicit-coercion
var convert = function convert(val) {
  return (0, _fastIsnumeric.default)(val) ? +val : NaN;
};

var isEquivalent = function isEquivalent(v1, v2) {
  return v1 === v2 || isNaN(v1) && isNaN(v2);
};
/**
 * A basic HTML input control for entering text, numbers, or passwords.
 *
 * Note that checkbox and radio types are supported through
 * the Checklist and RadioItems component. Dates, times, and file uploads
 * are also supported through separate components.
 */


var Input =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Input, _PureComponent);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));
    _this.input = _react.default.createRef();
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onEvent = _this.onEvent.bind(_assertThisInitialized(_this));
    _this.onKeyPress = _this.onKeyPress.bind(_assertThisInitialized(_this));
    _this.setInputValue = _this.setInputValue.bind(_assertThisInitialized(_this));
    _this.setPropValue = _this.setPropValue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Input, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var value = this.input.current.value;
      var valueAsNumber = convert(value);
      this.setInputValue((0, _ramda.isNil)(valueAsNumber) ? value : valueAsNumber, nextProps.value);

      if (this.props.type !== 'number') {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var value = this.input.current.value;
      var valueAsNumber = convert(value);
      this.setInputValue((0, _ramda.isNil)(valueAsNumber) ? value : valueAsNumber, this.props.value);
    }
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      if (this.props.type !== 'number') {
        this.setState({
          value: this.props.value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var valprops = this.props.type === 'number' ? {} : {
        value: this.state.value
      };
      var loading_state = this.props.loading_state;
      return _react.default.createElement("input", _extends({
        "data-dash-is-loading": loading_state && loading_state.is_loading || undefined,
        ref: this.input,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyPress: this.onKeyPress
      }, valprops, (0, _ramda.omit)(['debounce', 'value', 'n_blur', 'n_blur_timestamp', 'n_submit', 'n_submit_timestamp', 'selectionDirection', 'selectionEnd', 'selectionStart', 'setProps', 'loading_state'], this.props)));
    }
  }, {
    key: "setInputValue",
    value: function setInputValue(base, value) {
      var __value = value;
      base = this.input.current.checkValidity() ? convert(base) : NaN;
      value = convert(value);

      if (!isEquivalent(base, value)) {
        this.input.current.value = (0, _fastIsnumeric.default)(value) ? value : __value;
      }
    }
  }, {
    key: "setPropValue",
    value: function setPropValue(base, value) {
      base = convert(base);
      value = this.input.current.checkValidity() ? convert(value) : NaN;

      if (!isEquivalent(base, value)) {
        this.props.setProps({
          value: value
        });
      }
    }
  }, {
    key: "onEvent",
    value: function onEvent() {
      var value = this.input.current.value;
      var valueAsNumber = convert(value);

      if (this.props.type === 'number') {
        this.setPropValue(this.props.value, (0, _ramda.isNil)(valueAsNumber) ? value : valueAsNumber);
      } else {
        this.props.setProps({
          value: value
        });
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.props.setProps({
        n_blur: this.props.n_blur + 1,
        n_blur_timestamp: Date.now()
      });
      this.input.current.checkValidity();
      return this.props.debounce && this.onEvent();
    }
  }, {
    key: "onKeyPress",
    value: function onKeyPress(e) {
      if (e.key === 'Enter') {
        this.props.setProps({
          n_submit: this.props.n_submit + 1,
          n_submit_timestamp: Date.now()
        });
        this.input.current.checkValidity();
      }

      return this.props.debounce && e.key === 'Enter' && this.onEvent();
    }
  }, {
    key: "onChange",
    value: function onChange() {
      if (!this.props.debounce) {
        this.onEvent();
      } else if (this.props.type !== 'number') {
        this.setState({
          value: this.input.current.value
        });
      }
    }
  }]);

  return Input;
}(_react.PureComponent);

exports.default = Input;
Input.defaultProps = {
  type: 'text',
  n_blur: 0,
  n_blur_timestamp: -1,
  n_submit: 0,
  n_submit_timestamp: -1,
  debounce: false,
  step: 'any',
  persisted_props: ['value'],
  persistence_type: 'local'
};
Input.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: _propTypes.default.string,

  /**
   * The value of the input
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * The input's inline styles
   */
  style: _propTypes.default.object,

  /**
   * The class of the input element
   */
  className: _propTypes.default.string,

  /**
   * If true, changes to input will be sent back to the Dash server only on enter or when losing focus.
   * If it's false, it will sent the value back on every change.
   */
  debounce: _propTypes.default.bool,

  /**
   * The type of control to render.
   */
  type: _propTypes.default.oneOf([// Only allowing the input types with wide browser compatibility
  'text', 'number', 'password', 'email', 'range', 'search', 'tel', 'url', 'hidden']),

  /**
   * This attribute indicates whether the value of the control can be automatically completed by the browser.
   */
  autoComplete: _propTypes.default.string,

  /**
   * The element should be automatically focused after the page loaded.
   * autoFocus is an HTML boolean attribute - it is enabled by a boolean or
   * 'autoFocus'. Alternative capitalizations `autofocus` & `AUTOFOCUS`
   * are also acccepted.
   */
  autoFocus: _propTypes.default.oneOfType([_propTypes.default.oneOf(['autoFocus', 'autofocus', 'AUTOFOCUS']), _propTypes.default.bool]),

  /**
   * If true, the input is disabled and can't be clicked on.
   * disabled is an HTML boolean attribute - it is enabled by a boolean or
   * 'disabled'. Alternative capitalizations `DISABLED`
   */
  disabled: _propTypes.default.oneOfType([_propTypes.default.oneOf(['disabled', 'DISABLED']), _propTypes.default.bool]),

  /**
   * Provides a hint to the browser as to the type of data that might be
   * entered by the user while editing the element or its contents.
   */
  inputMode: _propTypes.default.oneOf([
  /**
   * Alphanumeric, non-prose content such as usernames and passwords.
   */
  'verbatim',
  /**
   * Latin-script input in the user's preferred language with typing aids such as text prediction enabled. For human-to-computer communication such as search boxes.
   */
  'latin',
  /**
   * As latin, but for human names.
   */
  'latin-name',
  /**
   * As latin, but with more aggressive typing aids. For human-to-human communication such as instant messaging or email.
   */
  'latin-prose',
  /**
   * As latin-prose, but for the user's secondary languages.
   */
  'full-width-latin',
  /**
   * Kana or romaji input, typically hiragana input, using full-width characters, with support for converting to kanji. Intended for Japanese text input.
   */
  'kana',
  /**
   * Katakana input, using full-width characters, with support for converting to kanji. Intended for Japanese text input.
   */
  'katakana',
  /**
   * Numeric input, including keys for the digits 0 to 9, the user's preferred thousands separator character, and the character for indicating negative numbers. Intended for numeric codes (e.g. credit card numbers). For actual numbers, prefer using type="number"
   */
  'numeric',
  /**
   * Telephone input, including asterisk and pound key. Use type="tel" if possible instead.
   */
  'tel',
  /**
   * Email input. Use type="email" if possible instead.
   */
  'email',
  /**
   * URL input. Use type="url" if possible instead.
   */
  'url']),

  /**
   * Identifies a list of pre-defined options to suggest to the user.
   * The value must be the id of a <datalist> element in the same document.
   * The browser displays only options that are valid values for this
   * input element.
   * This attribute is ignored when the type attribute's value is
   * hidden, checkbox, radio, file, or a button type.
   */
  list: _propTypes.default.string,

  /**
   * The maximum (numeric or date-time) value for this item, which must not be less than its minimum (min attribute) value.
   */
  max: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the maximum number of characters (in UTF-16 code units) that the user can enter. For other control types, it is ignored. It can exceed the value of the size attribute. If it is not specified, the user can enter an unlimited number of characters. Specifying a negative number results in the default behavior (i.e. the user can enter an unlimited number of characters). The constraint is evaluated only when the value of the attribute has been changed.
   */
  maxLength: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * The minimum (numeric or date-time) value for this item, which must not be greater than its maximum (max attribute) value.
   */
  min: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the minimum number of characters (in Unicode code points) that the user can enter. For other control types, it is ignored.
   */
  minLength: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * This Boolean attribute indicates whether the user can enter more than one value. This attribute applies when the type attribute is set to email or file, otherwise it is ignored.
   */
  multiple: _propTypes.default.bool,

  /**
   * The name of the control, which is submitted with the form data.
   */
  name: _propTypes.default.string,

  /**
   * A regular expression that the control's value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is text, search, tel, url, email, or password, otherwise it is ignored. The regular expression language is the same as JavaScript RegExp algorithm, with the 'u' parameter that makes it treat the pattern as a sequence of unicode code points. The pattern is not surrounded by forward slashes.
   */
  pattern: _propTypes.default.string,

  /**
   * A hint to the user of what can be entered in the control . The placeholder text must not contain carriage returns or line-feeds. Note: Do not use the placeholder attribute instead of a <label> element, their purposes are different. The <label> attribute describes the role of the form element (i.e. it indicates what kind of information is expected), and the placeholder attribute is a hint about the format that the content should take. There are cases in which the placeholder attribute is never displayed to the user, so the form must be understandable without it.
   */
  placeholder: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * This attribute indicates that the user cannot modify the value of the control. The value of the attribute is irrelevant. If you need read-write access to the input value, do not add the "readonly" attribute. It is ignored if the value of the type attribute is hidden, range, color, checkbox, radio, file, or a button type (such as button or submit).
   * readOnly is an HTML boolean attribute - it is enabled by a boolean or
   * 'readOnly'. Alternative capitalizations `readonly` & `READONLY`
   * are also acccepted.
   */
  readOnly: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['readOnly', 'readonly', 'READONLY'])]),

  /**
   * This attribute specifies that the user must fill in a value before submitting a form. It cannot be used when the type attribute is hidden, image, or a button type (submit, reset, or button). The :optional and :required CSS pseudo-classes will be applied to the field as appropriate.
   * required is an HTML boolean attribute - it is enabled by a boolean or
   * 'required'. Alternative capitalizations `REQUIRED`
   * are also acccepted.
   */
  required: _propTypes.default.oneOfType([_propTypes.default.oneOf(['required', 'REQUIRED']), _propTypes.default.bool]),

  /**
   * The direction in which selection occurred. This is "forward" if the selection was made from left-to-right in an LTR locale or right-to-left in an RTL locale, or "backward" if the selection was made in the opposite direction. On platforms on which it's possible this value isn't known, the value can be "none"; for example, on macOS, the default direction is "none", then as the user begins to modify the selection using the keyboard, this will change to reflect the direction in which the selection is expanding.
   */
  selectionDirection: _propTypes.default.string,

  /**
   * The offset into the element's text content of the last selected character. If there's no selection, this value indicates the offset to the character following the current text input cursor position (that is, the position the next character typed would occupy).
   */
  selectionEnd: _propTypes.default.string,

  /**
   * The offset into the element's text content of the first selected character. If there's no selection, this value indicates the offset to the character following the current text input cursor position (that is, the position the next character typed would occupy).
   */
  selectionStart: _propTypes.default.string,

  /**
   * The initial size of the control. This value is in pixels unless the value of the type attribute is text or password, in which case it is an integer number of characters. Starting in, this attribute applies only when the type attribute is set to text, search, tel, url, email, or password, otherwise it is ignored. In addition, the size must be greater than zero. If you do not specify a size, a default value of 20 is used.' simply states "the user agent should ensure that at least that many characters are visible", but different characters can have different widths in certain fonts. In some browsers, a certain string with x characters will not be entirely visible even if size is defined to at least x.
   */
  size: _propTypes.default.string,

  /**
   * Setting the value of this attribute to true indicates that the element needs to have its spelling and grammar checked. The value default indicates that the element is to act according to a default behavior, possibly based on the parent element's own spellcheck value. The value false indicates that the element should not be checked.
   */
  spellCheck: _propTypes.default.oneOfType([// enumerated property, not a boolean property: https://www.w3.org/TR/html51/editing.html#spelling-and-grammar-checking
  _propTypes.default.oneOf(['true', 'false']), _propTypes.default.bool]),

  /**
   * Works with the min and max attributes to limit the increments at which a numeric or date-time value can be set. It can be the string any or a positive floating point number. If this attribute is not set to any, the control accepts only values at multiples of the step value greater than the minimum.
   */
  step: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Number of times the `Enter` key was pressed while the input had focus.
   */
  n_submit: _propTypes.default.number,

  /**
   * Last time that `Enter` was pressed.
   */
  n_submit_timestamp: _propTypes.default.number,

  /**
   * Number of times the input lost focus.
   */
  n_blur: _propTypes.default.number,

  /**
   * Last time the input lost focus.
   */
  n_blur_timestamp: _propTypes.default.number,

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