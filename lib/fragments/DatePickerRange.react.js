"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("react-dates/initialize");

var _reactDates = require("react-dates");

var _react = _interopRequireWildcard(require("react"));

var _uniqid = _interopRequireDefault(require("uniqid"));

var _DatePickerRange = require("../components/DatePickerRange.react");

var _convertToMoment3 = _interopRequireDefault(require("../utils/convertToMoment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DatePickerRange =
/*#__PURE__*/
function (_Component) {
  _inherits(DatePickerRange, _Component);

  function DatePickerRange(props) {
    var _this;

    _classCallCheck(this, DatePickerRange);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatePickerRange).call(this, props));
    _this.propsToState = _this.propsToState.bind(_assertThisInitialized(_this));
    _this.onDatesChange = _this.onDatesChange.bind(_assertThisInitialized(_this));
    _this.isOutsideRange = _this.isOutsideRange.bind(_assertThisInitialized(_this));
    _this.state = {
      focused: false,
      start_date_id: props.start_date_id || (0, _uniqid.default)(),
      end_date_id: props.end_date_id || (0, _uniqid.default)()
    };
    return _this;
  }

  _createClass(DatePickerRange, [{
    key: "propsToState",
    value: function propsToState(newProps) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var state = {};

      if (force || newProps.start_date !== this.props.start_date) {
        state.start_date = newProps.start_date;
      }

      if (force || newProps.end_date !== this.props.end_date) {
        state.end_date = newProps.end_date;
      }

      if (Object.keys(state).length) {
        this.setState(state);
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      this.propsToState(newProps);
    }
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.propsToState(this.props, true);
    }
  }, {
    key: "onDatesChange",
    value: function onDatesChange(_ref) {
      var start_date = _ref.startDate,
          end_date = _ref.endDate;
      var _this$props = this.props,
          setProps = _this$props.setProps,
          updatemode = _this$props.updatemode,
          clearable = _this$props.clearable;
      var oldMomentDates = (0, _convertToMoment3.default)(this.state, ['start_date', 'end_date']);

      if (start_date && !start_date.isSame(oldMomentDates.start_date)) {
        if (updatemode === 'singledate') {
          setProps({
            start_date: start_date.format('YYYY-MM-DD')
          });
        } else {
          this.setState({
            start_date: start_date.format('YYYY-MM-DD')
          });
        }
      }

      if (end_date && !end_date.isSame(oldMomentDates.end_date)) {
        if (updatemode === 'singledate') {
          setProps({
            end_date: end_date.format('YYYY-MM-DD')
          });
        } else if (updatemode === 'bothdates') {
          setProps({
            start_date: this.state.start_date,
            end_date: end_date.format('YYYY-MM-DD')
          });
        }
      }

      if (clearable && !start_date && !end_date && (oldMomentDates.start_date !== start_date || oldMomentDates.end_date !== end_date)) {
        setProps({
          start_date: null,
          end_date: null
        });
      }
    }
  }, {
    key: "isOutsideRange",
    value: function isOutsideRange(date) {
      var _this$props2 = this.props,
          min_date_allowed = _this$props2.min_date_allowed,
          max_date_allowed = _this$props2.max_date_allowed;
      return min_date_allowed && date.isBefore(min_date_allowed) || max_date_allowed && date.isAfter(max_date_allowed);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var focusedInput = this.state.focusedInput;
      var _this$props3 = this.props,
          calendar_orientation = _this$props3.calendar_orientation,
          clearable = _this$props3.clearable,
          day_size = _this$props3.day_size,
          disabled = _this$props3.disabled,
          display_format = _this$props3.display_format,
          end_date_placeholder_text = _this$props3.end_date_placeholder_text,
          first_day_of_week = _this$props3.first_day_of_week,
          is_RTL = _this$props3.is_RTL,
          minimum_nights = _this$props3.minimum_nights,
          month_format = _this$props3.month_format,
          number_of_months_shown = _this$props3.number_of_months_shown,
          reopen_calendar_on_clear = _this$props3.reopen_calendar_on_clear,
          show_outside_days = _this$props3.show_outside_days,
          start_date_placeholder_text = _this$props3.start_date_placeholder_text,
          stay_open_on_select = _this$props3.stay_open_on_select,
          with_full_screen_portal = _this$props3.with_full_screen_portal,
          with_portal = _this$props3.with_portal,
          loading_state = _this$props3.loading_state,
          id = _this$props3.id,
          style = _this$props3.style,
          className = _this$props3.className,
          start_date_id = _this$props3.start_date_id,
          end_date_id = _this$props3.end_date_id;

      var _convertToMoment = (0, _convertToMoment3.default)(this.props, ['initial_visible_month']),
          initial_visible_month = _convertToMoment.initial_visible_month;

      var _convertToMoment2 = (0, _convertToMoment3.default)(this.state, ['start_date', 'end_date']),
          start_date = _convertToMoment2.start_date,
          end_date = _convertToMoment2.end_date;

      var verticalFlag = calendar_orientation !== 'vertical';

      var DatePickerWrapperStyles = _objectSpread({
        position: 'relative',
        display: 'inline-block'
      }, style); // the height in px of the top part of the calendar (that holds
      // the name of the month)


      var baselineHeight = 145;
      return _react.default.createElement("div", {
        id: id,
        style: DatePickerWrapperStyles,
        className: className,
        "data-dash-is-loading": loading_state && loading_state.is_loading || undefined
      }, _react.default.createElement(_reactDates.DateRangePicker, {
        daySize: day_size,
        disabled: disabled,
        displayFormat: display_format,
        enableOutsideDays: show_outside_days,
        endDate: end_date,
        endDatePlaceholderText: end_date_placeholder_text,
        firstDayOfWeek: first_day_of_week,
        focusedInput: focusedInput,
        initialVisibleMonth: function initialVisibleMonth() {
          if (initial_visible_month) {
            return initial_visible_month;
          } else if (end_date && focusedInput === 'endDate') {
            return end_date;
          } else if (start_date && focusedInput === 'startDate') {
            return start_date;
          }

          return start_date;
        },
        isOutsideRange: this.isOutsideRange,
        isRTL: is_RTL,
        keepOpenOnDateSelect: stay_open_on_select,
        minimumNights: minimum_nights,
        monthFormat: month_format,
        numberOfMonths: number_of_months_shown,
        onDatesChange: this.onDatesChange,
        onFocusChange: function onFocusChange(focusedInput) {
          return _this2.setState({
            focusedInput: focusedInput
          });
        },
        orientation: calendar_orientation,
        reopenPickerOnClearDates: reopen_calendar_on_clear,
        showClearDates: clearable,
        startDate: start_date,
        startDatePlaceholderText: start_date_placeholder_text,
        withFullScreenPortal: with_full_screen_portal && verticalFlag,
        withPortal: with_portal && verticalFlag,
        startDateId: start_date_id || this.state.start_date_id,
        endDateId: end_date_id || this.state.end_date_id,
        verticalHeight: baselineHeight + day_size * 6 + 'px'
      }));
    }
  }]);

  return DatePickerRange;
}(_react.Component);

exports.default = DatePickerRange;
DatePickerRange.propTypes = _DatePickerRange.propTypes;
DatePickerRange.defaultProps = _DatePickerRange.defaultProps;