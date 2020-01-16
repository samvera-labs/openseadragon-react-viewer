"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FilesetReactSelect = function FilesetReactSelect(_ref) {
  var currentTileSource = _ref.currentTileSource,
      onFileSetChange = _ref.onFileSetChange,
      _ref$tileSources = _ref.tileSources,
      tileSources = _ref$tileSources === void 0 ? [] : _ref$tileSources;
  var tileSourcesCount = tileSources.length;
  if (!currentTileSource || tileSourcesCount < 2) return null;

  var handleChange = function handleChange(value) {
    onFileSetChange(value.id);
  };

  return _react["default"].createElement("div", {
    className: "dropdown-select-wrapper",
    "data-testid": "react-select-wrapper"
  }, _react["default"].createElement(_reactSelect["default"], {
    options: tileSources //value={currentTileSource}
    ,
    onChange: handleChange,
    isMulti: false,
    isOptionSelected: function isOptionSelected(obj) {
      return false;
    },
    className: "react-select-container",
    classNamePrefix: "react-select",
    maxMenuHeight: 600,
    placeholder: "Filter work file sets",
    theme: function theme(_theme) {
      return _objectSpread({}, _theme, {
        borderRadius: 0,
        colors: _objectSpread({}, _theme.colors, {
          primary: "#716c6b",
          primary50: "#d8d6d6",
          primary25: "#bbb8b8"
        })
      });
    }
  }));
};

var tileSourceShape = {
  label: _propTypes["default"].string,
  id: _propTypes["default"].string
};
FilesetReactSelect.propTypes = {
  currentTileSource: _propTypes["default"].shape(tileSourceShape),
  onFileSetChange: _propTypes["default"].func,
  tileSources: _propTypes["default"].array
};
var _default = FilesetReactSelect;
exports["default"] = _default;