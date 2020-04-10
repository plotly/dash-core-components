"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CubeSpinner = function CubeSpinner(_ref) {
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
  /* eslint-disable no-magic-numbers */


  return _react.default.createElement("div", {
    style: style ? style : {},
    className: spinnerClass
  }, debugTitle, _react.default.createElement("div", {
    className: "dash-spinner dash-cube-container"
  }, _react.default.createElement("div", {
    className: "dash-cube"
  }, _react.default.createElement("div", {
    className: "dash-cube-side dash-cube-side--front"
  }), _react.default.createElement("div", {
    className: "dash-cube-side dash-cube-side--back"
  }), _react.default.createElement("div", {
    className: "dash-cube-side dash-cube-side--right"
  }), _react.default.createElement("div", {
    className: "dash-cube-side dash-cube-side--left"
  }), _react.default.createElement("div", {
    className: "dash-cube-side dash-cube-side--top"
  }), _react.default.createElement("div", {
    className: "dash-cube-side dash-cube-side--bottom"
  }))), _react.default.createElement("style", null, "\n                    .dash-spinner-container {\n                        position: fixed;\n                        width: 100vw;\n                        height: 100vh;\n                        top: 0;\n                        left: 0;\n                        background-color: white;\n                        z-index: 99;\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                    }\n                      .dash-loading-title {\n                          text-align: center;\n                      }\n                      .dash-cube {\n                        position: relative;\n                        width: 80px;\n                        height: 80px;\n                        display: block;\n                        transform-style: preserve-3d;\n                        animation: rotate 4s infinite;\n                        transition: all 0.5s;\n                      }\n                      .dash-cube-container {\n                        display: block;\n                        width: 80px;\n                        margin: 7rem auto;\n                      }\n\n                      .dash-cube-side {\n                        width: 100%;\n                        height: 100%;\n                        position: absolute;\n                        display: inline-block;\n                      }\n\n                      .dash-cube-side--front {\n                        background-color: ".concat(color, ";\n                        animation: blowout-front 4s infinite;\n                        transform: rotateY(0deg) translateZ(40px);\n                      }\n                      .dash-cube-side--back {\n                        background-color: ").concat((0, _color.default)(color).darken(0.2), ";\n                        transform: rotateX(180deg) translateZ(40px);\n                        animation: blowout-back 4s infinite;\n                      }\n\n                      .dash-cube-side--left {\n                        background-color: ").concat((0, _color.default)(color).darken(0.2), ";\n                        transform: rotateY(-90deg) translateZ(40px);\n                        animation: blowout-left 4s infinite;\n                      }\n\n                      .dash-cube-side--right {\n                        background-color: ").concat((0, _color.default)(color).darken(0.4), ";\n                        transform: rotateY(90deg) translateZ(40px);\n                        animation: blowout-right 4s infinite;\n                      }\n\n                      .dash-cube-side--top {\n                        background-color: ").concat((0, _color.default)(color).darken(0.2), ";\n                        transform: rotateX(90deg) translateZ(40px);\n                        animation: blowout-top 4s infinite;\n                      }\n\n                      .dash-cube-side--bottom {\n                        background-color: ").concat((0, _color.default)(color).darken(0.4), ";\n                        transform: rotateX(-90deg) translateZ(40px);\n                        animation: blowout-bottom 4s infinite;\n                      }\n\n                      @keyframes rotate {\n                          0% {\n                            transform: rotateX(0deg) rotateY(0deg);\n                          }\n                          20% {\n                            transform: rotateX(320deg) rotateY(320deg);\n                        }\n                          100% {\n                            transform: rotateX(360deg) rotateY(360deg);\n                        }\n                      }\n\n                      @keyframes blowout-bottom {\n                        20% {\n                            transform: rotateX(-90deg) translateZ(40px);\n                        }\n                        30% {\n                          transform: rotateX(-90deg) translateZ(120px);\n                        }\n                        60% {\n                          transform: rotateX(-90deg) translateZ(120px);\n                        }\n                      }\n                      @keyframes blowout-front {\n                        20% {\n                          transform: rotateY(0deg) translateZ(40px);\n                        }\n                        30% {\n                          transform: rotateY(0deg) translateZ(120px);\n                        }\n                        60% {\n                          transform: rotateY(0deg) translateZ(120px);\n                        }\n                      }\n                      @keyframes blowout-top {\n                        20% {\n                        transform: rotateX(90deg) translateZ(40px);\n                        }\n                        30% {\n                        transform: rotateX(90deg) translateZ(120px);\n                        }\n                        60% {\n                        transform: rotateX(90deg) translateZ(120px);\n                        }\n                      }\n                      @keyframes blowout-back {\n                        20% {\n                        transform: rotateX(180deg) translateZ(40px);\n                        }\n                        30% {\n                        transform: rotateX(180deg) translateZ(120px);\n                        }\n                        60% {\n                        transform: rotateX(180deg) translateZ(120px);\n                        }\n                      }\n                      @keyframes blowout-right {\n                        20% {\n                        transform: rotateY(90deg) translateZ(40px);\n                        }\n                        30% {\n                        transform: rotateY(90deg) translateZ(120px);\n                        }\n                        60% {\n                        transform: rotateY(90deg) translateZ(120px);\n                        }\n                      }\n                      @keyframes blowout-left {\n                        20% {\n                        transform: rotateY(-90deg) translateZ(40px);\n                        }\n                        30% {\n                        transform: rotateY(-90deg) translateZ(120px);\n                        }\n                        60% {\n                        transform: rotateY(-90deg) translateZ(120px);\n                        }\n                      }\n                    ")));
};

CubeSpinner.propTypes = {
  status: _propTypes.default.object,
  color: _propTypes.default.string,
  className: _propTypes.default.string,
  fullscreen: _propTypes.default.bool,
  style: _propTypes.default.object,
  debug: _propTypes.default.bool
};
var _default = CubeSpinner;
exports.default = _default;