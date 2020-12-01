"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _slider = _interopRequireDefault(require("../utils/LazyLoader/slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RealSlider = (0, _react.lazy)(_slider.default);
/**
 * A slider component with a single handle.
 */

var Slider =
/*#__PURE__*/
function (_Component) {
  _inherits(Slider, _Component);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, _getPrototypeOf(Slider).apply(this, arguments));
  }

  _createClass(Slider, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.Suspense, {
        fallback: null
      }, _react.default.createElement(RealSlider, this.props));
    }
  }]);

  return Slider;
}(_react.Component);

exports.default = Slider;
Slider.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: _propTypes.default.string,

  /**
   * Marks on the slider.
   * The key determines the position (a number),
   * and the value determines what will show.
   * If you want to set the style of a specific mark point,
   * the value should be an object which
   * contains style and label properties.
   */
  marks: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.exact({
    label: _propTypes.default.string,
    style: _propTypes.default.object
  })])),

  /**
   * The value of the input
   */
  value: _propTypes.default.number,

  /**
   * Additional CSS class for the root DOM node
   */
  className: _propTypes.default.string,

  /**
   * If true, the handles can't be moved.
   */
  disabled: _propTypes.default.bool,

  /**
   * When the step value is greater than 1,
   * you can set the dots to true if you want to
   * render the slider with dots.
   */
  dots: _propTypes.default.bool,

  /**
   * If the value is true, it means a continuous
   * value is included. Otherwise, it is an independent value.
   */
  included: _propTypes.default.bool,

  /**
   * Minimum allowed value of the slider
   */
  min: _propTypes.default.number,

  /**
   * Maximum allowed value of the slider
   */
  max: _propTypes.default.number,

  /**
   * Configuration for tooltips describing the current slider value
   */
  tooltip: _propTypes.default.exact({
    /**
     * Determines whether tooltips should always be visible
     * (as opposed to the default, visible on hover)
     */
    always_visible: _propTypes.default.bool,

    /**
     * Determines the placement of tooltips
     * See https://github.com/react-component/tooltip#api
     * top/bottom{*} sets the _origin_ of the tooltip, so e.g. `topLeft`
     * will in reality appear to be on the top right of the handle
     */
    placement: _propTypes.default.oneOf(['left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
  }),

  /**
   * Value by which increments or decrements are made
   */
  step: _propTypes.default.number,

  /**
   * If true, the slider will be vertical
   */
  vertical: _propTypes.default.bool,

  /**
   * The height, in px, of the slider if it is vertical.
   */
  verticalHeight: _propTypes.default.number,

  /**
   * Determines when the component should update
   * its value. If `mouseup`, then the slider
   * will only trigger its value when the user has
   * finished dragging the slider. If `drag`, then
   * the slider will update its value continuously
   * as it is being dragged.
   * Only use `drag` if your updates are fast.
   */
  updatemode: _propTypes.default.oneOf(['mouseup', 'drag']),

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
Slider.defaultProps = {
  updatemode: 'mouseup',
  persisted_props: ['value'],
  persistence_type: 'local',
  verticalHeight: 400
};
var propTypes = Slider.propTypes;
exports.propTypes = propTypes;
var defaultProps = Slider.defaultProps;
exports.defaultProps = defaultProps;