"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// eslint-disable-line no-unused-vars

/**
 * A component that repeatedly increments a counter `n_intervals`
 * with a fixed time delay between each increment.
 * Interval is good for triggering a component on a recurring basis.
 * The time delay is set with the property "interval" in milliseconds.
 */
var Interval =
/*#__PURE__*/
function (_Component) {
  _inherits(Interval, _Component);

  function Interval(props) {
    var _this;

    _classCallCheck(this, Interval);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Interval).call(this, props));
    _this.intervalId = null;
    _this.reportInterval = _this.reportInterval.bind(_assertThisInitialized(_this));
    _this.handleTimer = _this.handleTimer.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Interval, [{
    key: "handleTimer",
    value: function handleTimer(props) {
      // Check if timer should stop or shouldn't even start
      if (props.max_intervals === 0 || props.disabled || props.n_intervals >= props.max_intervals && props.max_intervals !== -1) {
        // stop existing timer
        if (this.intervalId) {
          this.clearTimer();
        } // and don't start a timer


        return;
      } // keep the existing timer running


      if (this.intervalId) {
        return;
      } // it hasn't started yet (& it should start)


      this.intervalId = window.setInterval(this.reportInterval, props.interval);
    }
  }, {
    key: "resetTimer",
    value: function resetTimer(props) {
      this.clearTimer();
      this.handleTimer(props);
    }
  }, {
    key: "clearTimer",
    value: function clearTimer() {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }, {
    key: "reportInterval",
    value: function reportInterval() {
      var _this$props = this.props,
          setProps = _this$props.setProps,
          n_intervals = _this$props.n_intervals;
      setProps({
        n_intervals: n_intervals + 1
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleTimer(this.props);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.interval !== this.props.interval) {
        this.resetTimer(nextProps);
      } else {
        this.handleTimer(nextProps);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearTimer();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Interval;
}(_react.Component);

exports.default = Interval;
Interval.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: _propTypes.default.string,

  /**
   * This component will increment the counter `n_intervals` every
   * `interval` milliseconds
   */
  interval: _propTypes.default.number,

  /**
   * If True, the counter will no longer update
   */
  disabled: _propTypes.default.bool,

  /**
   * Number of times the interval has passed
   */
  n_intervals: _propTypes.default.number,

  /**
   * Number of times the interval will be fired.
   * If -1, then the interval has no limit (the default)
   * and if 0 then the interval stops running.
   */
  max_intervals: _propTypes.default.number,

  /**
   * Dash assigned callback
   */
  setProps: _propTypes.default.func
};
Interval.defaultProps = {
  interval: 1000,
  n_intervals: 0,
  max_intervals: -1
};