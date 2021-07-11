"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ramda = require("ramda");

var _rcSlider = require("rc-slider");

var _computeSliderStyle = _interopRequireDefault(require("../utils/computeSliderStyle"));

require("rc-slider/assets/index.css");

var _RangeSlider = require("../components/RangeSlider.react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RangeSlider = /*#__PURE__*/function (_Component) {
  _inherits(RangeSlider, _Component);

  var _super = _createSuper(RangeSlider);

  function RangeSlider(props) {
    var _this;

    _classCallCheck(this, RangeSlider);

    _this = _super.call(this, props);
    _this.DashSlider = props.tooltip ? (0, _rcSlider.createSliderWithTooltip)(_rcSlider.Range) : _rcSlider.Range;
    _this._computeStyle = (0, _computeSliderStyle.default)();
    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(RangeSlider, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      if (newProps.tooltip !== this.props.tooltip) {
        this.DashSlider = newProps.tooltip ? (0, _rcSlider.createSliderWithTooltip)(_rcSlider.Range) : _rcSlider.Range;
      }

      if (newProps.value !== this.props.value) {
        this.props.setProps({
          drag_value: newProps.value
        });
        this.setState({
          value: newProps.value
        });
      }
    }
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      if (this.props.value !== null) {
        this.props.setProps({
          drag_value: this.props.value
        });
        this.setState({
          value: this.props.value
        });
      }
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
         * the rc-tooltip API uses `visible`, but `always_visible is more semantic
         * assigns the new (renamed) key to the old key and deletes the old key
         */
        tipProps = (0, _ramda.assoc)('visible', tooltip.always_visible, tooltip);
        delete tipProps.always_visible;
      } else {
        tipProps = tooltip;
      }

      var truncatedMarks = this.props.marks && (0, _ramda.pickBy)(function (k, mark) {
        return mark >= _this2.props.min && mark <= _this2.props.max;
      }, this.props.marks);
      return /*#__PURE__*/_react.default.createElement("div", {
        id: id,
        "data-dash-is-loading": loading_state && loading_state.is_loading || undefined,
        className: className,
        style: this._computeStyle(vertical, verticalHeight, tooltip)
      }, /*#__PURE__*/_react.default.createElement(this.DashSlider, _extends({
        onChange: function onChange(value) {
          if (updatemode === 'drag') {
            setProps({
              value: value,
              drag_value: value
            });
          } else {
            _this2.setState({
              value: value
            });

            setProps({
              drag_value: value
            });
          }
        },
        onAfterChange: function onAfterChange(value) {
          if (updatemode === 'mouseup') {
            setProps({
              value: value
            });
          }
        }
        /*
        if/when rc-slider or rc-tooltip are updated to latest versions,
        we will need to revisit this code as the getTooltipContainer function will need to be a prop instead of a nested property
        */
        ,
        tipProps: _objectSpread(_objectSpread({}, tipProps), {}, {
          getTooltipContainer: function getTooltipContainer(node) {
            return node;
          }
        }),
        style: {
          position: 'relative'
        },
        value: value,
        marks: truncatedMarks
      }, (0, _ramda.omit)(['className', 'value', 'drag_value', 'setProps', 'marks', 'updatemode', 'verticalHeight'], this.props))));
    }
  }]);

  return RangeSlider;
}(_react.Component);

exports.default = RangeSlider;
RangeSlider.propTypes = _RangeSlider.propTypes;
RangeSlider.defaultProps = _RangeSlider.defaultProps;