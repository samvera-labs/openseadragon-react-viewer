import React, { useEffect, useState } from "react";
import Viewer from "../components/Viewer";
import PropTypes from "prop-types";
import registerFaIcons from "../registerFaIcons";
import Notification from "../components/Notification";
import ErrorBoundary from "../components/ErrorBoundary";

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
const OpenSeadragonContainer = ({ manifestUrl }) => {
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
    <ErrorBoundary>
      <div css={wrapper}>
        <p>Ima Circle CI Test</p>
        <Viewer manifest={manifest} />
      </div>
    </ErrorBoundary>
  ) : null;
};

OpenSeadragonContainer.propTypes = {
  manifestUrl: PropTypes.string,
};

export default OpenSeadragonContainer;
