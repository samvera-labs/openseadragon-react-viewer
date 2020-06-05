import React, { useEffect, useState } from "react";
import OpenSeadragon from "openseadragon";
import PropTypes from "prop-types";
import { getCanvasImageResources } from "../services/iiif-parser";
import Toolbar from "../components/Toolbar";
import FilesetReactSelect from "../components/FilesetReactSelect";
import Thumbnails from "../components/Thumbnails";
import Canvas2Image from "@reglendo/canvas2image";
import { isMobile } from "react-device-detect";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const openSeadragonContainer = css`
  display: inline-block;
  background: black;
  width: 100%;
  height: 800px;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    height: 500px;
  }
`;
const topBarWrapper = css`
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: #e3e3e3;
  position: absolute;
  z-index: 10;
  width: 100%;

  select {
    color: #e3e3e3;
    background-color: #716c6b;
    height: auto;
    margin: 1rem 0 1rem 1rem;
  }

  @media screen and (max-width: 768px) {
    select {
      display: none;
    }
  }
`;
const topBar = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.centered {
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const toolbar = css`
  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`;

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

  useEffect(() => {
    if (openSeadragonInstance) {
      openSeadragonInstance.addHandler("page", handlePageChange);
    }
  }, [openSeadragonInstance]);

  const calculateDownloadDimensions = () => {
    let returnObj = {};

    try {
      let height,
        width,
        maxWidth = 3000,
        canvasHeight = openSeadragonInstance.drawer.canvas.height,
        canvasWidth = openSeadragonInstance.drawer.canvas.width,
        proportionRatio = canvasHeight / canvasWidth;

      width = canvasWidth > maxWidth ? maxWidth : canvasWidth;
      height = width * proportionRatio;

      returnObj = { width, height };
    } catch {
      console.log(
        "Error in handling download click for a fileset in OpenSeadragon viewer"
      );
      returnObj = {};
    }

    return returnObj;
  };

  const handleDownloadCropClick = () => {
    const { width, height } = calculateDownloadDimensions();

    if (width && height) {
      Canvas2Image.saveAsJPEG(
        openSeadragonInstance.drawer.canvas,
        // Title of downloaded image, based on current file set "label" property
        currentFileset.label
          ? currentFileset.label.split(" ").join("-")
          : "openseadragon-react-viewer-download",
        width,
        height
      );
    }
  };

  const handleDownloadFullSize = () => {
    const { width } = calculateDownloadDimensions();
    const path = `${currentFileset.id}/full/${width},/0/default.jpg`;
    window.open(path, "_blank");
  };

  const handleFilesetSelectChange = (id) => {
    loadNewFileset(id);
  };

  const handlePageChange = ({ page }) => {
    setCurrentFileset(canvasImageResources[page]);
  };

  const handleThumbClick = (id) => {
    loadNewFileset(id);
  };

  function loadNewFileset(id) {
    const index = canvasImageResources.findIndex(
      (element) => element.id === id
    );

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
      previousButton: "previous",
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
          pinchToZoom: true,
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
        showFullPageControl: !isMobile,
        showNavigator: !isMobile,
        showNavigationControl: true,
        showHomeControl: false,
        showReferenceStrip: false,
        toolbar: "toolbarDiv",
        tileSources: canvasImageResources.map((t) => t.id),
        visibilityRatio: 1,
        ...customControlIds,
      })
    );
  }

  return (
    <>
      <div data-testid="viewer" css={topBarWrapper}>
        <div css={topBar}>
          <div data-testid="select-component-wrapper">
            <FilesetReactSelect
              currentTileSource={currentFileset}
              onFileSetChange={handleFilesetSelectChange}
              tileSources={canvasImageResources}
            />
          </div>

          <div id="toolbarDiv" data-testid="toolbar-wrapper" css={toolbar}>
            <Toolbar
              onDownloadCropClick={handleDownloadCropClick}
              onDownloadFullSize={handleDownloadFullSize}
            />
          </div>
        </div>
      </div>

      <div id="openseadragon1" css={openSeadragonContainer}></div>

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
  manifestUrl: PropTypes.string,
};

export default Viewer;
