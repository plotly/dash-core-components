"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ramda = require("ramda");

var _react = _interopRequireWildcard(require("react"));

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

/**
 * Checklist is a component that encapsulates several checkboxes.
 * The values and labels of the checklist are specified in the `options`
 * property and the checked items are specified with the `value` property.
 * Each checkbox is rendered as an input with a surrounding label.
 */
var Checklist =
/*#__PURE__*/
function (_Component) {
  _inherits(Checklist, _Component);

  function Checklist() {
    _classCallCheck(this, Checklist);

    return _possibleConstructorReturn(this, _getPrototypeOf(Checklist).apply(this, arguments));
  }

  _createClass(Checklist, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          id = _this$props.id,
          inputClassName = _this$props.inputClassName,
          inputStyle = _this$props.inputStyle,
          labelClassName = _this$props.labelClassName,
          labelStyle = _this$props.labelStyle,
          options = _this$props.options,
          setProps = _this$props.setProps,
          style = _this$props.style,
          loading_state = _this$props.loading_state,
          value = _this$props.value;
      return _react.default.createElement("div", {
        "data-dash-is-loading": loading_state && loading_state.is_loading || undefined,
        id: id,
        style: style,
        className: className
      }, options.map(function (option) {
        return _react.default.createElement("label", {
          key: option.value,
          style: labelStyle,
          className: labelClassName
        }, _react.default.createElement("input", {
          checked: (0, _ramda.includes)(option.value, value),
          className: inputClassName,
          disabled: Boolean(option.disabled),
          style: inputStyle,
          type: "checkbox",
          onChange: function onChange() {
            var newValue;

            if ((0, _ramda.includes)(option.value, value)) {
              newValue = (0, _ramda.without)([option.value], value);
            } else {
              newValue = (0, _ramda.append)(option.value, value);
            }

            setProps({
              value: newValue
            });
          }
        }), option.label);
      }));
    }
  }]);

  return Checklist;
}(_react.Component);

exports.default = Checklist;
Checklist.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: _propTypes.default.string,

  /**
   * An array of options
   */
  options: _propTypes.default.arrayOf(_propTypes.default.exact({
    /**
     * The checkbox's label
     */
    label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,

    /**
     * The value of the checkbox. This value
     * corresponds to the items specified in the
     * `value` property.
     */
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,

    /**
     * If true, this checkbox is disabled and can't be clicked on.
     */
    disabled: _propTypes.default.bool
  })),

  /**
   * The currently selected value
   */
  value: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),

  /**
   * The class of the container (div)
   */
  className: _propTypes.default.string,

  /**
   * The style of the container (div)
   */
  style: _propTypes.default.object,

  /**
   * The style of the <input> checkbox element
   */
  inputStyle: _propTypes.default.object,

  /**
   * The class of the <input> checkbox element
   */
  inputClassName: _propTypes.default.string,

  /**
   * The style of the <label> that wraps the checkbox input
   *  and the option's label
   */
  labelStyle: _propTypes.default.object,

  /**
   * The class of the <label> that wraps the checkbox input
   *  and the option's label
   */
  labelClassName: _propTypes.default.string,

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
Checklist.defaultProps = {
  inputStyle: {},
  inputClassName: '',
  labelStyle: {},
  labelClassName: '',
  options: [],
  value: [],
  persisted_props: ['value'],
  persistence_type: 'local'
};