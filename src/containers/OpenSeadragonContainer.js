import React, { useEffect, useState, useContext } from "react";
import Viewer from "../components/Viewer";
import PropTypes from "prop-types";
import registerFaIcons from "../registerFaIcons";
import Notification from "../components/Notification";
import ErrorBoundary from "../components/ErrorBoundary";
import { ConfigContext } from "../config-context";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const wrapper = css`
  position: relative;
`;

// Instantiate FontAwesome icons
registerFaIcons();

/**
 * Wrapper OpenSeadragon component
 * @param {Object} props - React props
 * @param {string} props.manifestUrl - something like "https://some-manifes-url"
 */
const OpenSeadragonContainer = ({ manifestUrl, ...restProps }) => {
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
    <ConfigContext.Provider value={{ ...restProps }}>
      <ErrorBoundary>
        <div css={wrapper}>
          <Viewer manifest={manifest} />
        </div>
      </ErrorBoundary>
    </ConfigContext.Provider>
  ) : null;
};

OpenSeadragonContainer.propTypes = {
  manifestUrl: PropTypes.string,
  showDropdown: PropTypes.bool,
  showThumbnails: PropTypes.bool,
  showToolbar: PropTypes.bool,
};

export default OpenSeadragonContainer;
