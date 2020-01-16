"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _openseadragon = _interopRequireDefault(require("openseadragon"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _iiifParser = require("../services/iiif-parser");

var _Toolbar = _interopRequireDefault(require("../components/Toolbar"));

var _FilesetReactSelect = _interopRequireDefault(require("../components/FilesetReactSelect"));

var _Thumbnails = _interopRequireDefault(require("../components/Thumbnails"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Viewer component
 *
 * @param {Object} props - React props
 * @param {string} props.manifest - Url of public IIIF manifest which will provide data for the viewer
 */
var Viewer = function Viewer(_ref) {
  var manifest = _ref.manifest;
  if (!manifest) return null;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      openSeadragonInstance = _useState2[0],
      setOpenSeadragonInstance = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      canvasImageResources = _useState4[0],
      setCanvasImageResources = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      currentFileset = _useState6[0],
      setCurrentFileset = _useState6[1];

  (0, _react.useEffect)(function () {
    // Pull out tile sources from manifest
    setCanvasImageResources((0, _iiifParser.getCanvasImageResources)(manifest));
  }, []);
  (0, _react.useEffect)(function () {
    setCurrentFileset(canvasImageResources.length > 0 ? canvasImageResources[0] : null); // Initialize OpenSeadragon instance

    initOpenSeadragon();
  }, [canvasImageResources]);

  var handleFilesetSelectChange = function handleFilesetSelectChange(id) {
    loadNewFileset(id);
  };

  var handleThumbClick = function handleThumbClick(id) {
    loadNewFileset(id);
  };

  function loadNewFileset(id) {
    var index = canvasImageResources.findIndex(function (element) {
      return element.id === id;
    });
    setCurrentFileset(canvasImageResources[index]);
    openSeadragonInstance.goToPage(index);
  }

  function initOpenSeadragon() {
    if (canvasImageResources.length === 0) {
      return;
    }

    var customControlIds = {
      zoomInButton: "zoom-in",
      zoomOutButton: "zoom-out",
      //homeButton: "home",
      fullPageButton: "full-page",
      nextButton: "next",
      previousButton: "previous"
    };
    setOpenSeadragonInstance((0, _openseadragon["default"])(_objectSpread({
      ajaxWithCredentials: true,
      crossOriginPolicy: "Anonymous",
      defaultZoomLevel: 0,
      gestureSettingsMouse: {
        scrollToZoom: false,
        clickToZoom: true,
        dblClickToZoom: true,
        pinchToZoom: true
      },
      id: "openseadragon1",
      loadTilesWithAjax: true,
      navigatorPosition: "ABSOLUTE",
      navigatorTop: "100px",
      navigatorLeft: "40px",
      navigatorHeight: "200px",
      navigatorWidth: "260px",
      navImages: {},
      preserveViewport: true,
      referenceStripScroll: "vertical",
      sequenceMode: true,
      showNavigator: true,
      showNavigationControl: true,
      showHomeControl: false,
      showReferenceStrip: false,
      toolbar: "toolbarDiv",
      tileSources: canvasImageResources.map(function (t) {
        return t.id;
      }),
      visibilityRatio: 1
    }, customControlIds)));
  }

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    "data-testid": "viewer",
    className: "osdr-top-bar-wrapper"
  }, _react["default"].createElement("div", {
    className: "osdr-top-bar"
  }, _react["default"].createElement("div", {
    "data-testid": "select-component-wrapper"
  }, _react["default"].createElement(_FilesetReactSelect["default"], {
    currentTileSource: currentFileset,
    onFileSetChange: handleFilesetSelectChange,
    tileSources: canvasImageResources
  })), _react["default"].createElement("div", {
    id: "toolbarDiv",
    className: "toolbar",
    "data-testid": "toolbar-wrapper"
  }, _react["default"].createElement(_Toolbar["default"], {
    isMobile: false // TODO: Wire downloading up
    // onDownloadCropClick={this.handleDownloadCropClick}
    // onDownloadFullSize={this.handleDownloadFullSize}

  })))), _react["default"].createElement("div", {
    id: "openseadragon1",
    className: "open-seadragon-container"
  }), canvasImageResources.length > 1 && _react["default"].createElement(_Thumbnails["default"], {
    currentFileset: currentFileset,
    onThumbClick: handleThumbClick,
    tileSources: canvasImageResources
  }));
};

Viewer.propTypes = {
  manifestUrl: _propTypes["default"].string
};
var _default = Viewer;
exports["default"] = _default;