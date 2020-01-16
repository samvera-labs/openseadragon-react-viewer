"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Viewer = _interopRequireDefault(require("../components/Viewer"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _axios = _interopRequireDefault(require("axios"));

/**
 * Wrapper OpenSeadragon component
 * @param {Object} props - React props
 */
var OpenSeadragonContainer = function OpenSeadragonContainer(_ref) {
  var manifestUrl = _ref.manifestUrl;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      manifest = _useState2[0],
      setManifest = _useState2[1];

  (0, _react.useEffect)(function () {
    // Get the IIIF manifest to read tilesources
    getManifest();
  }, []);

  function getManifest() {
    return _getManifest.apply(this, arguments);
  }

  function _getManifest() {
    _getManifest = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var response;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios["default"].get(manifestUrl);

            case 2:
              response = _context.sent;
              //TODO:  Handle possible errors
              setManifest(response.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getManifest.apply(this, arguments);
  }

  return manifest ? _react["default"].createElement("div", {
    className: "osdr-wrapper"
  }, _react["default"].createElement(_Viewer["default"], {
    manifest: manifest
  })) : null;
};

OpenSeadragonContainer.propTypes = {
  manifestUrl: _propTypes["default"].string
};
var _default = OpenSeadragonContainer;
exports["default"] = _default;