"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

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

/*
 * event polyfill for IE
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 */
function CustomEvent(event, params) {
  // eslint-disable-next-line no-param-reassign
  params = params || {
    bubbles: false,
    cancelable: false,
    // eslint-disable-next-line no-undefined
    detail: undefined
  };
  var evt = document.createEvent('CustomEvent');
  evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
  return evt;
}

CustomEvent.prototype = window.Event.prototype;
/**
 * Link allows you to create a clickable link within a multi-page app.
 *
 * For links with destinations outside the current app, `html.A` is a better
 * component to use.
 */

var Link =
/*#__PURE__*/
function (_Component) {
  _inherits(Link, _Component);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, props));
    _this.updateLocation = _this.updateLocation.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Link, [{
    key: "updateLocation",
    value: function updateLocation(e) {
      var hasModifiers = e.metaKey || e.shiftKey || e.altKey || e.ctrlKey;
      var _this$props = this.props,
          href = _this$props.href,
          refresh = _this$props.refresh,
          target = _this$props.target;

      if (hasModifiers) {
        return;
      }

      if (target !== '_self' && !(0, _ramda.isNil)(target)) {
        return;
      } // prevent anchor from updating location


      e.preventDefault();

      if (refresh) {
        window.location = href;
      } else {
        window.history.pushState({}, '', href);
        window.dispatchEvent(new CustomEvent('_dashprivate_pushstate'));
      } // scroll back to top


      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          style = _this$props2.style,
          id = _this$props2.id,
          href = _this$props2.href,
          loading_state = _this$props2.loading_state,
          children = _this$props2.children,
          title = _this$props2.title,
          target = _this$props2.target;
      /*
       * ideally, we would use cloneElement however
       * that doesn't work with dash's recursive
       * renderTree implementation for some reason
       */

      return _react.default.createElement("a", {
        "data-dash-is-loading": loading_state && loading_state.is_loading || undefined,
        id: id,
        className: className,
        style: style,
        href: href,
        onClick: function onClick(e) {
          return _this2.updateLocation(e);
        },
        title: title,
        target: target
      }, (0, _ramda.isNil)(children) ? href : children);
    }
  }]);

  return Link;
}(_react.Component);

exports.default = Link;
Link.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: _propTypes.default.string,

  /**
   * The URL of a linked resource.
   */
  href: _propTypes.default.string.isRequired,

  /**
   * Controls whether or not the page will refresh when the link is clicked
   */
  refresh: _propTypes.default.bool,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: _propTypes.default.string,

  /**
   * Defines CSS styles which will override styles previously set.
   */
  style: _propTypes.default.object,

  /**
   * Adds the title attribute to your link, which can contain supplementary
   * information.
   */
  title: _propTypes.default.string,

  /**
   * Specifies where to open the link reference.
   */
  target: _propTypes.default.string,

  /**
   * The children of this component
   */
  children: _propTypes.default.node,

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
Link.defaultProps = {
  refresh: false
};