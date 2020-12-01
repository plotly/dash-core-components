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
var CircleSpinner = function CircleSpinner(_ref) {
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
    className: "dash-spinner dash-sk-circle"
  }, _react.default.createElement("div", {
    className: "dash-sk-circle1 dash-sk-child"
  }), _react.default.createElement("div", {
    className: "dash-sk-circle2 dash-sk-child"
  }), _react.default.createElement("div", {
    className: "dash-sk-circle3 dash-sk-child"
  }), _react.default.createElement("div", {
    className: "dash-sk-circle4 dash-sk-child"
  }), _react.default.createElement("div", {
    className: "dash-sk-circle5 dash-sk-child"
  }), _react.default.createElement("div", {
    className: "dash-sk-circle6 dash-sk-child"
  }), _react.default.createElement("div", {
    className: "dash-sk-circle7 dash-sk-child"
  }), _react.default.createElement("div", {
    className: "dash-sk-circle8 dash-sk-child"
  }), _react.default.createElement("div", {
    className: "dash-sk-circle9 dash-sk-child"
  }), _react.default.createElement("div", {
    className: "dash-sk-circle10 dash-sk-child"
  }), _react.default.createElement("div", {
    className: "dash-sk-circle11 dash-sk-child"
  }), _react.default.createElement("div", {
    className: "dash-sk-circle12 dash-sk-child"
  })), _react.default.createElement("style", null, "\n                    .dash-spinner-container {\n                        position: fixed;\n                        width: 100vw;\n                        height: 100vh;\n                        top: 0;\n                        left: 0;\n                        background-color: white;\n                        z-index: 99;\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                    }\n                    .dash-loading-title {\n                        text-align: center;\n                    }\n                    .dash-sk-circle {\n                        margin: 1rem auto;\n                        width: 40px;\n                        height: 40px;\n                        position: relative;\n                    }\n                    .dash-sk-circle .dash-sk-child {\n                        width: 100%;\n                        height: 100%;\n                        position: absolute;\n                        left: 0;\n                        top: 0;\n                    }\n                    .dash-sk-circle .dash-sk-child:before {\n                        content: '';\n                        display: block;\n                        margin: 0 auto;\n                        width: 15%;\n                        height: 15%;\n                        background-color: ".concat(color, ";\n                        border-radius: 100%;\n                        -webkit-animation: dash-sk-circleBounceDelay 1.2s infinite ease-in-out both;\n                                animation: dash-sk-circleBounceDelay 1.2s infinite ease-in-out both;\n                    }\n                    .dash-sk-circle .dash-sk-circle2 {\n                        -webkit-transform: rotate(30deg);\n                            -ms-transform: rotate(30deg);\n                                transform: rotate(30deg); }\n                    .dash-sk-circle .dash-sk-circle3 {\n                        -webkit-transform: rotate(60deg);\n                            -ms-transform: rotate(60deg);\n                                transform: rotate(60deg); }\n                    .dash-sk-circle .dash-sk-circle4 {\n                        -webkit-transform: rotate(90deg);\n                            -ms-transform: rotate(90deg);\n                                transform: rotate(90deg); }\n                    .dash-sk-circle .dash-sk-circle5 {\n                        -webkit-transform: rotate(120deg);\n                            -ms-transform: rotate(120deg);\n                                transform: rotate(120deg); }\n                    .dash-sk-circle .dash-sk-circle6 {\n                        -webkit-transform: rotate(150deg);\n                            -ms-transform: rotate(150deg);\n                                transform: rotate(150deg); }\n                    .dash-sk-circle .dash-sk-circle7 {\n                        -webkit-transform: rotate(180deg);\n                            -ms-transform: rotate(180deg);\n                                transform: rotate(180deg); }\n                    .dash-sk-circle .dash-sk-circle8 {\n                        -webkit-transform: rotate(210deg);\n                            -ms-transform: rotate(210deg);\n                                transform: rotate(210deg); }\n                    .dash-sk-circle .dash-sk-circle9 {\n                        -webkit-transform: rotate(240deg);\n                            -ms-transform: rotate(240deg);\n                                transform: rotate(240deg); }\n                    .dash-sk-circle .dash-sk-circle10 {\n                        -webkit-transform: rotate(270deg);\n                            -ms-transform: rotate(270deg);\n                                transform: rotate(270deg); }\n                    .dash-sk-circle .dash-sk-circle11 {\n                        -webkit-transform: rotate(300deg);\n                            -ms-transform: rotate(300deg);\n                                transform: rotate(300deg); }\n                    .dash-sk-circle .dash-sk-circle12 {\n                        -webkit-transform: rotate(330deg);\n                            -ms-transform: rotate(330deg);\n                                transform: rotate(330deg); }\n                    .dash-sk-circle .dash-sk-circle2:before {\n                        -webkit-animation-delay: -1.1s;\n                                animation-delay: -1.1s; }\n                    .dash-sk-circle .dash-sk-circle3:before {\n                        -webkit-animation-delay: -1s;\n                                animation-delay: -1s; }\n                    .dash-sk-circle .dash-sk-circle4:before {\n                        -webkit-animation-delay: -0.9s;\n                                animation-delay: -0.9s; }\n                    .dash-sk-circle .dash-sk-circle5:before {\n                        -webkit-animation-delay: -0.8s;\n                                animation-delay: -0.8s; }\n                    .dash-sk-circle .dash-sk-circle6:before {\n                        -webkit-animation-delay: -0.7s;\n                                animation-delay: -0.7s; }\n                    .dash-sk-circle .dash-sk-circle7:before {\n                        -webkit-animation-delay: -0.6s;\n                                animation-delay: -0.6s; }\n                    .dash-sk-circle .dash-sk-circle8:before {\n                        -webkit-animation-delay: -0.5s;\n                                animation-delay: -0.5s; }\n                    .dash-sk-circle .dash-sk-circle9:before {\n                        -webkit-animation-delay: -0.4s;\n                                animation-delay: -0.4s; }\n                    .dash-sk-circle .dash-sk-circle10:before {\n                        -webkit-animation-delay: -0.3s;\n                                animation-delay: -0.3s; }\n                    .dash-spinner-container > .sk-circle .sk-circle11:before {\n                        -webkit-animation-delay: -0.2s;\n                                animation-delay: -0.2s; }\n                    .dash-spinner-container .sk-circle .sk-circle12:before {\n                        -webkit-animation-delay: -0.1s;\n                                animation-delay: -0.1s; }\n\n                    @-webkit-keyframes dash-sk-circleBounceDelay {\n                        0%, 80%, 100% {\n                        -webkit-transform: scale(0);\n                                transform: scale(0);\n                        } 40% {\n                        -webkit-transform: scale(1);\n                                transform: scale(1);\n                        }\n                    }\n\n                    @keyframes dash-sk-circleBounceDelay {\n                        0%, 80%, 100% {\n                        -webkit-transform: scale(0);\n                                transform: scale(0);\n                        } 40% {\n                        -webkit-transform: scale(1);\n                                transform: scale(1);\n                        }\n                    }\n            ")));
};

CircleSpinner.propTypes = {
  status: _propTypes.default.object,
  color: _propTypes.default.string,
  className: _propTypes.default.string,
  fullscreen: _propTypes.default.bool,
  style: _propTypes.default.object,
  debug: _propTypes.default.bool
};
var _default = CircleSpinner;
exports.default = _default;