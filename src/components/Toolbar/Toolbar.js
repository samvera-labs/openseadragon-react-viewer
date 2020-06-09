import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const toolbarWrapper = css`
  z-index: 100;
  margin: 0 2rem 0 0;
`;
const toolbarControl = css`
  color: #bbb8b8;
  background: transparent;
  border: 0;
  font-size: 2rem;
  padding: 10px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
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
  a {
    padding: 0.75rem 1rem;
    color: #f0f0f0;
    display: inline-block;
    width: 100%;

    &:hover {
      background: #716c6b;
      transition: all 0.25s ease-in-out;
    }
  }
`;

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
        css={toolbarControl}
        title="Zoom In"
      >
        <FontAwesomeIcon icon="search-plus" />
      </button>
      <button
        id="zoom-out"
        data-testid="zoom-out"
        href="#zoom-out"
        css={toolbarControl}
        title="Zoom Out"
      >
        <FontAwesomeIcon icon="search-minus" />
      </button>
      {!isMobile && (
        <button
          id="full-page"
          data-testid="full-page"
          href="#full-page"
          css={toolbarControl}
          title="Full Screen"
        >
          <FontAwesomeIcon icon="expand" />
        </button>
      )}

      {!isMobile && (
        <div css={osdToolbarDropdownWrapper}>
          <button
            data-testid="download"
            onClick={handleDownloadClick}
            css={toolbarControl}
            aria-haspopup="true"
            aria-expanded={dropDownOpen}
            title="Download"
          >
            <FontAwesomeIcon icon="download" />
          </button>
          {dropDownOpen && (
            <ul css={osdToolbarDropdown}>
              <li>
                <button
                  data-testid="download-crop"
                  title="Download cropped canvas"
                  onClick={handleDownloadCropClick}
                  css={toolbarControl}
                >
                  Download crop
                </button>
              </li>
              <li>
                <button
                  data-testid="download-full"
                  onClick={handleDownloadFullSize}
                  css={toolbarControl}
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
        css={toolbarControl}
        title="Previous"
      >
        <FontAwesomeIcon icon="arrow-circle-left" />
      </button>
      <button
        id="next"
        data-testid="next"
        href="#next"
        css={toolbarControl}
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
  onDownloadFullSize: PropTypes.func,
};

export default Toolbar;
