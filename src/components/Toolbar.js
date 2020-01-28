import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";

const Toolbar = ({ onDownloadCropClick, onDownloadFullSize }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  function handleDownloadClick(e) {
    e.preventDefault();
    setDropDownOpen(!dropDownOpen);
  }

  function handleDownloadCropClick(e) {
    e.preventDefault();
    onDownloadCropClick();
    setDropDownOpen(false);
  }

  function handleDownloadFullSize(e) {
    e.preventDefault();
    onDownloadFullSize();
    setDropDownOpen(false);
  }

  return (
    <nav>
      <button
        id="zoom-in"
        data-testid="zoom-in"
        href="#zoom-in"
        className="toolbar-controls button-link"
        title="Zoom In"
      >
        <FontAwesomeIcon icon="search-plus" />
      </button>
      <button
        id="zoom-out"
        data-testid="zoom-out"
        href="#zoom-out"
        className="toolbar-controls button-link"
        title="Zoom Out"
      >
        <FontAwesomeIcon icon="search-minus" />
      </button>
      {!isMobile && (
        <button
          id="full-page"
          data-testid="full-page"
          href="#full-page"
          className="toolbar-controls button-link"
          title="Full Screen"
        >
          <FontAwesomeIcon icon="expand" />
        </button>
      )}

      {!isMobile && (
        <div className="openseadragon-toolbar-dropdown-wrapper">
          <button
            data-testid="download"
            onClick={handleDownloadClick}
            className="toolbar-controls button-link"
            aria-haspopup="true"
            aria-expanded={dropDownOpen}
            title="Download"
          >
            <FontAwesomeIcon icon="download" />
          </button>
          {dropDownOpen && (
            <ul className={`openseadragon-toolbar-dropdown`}>
              <li>
                <button
                  data-testid="download-crop"
                  title="Download cropped canvas"
                  onClick={handleDownloadCropClick}
                  className="button-link"
                >
                  Download crop
                </button>
              </li>
              <li>
                <button
                  data-testid="download-full"
                  onClick={handleDownloadFullSize}
                  className="button-link"
                  title="Download full size image"
                >
                  Download full size
                </button>
              </li>
            </ul>
          )}
        </div>
      )}
      <button
        id="previous"
        data-testid="previous"
        href="#previous"
        className="toolbar-controls button-link"
        title="Previous"
      >
        <FontAwesomeIcon icon="arrow-circle-left" />
      </button>
      <button
        id="next"
        data-testid="next"
        href="#next"
        className="toolbar-controls button-link"
        title="Next"
      >
        <FontAwesomeIcon icon="arrow-circle-right" />
      </button>
    </nav>
  );
};

Toolbar.propTypes = {
  isMobile: PropTypes.bool,
  onDownloadCropClick: PropTypes.func,
  onDownloadFullSize: PropTypes.func
};

export default Toolbar;
