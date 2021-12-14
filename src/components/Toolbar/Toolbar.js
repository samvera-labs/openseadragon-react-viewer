import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";

/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const toolbarWrapper = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1rem;
  .osrv-toolbar-button-text {
    display: none;
  }
  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`;
const toolbarControl = css`
  color: white;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 14px;
  border: 0;
  font-size: 2rem;
  padding: 10px;

  &:hover {
    background: rgba(0, 0, 0, 0.75);
  }
`;
const osdToolbarDropdownWrapper = css`
  position: relative;
  display: inline-block;
`;
const osdToolbarDropdown = css`
  position: absolute;
  top: 50px;
  left: -65px;
  background: #342f2e;
  color: #e3e3e3;
  width: 200px;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #716c6b;

  button {
    padding: 0.75rem 1rem;
    color: #f0f0f0;
    display: inline-block;
    width: 100%;
    font-size: 1rem;
    &:hover {
      background: #716c6b;
      transition: all 0.25s ease-in-out;
    }
  }
`;

const Toolbar = ({
  onDownloadCropClick,
  onDownloadFullSize,
  toolBarOptions = {},
  containerId,
}) => {
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
    <nav css={toolbarWrapper} className="osrv-toolbar-wrapper">
      {toolBarOptions?.showZoom && (
        <>
          <button
            id={`zoom-in-${containerId}`}
            data-testid="zoom-in"
            href="#zoom-in"
            css={toolbarControl}
            className="osrv-toolbar-button"
            title="Zoom In"
          >
            <FontAwesomeIcon icon="search-plus" />
            <span className="osrv-toolbar-button-text">Zoom In</span>
          </button>
          <button
            id={`zoom-out-${containerId}`}
            data-testid="zoom-out"
            href="#zoom-out"
            css={toolbarControl}
            className="osrv-toolbar-button"
            title="Zoom Out"
          >
            <FontAwesomeIcon icon="search-minus" />
            <span className="osrv-toolbar-button-text">Zoom Out</span>
          </button>
        </>
      )}

      {!isMobile && toolBarOptions?.showFullScreen && (
        <button
          id={`full-page-${containerId}`}
          data-testid="full-page"
          href="#full-page"
          css={toolbarControl}
          className="osrv-toolbar-button"
          title="Full Screen"
        >
          <FontAwesomeIcon icon="expand" />
          <span className="osrv-toolbar-button-text">Full Screen</span>
        </button>
      )}

      {!isMobile && toolBarOptions?.showDownload && (
        <div css={osdToolbarDropdownWrapper}>
          <button
            data-testid="download"
            onClick={handleDownloadClick}
            css={toolbarControl}
            className="osrv-toolbar-button"
            aria-haspopup="true"
            aria-expanded={dropDownOpen}
            title="Download"
          >
            <FontAwesomeIcon icon="download" />
            <span className="osrv-toolbar-button-text">Download Image</span>
          </button>
          {dropDownOpen && (
            <ul css={osdToolbarDropdown}>
              <li>
                <button
                  data-testid="download-crop"
                  title="Download cropped canvas"
                  onClick={handleDownloadCropClick}
                  css={toolbarControl}
                  className="osrv-toolbar-button"
                >
                  Download crop
                </button>
              </li>
              <li>
                <button
                  data-testid="download-full"
                  onClick={handleDownloadFullSize}
                  css={toolbarControl}
                  className="osrv-toolbar-button"
                  title="Download full size image"
                >
                  Download full size
                </button>
              </li>
            </ul>
          )}
        </div>
      )}
      {toolBarOptions?.showPreviousNext && (
        <>
          <button
            id={`previous-${containerId}`}
            data-testid="previous"
            href="#previous"
            css={toolbarControl}
            className="osrv-toolbar-button"
            title="Previous"
          >
            <FontAwesomeIcon icon="arrow-circle-left" />
            <span className="osrv-toolbar-button-text">Previous</span>
          </button>
          <button
            id={`next-${containerId}`}
            data-testid="next"
            href="#next"
            css={toolbarControl}
            className="osrv-toolbar-button"
            title="Next"
          >
            <FontAwesomeIcon icon="arrow-circle-right" />
            <span className="osrv-toolbar-button-text">Next</span>
          </button>
        </>
      )}
    </nav>
  );
};

Toolbar.propTypes = {
  /** Show if the device is mobile using package `react-device-detect` */
  isMobile: PropTypes.bool,
  /** Callback function executed when Dropdown Crop is clicked */
  onDownloadCropClick: PropTypes.func,
  /** Callback function executed when Dropdown Full size is clicked */
  onDownloadFullSize: PropTypes.func,
  /** Configuration options for the toolbar */
  toolBarOptions: PropTypes.shape({
    showDownload: PropTypes.bool,
    showFullScreen: PropTypes.bool,
    showPreviousNext: PropTypes.bool,
    showZoom: PropTypes.bool,
  }),
  /** Option id attribute for the container element */
  containerId: PropTypes.string,
};

export default Toolbar;
