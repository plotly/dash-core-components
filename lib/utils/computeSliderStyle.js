"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _default = function _default() {
  return (0, _ramda.memoizeWith)(_ramda.identity, function (vertical, verticalHeight, tooltip) {
    var style = {
      padding: '25px'
    };

    if (vertical) {
      style.height = verticalHeight + 'px';

      if (!tooltip || !tooltip.always_visible || !(0, _ramda.contains)(tooltip.placement, ['left', 'topRight', 'bottomRight'])) {
        style.paddingLeft = '0px';
      }
    } else {
      if (!tooltip || !tooltip.always_visible || !(0, _ramda.contains)(tooltip.placement, ['top', 'topLeft', 'topRight'])) {
        style.paddingTop = '0px';
      }
    }

    return style;
  });
};

exports.default = _default;