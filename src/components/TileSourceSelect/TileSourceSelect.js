import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const dropdownSelectWrapper = css`
  width: 350px;
  color: #342f2e;
  padding-right: 1rem;
  font-size: 1rem;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
const reactSelectContainer = css`
  text-align: left;
`;

const TileSourceSelect = ({
  currentTileSource,
  onFileSetChange,
  tileSources = [],
}) => {
  const tileSourcesCount = tileSources.length;

  if (!currentTileSource || tileSourcesCount < 2) return null;

  const handleChange = (value) => {
    onFileSetChange(value.id);
  };

  return (
    <div
      css={dropdownSelectWrapper}
      className="osrv-tilesource-select-wrapper"
      data-testid="react-select-wrapper"
    >
      <Select
        classNamePrefix="react-select"
        css={reactSelectContainer}
        getOptionValue={(option) => option.id}
        isMulti={false}
        maxMenuHeight={600}
        onChange={handleChange}
        options={tileSources}
        placeholder="Filter work file sets"
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: "#716c6b",
            primary50: "#d8d6d6",
            primary25: "#bbb8b8",
          },
        })}
        value={currentTileSource}
      />
    </div>
  );
};

const tileSourceShape = {
  label: PropTypes.string,
  id: PropTypes.string,
};

TileSourceSelect.propTypes = {
  currentTileSource: PropTypes.shape(tileSourceShape),
  /** Callback function executed when a thumbnail is clicked */
  onFileSetChange: PropTypes.func,
  /** All tilesources for the thumbnails */
  tileSources: PropTypes.array,
};

export default TileSourceSelect;
