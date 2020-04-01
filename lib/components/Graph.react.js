"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.graphDefaultProps = exports.graphPropTypes = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dashComponentPlugins = require("@plotly/dash-component-plugins");

var _graph = _interopRequireDefault(require("../utils/LazyLoader/graph"));

var _plotly = _interopRequireDefault(require("../utils/LazyLoader/plotly"));

var _Graph = require("../fragments/Graph.privateprops");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var EMPTY_EXTEND_DATA = [];
/**
 * Graph can be used to render any plotly.js-powered data visualization.
 *
 * You can define callbacks based on user interaction with Graphs such as
 * hovering, clicking or selecting
 */

var PlotlyGraph =
/*#__PURE__*/
function (_Component) {
  _inherits(PlotlyGraph, _Component);

  function PlotlyGraph(props) {
    var _this;

    _classCallCheck(this, PlotlyGraph);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PlotlyGraph).call(this, props));
    _this.state = {
      extendData: []
    };
    _this.clearExtendData = _this.clearExtendData.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PlotlyGraph, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.extendData) {
        this.setState({
          extendData: [this.props.extendData]
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState({
        extendData: []
      });
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var extendData = this.state.extendData.slice(0);

      if (this.props.figure !== nextProps.figure) {
        extendData = EMPTY_EXTEND_DATA;
      }

      if (nextProps.extendData && this.props.extendData !== nextProps.extendData) {
        extendData.push(nextProps.extendData);
      } else {
        extendData = EMPTY_EXTEND_DATA;
      }

      if (extendData !== EMPTY_EXTEND_DATA) {
        this.setState({
          extendData: extendData
        });
      }
    }
  }, {
    key: "clearExtendData",
    value: function clearExtendData() {
      this.setState(function (_ref) {
        var extendData = _ref.extendData;
        var res = extendData && extendData.length ? {
          extendData: EMPTY_EXTEND_DATA
        } : undefined;
        return res;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(ControlledPlotlyGraph, _extends({}, this.props, {
        extendData: this.state.extendData,
        clearExtendData: this.clearExtendData
      }));
    }
  }]);

  return PlotlyGraph;
}(_react.Component);

