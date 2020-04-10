"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Spinner created by Tobias Ahlin, https://github.com/tobiasahlin/SpinKit
 */
var DotSpinner = function DotSpinner(_ref) {
  var status = _ref.status,
      color = _ref.color,
      fullscreen = _ref.fullscreen,
      debug = _ref.debug,
      className = _ref.className,
      style = _ref.style;
  var debugTitle;

  if (debug) {
    debugTitle = _react.default.createElement("h3", {
      className: "dash-loading-title"
    }, "Loading ", status.component_name, "'s ", status.prop_name);
  }

  var spinnerClass = fullscreen ? 'dash-spinner-container' : '';

  if (className) {
    spinnerClass += " ".concat(className);
  }

  return _react.default.createElement("div", {
    style: style ? style : {},
    className: spinnerClass
  }, debugTitle, _react.default.createElement("div", {
    className: "dash-spinner dash-dot-spinner"
  }, _react.default.createElement("div", {
    className: "dash-dot-spinner-bounce1"
  }), _react.default.createElement("div", {
    className: "dash-dot-spinner-bounce2"
  }), _react.default.createElement("div", {
    className: "dash-dot-spinner-bounce3"
  })), _react.default.createElement("style", null, "\n                .dash-spinner-container {\n                    position: fixed;\n                    width: 100vw;\n                    height: 100vh;\n                    top: 0;\n                    left: 0;\n                    background-color: white;\n                    z-index: 99;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                }\n                .dash-loading-title {\n                    text-align: center;\n                }\n                .dash-dot-spinner {\n                    margin: 1rem auto;\n                    width: 70px;\n                    text-align: center;\n                }\n\n                .dash-dot-spinner > div {\n                    width: 18px;\n                    height: 18px;\n                    background-color: ".concat(color, ";\n\n                    border-radius: 100%;\n                    display: inline-block;\n                    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n                    animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n                }\n\n                .dash-dot-spinner .dash-dot-spinner-bounce1 {\n                    -webkit-animation-delay: -0.32s;\n                    animation-delay: -0.32s;\n                }\n\n                .dash-dot-spinner .dash-dot-spinner-bounce2 {\n                    -webkit-animation-delay: -0.16s;\n                    animation-delay: -0.16s;\n                }\n\n                @-webkit-keyframes sk-bouncedelay {\n                    0%, 80%, 100% { -webkit-transform: scale(0) }\n                    40% { -webkit-transform: scale(1.0) }\n                }\n\n                @keyframes sk-bouncedelay {\n                    0%, 80%, 100% {\n                    -webkit-transform: scale(0);\n                    transform: scale(0);\n                    } 40% {\n                    -webkit-transform: scale(1.0);\n                    transform: scale(1.0);\n                    }\n                }\n            ")));
};

DotSpinner.propTypes = {
  status: _propTypes.default.object,
  color: _propTypes.default.string,
  className: _propTypes.default.string,
  fullscreen: _propTypes.default.bool,
  style: _propTypes.default.object,
  debug: _propTypes.default.bool
};
var _default = DotSpinner;
exports.default = _default;