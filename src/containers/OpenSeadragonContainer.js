import React, { useEffect, useState } from "react";
import Viewer from "../components/Viewer";
import PropTypes from "prop-types";

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
    return (
      <div className="notification is-danger">
        <button className="delete" onClick={() => setError()}></button>
        {error}
      </div>
    );
  }

  return manifest ? (
    <div className="osdr-wrapper">
      <Viewer manifest={manifest} />
    </div>
  ) : null;
};

OpenSeadragonContainer.propTypes = {
  manifestUrl: PropTypes.string
};

export default OpenSeadragonContainer;
