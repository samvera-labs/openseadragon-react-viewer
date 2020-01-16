"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _propTypes = _interopRequireDefault(require("prop-types"));

var Toolbar = function Toolbar(_ref) {
  var isMobile = _ref.isMobile,
      onDownloadCropClick = _ref.onDownloadCropClick,
      onDownloadFullSize = _ref.onDownloadFullSize;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      dropDownOpen = _useState2[0],
      setDropDownOpen = _useState2[1];

  function handleDownloadClick(e) {
    e.preventDefault();
    setDropDownOpen(!dropDownOpen);
  }

  function handleDownloadCropClick(e) {
    e.preventDefault();
    onDownloadCropClick();
    setDropDownOpen(false);
  }

  function handleDownloadFullSize(e) {
    e.preventDefault();
    onDownloadFullSize();
    setDropDownOpen(false);
  }

  return _react["default"].createElement("nav", null, _react["default"].createElement("button", {
    id: "zoom-in",
    "data-testid": "zoom-in",
    href: "#zoom-in",
    className: "toolbar-controls button-link",
    title: "Zoom In"
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: "search-plus"
  })), _react["default"].createElement("button", {
    id: "zoom-out",
    "data-testid": "zoom-out",
    href: "#zoom-out",
    className: "toolbar-controls button-link",
    title: "Zoom Out"
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: "search-minus"
  })), _react["default"].createElement("button", {
    id: "full-page",
    "data-testid": "full-page",
    href: "#full-page",
    className: "toolbar-controls button-link",
    title: "Full Screen"
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: "expand"
  })), !isMobile && _react["default"].createElement("div", {
    className: "openseadragon-toolbar-dropdown-wrapper"
  }, _react["default"].createElement("button", {
    "data-testid": "download",
    onClick: handleDownloadClick,
    className: "toolbar-controls button-link",
    "aria-haspopup": "true",
    "aria-expanded": dropDownOpen,
    title: "Download"
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: "download"
  })), dropDownOpen && _react["default"].createElement("ul", {
    className: "openseadragon-toolbar-dropdown"
  }, _react["default"].createElement("li", null, _react["default"].createElement("button", {
    "data-testid": "download-crop",
    title: "Download cropped canvas",
    onClick: handleDownloadCropClick,
    className: "button-link"
  }, "Download crop")), _react["default"].createElement("li", null, _react["default"].createElement("button", {
    "data-testid": "download-full",
    onClick: handleDownloadFullSize,
    className: "button-link",
    title: "Download full size image"
  }, "Download full size")))), _react["default"].createElement("button", {
    id: "previous",
    "data-testid": "previous",
    href: "#previous",
    className: "toolbar-controls button-link",
    title: "Previous"
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: "arrow-circle-left"
  })), _react["default"].createElement("button", {
    id: "next",
    "data-testid": "next",
    href: "#next",
    className: "toolbar-controls button-link",
    title: "Next"
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: "arrow-circle-right"
  })));
};

Toolbar.propTypes = {
  isMobile: _propTypes["default"].bool,
  onDownloadCropClick: _propTypes["default"].func,
  onDownloadFullSize: _propTypes["default"].func
};
var _default = Toolbar;
exports["default"] = _default;