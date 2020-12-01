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
var DefaultSpinner = function DefaultSpinner(_ref) {
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
    className: "dash-spinner dash-default-spinner"
  }, _react.default.createElement("div", {
    className: "dash-default-spinner-rect1"
  }), _react.default.createElement("div", {
    className: "dash-default-spinner-rect2"
  }), _react.default.createElement("div", {
    className: "dash-default-spinner-rect3"
  }), _react.default.createElement("div", {
    className: "dash-default-spinner-rect4"
  }), _react.default.createElement("div", {
    className: "dash-default-spinner-rect5"
  })), _react.default.createElement("style", null, "\n                    .dash-spinner-container {\n                        position: fixed;\n                        width: 100vw;\n                        height: 100vh;\n                        top: 0;\n                        left: 0;\n                        background-color: white;\n                        z-index: 99;\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                    }\n                    .dash-loading-title {\n                        text-align: center;\n                    }\n                    .dash-default-spinner{\n                        margin: 1rem auto;\n                        width: 50px;\n                        height: 40px;\n                        text-align: center;\n                        font-size: 10px;\n                    }\n\n                    .dash-default-spinner > div {\n                        background-color: ".concat(color, ";\n                        height: 100%;\n                        width: 6px;\n                        display: inline-block;\n                        margin-right: 4px;\n\n                        -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n                        animation: sk-stretchdelay 1.2s infinite ease-in-out;\n                    }\n\n                    .dash-default-spinner .dash-default-spinner-rect2 {\n                        -webkit-animation-delay: -1.1s;\n                        animation-delay: -1.1s;\n                    }\n\n                    .dash-default-spinner .dash-default-spinner-rect3 {\n                        -webkit-animation-delay: -1.0s;\n                        animation-delay: -1.0s;\n                    }\n\n                    .dash-default-spinner .dash-default-spinner-rect4 {\n                        -webkit-animation-delay: -0.9s;\n                        animation-delay: -0.9s;\n                    }\n\n                    .dash-default-spinner .dash-default-spinner-rect5 {\n                        -webkit-animation-delay: -0.8s;\n                        animation-delay: -0.8s;\n                    }\n\n                    @-webkit-keyframes sk-stretchdelay {\n                        0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n                        20% { -webkit-transform: scaleY(1.0) }\n                    }\n\n                    @keyframes sk-stretchdelay {\n                        0%, 40%, 100% {\n                        transform: scaleY(0.4);\n                        -webkit-transform: scaleY(0.4);\n                        }  20% {\n                        transform: scaleY(1.0);\n                        -webkit-transform: scaleY(1.0);\n                        }\n                    }\n            ")));
};

DefaultSpinner.propTypes = {
  status: _propTypes.default.object,
  color: _propTypes.default.string,
  className: _propTypes.default.string,
  fullscreen: _propTypes.default.bool,
  style: _propTypes.default.object,
  debug: _propTypes.default.bool
};
var _default = DefaultSpinner;
exports.default = _default;