"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GraphSpinner = function GraphSpinner(_ref) {
  var status = _ref.status,
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
  }, _react.default.createElement("div", null, debugTitle, _react.default.createElement("div", {
    className: "dash-spinner dash-graph-spinner"
  }, _react.default.createElement("div", {
    className: "dash-graph-spinner__bottom"
  }, _react.default.createElement("div", {
    className: "dash-bar dash-bar__one"
  }), _react.default.createElement("div", {
    className: "dash-bar dash-bar__two"
  }), _react.default.createElement("div", {
    className: "dash-bar dash-bar__three"
  })), _react.default.createElement("div", {
    className: "dash-graph-spinner__background"
  }, _react.default.createElement("div", {
    className: "dash-dot dash-dot__one"
  }), _react.default.createElement("div", {
    className: "dash-dot dash-dot__two"
  }), _react.default.createElement("div", {
    className: "dash-dot dash-dot__three"
  }), _react.default.createElement("div", {
    className: "dash-dot dash-dot__four"
  }), _react.default.createElement("div", {
    className: "dash-graph-spinner__bottom"
  }, _react.default.createElement("div", {
    className: "dash-vert dash-vert__one"
  }), _react.default.createElement("div", {
    className: "dash-vert dash-vert__two"
  }), _react.default.createElement("div", {
    className: "dash-vert dash-vert__three"
  }), _react.default.createElement("div", {
    className: "dash-vert dash-vert__four"
  }))))), _react.default.createElement("style", null, "\n                    .dash-spinner-container {\n                        position: fixed;\n                        width: 100vw;\n                        height: 100vh;\n                        top: 0;\n                        left: 0;\n                        background-color: white;\n                        z-index: 99;\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                    }\n                      .dash-loading-title {\n                          text-align: center;\n                      }\n                      .dash-graph-spinner {\n                        display: flex;\n                        margin: 0 auto;\n                        width: 200px;\n                        height: 128px;\n                        position: relative;\n                        z-index: -2;\n                        border-radius: 4px;\n                      }\n                      .dash-graph-spinner__bottom {\n                        display: flex;\n                        margin-top: auto;\n                        flex-direction: column;\n                        height: 12px;\n                        width: 100%;\n                      }\n                      .dash-graph-spinner__background {\n                        width: 100%;\n                        height: 100%;\n                        display: block;\n                        position: absolute;\n                        z-index: -1;\n                        display: flex;\n                      }\n                      .dash-bar {\n                        height: 40px;\n                        background-color: #119DFF;\n                        animation: bar-one 2s infinite;\n                        transform-origin: 0% 0%;\n                        display: inline-flex;\n                        border-radius: 8px;\n                      }\n                      .dash-bar__one {\n                        transform: rotate(-45deg);\n                        bottom: -10px;\n                        left: 16px;\n                        position: relative;\n                      }\n                      .dash-bar__two {\n                        transform: rotate(25deg);\n                        animation: bar-two 2s infinite;\n                        left: 72px;\n                        bottom: 48px;\n                        position: relative;\n                        animation-delay: 2s infinite;\n                      }\n                      .dash-bar__three {\n                        transform: rotate(-30deg);\n                        animation: bar-three 2s infinite;\n                        left: 114px;\n                        bottom: 27px;\n                        position: relative;\n                        animation-delay: 2s infinite;\n                      }\n                      .dash-vert {\n                        display: inline-block;\n                        transform-origin: 0% 0%;\n                        position: absolute;\n                        bottom: 0px;\n                        width: 40px;\n                      }\n                      .dash-vert__one {\n                        animation: vert-one 2s infinite;\n                        background-color: #e763fa;\n                      }\n                      .dash-vert__two {\n                        animation: vert-two 2s infinite;\n                        left: 50px;\n                        background-color: #636efa;\n                      }\n                      .dash-vert__three {\n                        animation: vert-three 2s infinite;\n                        left: 100px;\n                        background-color: #00cc96;\n                      }\n                      .dash-vert__four {\n                        animation: vert-four 2s infinite;\n                        left: 150px;\n                        background-color: #EF553B;\n                      }\n                      .dash-dot {\n                        width: 10px;\n                        height: 10px;\n                        border-radius: 100%;\n                        display: block;\n                        background-color: #119DFF;\n                        position: absolute;\n                        z-index: 2;\n                      }\n                      .dash-dot__one {\n                        bottom: 0px;\n                        left: 16px;\n                        animation: dot-one 2s infinite;\n                      }\n                      .dash-dot__two {\n                        bottom: 48px;\n                        left: 66px;\n                        animation: dot-two 2s infinite;\n                      }\n                      .dash-dot__three {\n                        bottom: 27px;\n                        left: 114px;\n                        animation: dot-three 2s infinite;\n                      }\n                      .dash-dot__four {\n                        bottom: 56px;\n                        left: 166px;\n                        animation: dot-four 2s infinite;\n                      }\n                      @keyframes dot-one {\n                        0%{\n                          opacity: 0;\n                        }\n                        30% {\n                          opacity: 1;\n                        }\n                        100% {\n                          opacity: 1;\n                        }\n                      }\n                      @keyframes dot-two {\n                        0%{\n                          opacity: 0;\n                        }\n                        30% {\n                          opacity: 1;\n                        }\n                        60% {\n                          opacity: 1;\n                        }\n                        100% {\n                          opacity: 1;\n                        }\n                      }\n                      @keyframes dot-three {\n                        0%{\n                          opacity: 0;\n                        }\n                        30% {\n                          opacity: 0;\n                        }\n                        60% {\n                          opacity: 1;\n                        }\n                        100% {\n                          opacity: 1;\n                        }\n                      }\n                      @keyframes dot-four {\n                        0%{\n                          opacity: 0;\n                        }\n                        30% {\n                          opacity: 0;\n                        }\n                        60% {\n                          opacity: 0;\n                        }\n                        100% {\n                          opacity: 1;\n                        }\n                      }\n                      @keyframes vert-one {\n                        0% {\n                          height: 0px;\n                        }\n                        100% {\n                          height: 80px;\n                        }\n                      }\n                      @keyframes vert-two {\n                        0% {\n                          height: 0px;\n                        }\n                        30% {\n                          height: 0px;\n                        }\n                        100% {\n                          height: 120px;\n                        }\n                      }\n                      @keyframes vert-three {\n                        0% {\n                          height: 0px;\n                        }\n                        30% {\n                          height: 0px;\n                        }\n                        50% {\n                          height: 0px;\n                        }\n                        100% {\n                          height: 100px;\n                        }\n                      }\n                      @keyframes vert-four {\n                        0% {\n                          height: 0px;\n                        }\n                        30% {\n                          height: 0px;\n                        }\n                        50% {\n                          height: 0px;\n                        }\n                        60% {\n                          height: 0px;\n                        }\n                        100% {\n                          height: 60px;\n                        }\n                      }\n                      @keyframes bar-one {\n                        0% {\n                          width: 0%;\n                        }\n                        30% {\n                          width: 40%;\n                        }\n                        60% {\n                          width: 40%;\n                        }\n                        100% {\n                          width: 40%;\n                        }\n                      }\n                      @keyframes bar-two {\n                        0% {\n                          width: 0%;\n                        }\n                        30% {\n                          width: 0%;\n                        }\n                        60% {\n                          width: 28%;\n                        }\n                        100% {\n                          width: 28%;\n                        }\n                      }\n                      @keyframes bar-three {\n                        0% {\n                          width: 0%;\n                        }\n                        30% {\n                          width: 0%;\n                        }\n                        60% {\n                          width: 0%;\n                        }\n                        100% {\n                          width: 33%;\n                        }\n                      }\n                      @keyframes dash-title {\n                        0% {\n                          opacity: 0.1;\n                        }\n                        50% {\n                          opacity: 1;\n                        }\n                        100% {\n                          opacity: 0.1;\n                        }\n                      }\n                    "));
};

GraphSpinner.propTypes = {
  status: _propTypes.default.object,
  color: _propTypes.default.string,
  className: _propTypes.default.string,
  fullscreen: _propTypes.default.bool,
  style: _propTypes.default.object,
  debug: _propTypes.default.bool
};
var _default = GraphSpinner;
exports.default = _default;