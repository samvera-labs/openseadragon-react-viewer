"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./App.scss");

var _OpenSeadragonContainer = _interopRequireDefault(require("./containers/OpenSeadragonContainer"));

var _registerFaIcons = _interopRequireDefault(require("./registerFaIcons"));

var _propTypes = _interopRequireDefault(require("prop-types"));

// Font awesome icons
(0, _registerFaIcons["default"])(); //TODO: Pull out "showSelectFilter", "showCustomThumbnails" and add them to a Context Provider for the app

/**
 * App component
 *
 * @param {Object} props - React props
 * @param {string} props.manifestUrl - Url of public IIIF manifest which will provide data for the viewer
 * @param {boolean} props.showSelectFilter - Show the filterable select dropdown of filesets, if a work has multiple filesets
 * @param {boolean} props.showCustomThumbnails - Show the filterable select dropdown of filesets, if a work has multiple filesets
 */

var App = function App(props) {
  return _react["default"].createElement(_OpenSeadragonContainer["default"], props);
};

App.propTypes = {
  manifestUrl: _propTypes["default"].string,
  showSelectFilter: _propTypes["default"].bool,
  showCustomThumbnails: _propTypes["default"].bool
};
var _default = App;
exports["default"] = _default;