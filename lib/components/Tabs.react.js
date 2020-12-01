"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ramda = require("ramda");

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// EnhancedTab is defined here instead of in Tab.react.js because if exported there,
// it will mess up the Python imports and metadata.json
var EnhancedTab = function EnhancedTab(_ref) {
  var id = _ref.id,
      label = _ref.label,
      selected = _ref.selected,
      className = _ref.className,
      style = _ref.style,
      selectedClassName = _ref.selectedClassName,
      selected_style = _ref.selected_style,
      selectHandler = _ref.selectHandler,
      value = _ref.value,
      disabled = _ref.disabled,
      disabled_style = _ref.disabled_style,
      disabled_className = _ref.disabled_className,
      mobile_breakpoint = _ref.mobile_breakpoint,
      amountOfTabs = _ref.amountOfTabs,
      colors = _ref.colors,
      vertical = _ref.vertical,
      loading_state = _ref.loading_state;
  var tabStyle = style;

  if (disabled) {
    tabStyle = _objectSpread({
      tabStyle: tabStyle
    }, disabled_style);
  }

  if (selected) {
    tabStyle = _objectSpread({
      tabStyle: tabStyle
    }, selected_style);
  }

  var tabClassName = "tab ".concat(className || '');

  if (disabled) {
    tabClassName += " tab--disabled ".concat(disabled_className || '');
  }

  if (selected) {
    tabClassName += " tab--selected ".concat(selectedClassName || '');
  }

  var labelDisplay;

  if ((0, _ramda.is)(Array, label)) {
    // label is an array, so it has children that we want to render
    labelDisplay = label[0].props.children;
  } else {
    // else it is a string, so we just want to render that
    labelDisplay = label;
  }

  return _react.default.createElement("div", {
    "data-dash-is-loading": loading_state && loading_state.is_loading || undefined,
    id: id,
    style: tabStyle,
    onClick: function onClick() {
      if (!disabled) {
        selectHandler(value);
      }
    },
    className: _style.default.dynamic([["1358318571", [colors.background, colors.border, colors.border, colors.border, colors.primary, mobile_breakpoint, colors.border, vertical ? '' : "width: calc(100% / ".concat(amountOfTabs, ");"), vertical ? "border-left: 2px solid ".concat(colors.primary, ";") : "border-top: 2px solid ".concat(colors.primary, ";")]]]) + " " + (tabClassName || "")
  }, _react.default.createElement("span", {
    className: _style.default.dynamic([["1358318571", [colors.background, colors.border, colors.border, colors.border, colors.primary, mobile_breakpoint, colors.border, vertical ? '' : "width: calc(100% / ".concat(amountOfTabs, ");"), vertical ? "border-left: 2px solid ".concat(colors.primary, ";") : "border-top: 2px solid ".concat(colors.primary, ";")]]])
  }, labelDisplay), _react.default.createElement(_style.default, {
    id: "1358318571",
    dynamic: [colors.background, colors.border, colors.border, colors.border, colors.primary, mobile_breakpoint, colors.border, vertical ? '' : "width: calc(100% / ".concat(amountOfTabs, ");"), vertical ? "border-left: 2px solid ".concat(colors.primary, ";") : "border-top: 2px solid ".concat(colors.primary, ";")]
  }, ".tab.__jsx-style-dynamic-selector{display:inline-block;background-color:".concat(colors.background, ";border:1px solid ").concat(colors.border, ";border-bottom:none;padding:20px 25px;-webkit-transition:background-color,color 200ms;transition:background-color,color 200ms;width:100%;text-align:center;box-sizing:border-box;}.tab.__jsx-style-dynamic-selector:last-of-type{border-right:1px solid ").concat(colors.border, ";border-bottom:1px solid ").concat(colors.border, ";}.tab.__jsx-style-dynamic-selector:hover{cursor:pointer;}.tab--selected.__jsx-style-dynamic-selector{border-top:2px solid ").concat(colors.primary, ";color:black;background-color:white;}.tab--selected.__jsx-style-dynamic-selector:hover{background-color:white;}.tab--disabled.__jsx-style-dynamic-selector{color:#d6d6d6;}@media screen and (min-width:").concat(mobile_breakpoint, "px){.tab.__jsx-style-dynamic-selector{border:1px solid ").concat(colors.border, ";border-right:none;").concat(vertical ? '' : "width: calc(100% / ".concat(amountOfTabs, ");"), ";}.tab--selected.__jsx-style-dynamic-selector,.tab.__jsx-style-dynamic-selector:last-of-type.tab--selected{border-bottom:none;").concat(vertical ? "border-left: 2px solid ".concat(colors.primary, ";") : "border-top: 2px solid ".concat(colors.primary, ";"), ";}}")));
};

