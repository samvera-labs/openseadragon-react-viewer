import React, { useEffect, useState } from "react";
import Viewer from "../components/Viewer";
import PropTypes from "prop-types";
import axios from "axios";

/**
 * Wrapper OpenSeadragon component
 * @param {Object} props - React props
 * @param {string} props.manifestUrl - something like "https://some-manifes-url"
 */
const OpenSeadragonContainer = ({ manifestUrl }) => {
  const [manifest, setManifest] = useState();

  useEffect(() => {
    getManifest();
  }, []);

  async function getManifest() {
    const response = await axios.get(manifestUrl);

    //TODO:  Handle possible errors

    setManifest(response.data);
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
