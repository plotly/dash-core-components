"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Abstraction for the memory storage_type to work the same way as local/session
 *
 * Each memory Store component get it's own MemStore.
 */
var MemStore =
/*#__PURE__*/
function () {
  function MemStore() {
    _classCallCheck(this, MemStore);

    this._data = {};
    this._modified = -1;
  }

  _createClass(MemStore, [{
    key: "getItem",
    value: function getItem(key) {
      return this._data[key];
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      this._data[key] = value;
      this.setModified(key);
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      delete this._data[key];
      this.setModified(key);
    } // noinspection JSUnusedLocalSymbols

  }, {
    key: "setModified",
    value: function setModified(_) {
      this._modified = Date.now();
    } // noinspection JSUnusedLocalSymbols

  }, {
    key: "getModified",
    value: function getModified(_) {
      return this._modified;
    }
  }]);

  return MemStore;
}();
/**
 * Abstraction for local/session storage_type.
 *
 * Single instances for localStorage, sessionStorage
 */


var WebStore =
/*#__PURE__*/
function () {
  function WebStore(storage) {
    _classCallCheck(this, WebStore);

    this._storage = storage;
  }

  _createClass(WebStore, [{
    key: "getItem",
    value: function getItem(key) {
      try {
        return JSON.parse(this._storage.getItem(key));
      } catch (e) {
        // in case we somehow got a non-JSON value in storage,
        // just ignore it.
        return null;
      }
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      this._storage.setItem(key, JSON.stringify(value));

      this.setModified(key);
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      this._storage.removeItem(key);

      this._storage.removeItem("".concat(key, "-timestamp"));
    }
  }, {
    key: "setModified",
    value: function setModified(key) {
      this._storage.setItem("".concat(key, "-timestamp"), Date.now());
    }
  }, {
    key: "getModified",
    value: function getModified(key) {
      return Number.parseInt(this._storage.getItem("".concat(key, "-timestamp")), 10) || -1;
    }
  }]);

  return WebStore;
}();
/**
 * Easily keep data on the client side with this component.
 * The data is not inserted in the DOM.
 * Data can be in memory, localStorage or sessionStorage.
 * The data will be kept with the id as key.
 */


var Store =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Store, _React$Component);

  function Store(props) {
    var _this;

    _classCallCheck(this, Store);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Store).call(this, props));

    if (props.storage_type === 'local') {
      _this._backstore = new WebStore(window.localStorage);
    } else if (props.storage_type === 'session') {
      _this._backstore = new WebStore(window.sessionStorage);
    } else if (props.storage_type === 'memory') {
      _this._backstore = new MemStore();
    }

    _this.onStorageChange = _this.onStorageChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Store, [{
    key: "onStorageChange",
    value: function onStorageChange(e) {
      var _this$props = this.props,
          id = _this$props.id,
          setProps = _this$props.setProps;

      if (e.key === id && setProps && e.newValue !== e.oldValue) {
        setProps({
          data: JSON.parse(e.newValue),
          modified_timestamp: this._backstore.getModified(id)
        });
      }
    }
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this$props2 = this.props,
          setProps = _this$props2.setProps,
          id = _this$props2.id,
          data = _this$props2.data,
          storage_type = _this$props2.storage_type;

      if (storage_type !== 'memory') {
        window.addEventListener('storage', this.onStorageChange);
      }

      var old = this._backstore.getItem(id);

      if ((0, _ramda.isNil)(old) && !(0, _ramda.isNil)(data)) {
        // Initial data mount
        this._backstore.setItem(id, data);

        setProps({
          modified_timestamp: this._backstore.getModified(id)
        });
        return;
      }

      if (!(0, _ramda.equals)(old, data)) {
        setProps({
          data: old,
          modified_timestamp: this._backstore.getModified(id)
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.storage_type !== 'memory') {
        window.removeEventListener('storage', this.onStorageChange);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props3 = this.props,
          data = _this$props3.data,
          id = _this$props3.id,
          clear_data = _this$props3.clear_data,
          setProps = _this$props3.setProps;

      if (clear_data) {
        this._backstore.removeItem(id);

        setProps({
          clear_data: false,
          data: null,
          modified_timestamp: this._backstore.getModified(id)
        });
        return;
      }

      var old = this._backstore.getItem(id); // Only set the data if it's not the same data.
      // If the new data is undefined, we got here by overwriting the entire
      // component with a new copy that has no `data` specified - so pull back
      // out the old value.
      // Note: this still allows you to set data to null


      if (!(0, _ramda.equals)(data, old)) {
        if (data === undefined) {
          setProps({
            data: old
          });
        } else {
          this._backstore.setItem(id, data);

          setProps({
            modified_timestamp: this._backstore.getModified(id)
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Store;
}(_react.default.Component);

exports.default = Store;
Store.defaultProps = {
  storage_type: 'memory',
  clear_data: false,
  modified_timestamp: -1
};
Store.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: _propTypes.default.string.isRequired,

  /**
   * The type of the web storage.
   *
   * memory: only kept in memory, reset on page refresh.
   * local: window.localStorage, data is kept after the browser quit.
   * session: window.sessionStorage, data is cleared once the browser quit.
   */
  storage_type: _propTypes.default.oneOf(['local', 'session', 'memory']),

  /**
   * The stored data for the id.
   */
  data: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array, _propTypes.default.number, _propTypes.default.string, _propTypes.default.bool]),

  /**
   * Set to true to remove the data contained in `data_key`.
   */
  clear_data: _propTypes.default.bool,

  /**
   * The last time the storage was modified.
   */
  modified_timestamp: _propTypes.default.number,

  /**
   * Dash-assigned callback that gets fired when the value changes.
   */
  setProps: _propTypes.default.func
};