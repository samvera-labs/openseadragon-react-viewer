import React, { useEffect, useState } from "react";
import OpenSeadragon from "openseadragon";
import PropTypes from "prop-types";
import { getCanvasImageResources } from "../services/iiif-parser";
import Toolbar from "../components/Toolbar";
import FilesetReactSelect from "../components/FilesetReactSelect";
import Thumbnails from "../components/Thumbnails";

/**
 * Viewer component
 *
 * @param {Object} props - React props
 * @param {string} props.manifest - Url of public IIIF manifest which will provide data for the viewer
 */
const Viewer = ({ manifest }) => {
  if (!manifest) return null;

  const [openSeadragonInstance, setOpenSeadragonInstance] = useState();
  const [canvasImageResources, setCanvasImageResources] = useState([]);
  const [currentFileset, setCurrentFileset] = useState();

  useEffect(() => {
    // Pull out tile sources from manifest
    setCanvasImageResources(getCanvasImageResources(manifest));
  }, []);

  useEffect(() => {
    setCurrentFileset(
      canvasImageResources.length > 0 ? canvasImageResources[0] : null
    );
    // Initialize OpenSeadragon instance
    initOpenSeadragon();
  }, [canvasImageResources]);

  const handleFilesetSelectChange = id => {
    loadNewFileset(id);
  };

  const handleThumbClick = id => {
    loadNewFileset(id);
  };

  function loadNewFileset(id) {
    const index = canvasImageResources.findIndex(element => element.id === id);

    setCurrentFileset(canvasImageResources[index]);
    openSeadragonInstance.goToPage(index);
  }

  function initOpenSeadragon() {
    if (canvasImageResources.length === 0) {
      return;
    }

    const customControlIds = {
      zoomInButton: "zoom-in",
      zoomOutButton: "zoom-out",
      //homeButton: "home",
      fullPageButton: "full-page",
      nextButton: "next",
      previousButton: "previous"
    };

    setOpenSeadragonInstance(
      OpenSeadragon({
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
        tileSources: canvasImageResources.map(t => t.id),
        visibilityRatio: 1,
        ...customControlIds
      })
    );
  }

  return (
    <>
      <div data-testid="viewer" className="osdr-top-bar-wrapper">
        <div className={`osdr-top-bar`}>
          <div data-testid="select-component-wrapper">
            <FilesetReactSelect
              currentTileSource={currentFileset}
              onFileSetChange={handleFilesetSelectChange}
              tileSources={canvasImageResources}
            />
          </div>

          <div
            id="toolbarDiv"
            className="toolbar"
            data-testid="toolbar-wrapper"
          >
            <Toolbar
              isMobile={false}
              // TODO: Wire downloading up
              // onDownloadCropClick={this.handleDownloadCropClick}
              // onDownloadFullSize={this.handleDownloadFullSize}
            />
          </div>
        </div>
      </div>

      <div id="openseadragon1" className="open-seadragon-container"></div>

      {canvasImageResources.length > 1 && (
        <Thumbnails
          currentFileset={currentFileset}
          onThumbClick={handleThumbClick}
          tileSources={canvasImageResources}
        />
      )}
    </>
  );
};

Viewer.propTypes = {
  manifestUrl: PropTypes.string
};

export default Viewer;
