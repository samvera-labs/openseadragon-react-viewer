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

// Instantiate FontAwesome icons
registerFaIcons();

/**
 * Wrapper component around the OpenSeadragon viewer
 *
 * @visibleName OpenSeadragonViewer
 */
export default function OpenSeadragonViewer({
  manifest: manifestObj = {},
  manifestUrl,
  options,
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
    <ConfigContext.Provider value={{ ...options }}>
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
  /** Configurable options */
  options: PropTypes.shape({
    /** Display the dropdown menu for navigating tile sources */
    showDropdown: PropTypes.bool,
    /** Display tile source thumbnails preview images in a row  */
    showThumbnails: PropTypes.bool,
    /** Display custom toolbar (replaces default OpenSeadragon toolbar icons) */
    showToolbar: PropTypes.bool,
    /** Display URL params for Zooming and selected tile source highlighting */
    deepLinking: PropTypes.bool,
    /** Set Height in pixels for the viewer */
    height: PropTypes.number,
  }),
};

OpenSeadragonViewer.defaultProps = {
  options: {
    showDropdown: true,
    showThumbnails: true,
    showToolbar: true,
    deepLinking: true,
    height: 800,
  },
};