EnhancedTab.defaultProps = {
  loading_state: {
    is_loading: false,
    component_name: '',
    prop_name: ''
  }
};
/**
 * A Dash component that lets you render pages with tabs - the Tabs component's children
 * can be dcc.Tab components, which can hold a label that will be displayed as a tab, and can in turn hold
 * children components that will be that tab's content.
 */

var Tabs =
/*#__PURE__*/
function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).call(this, props));
    _this.selectHandler = _this.selectHandler.bind(_assertThisInitialized(_this));
    _this.parseChildrenToArray = _this.parseChildrenToArray.bind(_assertThisInitialized(_this));
    _this.valueOrDefault = _this.valueOrDefault.bind(_assertThisInitialized(_this));

    if (!(0, _ramda.has)('value', _this.props)) {
      _this.props.setProps({
        value: _this.valueOrDefault()
      });
    }

    return _this;
  }

  _createClass(Tabs, [{
    key: "valueOrDefault",
    value: function valueOrDefault() {
      if ((0, _ramda.has)('value', this.props)) {
        return this.props.value;
      }

      var children = this.parseChildrenToArray();

      if (children && children[0].props.children) {
        return children[0].props.children.props.value || 'tab-1';
      }

      return 'tab-1';
    }
  }, {
    key: "parseChildrenToArray",
    value: function parseChildrenToArray() {
      if (this.props.children && !(0, _ramda.is)(Array, this.props.children)) {
        // if dcc.Tabs.children contains just one single element, it gets passed as an object
        // instead of an array - so we put in in a array ourselves!
        return [this.props.children];
      }

      return this.props.children;
    }
  }, {
    key: "selectHandler",
    value: function selectHandler(value) {
      this.props.setProps({
        value: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var EnhancedTabs;
      var selectedTab;

      if (this.props.children) {
        var children = this.parseChildrenToArray();
        var amountOfTabs = children.length;
        EnhancedTabs = children.map(function (child, index) {
          // TODO: handle components that are not dcc.Tab components (throw error)
          // enhance Tab components coming from Dash (as dcc.Tab) with methods needed for handling logic
          var childProps;

          if ( // disabled is a defaultProp (so it's always set)
          // meaning that if it's not set on child.props, the actual
          // props we want are lying a bit deeper - which means they
          // are coming from Dash
          (0, _ramda.isNil)(child.props.disabled) && child.props._dashprivate_layout && child.props._dashprivate_layout.props) {
            // props are coming from Dash
            childProps = child.props._dashprivate_layout.props;
          } else {
            // else props are coming from React (Demo.react.js, or Tabs.test.js)
            childProps = child.props;
          }

          if (!childProps.value) {
            childProps = _objectSpread({}, childProps, {
              value: "tab-".concat(index + 1)
            });
          } // check if this child/Tab is currently selected


          if (childProps.value === _this2.valueOrDefault()) {
            selectedTab = child;
          }

          return _react.default.createElement(EnhancedTab, {
            key: index,
            id: childProps.id,
            label: childProps.label,
            selected: _this2.valueOrDefault() === childProps.value,
            selectHandler: _this2.selectHandler,
            className: childProps.className,
            style: childProps.style,
            selectedClassName: childProps.selected_className,
            selected_style: childProps.selected_style,
            value: childProps.value,
            disabled: childProps.disabled,
            disabled_style: childProps.disabled_style,
            disabled_classname: childProps.disabled_className,
            mobile_breakpoint: _this2.props.mobile_breakpoint,
            vertical: _this2.props.vertical,
            amountOfTabs: amountOfTabs,
            colors: _this2.props.colors,
            loading_state: childProps.loading_state
          });
        });
      }

      var selectedTabContent = !(0, _ramda.isNil)(selectedTab) ? selectedTab : '';
      var tabContainerClass = this.props.vertical ? 'tab-container tab-container--vert' : 'tab-container';
      var tabContentClass = this.props.vertical ? 'tab-content tab-content--vert' : 'tab-content';
      var tabParentClass = this.props.vertical ? 'tab-parent tab-parent--vert' : 'tab-parent';
      return _react.default.createElement("div", {
        "data-dash-is-loading": this.props.loading_state && this.props.loading_state.is_loading || undefined,
        style: this.props.parent_style,
        id: "".concat(this.props.id, "-parent"),
        className: _style.default.dynamic([["2495343579", [this.props.mobile_breakpoint, this.props.colors.border, this.props.colors.border, this.props.colors.primary]]]) + " " + "".concat(tabParentClass, " ").concat(this.props.parent_className || '')
      }, _react.default.createElement("div", {
        style: this.props.style,
        id: this.props.id,
        className: _style.default.dynamic([["2495343579", [this.props.mobile_breakpoint, this.props.colors.border, this.props.colors.border, this.props.colors.primary]]]) + " " + "".concat(tabContainerClass, " ").concat(this.props.className || '')
      }, EnhancedTabs), _react.default.createElement("div", {
        style: this.props.content_style,
        className: _style.default.dynamic([["2495343579", [this.props.mobile_breakpoint, this.props.colors.border, this.props.colors.border, this.props.colors.primary]]]) + " " + "".concat(tabContentClass, " ").concat(this.props.content_className || '')
      }, selectedTabContent || ''), _react.default.createElement(_style.default, {
        id: "2495343579",
        dynamic: [this.props.mobile_breakpoint, this.props.colors.border, this.props.colors.border, this.props.colors.primary]
      }, ".tab-parent.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.tab-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.tab-container--vert.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.tab-content--vert.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}@media screen and (min-width:".concat(this.props.mobile_breakpoint, "px){.tab-container--vert .tab{width:auto;border-right:none !important;border-bottom:none !important;}.tab-container--vert .tab:last-of-type{border-bottom:1px solid ").concat(this.props.colors.border, " !important;}.tab-container--vert .tab--selected{border-top:1px solid ").concat(this.props.colors.border, ";border-left:2px solid ").concat(this.props.colors.primary, ";border-right:none;}.tab-container.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.tab-container--vert.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.tab-parent--vert.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}}")));
    }
  }]);

  return Tabs;
}(_react.Component);

exports.default = Tabs;
Tabs.defaultProps = {
  mobile_breakpoint: 800,
  colors: {
    border: '#d6d6d6',
    primary: '#1975FA',
    background: '#f9f9f9'
  },
  vertical: false,
  persisted_props: ['value'],
  persistence_type: 'local'
};
Tabs.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: _propTypes.default.string,

  /**
   * The value of the currently selected Tab
   */
  value: _propTypes.default.string,

  /**
   * Appends a class to the Tabs container holding the individual Tab components.
   */
  className: _propTypes.default.string,

  /**
   * Appends a class to the Tab content container holding the children of the Tab that is selected.
   */
  content_className: _propTypes.default.string,

  /**
   * Appends a class to the top-level parent container holding both the Tabs container and the content container.
   */
  parent_className: _propTypes.default.string,

  /**
   * Appends (inline) styles to the Tabs container holding the individual Tab components.
   */
  style: _propTypes.default.object,

  /**
   * Appends (inline) styles to the top-level parent container holding both the Tabs container and the content container.
   */
  parent_style: _propTypes.default.object,

  /**
   * Appends (inline) styles to the tab content container holding the children of the Tab that is selected.
   */
  content_style: _propTypes.default.object,

  /**
   * Renders the tabs vertically (on the side)
   */
  vertical: _propTypes.default.bool,

  /**
   * Breakpoint at which tabs are rendered full width (can be 0 if you don't want full width tabs on mobile)
   */
  mobile_breakpoint: _propTypes.default.number,

  /**
   * Array that holds Tab components
   */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),

  /**
   * Holds the colors used by the Tabs and Tab components. If you set these, you should specify colors for all properties, so:
   * colors: {
   *    border: '#d6d6d6',
   *    primary: '#1975FA',
   *    background: '#f9f9f9'
   *  }
   */
  colors: _propTypes.default.exact({
    border: _propTypes.default.string,
    primary: _propTypes.default.string,
    background: _propTypes.default.string
  }),

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