"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _datePickerRange = _interopRequireDefault(require("../utils/LazyLoader/datePickerRange"));

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

var RealDatePickerRange = (0, _react.lazy)(_datePickerRange.default);
/**
 * DatePickerRange is a tailor made component designed for selecting
 * timespan across multiple days off of a calendar.
 *
 * The DatePicker integrates well with the Python datetime module with the
 * startDate and endDate being returned in a string format suitable for
 * creating datetime objects.
 *
 * This component is based off of Airbnb's react-dates react component
 * which can be found here: https://github.com/airbnb/react-dates
 */

var DatePickerRange =
/*#__PURE__*/
function (_Component) {
  _inherits(DatePickerRange, _Component);

  function DatePickerRange() {
    _classCallCheck(this, DatePickerRange);

    return _possibleConstructorReturn(this, _getPrototypeOf(DatePickerRange).apply(this, arguments));
  }

  _createClass(DatePickerRange, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.Suspense, {
        fallback: null
      }, _react.default.createElement(RealDatePickerRange, this.props));
    }
  }]);

  return DatePickerRange;
}(_react.Component);

exports.default = DatePickerRange;
DatePickerRange.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: _propTypes.default.string,

  /**
   * Specifies the starting date for the component.
   * Accepts datetime.datetime objects or strings
   * in the format 'YYYY-MM-DD'
   */
  start_date: _propTypes.default.string,

  /**
   * The HTML element ID of the start date input field.
   * Not used by Dash, only by CSS.
   */
  start_date_id: _propTypes.default.string,

  /**
   * The HTML element ID of the end date input field.
   * Not used by Dash, only by CSS.
   */
  end_date_id: _propTypes.default.string,

  /**
   * Specifies the ending date for the component.
   * Accepts datetime.datetime objects or strings
   * in the format 'YYYY-MM-DD'
   */
  end_date: _propTypes.default.string,

  /**
   * Specifies the lowest selectable date for the component.
   * Accepts datetime.datetime objects or strings
   * in the format 'YYYY-MM-DD'
   */
  min_date_allowed: _propTypes.default.string,

  /**
   * Specifies the highest selectable date for the component.
   * Accepts datetime.datetime objects or strings
   * in the format 'YYYY-MM-DD'
   */
  max_date_allowed: _propTypes.default.string,

  /**
   * Specifies the month that is initially presented when the user
   * opens the calendar. Accepts datetime.datetime objects or strings
   * in the format 'YYYY-MM-DD'
   *
   */
  initial_visible_month: _propTypes.default.string,

  /**
   * Text that will be displayed in the first input
   * box of the date picker when no date is selected. Default value is 'Start Date'
   */
  start_date_placeholder_text: _propTypes.default.string,

  /**
   * Text that will be displayed in the second input
   * box of the date picker when no date is selected. Default value is 'End Date'
   */
  end_date_placeholder_text: _propTypes.default.string,

  /**
   * Size of rendered calendar days, higher number
   * means bigger day size and larger calendar overall
   */
  day_size: _propTypes.default.number,

  /**
   * Orientation of calendar, either vertical or horizontal.
   * Valid options are 'vertical' or 'horizontal'.
   */
  calendar_orientation: _propTypes.default.oneOf(['vertical', 'horizontal']),

  /**
   * Determines whether the calendar and days operate
   * from left to right or from right to left
   */
  is_RTL: _propTypes.default.bool,

  /**
   * If True, the calendar will automatically open when cleared
   */
  reopen_calendar_on_clear: _propTypes.default.bool,

  /**
   * Number of calendar months that are shown when calendar is opened
   */
  number_of_months_shown: _propTypes.default.number,

  /**
   * If True, calendar will open in a screen overlay portal,
   * not supported on vertical calendar
   */
  with_portal: _propTypes.default.bool,

  /**
   * If True, calendar will open in a full screen overlay portal, will
   * take precedent over 'withPortal' if both are set to true,
   * not supported on vertical calendar
   */
  with_full_screen_portal: _propTypes.default.bool,

  /**
   * Specifies what day is the first day of the week, values must be
   * from [0, ..., 6] with 0 denoting Sunday and 6 denoting Saturday
   */
  first_day_of_week: _propTypes.default.oneOf([0, 1, 2, 3, 4, 5, 6]),

  /**
   * Specifies a minimum number of nights that must be selected between
   * the startDate and the endDate
   */
  minimum_nights: _propTypes.default.number,

  /**
   * If True the calendar will not close when the user has selected a value
   * and will wait until the user clicks off the calendar
   */
  stay_open_on_select: _propTypes.default.bool,

  /**
   * If True the calendar will display days that rollover into
   * the next month
   */
  show_outside_days: _propTypes.default.bool,

  /**
   * Specifies the format that the month will be displayed in the calendar,
   * valid formats are variations of "MM YY". For example:
   * "MM YY" renders as '05 97' for May 1997
   * "MMMM, YYYY" renders as 'May, 1997' for May 1997
   * "MMM, YY" renders as 'Sep, 97' for September 1997
   */
  month_format: _propTypes.default.string,

  /**
   * Specifies the format that the selected dates will be displayed
   * valid formats are variations of "MM YY DD". For example:
   * "MM YY DD" renders as '05 10 97' for May 10th 1997
   * "MMMM, YY" renders as 'May, 1997' for May 10th 1997
   * "M, D, YYYY" renders as '07, 10, 1997' for September 10th 1997
   * "MMMM" renders as 'May' for May 10 1997
   */
  display_format: _propTypes.default.string,

  /**
   * If True, no dates can be selected.
   */
  disabled: _propTypes.default.bool,

  /**
   * Whether or not the dropdown is "clearable", that is, whether or
   * not a small "x" appears on the right of the dropdown that removes
   * the selected value.
   */
  clearable: _propTypes.default.bool,

  /**
   * Dash-assigned callback that gets fired when the value changes.
   */
  setProps: _propTypes.default.func,

  /**
   * CSS styles appended to wrapper div
   */
  style: _propTypes.default.object,

  /**
   * Appends a CSS class to the wrapper div component.
   */
  className: _propTypes.default.string,

  /**
   * Determines when the component should update
   * its value. If `bothdates`, then the DatePicker
   * will only trigger its value when the user has
   * finished picking both dates. If `singledate`, then
   * the DatePicker will update its value
   * as one date is picked.
   */
  updatemode: _propTypes.default.oneOf(['singledate', 'bothdates']),

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
   * hasn't changed from its previous value, any `persisted_props` that the
   * user has changed while using the app will keep those changes, as long as
   * the new prop value also matches what was given originally.
   * Used in conjunction with `persistence_type` and `persisted_props`.
   */
  persistence: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string, _propTypes.default.number]),

  /**
   * Properties whose user interactions will persist after refreshing the
   * component or the page.
   */
  persisted_props: _propTypes.default.arrayOf(_propTypes.default.oneOf(['start_date', 'end_date'])),

  /**
   * Where persisted user changes will be stored:
   * memory: only kept in memory, reset on page refresh.
   * local: window.localStorage, data is kept after the browser quit.
   * session: window.sessionStorage, data is cleared once the browser quit.
   */
  persistence_type: _propTypes.default.oneOf(['local', 'session', 'memory'])
};
DatePickerRange.defaultProps = {
  calendar_orientation: 'horizontal',
  is_RTL: false,
  day_size: 39,
  with_portal: false,
  with_full_screen_portal: false,
  first_day_of_week: 0,
  number_of_months_shown: 1,
  stay_open_on_select: false,
  reopen_calendar_on_clear: false,
  clearable: false,
  disabled: false,
  updatemode: 'singledate',
  persisted_props: ['start_date', 'end_date'],
  persistence_type: 'local'
};
var propTypes = DatePickerRange.propTypes;
exports.propTypes = propTypes;
var defaultProps = DatePickerRange.defaultProps;
exports.defaultProps = defaultProps;