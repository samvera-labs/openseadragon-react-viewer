import React, { useEffect, useState, useContext } from "react";
import Viewer from "../Viewer/Viewer";
import PropTypes from "prop-types";
import registerFaIcons from "../../registerFaIcons";
import Notification from "../Notification/Notification";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { ConfigContext } from "../../config-context";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

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
export default function OpenSeadragonViewer({ manifestUrl, options }) {
  const [manifest, setManifest] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    getManifest();
  }, []);

  async function getManifest() {
    try {
      const response = await fetch(`${manifestUrl}`);
      const data = await response.json();
      setManifest(data);
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
      setError(`${e.name}: ${e.message}`);
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
  ) : null;
}

OpenSeadragonViewer.propTypes = {
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
  }),
};

OpenSeadragonViewer.defaultProps = {
  options: {
    showDropdown: true,
    showThumbnails: true,
    showToolbar: true,
  },
};
