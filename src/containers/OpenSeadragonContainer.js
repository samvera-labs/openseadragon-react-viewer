import React, { useEffect, useState } from "react";
import OpenSeadragon from "openseadragon";
import PropTypes from "prop-types";
import axios from "axios";
import { getCanvasImageResources } from "../services/iiif-parser";
import Toolbar from "../components/Toolbar";
import FilesetReactSelect from "../components/FilesetReactSelect";

const OpenSeadragonContainer = ({ iiifManifestUrl }) => {
  const [openSeadragonInstance, setOpenSeadragonInstance] = useState();
  const [canvasImageResources, setCanvasImageResources] = useState([]);
  const [currentFileset, setCurrentFileset] = useState();

  console.log(" ");
  console.log("OpenSeadragonContainer() renders");

  useEffect(() => {
    // Get the IIIF manifest to read tilesources
    getManifest();
  }, []);

  useEffect(() => {
    setCurrentFileset(
      canvasImageResources.length > 0 ? canvasImageResources[0] : null
    );
    initOpenSeadragon();
  }, [canvasImageResources]);

  async function getManifest() {
    // Get the mainifest
    const response = await axios.get(iiifManifestUrl);

    // Handle possible errors

    // Pull out tile sources from manifest
    setCanvasImageResources(getCanvasImageResources(response.data));
  }

  const handleFilesetSelectChange = id => {
    loadNewFileset(id);
  };

  function loadNewFileset(id) {
    console.log("openSeadragonInstance", openSeadragonInstance);
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
        //showFlipControl: false,
        showNavigationControl: true,
        // showRotationControl: false,
        // showZoomControl: false,
        showHomeControl: false,
        // showFullPageControl: false,
        // showSequenceControl: false,
        showReferenceStrip: false,
        toolbar: "toolbarDiv",
        tileSources: canvasImageResources.map(t => t.id),
        visibilityRatio: 1,
        ...customControlIds
      })
    );
  }

  return (
    <div className="osdr-wrapper">
      <div className="osdr-top-bar-wrapper">
        <div className={`osdr-top-bar `}>
          <FilesetReactSelect
            currentTileSource={currentFileset}
            onFileSetChange={handleFilesetSelectChange}
            tileSources={canvasImageResources}
          />

          <div id="toolbarDiv" className="toolbar">
            <Toolbar
              isMobile={false}
              // onDownloadCropClick={this.handleDownloadCropClick}
              // onDownloadFullSize={this.handleDownloadFullSize}
            />
          </div>
        </div>
      </div>

      <div id="openseadragon1" className="open-seadragon-container"></div>

      {/* {tileSources.length > 1 && (
        <WorkOpenSeadragonThumbnails
          currentTileSource={currentTileSource}
          onThumbClick={this.handleThumbClick}
          tileSources={tileSources}
        />
      )} */}
    </div>
  );
};

OpenSeadragonContainer.propTypes = {
  iiifManifestUrl: PropTypes.string
};

export default OpenSeadragonContainer;
