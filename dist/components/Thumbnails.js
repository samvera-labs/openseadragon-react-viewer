"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Thumbnails = function Thumbnails(_ref) {
  var currentFileset = _ref.currentFileset,
      _ref$tileSources = _ref.tileSources,
      tileSources = _ref$tileSources === void 0 ? [] : _ref$tileSources,
      onThumbClick = _ref.onThumbClick;
  return _react["default"].createElement("div", {
    "data-testid": "open-seadragon-thumbnails-container",
    className: "bottom-panel"
  }, _react["default"].createElement("div", {
    className: "thumbnail-view"
  }, _react["default"].createElement("ul", {
    className: "panel-listing-thumbs"
  }, tileSources.map(function (t) {
    return _react["default"].createElement("li", {
      key: t.id,
      "data-testid": "fileset-thumbnail",
      onClick: function onClick() {
        return onThumbClick(t.id);
      },
      "aria-label": "Thumbnail",
      className: currentFileset && currentFileset.id === t.id ? "active" : ""
    }, _react["default"].createElement("img", {
      src: "".concat(t.id, "/square/70,70/0/default.jpg"),
      className: "thumbnail-image",
      alt: t.label
    }));
  }))));
};

Thumbnails.propTypes = {
  currentFileset: _propTypes["default"].object,
  onThumbClick: _propTypes["default"].func,
  tileSources: _propTypes["default"].array
};
var _default = Thumbnails;
exports["default"] = _default;