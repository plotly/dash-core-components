"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ramda = require("ramda");

var _dashComponentPlugins = require("@plotly/dash-component-plugins");

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

/* global window:true */

/**
 * Update and track the current window.location object through the window.history state.
 * Use in conjunction with the `dash_core_components.Link` component to make apps with multiple pages.
 */
var Location =
/*#__PURE__*/
function (_Component) {
  _inherits(Location, _Component);

  function Location(props) {
    var _this;

    _classCallCheck(this, Location);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Location).call(this, props));
    _this.updateLocation = _this.updateLocation.bind(_assertThisInitialized(_this));
    _this.onLocationChange = _this.onLocationChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Location, [{
    key: "updateLocation",
    value: function updateLocation(props) {
      var _this2 = this;

      var hash = props.hash,
          href = props.href,
          pathname = props.pathname,
          refresh = props.refresh,
          search = props.search,
          setProps = props.setProps; // Keep track of props relating to window.location that may need to be updated via setProps

      var propsToSet = {};
      /**
       * Check if the field exists in props. If the prop with "fieldName" is not defined,
       * then it was not set by the user and needs to be equal to the value in window.location.
       * This only happens on page load (since props will no longer be undefined after componentDidMount).
       *
       * @param {string} fieldName
       *  The name of the prop in window.location and in the component's prop
       *
       * @returns {boolean}
       *  Returns true if the prop with fieldName is different and the window state needs to be updated
       */

      var checkExistsUpdateWindowLocation = function checkExistsUpdateWindowLocation(fieldName) {
        var propVal = props[fieldName];

        if (((0, _ramda.type)(propVal) === 'Undefined' || propVal === null) && (0, _ramda.type)(window.location[fieldName]) !== 'Undefined') {
          // propVal is undefined or null, but window.location has this fieldName defined
          propsToSet[fieldName] = window.location[fieldName];
        } else if (propVal !== window.location[fieldName]) {
          // Prop has changed?
          if (refresh) {
            // Refresh the page?
            window.location[fieldName] = propVal;
          } else if (_this2.props[fieldName] !== propVal) {
            // If this prop has changed, need to setProps
            propsToSet[fieldName] = propVal; // This (`${fieldName}`: propVal) needs to be pushed in the window.history

            return true;
          }
        } // This (`${fieldName}`: propVal) DOES NOT need to be pushed in the window.history


        return false;
      }; // Check if the prop value needs to be updated (note that this mutates propsToSet)


      var pathnameUpdated = checkExistsUpdateWindowLocation('pathname');
      var hrefUpdated = checkExistsUpdateWindowLocation('href');
      var hashUpdated = checkExistsUpdateWindowLocation('hash');
      var searchUpdated = checkExistsUpdateWindowLocation('search'); // propsToSet has been updated -- batch update to Dash

      if (Object.keys(propsToSet).length > 0) {
        setProps(propsToSet);
      } // Special case -- overrides everything!


      if (hrefUpdated) {
        window.history.pushState({}, '', href);
      } else if (pathnameUpdated || hashUpdated || searchUpdated) {
        // Otherwise, we can mash everything together
        var searchVal = (0, _ramda.type)(search) !== 'Undefined' ? search : '';
        var hashVal = (0, _ramda.type)(hash) !== 'Undefined' ? hash : '';
        window.history.pushState({}, '', "".concat(pathname).concat(searchVal).concat(hashVal));
      }
    }
  }, {
    key: "onLocationChange",
    value: function onLocationChange() {
      var setProps = this.props.setProps;
      var propsToChange = {};

      if (this.props.pathname !== window.location.pathname) {
        propsToChange.pathname = window.location.pathname;
      }

      if (this.props.href !== window.location.href) {
        propsToChange.href = window.location.href;
      }

      if (this.props.hash !== window.location.hash) {
        propsToChange.hash = window.location.hash;
      }

      if (this.props.search !== window.location.search) {
        propsToChange.search = window.location.search;
      }

      setProps(propsToChange);

      _dashComponentPlugins.History.dispatchChangeEvent();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.onpopstate = this.onLocationChange;
      window.addEventListener('_dashprivate_pushstate', this.onLocationChange);
      this.updateLocation(this.props);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.updateLocation(nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Location;
}(_react.Component);

exports.default = Location;
Location.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: _propTypes.default.string.isRequired,

  /** pathname in window.location - e.g., "/my/full/pathname" */
  pathname: _propTypes.default.string,

  /** search in window.location - e.g., "?myargument=1" */
  search: _propTypes.default.string,

  /** hash in window.location - e.g., "#myhash" */
  hash: _propTypes.default.string,

  /** href in window.location - e.g., "/my/full/pathname?myargument=1#myhash" */
  href: _propTypes.default.string,

  /** Refresh the page when the location is updated? */
  refresh: _propTypes.default.bool,

  /**
   * Dash-assigned callback that gets fired when the value changes.
   */
  setProps: _propTypes.default.func
};
Location.defaultProps = {
  refresh: true
};