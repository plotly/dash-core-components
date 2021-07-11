"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactResizeDetector = _interopRequireDefault(require("react-resize-detector"));

var _ramda = require("ramda");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Graph = require("../components/Graph.react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/* global Plotly:true */

/**
 * `autosize: true` causes Plotly.js to conform to the parent element size.
 * This is necessary for `dcc.Graph` call to `Plotly.Plots.resize(target)` to do something.
 *
 * Users can override this value for specific use-cases by explicitly passing `autoresize: true`
 * if `responsive` is not set to True.
 */
var RESPONSIVE_LAYOUT = {
  autosize: true,
  height: undefined,
  width: undefined
};
var AUTO_LAYOUT = {};
var UNRESPONSIVE_LAYOUT = {
  autosize: false
};
/**
 * `responsive: true` causes Plotly.js to resize the graph on `window.resize`.
 * This is necessary for `dcc.Graph` call to `Plotly.Plots.resize(target)` to do something.
 *
 * Users can override this value for specific use-cases by explicitly passing `responsive: false`
 * if `responsive` is not set to True.
 */

var RESPONSIVE_CONFIG = {
  responsive: true
};
var AUTO_CONFIG = {};
var UNRESPONSIVE_CONFIG = {
  responsive: false
};

var filterEventData = function filterEventData(gd, eventData, event) {
  var filteredEventData;

  if ((0, _ramda.includes)(event, ['click', 'hover', 'selected'])) {
    var points = [];

    if ((0, _ramda.isNil)(eventData)) {
      return null;
    }
    /*
     * remove `data`, `layout`, `xaxis`, etc
     * objects from the event data since they're so big
     * and cause JSON stringify ciricular structure errors.
     *
     * also, pull down the `customdata` point from the data array
     * into the event object
     */


    var data = gd.data;

    for (var i = 0; i < eventData.points.length; i++) {
      var fullPoint = eventData.points[i];
      var pointData = (0, _ramda.filter)(function (o) {
        return !(0, _ramda.includes)((0, _ramda.type)(o), ['Object', 'Array']);
      }, fullPoint);

      if ((0, _ramda.has)('curveNumber', fullPoint) && (0, _ramda.has)('pointNumber', fullPoint) && (0, _ramda.has)('customdata', data[pointData.curveNumber])) {
        pointData.customdata = data[pointData.curveNumber].customdata[fullPoint.pointNumber];
      } // specific to histogram. see https://github.com/plotly/plotly.js/pull/2113/


      if ((0, _ramda.has)('pointNumbers', fullPoint)) {
        pointData.pointNumbers = fullPoint.pointNumbers;
      }

      points[i] = pointData;
    }

    filteredEventData = {
      points: points
    };
  } else if (event === 'relayout' || event === 'restyle') {
    /*
     * relayout shouldn't include any big objects
     * it will usually just contain the ranges of the axes like
     * "xaxis.range[0]": 0.7715822247381828,
     * "xaxis.range[1]": 3.0095292008680063`
     */
    filteredEventData = eventData;
  }

  if ((0, _ramda.has)('range', eventData)) {
    filteredEventData.range = eventData.range;
  }

  if ((0, _ramda.has)('lassoPoints', eventData)) {
    filteredEventData.lassoPoints = eventData.lassoPoints;
  }

  return filteredEventData;
};
/**
 * Graph can be used to render any plotly.js-powered data visualization.
 *
 * You can define callbacks based on user interaction with Graphs such as
 * hovering, clicking or selecting
 */


var PlotlyGraph = /*#__PURE__*/function (_Component) {
  _inherits(PlotlyGraph, _Component);

  var _super = _createSuper(PlotlyGraph);

  function PlotlyGraph(props) {
    var _this;

    _classCallCheck(this, PlotlyGraph);

    _this = _super.call(this, props);
    _this.gd = /*#__PURE__*/_react.default.createRef();
    _this._hasPlotted = false;
    _this._prevGd = null;
    _this.bindEvents = _this.bindEvents.bind(_assertThisInitialized(_this));
    _this.getConfig = _this.getConfig.bind(_assertThisInitialized(_this));
    _this.getConfigOverride = _this.getConfigOverride.bind(_assertThisInitialized(_this));
    _this.getLayout = _this.getLayout.bind(_assertThisInitialized(_this));
    _this.getLayoutOverride = _this.getLayoutOverride.bind(_assertThisInitialized(_this));
    _this.graphResize = _this.graphResize.bind(_assertThisInitialized(_this));
    _this.isResponsive = _this.isResponsive.bind(_assertThisInitialized(_this));
    _this.state = {
      override: {},
      originals: {}
    };
    return _this;
  }

  _createClass(PlotlyGraph, [{
    key: "plot",
    value: function plot(props) {
      var _this2 = this;

      var figure = props.figure,
          config = props.config;
      var animate = props.animate,
          animation_options = props.animation_options,
          responsive = props.responsive;
      var gd = this.gd.current;
      figure = props._dashprivate_transformFigure(figure, gd);
      config = props._dashprivate_transformConfig(config, gd);

      if (animate && this._hasPlotted && figure.data.length === gd.data.length) {
        return Plotly.animate(gd, figure, animation_options);
      }

      var configClone = this.getConfig(config, responsive);
      var layoutClone = this.getLayout(figure.layout, responsive);
      gd.classList.add('dash-graph--pending');
      return Plotly.react(gd, {
        data: figure.data,
        layout: layoutClone,
        frames: figure.frames,
        config: configClone
      }).then(function () {
        var gd = _this2.gd.current; // double-check gd hasn't been unmounted

        if (!gd) {
          return;
        }

        gd.classList.remove('dash-graph--pending'); // in case we've made a new DOM element, transfer events

        if (_this2._hasPlotted && gd !== _this2._prevGd) {
          if (_this2._prevGd && _this2._prevGd.removeAllListeners) {
            _this2._prevGd.removeAllListeners();

            Plotly.purge(_this2._prevGd);
          }

          _this2._hasPlotted = false;
        }

        if (!_this2._hasPlotted) {
          _this2.bindEvents();

          _this2.graphResize(true);

          _this2._hasPlotted = true;
          _this2._prevGd = gd;
        }
      });
    }
  }, {
    key: "mergeTraces",
    value: function mergeTraces(props, dataKey, plotlyFnKey) {
      var _this3 = this;

      var clearState = props.clearState;
      var dataArray = props[dataKey];
      dataArray.forEach(function (data) {
        var updateData, traceIndices, maxPoints;

        if (Array.isArray(data) && _typeof(data[0]) === 'object') {
          var _data = _slicedToArray(data, 3);

          updateData = _data[0];
          traceIndices = _data[1];
          maxPoints = _data[2];
        } else {
          updateData = data;
        }

        if (!traceIndices) {
          function getFirstProp(data) {
            return data[Object.keys(data)[0]];
          }

          function generateIndices(data) {
            return Array.from(Array(getFirstProp(data).length).keys());
          }

          traceIndices = generateIndices(updateData);
        }

        var gd = _this3.gd.current;
        return Plotly[plotlyFnKey](gd, updateData, traceIndices, maxPoints);
      });
      clearState(dataKey);
    }
  }, {
    key: "getConfig",
    value: function getConfig(config, responsive) {
      return (0, _ramda.mergeDeepRight)(config, this.getConfigOverride(responsive));
    }
  }, {
    key: "getLayout",
    value: function getLayout(layout, responsive) {
      if (!layout) {
        return layout;
      }

      var override = this.getLayoutOverride(responsive);
      var _this$state = this.state,
          prev_override = _this$state.override,
          prev_originals = _this$state.originals; // Store the original data that we're about to override

      var originals = {};

      for (var key in override) {
        if (layout[key] !== prev_override[key]) {
          originals[key] = layout[key];
        } else if (prev_originals.hasOwnProperty(key)) {
          originals[key] = prev_originals[key];
        }
      }

      this.setState({
        override: override,
        originals: originals
      }); // Undo the previous override, but only for keys that the user did not change

      for (var _key in prev_originals) {
        if (layout[_key] === prev_override[_key]) {
          layout[_key] = prev_originals[_key];
        }
      } // Apply the current override


      for (var _key2 in override) {
        layout[_key2] = override[_key2];
      }

      return layout; // not really a clone
    }
  }, {
    key: "getConfigOverride",
    value: function getConfigOverride(responsive) {
      switch (responsive) {
        case false:
          return UNRESPONSIVE_CONFIG;

        case true:
          return RESPONSIVE_CONFIG;

        default:
          return AUTO_CONFIG;
      }
    }
  }, {
    key: "getLayoutOverride",
    value: function getLayoutOverride(responsive) {
      switch (responsive) {
        case false:
          return UNRESPONSIVE_LAYOUT;

        case true:
          return RESPONSIVE_LAYOUT;

        default:
          return AUTO_LAYOUT;
      }
    }
  }, {
    key: "isResponsive",
    value: function isResponsive(props) {
      var config = props.config,
          figure = props.figure,
          responsive = props.responsive;

      if ((0, _ramda.type)(responsive) === 'Boolean') {
        return responsive;
      }

      return Boolean(config.responsive && (!figure.layout || (figure.layout.autosize || (0, _ramda.isNil)(figure.layout.autosize)) && ((0, _ramda.isNil)(figure.layout.height) || (0, _ramda.isNil)(figure.layout.width))));
    }
  }, {
    key: "graphResize",
    value: function graphResize() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!force && !this.isResponsive(this.props)) {
        return;
      }

      var gd = this.gd.current;

      if (!gd) {
        return;
      }

      gd.classList.add('dash-graph--pending');
      Plotly.Plots.resize(gd).catch(function () {}).finally(function () {
        return gd.classList.remove('dash-graph--pending');
      });
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this$props = this.props,
          setProps = _this$props.setProps,
          clear_on_unhover = _this$props.clear_on_unhover,
          relayoutData = _this$props.relayoutData,
          restyleData = _this$props.restyleData,
          hoverData = _this$props.hoverData,
          selectedData = _this$props.selectedData;
      var gd = this.gd.current;
      gd.on('plotly_click', function (eventData) {
        var clickData = filterEventData(gd, eventData, 'click');

        if (!(0, _ramda.isNil)(clickData)) {
          setProps({
            clickData: clickData
          });
        }
      });
      gd.on('plotly_clickannotation', function (eventData) {
        var clickAnnotationData = (0, _ramda.omit)(['event', 'fullAnnotation'], eventData);
        setProps({
          clickAnnotationData: clickAnnotationData
        });
      });
      gd.on('plotly_hover', function (eventData) {
        var hover = filterEventData(gd, eventData, 'hover');

        if (!(0, _ramda.isNil)(hover) && !(0, _ramda.equals)(hover, hoverData)) {
          setProps({
            hoverData: hover
          });
        }
      });
      gd.on('plotly_selected', function (eventData) {
        var selected = filterEventData(gd, eventData, 'selected');

        if (!(0, _ramda.isNil)(selected) && !(0, _ramda.equals)(selected, selectedData)) {
          setProps({
            selectedData: selected
          });
        }
      });
      gd.on('plotly_deselect', function () {
        setProps({
          selectedData: null
        });
      });
      gd.on('plotly_relayout', function (eventData) {
        var relayout = filterEventData(gd, eventData, 'relayout');

        if (!(0, _ramda.isNil)(relayout) && !(0, _ramda.equals)(relayout, relayoutData)) {
          setProps({
            relayoutData: relayout
          });
        }
      });
      gd.on('plotly_restyle', function (eventData) {
        var restyle = filterEventData(gd, eventData, 'restyle');

        if (!(0, _ramda.isNil)(restyle) && !(0, _ramda.equals)(restyle, restyleData)) {
          setProps({
            restyleData: restyle
          });
        }
      });
      gd.on('plotly_unhover', function () {
        if (clear_on_unhover) {
          setProps({
            hoverData: null
          });
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$prependDa, _this$props$extendDat;

      this.plot(this.props);

      if (this.props.prependData) {
        this.mergeTraces(this.props, 'prependData', 'prependTraces');
      }

      if (this.props.extendData) {
        this.mergeTraces(this.props, 'extendData', 'extendTraces');
      }

      if ((_this$props$prependDa = this.props.prependData) !== null && _this$props$prependDa !== void 0 && _this$props$prependDa.length || (_this$props$extendDat = this.props.extendData) !== null && _this$props$extendDat !== void 0 && _this$props$extendDat.length) {
        this.props._dashprivate_onFigureModified(this.props.figure);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var gd = this.gd.current;

      if (gd && gd.removeAllListeners) {
        gd.removeAllListeners();

        if (this._hasPlotted) {
          Plotly.purge(gd);
        }
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.id !== nextProps.id || JSON.stringify(this.props.style) !== JSON.stringify(nextProps.style) || JSON.stringify(this.props.loading_state) !== JSON.stringify(nextProps.loading_state);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this$props$prependDa2, _this$props$extendDat2;

      var idChanged = this.props.id !== nextProps.id;

      if (idChanged) {
        /*
         * then the dom needs to get re-rendered with a new ID.
         * the graph will get updated in componentDidUpdate
         */
        return;
      }

      if (this.props.figure !== nextProps.figure || this.props._dashprivate_transformConfig !== nextProps._dashprivate_transformConfig || this.props._dashprivate_transformFigure !== nextProps._dashprivate_transformFigure) {
        this.plot(nextProps);
      }

      if (this.props.prependData !== nextProps.prependData) {
        this.mergeTraces(nextProps, 'prependData', 'prependTraces');
      }

      if (this.props.extendData !== nextProps.extendData) {
        this.mergeTraces(nextProps, 'extendData', 'extendTraces');
      }

      if ((_this$props$prependDa2 = this.props.prependData) !== null && _this$props$prependDa2 !== void 0 && _this$props$prependDa2.length || (_this$props$extendDat2 = this.props.extendData) !== null && _this$props$extendDat2 !== void 0 && _this$props$extendDat2.length) {
        this.props._dashprivate_onFigureModified(this.props.figure);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.id !== this.props.id) {
        this.plot(this.props);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          id = _this$props2.id,
          style = _this$props2.style,
          loading_state = _this$props2.loading_state;
      return /*#__PURE__*/_react.default.createElement("div", {
        id: id,
        key: id,
        "data-dash-is-loading": loading_state && loading_state.is_loading || undefined,
        className: className,
        style: style
      }, /*#__PURE__*/_react.default.createElement(_reactResizeDetector.default, {
        handleHeight: true,
        handleWidth: true,
        refreshMode: "debounce",
        refreshOptions: {
          trailing: true
        },
        refreshRate: 50,
        onResize: this.graphResize
      }), /*#__PURE__*/_react.default.createElement("div", {
        ref: this.gd,
        style: {
          height: '100%',
          width: '100%'
        }
      }));
    }
  }]);

  return PlotlyGraph;
}(_react.Component);

PlotlyGraph.propTypes = _objectSpread(_objectSpread({}, _Graph.graphPropTypes), {}, {
  prependData: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object])),
  extendData: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object])),
  clearState: _propTypes.default.func.isRequired
});
PlotlyGraph.defaultProps = _objectSpread(_objectSpread({}, _Graph.graphDefaultProps), {}, {
  prependData: [],
  extendData: []
});
var _default = PlotlyGraph;
exports.default = _default;