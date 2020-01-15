import React, { useEffect, useState } from "react";
import OpenSeadragon from "openseadragon";
import PropTypes from "prop-types";
import axios from "axios";
import { getTileSources } from "../services/iiif-parser";
import Toolbar from "../components/Toolbar";

const OpenSeadragonContainer = ({ iiifManifestUrl }) => {
  let openSeadragonInstance = null;
  const [tileSources, setTileSources] = useState([]);

  useEffect(() => {
    // Get the IIIF manifest to read tilesources
    getManifest();
  }, []);

  useEffect(() => {
    initOpenSeadragon();
  }, [tileSources]);

  async function getManifest() {
    // Get the mainifest
    const response = await axios.get(iiifManifestUrl);

    // Handle possible errors

    // Pull out tile sources from manifest
    setTileSources(getTileSources(response.data));
  }

  function initOpenSeadragon() {
    if (tileSources.length === 0) {
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
      tileSources: tileSources.map(t => t.id),
      visibilityRatio: 1,
      ...customControlIds
    });
  }

  return (
    <div>
      <div className="open-seadgragon-top-bar-wrapper">
        <div className={`open-seadgragon-top-bar `}>
          {/* <WorkOpenSeadragonFilesetReactSelect
            currentTileSource={currentTileSource}
            onFileSetChange={this.handleFilesetSelectChange}
            tileSources={tileSources}
          /> */}

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
