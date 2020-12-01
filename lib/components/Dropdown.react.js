"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _dropdown = _interopRequireDefault(require("../utils/LazyLoader/dropdown"));

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

var RealDropdown = (0, _react.lazy)(_dropdown.default);
/**
 * Dropdown is an interactive dropdown element for selecting one or more
 * items.
 * The values and labels of the dropdown items are specified in the `options`
 * property and the selected item(s) are specified with the `value` property.
 *
 * Use a dropdown when you have many options (more than 5) or when you are
 * constrained for space. Otherwise, you can use RadioItems or a Checklist,
 * which have the benefit of showing the users all of the items at once.
 */

var Dropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).apply(this, arguments));
  }

  _createClass(Dropdown, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.Suspense, {
        fallback: null
      }, _react.default.createElement(RealDropdown, this.props));
    }
  }]);

  return Dropdown;
}(_react.Component);

exports.default = Dropdown;
Dropdown.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: _propTypes.default.string,

  /**
   * An array of options {label: [string|number], value: [string|number]},
   * an optional disabled field can be used for each option
   */
  options: _propTypes.default.arrayOf(_propTypes.default.exact({
    /**
     * The dropdown's label
     */
    label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,

    /**
     * The value of the dropdown. This value
     * corresponds to the items specified in the
     * `value` property.
     */
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,

    /**
     * If true, this option is disabled and cannot be selected.
     */
    disabled: _propTypes.default.bool,

    /**
     * The HTML 'title' attribute for the option. Allows for
     * information on hover. For more information on this attribute,
     * see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title
     */
    title: _propTypes.default.string
  })),

  /**
   * The value of the input. If `multi` is false (the default)
   * then value is just a string that corresponds to the values
   * provided in the `options` property. If `multi` is true, then
   * multiple values can be selected at once, and `value` is an
   * array of items with values corresponding to those in the
   * `options` prop.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]))]),

  /**
   * height of each option. Can be increased when label lengths would wrap around
   */
  optionHeight: _propTypes.default.number,

  /**
   * className of the dropdown element
   */
  className: _propTypes.default.string,

  /**
   * Whether or not the dropdown is "clearable", that is, whether or
   * not a small "x" appears on the right of the dropdown that removes
   * the selected value.
   */
  clearable: _propTypes.default.bool,

  /**
   * If true, this dropdown is disabled and the selection cannot be changed.
   */
  disabled: _propTypes.default.bool,

  /**
   * If true, the user can select multiple values
   */
  multi: _propTypes.default.bool,

  /**
   * The grey, default text shown when no option is selected
   */
  placeholder: _propTypes.default.string,

  /**
   * Whether to enable the searching feature or not
   */
  searchable: _propTypes.default.bool,

  /**
   * The value typed in the DropDown for searching.
   */
  search_value: _propTypes.default.string,

  /**
   * Dash-assigned callback that gets fired when the input changes
   */
  setProps: _propTypes.default.func,

  /**
   * Defines CSS styles which will override styles previously set.
   */
  style: _propTypes.default.object,

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
Dropdown.defaultProps = {
  clearable: true,
  disabled: false,
  multi: false,
  searchable: true,
  optionHeight: 35,
  persisted_props: ['value'],
  persistence_type: 'local'
};
var propTypes = Dropdown.propTypes;
exports.propTypes = propTypes;
var defaultProps = Dropdown.defaultProps;
exports.defaultProps = defaultProps;