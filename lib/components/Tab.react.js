"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * Part of dcc.Tabs - this is the child Tab component used to render a tabbed page.
 * Its children will be set as the content of that tab, which if clicked will become visible.
 */
var Tab = function Tab(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_react.Fragment, null, children);
};

Tab.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: _propTypes.default.string,

  /**
   * The tab's label
   */
  label: _propTypes.default.string,

  /**
   * The content of the tab - will only be displayed if this tab is selected
   */
  children: _propTypes.default.node,

  /**
   * Value for determining which Tab is currently selected
   */
  value: _propTypes.default.string,

  /**
   * Determines if tab is disabled or not - defaults to false
   */
  disabled: _propTypes.default.bool,

  /**
   * Overrides the default (inline) styles when disabled
   */
  disabled_style: _propTypes.default.object,

  /**
   * Appends a class to the Tab component when it is disabled.
   */
  disabled_className: _propTypes.default.string,

  /**
   * Appends a class to the Tab component.
   */
  className: _propTypes.default.string,

  /**
   * Appends a class to the Tab component when it is selected.
   */
  selected_className: _propTypes.default.string,

  /**
   * Overrides the default (inline) styles for the Tab component.
   */
  style: _propTypes.default.object,

  /**
   * Overrides the default (inline) styles for the Tab component when it is selected.
   */
  selected_style: _propTypes.default.object,

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
};
Tab.defaultProps = {
  disabled: false,
  disabled_style: {
    color: '#d6d6d6'
  }
};
var _default = Tab;
exports.default = _default;