var RealPlotlyGraph = (0, _dashComponentPlugins.asyncDecorator)(PlotlyGraph, function () {
  return Promise.all([(0, _plotly.default)(), (0, _graph.default)()]).then(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        graph = _ref3[1];

    return graph;
  });
});
var ControlledPlotlyGraph = (0, _react.memo)(function (props) {
  var className = props.className,
      id = props.id;
  var extendedClassName = className ? 'dash-graph ' + className : 'dash-graph';
  return _react.default.createElement(_react.Suspense, {
    fallback: _react.default.createElement("div", {
      id: id,
      key: id,
      className: "".concat(extendedClassName, " dash-graph--pending")
    })
  }, _react.default.createElement(RealPlotlyGraph, _extends({}, props, {
    className: extendedClassName
  })));
});
PlotlyGraph.propTypes = _objectSpread({}, _Graph.privatePropTypes, {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: _propTypes.default.string,

  /**
   * If True, the Plotly.js plot will be fully responsive to window resize
   * and parent element resize event. This is achieved by overriding
   * `config.responsive` to True, `figure.layout.autosize` to True and unsetting
   * `figure.layout.height` and `figure.layout.width`.
   * If False, the Plotly.js plot not be responsive to window resize and
   * parent element resize event. This is achieved by overriding `config.responsive`
   * to False and `figure.layout.autosize` to False.
   * If 'auto' (default), the Graph will determine if the Plotly.js plot can be made fully
   * responsive (True) or not (False) based on the values in `config.responsive`,
   * `figure.layout.autosize`, `figure.layout.height`, `figure.layout.width`.
   * This is the legacy behavior of the Graph component.
   *
   * Needs to be combined with appropriate dimension / styling through the `style` prop
   * to fully take effect.
   */
  responsive: _propTypes.default.oneOf([true, false, 'auto']),

  /**
   * Data from latest click event. Read-only.
   */
  clickData: _propTypes.default.object,

  /**
   * Data from latest click annotation event. Read-only.
   */
  clickAnnotationData: _propTypes.default.object,

  /**
   * Data from latest hover event. Read-only.
   */
  hoverData: _propTypes.default.object,

  /**
   * If True, `clear_on_unhover` will clear the `hoverData` property
   * when the user "unhovers" from a point.
   * If False, then the `hoverData` property will be equal to the
   * data from the last point that was hovered over.
   */
  clear_on_unhover: _propTypes.default.bool,

  /**
   * Data from latest select event. Read-only.
   */
  selectedData: _propTypes.default.object,

  /**
   * Data from latest relayout event which occurs
   * when the user zooms or pans on the plot or other
   * layout-level edits. Has the form `{<attr string>: <value>}`
   * describing the changes made. Read-only.
   */
  relayoutData: _propTypes.default.object,

  /**
   * Data that should be appended to existing traces. Has the form
   * `[updateData, traceIndices, maxPoints]`, where `updateData` is an object
   * containing the data to extend, `traceIndices` (optional) is an array of
   * trace indices that should be extended, and `maxPoints` (optional) is
   * either an integer defining the maximum number of points allowed or an
   * object with key:value pairs matching `updateData`
   * Reference the Plotly.extendTraces API for full usage:
   * https://plotly.com/javascript/plotlyjs-function-reference/#plotlyextendtraces
   */
  extendData: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),

  /**
   * Data from latest restyle event which occurs
   * when the user toggles a legend item, changes
   * parcoords selections, or other trace-level edits.
   * Has the form `[edits, indices]`, where `edits` is an object
   * `{<attr string>: <value>}` describing the changes made,
   * and `indices` is an array of trace indices that were edited.
   * Read-only.
   */
  restyleData: _propTypes.default.array,

  /**
   * Plotly `figure` object. See schema:
   * https://plotly.com/javascript/reference
   *
   * `config` is set separately by the `config` property
   */
  figure: _propTypes.default.exact({
    data: _propTypes.default.arrayOf(_propTypes.default.object),
    layout: _propTypes.default.object,
    frames: _propTypes.default.arrayOf(_propTypes.default.object)
  }),

  /**
   * Generic style overrides on the plot div
   */
  style: _propTypes.default.object,

  /**
   * className of the parent div
   */
  className: _propTypes.default.string,

  /**
   * Beta: If true, animate between updates using
   * plotly.js's `animate` function
   */
  animate: _propTypes.default.bool,

  /**
   * Beta: Object containing animation settings.
   * Only applies if `animate` is `true`
   */
  animation_options: _propTypes.default.object,

  /**
   * Plotly.js config options.
   * See https://plotly.com/javascript/configuration-options/
   * for more info.
   */
  config: _propTypes.default.exact({
    /**
     * No interactivity, for export or image generation
     */
    staticPlot: _propTypes.default.bool,

    /**
     * Base URL for a Plotly cloud instance, if `showSendToCloud` is enabled
     */
    plotlyServerURL: _propTypes.default.string,

    /**
     * We can edit titles, move annotations, etc - sets all pieces of `edits`
     * unless a separate `edits` config item overrides individual parts
     */
    editable: _propTypes.default.bool,

    /**
     * A set of editable properties
     */
    edits: _propTypes.default.exact({
      /**
       * The main anchor of the annotation, which is the
       * text (if no arrow) or the arrow (which drags the whole thing leaving
       * the arrow length & direction unchanged)
       */
      annotationPosition: _propTypes.default.bool,

      /**
       * Just for annotations with arrows, change the length and direction of the arrow
       */
      annotationTail: _propTypes.default.bool,
      annotationText: _propTypes.default.bool,
      axisTitleText: _propTypes.default.bool,
      colorbarPosition: _propTypes.default.bool,
      colorbarTitleText: _propTypes.default.bool,
      legendPosition: _propTypes.default.bool,

      /**
       * Edit the trace name fields from the legend
       */
      legendText: _propTypes.default.bool,
      shapePosition: _propTypes.default.bool,

      /**
       * The global `layout.title`
       */
      titleText: _propTypes.default.bool
    }),

    /**
     * DO autosize once regardless of layout.autosize
     * (use default width or height values otherwise)
     */
    autosizable: _propTypes.default.bool,

    /**
     * Whether to change layout size when the window size changes
     */
    responsive: _propTypes.default.bool,

    /**
     * Set the length of the undo/redo queue
     */
    queueLength: _propTypes.default.number,

    /**
     * If we DO autosize, do we fill the container or the screen?
     */
    fillFrame: _propTypes.default.bool,

    /**
     * If we DO autosize, set the frame margins in percents of plot size
     */
    frameMargins: _propTypes.default.number,

    /**
     * Mousewheel or two-finger scroll zooms the plot
     */
    scrollZoom: _propTypes.default.bool,

    /**
     * Double click interaction (false, 'reset', 'autosize' or 'reset+autosize')
     */
    doubleClick: _propTypes.default.oneOf([false, 'reset', 'autosize', 'reset+autosize']),

    /**
     * Delay for registering a double-click event in ms. The
     * minimum value is 100 and the maximum value is 1000. By
     * default this is 300.
     */
    doubleClickDelay: _propTypes.default.number,

    /**
     * New users see some hints about interactivity
     */
    showTips: _propTypes.default.bool,

    /**
     * Enable axis pan/zoom drag handles
     */
    showAxisDragHandles: _propTypes.default.bool,

    /**
     * Enable direct range entry at the pan/zoom drag points
     * (drag handles must be enabled above)
     */
    showAxisRangeEntryBoxes: _propTypes.default.bool,

    /**
     * Link to open this plot in plotly
     */
    showLink: _propTypes.default.bool,

    /**
     * If we show a link, does it contain data or just link to a plotly file?
     */
    sendData: _propTypes.default.bool,

    /**
     * Text appearing in the sendData link
     */
    linkText: _propTypes.default.string,

    /**
     * Display the mode bar (true, false, or 'hover')
     */
    displayModeBar: _propTypes.default.oneOf([true, false, 'hover']),

    /**
     * Should we include a modebar button to send this data to a
     * Plotly Cloud instance, linked by `plotlyServerURL`.
     * By default this is false.
     */
    showSendToCloud: _propTypes.default.bool,

    /**
     * Should we show a modebar button to send this data to a
     * Plotly Chart Studio plot. If both this and showSendToCloud
     * are selected, only showEditInChartStudio will be
     * honored. By default this is false.
     */
    showEditInChartStudio: _propTypes.default.bool,

    /**
     * Remove mode bar button by name.
     * All modebar button names at https://github.com/plotly/plotly.js/blob/master/src/components/modebar/buttons.js
     * Common names include:
     * sendDataToCloud;
     * (2D) zoom2d, pan2d, select2d, lasso2d, zoomIn2d, zoomOut2d, autoScale2d, resetScale2d;
     * (Cartesian) hoverClosestCartesian, hoverCompareCartesian;
     * (3D) zoom3d, pan3d, orbitRotation, tableRotation, handleDrag3d, resetCameraDefault3d, resetCameraLastSave3d, hoverClosest3d;
     * (Geo) zoomInGeo, zoomOutGeo, resetGeo, hoverClosestGeo;
     * hoverClosestGl2d, hoverClosestPie, toggleHover, resetViews.
     */
    modeBarButtonsToRemove: _propTypes.default.array,

    /**
     * Add mode bar button using config objects
     */
    modeBarButtonsToAdd: _propTypes.default.array,

    /**
     * Fully custom mode bar buttons as nested array,
     * where the outer arrays represents button groups, and
     * the inner arrays have buttons config objects or names of default buttons
     */
    modeBarButtons: _propTypes.default.any,

    /**
     * Modifications to how the toImage modebar button works
     */
    toImageButtonOptions: _propTypes.default.exact({
      /**
       * The file format to create
       */
      format: _propTypes.default.oneOf(['jpeg', 'png', 'webp', 'svg']),

      /**
       * The name given to the downloaded file
       */
      filename: _propTypes.default.string,

      /**
       * Width of the downloaded file, in px
       */
      width: _propTypes.default.number,

      /**
       * Height of the downloaded file, in px
       */
      height: _propTypes.default.number,

      /**
       * Extra resolution to give the file after
       * rendering it with the given width and height
       */
      scale: _propTypes.default.number
    }),

    /**
     * Add the plotly logo on the end of the mode bar
     */
    displaylogo: _propTypes.default.bool,

    /**
     * Add the plotly logo even with no modebar
     */
    watermark: _propTypes.default.bool,

    /**
     * Increase the pixel ratio for Gl plot images
     */
    plotGlPixelRatio: _propTypes.default.number,

    /**
     * URL to topojson files used in geo charts
     */
    topojsonURL: _propTypes.default.string,

    /**
     * Mapbox access token (required to plot mapbox trace types)
     * If using an Mapbox Atlas server, set this option to '',
     * so that plotly.js won't attempt to authenticate to the public Mapbox server.
     */
    mapboxAccessToken: _propTypes.default.any,

    /**
     * The locale to use. Locales may be provided with the plot
     * (`locales` below) or by loading them on the page, see:
     * https://github.com/plotly/plotly.js/blob/master/dist/README.md#to-include-localization
     */
    locale: _propTypes.default.string,

    /**
     * Localization definitions, if you choose to provide them with the
     * plot rather than registering them globally.
     */
    locales: _propTypes.default.object
  }),

  /**
   * Function that updates the state tree.
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
  })
});
ControlledPlotlyGraph.propTypes = PlotlyGraph.propTypes;
PlotlyGraph.defaultProps = _objectSpread({}, _Graph.privateDefaultProps, {
  clickData: null,
  clickAnnotationData: null,
  hoverData: null,
  selectedData: null,
  relayoutData: null,
  extendData: null,
  restyleData: null,
  figure: {
    data: [],
    layout: {},
    frames: []
  },
  responsive: 'auto',
  animate: false,
  animation_options: {
    frame: {
      redraw: false
    },
    transition: {
      duration: 750,
      ease: 'cubic-in-out'
    }
  },
  clear_on_unhover: false,
  config: {}
});
var graphPropTypes = PlotlyGraph.propTypes;
exports.graphPropTypes = graphPropTypes;
var graphDefaultProps = PlotlyGraph.defaultProps;
exports.graphDefaultProps = graphDefaultProps;
var _default = PlotlyGraph;
exports.default = _default;