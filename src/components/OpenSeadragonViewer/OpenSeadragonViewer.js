import React, { useEffect, useState, useContext } from "react";
import Viewer from "../Viewer/Viewer";
import PropTypes from "prop-types";
import registerFaIcons from "../../registerFaIcons";
import Notification from "../Notification/Notification";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { ConfigContext } from "../../config-context";
import Loading from "../Loader/Loading";

/** @jsx jsx */
import { jsx, css } from "@emotion/react";
const wrapper = css`
  position: relative;
`;

registerFaIcons();

export default function OpenSeadragonViewer({
  manifest: manifestObj = {},
  manifestUrl,
  options,
  openSeadragonOptions,
  toolBarOptions = {
    showZoom: true,
    showFullScreen: true,
    showDownload: true,
    showPreviousNext: true,
  },
}) {
  const [manifest, setManifest] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (Object.keys(manifestObj).length === 0) {
      getManifest();
      return;
    }
    setManifest(manifestObj);
  }, []);

  const loaderWrapper = css`
    text-align: center;
    height: ${options.height ? options.height : 500}px;
  `;

  async function getManifest() {
    try {
      const response = await fetch(manifestUrl);
      const data = await response.json();
      setManifest(data);
    } catch (e) {
      console.error("e", e);
      console.error(`${e.name}: ${e.message}`);
      let message = e.message.includes("Unexpected token N in JSON at position")
        ? "Error fetching the manifest url, or the manifest is invalid.  View browser console for details."
        : `${e.name}: ${e.message}`;

      setError(message);
      return Promise.resolve();
    }
  }

  if (error) {
    return <Notification error={error} />;
  }

  return manifest ? (
    <ConfigContext.Provider
      value={{ ...options, openSeadragonOptions, toolBarOptions }}
    >
      <ErrorBoundary>
        <div css={wrapper}>
          <Viewer manifest={manifest} />
        </div>
      </ErrorBoundary>
    </ConfigContext.Provider>
  ) : (
    <div css={loaderWrapper}>
      <Loading active={true} />
    </div>
  );
}

OpenSeadragonViewer.propTypes = {
  /** A IIIF manifest object.  This will take precendence over manifestUrl if present */
  manifest: PropTypes.object,
  /** A valid IIIF manifest uri */
  manifestUrl: PropTypes.string,
  /** Configurable options.  All boolean values default to `true` */
  options: PropTypes.shape({
    /** Render URL hash params which represent Zoom levels and invididual tile sources.  Useful for sharing a URL where you want to show a particular Zoom level and tile source. */
    deepLinking: PropTypes.bool,
    /** Set Height in pixels for the viewer */
    height: PropTypes.number,
    /** Display the dropdown menu for navigating tile sources */
    showDropdown: PropTypes.bool,
    /** Display tile source thumbnails preview images in a row  */
    showThumbnails: PropTypes.bool,
    /** Display custom toolbar (replaces default OpenSeadragon toolbar icons) */
    showToolbar: PropTypes.bool,
  }),
  /** Pass through your own OpenSeadragon config options (View all options: https://openseadragon.github.io/docs/OpenSeadragon.Viewport.html) */
  openSeadragonOptions: PropTypes.object,
  /** Configure display of controls on the toolbar.  Values default to `true` */
  toolBarOptions: PropTypes.shape({
    /** Show/hide zoom control */
    showZoom: PropTypes.bool,
    /** Show/hide full screen control */
    showFullScreen: PropTypes.bool,
    /** Show/hide download control */
    showDownload: PropTypes.bool,
    /** Show/hide navigation between tilesources control */
    showPreviousNext: PropTypes.bool,
  }),
  //toolBarOptions: PropTypes.object,
};

OpenSeadragonViewer.defaultProps = {
  options: {
    deepLinking: true,
    height: 800,
    openSeadragonOptions: {},
    showDropdown: true,
    showThumbnails: true,
    showToolbar: true,
    containerId: 'openseadragon1'
  },
  toolBarOptions: {
    showZoom: true,
    showFullScreen: true,
    showDownload: true,
    showPreviousNext: true,
  },
};
