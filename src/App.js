import React from "react";
import "./App.scss";
import OpenSeadragonContainer from "./containers/OpenSeadragonContainer";
import registerFaIcons from "./registerFaIcons";
import PropTypes from "prop-types";

// Font awesome icons
registerFaIcons();

//TODO: Pull out "showSelectFilter", "showCustomThumbnails" and add them to a Context Provider for the app

/**
 * App component
 *
 * @param {Object} props - React props
 * @param {string} props.manifestUrl - Url of public IIIF manifest which will provide data for the viewer
 * @param {boolean} props.showSelectFilter - Show the filterable select dropdown of filesets, if a work has multiple filesets
 * @param {boolean} props.showCustomThumbnails - Show the filterable select dropdown of filesets, if a work has multiple filesets
 */
const App = props => {
  return <OpenSeadragonContainer {...props} />;
};

App.propTypes = {
  manifestUrl: PropTypes.string,
  showSelectFilter: PropTypes.bool,
  showCustomThumbnails: PropTypes.bool
};

export default App;
