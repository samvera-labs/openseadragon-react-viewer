import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const FilesetReactSelect = ({
  currentTileSource,
  onFileSetChange,
  tileSources = []
}) => {
  const tileSourcesCount = tileSources.length;

  if (!currentTileSource || tileSourcesCount < 2) return null;

  const handleChange = value => {
    onFileSetChange(value.id);
  };

  return (
    <div className="dropdown-select-wrapper" data-testid="react-select-wrapper">
      <Select
        options={tileSources}
        value={currentTileSource}
        onChange={handleChange}
        isMulti={false}
        isOptionSelected={obj => false}
        className="react-select-container"
        classNamePrefix="react-select"
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: "#716c6b",
            primary50: "#d8d6d6",
            primary25: "#bbb8b8"
          }
        })}
      />
    </div>
  );
};

const tileSourceShape = {
  label: PropTypes.string,
  id: PropTypes.string
};

FilesetReactSelect.propTypes = {
  currentTileSource: PropTypes.shape(tileSourceShape),
  onFileSetChange: PropTypes.func,
  tileSources: PropTypes.array
};

export default FilesetReactSelect;
