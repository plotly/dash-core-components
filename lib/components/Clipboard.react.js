"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var clipboardAPI = navigator.clipboard;

function wait(ms) {
  return new Promise(function (r) {
    return setTimeout(r, ms);
  });
}
/**
 * The Clipboard component copies text to the clipboard
 */


var Clipboard = /*#__PURE__*/function (_React$Component) {
  _inherits(Clipboard, _React$Component);

  var _super = _createSuper(Clipboard);

  function Clipboard(props) {
    var _this;

    _classCallCheck(this, Clipboard);

    _this = _super.call(this, props);
    _this.copyToClipboard = _this.copyToClipboard.bind(_assertThisInitialized(_this));
    _this.copySuccess = _this.copySuccess.bind(_assertThisInitialized(_this));
    _this.getTargetText = _this.getTargetText.bind(_assertThisInitialized(_this));
    _this.loading = _this.loading.bind(_assertThisInitialized(_this));
    _this.stringifyId = _this.stringifyId.bind(_assertThisInitialized(_this));
    _this.state = {
      copied: false
    };
    return _this;
  } // stringifies object ids used in pattern matching callbacks


  _createClass(Clipboard, [{
    key: "stringifyId",
    value: function stringifyId(id) {
      if (_typeof(id) !== 'object') {
        return id;
      }

      var stringifyVal = function stringifyVal(v) {
        return v && v.wild || JSON.stringify(v);
      };

      var parts = Object.keys(id).sort().map(function (k) {
        return JSON.stringify(k) + ':' + stringifyVal(id[k]);
      });
      return '{' + parts.join(',') + '}';
    }
  }, {
    key: "copySuccess",
    value: function () {
      var _copySuccess = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(content) {
        var showCopiedIcon;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                showCopiedIcon = 1000;
                _context.next = 3;
                return clipboardAPI.writeText(content);

              case 3:
                this.setState({
                  copied: true
                });
                _context.next = 6;
                return wait(showCopiedIcon);

              case 6:
                this.setState({
                  copied: false
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function copySuccess(_x) {
        return _copySuccess.apply(this, arguments);
      }

      return copySuccess;
    }()
  }, {
    key: "getTargetText",
    value: function getTargetText() {
      // get the inner text.  If none, use the content of the value param
      var id = this.stringifyId(this.props.target_id);
      var target = document.getElementById(id);

      if (!target) {
        throw new Error('Clipboard copy failed: no element found for target_id ' + this.props.target_id);
      }

      var content = target.innerText;

      if (!content) {
        content = target.value;
        content = content === undefined ? null : content;
      }

      return content;
    }
  }, {
    key: "loading",
    value: function () {
      var _loading = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this$props$loading_s;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!((_this$props$loading_s = this.props.loading_state) !== null && _this$props$loading_s !== void 0 && _this$props$loading_s.is_loading)) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return wait(100);

              case 3:
                _context2.next = 0;
                break;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loading() {
        return _loading.apply(this, arguments);
      }

      return loading;
    }()
  }, {
    key: "copyToClipboard",
    value: function () {
      var _copyToClipboard = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var content;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.props.setProps({
                  n_clicks: this.props.n_clicks + 1
                });

                if (!this.props.target_id) {
                  _context3.next = 5;
                  break;
                }

                content = this.getTargetText();
                _context3.next = 10;
                break;

              case 5:
                _context3.next = 7;
                return wait(100);

              case 7:
                _context3.next = 9;
                return this.loading();

              case 9:
                content = this.props.content;

              case 10:
                if (content) {
                  this.copySuccess(content);
                }

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function copyToClipboard() {
        return _copyToClipboard.apply(this, arguments);
      }

      return copyToClipboard;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!clipboardAPI) {
        console.warn('Copy to clipboard not available with this browser'); // eslint-disable-line no-console
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          title = _this$props.title,
          className = _this$props.className,
          style = _this$props.style,
          loading_state = _this$props.loading_state;

      var copyIcon = /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeRegularSvgIcons.faCopy
      });

      var copiedIcon = /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeRegularSvgIcons.faCheckCircle
      });

      var btnIcon = this.state.copied ? copiedIcon : copyIcon;
      return clipboardAPI ? /*#__PURE__*/_react.default.createElement("div", {
        id: id,
        title: title,
        style: style,
        className: className,
        onClick: this.copyToClipboard,
        "data-dash-is-loading": loading_state && loading_state.is_loading || undefined
      }, /*#__PURE__*/_react.default.createElement("i", null, " ", btnIcon)) : null;
    }
  }]);

  return Clipboard;
}(_react.default.Component);

exports.default = Clipboard;
Clipboard.defaultProps = {
  content: null,
  target_id: null,
  n_clicks: 0
};
Clipboard.propTypes = {
  /**
   * The ID used to identify this component.
   */
  id: _propTypes.default.string,

  /**
   * The id of target component containing text to copy to the clipboard.
   * The inner text of the `children` prop will be copied to the clipboard.  If none, then the text from the
   *  `value` prop will be copied.
   */
  target_id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),

  /**
   * The text to  be copied to the clipboard if the `target_id` is None.
   */
  content: _propTypes.default.string,

  /**
   * The number of times copy button was clicked
   */
  n_clicks: _propTypes.default.number,

  /**
   * The text shown as a tooltip when hovering over the copy icon.
   */
  title: _propTypes.default.string,

  /**
   * The icon's styles
   */
  style: _propTypes.default.object,

  /**
   * The class  name of the icon element
   */
  className: _propTypes.default.string,

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
   * Dash-assigned callback that gets fired when the value changes.
   */
  setProps: _propTypes.default.func
};