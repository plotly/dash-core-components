"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _rcSlider = _interopRequireWildcard(require("rc-slider"));

var _ramda = require("ramda");

var _computeSliderStyle = _interopRequireDefault(require("../utils/computeSliderStyle"));

require("rc-slider/assets/index.css");

var _Slider = require("../components/Slider.react");

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

/**
 * A slider component with a single handle.
 */
var Slider =
/*#__PURE__*/
function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));
    _this.propsToState = _this.propsToState.bind(_assertThisInitialized(_this));
    _this.DashSlider = props.tooltip ? (0, _rcSlider.createSliderWithTooltip)(_rcSlider.default) : _rcSlider.default;
    _this._computeStyle = (0, _computeSliderStyle.default)();
    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(Slider, [{
    key: "propsToState",
    value: function propsToState(newProps) {
      if (newProps.value !== this.props.value) {
        this.setState({
          value: newProps.value
        });
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      if (newProps.tooltip !== this.props.tooltip) {
        this.DashSlider = newProps.tooltip ? (0, _rcSlider.createSliderWithTooltip)(_rcSlider.default) : _rcSlider.default;
      }

      this.propsToState(newProps);
    }
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.propsToState(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          id = _this$props.id,
          loading_state = _this$props.loading_state,
          setProps = _this$props.setProps,
          tooltip = _this$props.tooltip,
          updatemode = _this$props.updatemode,
          vertical = _this$props.vertical,
          verticalHeight = _this$props.verticalHeight;
      var value = this.state.value;
      var tipProps;

      if (tooltip && tooltip.always_visible) {
        /**
         * clone `tooltip` but with renamed key `always_visible` -> `visible`
         * the rc-tooltip API uses `visible`, but `always_visible` is more semantic
         * assigns the new (renamed) key to the old key and deletes the old key
         */
        tipProps = (0, _ramda.assoc)('visible', tooltip.always_visible, tooltip);
        delete tipProps.always_visible;
      } else {
        tipProps = tooltip;
      }

      var truncatedMarks = this.props.marks ? (0, _ramda.pickBy)(function (k, mark) {
        return mark >= _this2.props.min && mark <= _this2.props.max;
      }, this.props.marks) : this.props.marks;
      return _react.default.createElement("div", {
        id: id,
        "data-dash-is-loading": loading_state && loading_state.is_loading || undefined,
        className: className,
        style: this._computeStyle(vertical, verticalHeight, tooltip)
      }, _react.default.createElement(this.DashSlider, _extends({
        onChange: function onChange(value) {
          if (updatemode === 'drag') {
            setProps({
              value: value
            });
          } else {
            _this2.setState({
              value: value
            });
          }
        },
        onAfterChange: function onAfterChange(value) {
          if (updatemode === 'mouseup') {
            setProps({
              value: value
            });
          }
        },
        tipProps: tipProps,
        value: value,
        marks: truncatedMarks
      }, (0, _ramda.omit)(['className', 'setProps', 'updatemode', 'value', 'marks', 'verticalHeight'], this.props))));
    }
  }]);

  return Slider;
}(_react.Component);

exports.default = Slider;
Slider.propTypes = _Slider.propTypes;
Slider.defaultProps = _Slider.defaultProps;