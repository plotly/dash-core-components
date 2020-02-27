"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("react-dates/initialize");

var _reactDates = require("react-dates");

var _moment = _interopRequireDefault(require("moment"));

var _react = _interopRequireWildcard(require("react"));

var _DatePickerSingle = require("../components/DatePickerSingle.react");

var _convertToMoment3 = _interopRequireDefault(require("../utils/convertToMoment"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var DatePickerSingle =
/*#__PURE__*/
function (_Component) {
  _inherits(DatePickerSingle, _Component);

  function DatePickerSingle() {
    var _this;

    _classCallCheck(this, DatePickerSingle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatePickerSingle).call(this));
    _this.isOutsideRange = _this.isOutsideRange.bind(_assertThisInitialized(_this));
    _this.onDateChange = _this.onDateChange.bind(_assertThisInitialized(_this));
    _this.state = {
      focused: false
    };
    return _this;
  }

  _createClass(DatePickerSingle, [{
    key: "isOutsideRange",
    value: function isOutsideRange(date) {
      var _convertToMoment = (0, _convertToMoment3.default)(this.props, ['max_date_allowed', 'min_date_allowed']),
          max_date_allowed = _convertToMoment.max_date_allowed,
          min_date_allowed = _convertToMoment.min_date_allowed;

      return min_date_allowed && date.isBefore(min_date_allowed) || max_date_allowed && date.isAfter(max_date_allowed);
    }
  }, {
    key: "onDateChange",
    value: function onDateChange(date) {
      var setProps = this.props.setProps;
      var payload = {
        date: date ? date.format('YYYY-MM-DD') : null
      };
      setProps(payload);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var focused = this.state.focused;
      var _this$props = this.props,
          calendar_orientation = _this$props.calendar_orientation,
          clearable = _this$props.clearable,
          day_size = _this$props.day_size,
          disabled = _this$props.disabled,
          display_format = _this$props.display_format,
          first_day_of_week = _this$props.first_day_of_week,
          is_RTL = _this$props.is_RTL,
          month_format = _this$props.month_format,
          number_of_months_shown = _this$props.number_of_months_shown,
          placeholder = _this$props.placeholder,
          reopen_calendar_on_clear = _this$props.reopen_calendar_on_clear,
          show_outside_days = _this$props.show_outside_days,
          stay_open_on_select = _this$props.stay_open_on_select,
          with_full_screen_portal = _this$props.with_full_screen_portal,
          with_portal = _this$props.with_portal,
          loading_state = _this$props.loading_state,
          id = _this$props.id,
          style = _this$props.style,
          className = _this$props.className;

      var _convertToMoment2 = (0, _convertToMoment3.default)(this.props, ['date', 'initial_visible_month']),
          date = _convertToMoment2.date,
          initial_visible_month = _convertToMoment2.initial_visible_month;

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
      }, _react.default.createElement(_reactDates.SingleDatePicker, {
        date: date,
        onDateChange: this.onDateChange,
        focused: focused,
        onFocusChange: function onFocusChange(_ref) {
          var focused = _ref.focused;
          return _this2.setState({
            focused: focused
          });
        },
        initialVisibleMonth: function initialVisibleMonth() {
          return date || initial_visible_month || (0, _moment.default)();
        },
        isOutsideRange: this.isOutsideRange,
        numberOfMonths: number_of_months_shown,
        withPortal: with_portal && verticalFlag,
        withFullScreenPortal: with_full_screen_portal && verticalFlag,
        firstDayOfWeek: first_day_of_week,
        enableOutsideDays: show_outside_days,
        monthFormat: month_format,
        displayFormat: display_format,
        placeholder: placeholder,
        showClearDate: clearable,
        disabled: disabled,
        keepOpenOnDateSelect: stay_open_on_select,
        reopenPickerOnClearDate: reopen_calendar_on_clear,
        isRTL: is_RTL,
        orientation: calendar_orientation,
        daySize: day_size,
        verticalHeight: baselineHeight + day_size * 6 + 'px'
      }));
    }
  }]);

  return DatePickerSingle;
}(_react.Component);

exports.default = DatePickerSingle;
DatePickerSingle.propTypes = _DatePickerSingle.propTypes;
DatePickerSingle.defaultProps = _DatePickerSingle.defaultProps;