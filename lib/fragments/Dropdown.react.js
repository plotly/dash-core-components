"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _react = _interopRequireWildcard(require("react"));

var _reactVirtualizedSelect = _interopRequireDefault(require("react-virtualized-select"));

var _reactSelectFastFilterOptions = _interopRequireDefault(require("react-select-fast-filter-options"));

require("../components/css/react-virtualized-select@3.1.0.css");

require("../components/css/react-virtualized@9.9.0.css");

require("../components/css/Dropdown.css");

var _Dropdown2 = require("../components/Dropdown.react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Custom tokenizer, see https://github.com/bvaughn/js-search/issues/43
// Split on spaces
var REGEX = /\s+/;
var TOKENIZER = {
  tokenize: function tokenize(text) {
    return text.split(REGEX).filter( // Filter empty tokens
    function (text) {
      return text;
    });
  }
};
var DELIMETER = ',';

var Dropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
    _this.state = {
      filterOptions: (0, _reactSelectFastFilterOptions.default)({
        options: props.options,
        tokenizer: TOKENIZER
      })
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      if (newProps.options !== this.props.options) {
        this.setState({
          filterOptions: (0, _reactSelectFastFilterOptions.default)({
            options: newProps.options,
            tokenizer: TOKENIZER
          })
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          clearable = _this$props.clearable,
          multi = _this$props.multi,
          options = _this$props.options,
          setProps = _this$props.setProps,
          style = _this$props.style,
          loading_state = _this$props.loading_state,
          value = _this$props.value;
      var filterOptions = this.state.filterOptions;
      var selectedValue;

      if ((0, _ramda.type)(value) === 'array') {
        selectedValue = value.join(DELIMETER);
      } else {
        selectedValue = value;
      }

      return _react.default.createElement("div", {
        id: id,
        className: "dash-dropdown",
        style: style,
        "data-dash-is-loading": loading_state && loading_state.is_loading || undefined
      }, _react.default.createElement(_reactVirtualizedSelect.default, _extends({
        filterOptions: filterOptions,
        options: options,
        value: selectedValue,
        onChange: function onChange(selectedOption) {
          if (multi) {
            var _value;

            if ((0, _ramda.isNil)(selectedOption)) {
              _value = [];
            } else {
              _value = (0, _ramda.pluck)('value', selectedOption);
            }

            setProps({
              value: _value
            });
          } else {
            var _value2;

            if ((0, _ramda.isNil)(selectedOption)) {
              _value2 = null;
            } else {
              _value2 = selectedOption.value;
            }

            setProps({
              value: _value2
            });
          }
        },
        onInputChange: function onInputChange(search_value) {
          return setProps({
            search_value: search_value
          });
        },
        backspaceRemoves: clearable,
        deleteRemoves: clearable
      }, (0, _ramda.omit)(['setProps', 'value'], this.props))));
    }
  }]);

  return Dropdown;
}(_react.Component);

exports.default = Dropdown;
Dropdown.propTypes = _Dropdown2.propTypes;
Dropdown.defaultProps = _Dropdown2.defaultProps;