import React from "react";
import PropTypes from "prop-types";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const bottomPanel = css`
  background-color: rgba(52, 47, 46, 0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 130px;
  z-index: 4;
  overflow: hidden;
  transition: transform 0.3s ease;
`;
const thumbnailView = css`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`;
const activeThumb = css`
  outline: 8px solid #f0f0f0;
  cursor: pointer;
  transition: outline 0.2s ease-in-out;
`;
const panelListingThumbs = css`
  clear: both;
  list-style: none;
  padding: 0;
  white-space: nowrap;
  margin-top: 13px;
  margin-bottom: 4px;

  li {
    box-sizing: border-box;
    padding: 0 10px 0 10px;
    display: inline-block;

    &.active {
      img {
        ${activeThumb}
      }
    }
  }

  img {
    margin: 8px;
    &:hover {
      ${activeThumb}
    }
  }
`;

export default function Thumbnails({
  currentFileset,
  tileSources = [],
  onThumbClick,
}) {
  return (
    <div data-testid="open-seadragon-thumbnails-container" css={bottomPanel}>
      <div css={thumbnailView}>
        <ul css={panelListingThumbs}>
          {tileSources.map((t) => (
            <li
              key={t.id}
              data-testid="fileset-thumbnail"
              onClick={() => onThumbClick(t.id)}
              aria-label="Thumbnail"
              className={
                currentFileset && currentFileset.id === t.id ? "active" : ""
              }
            >
              <img
                src={`${t.id}/square/70,70/0/default.jpg`}
                className="thumbnail-image"
                alt={t.label}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Thumbnails.propTypes = {
  /** Current tile source displayed in OpenSeadragon viewer */
  currentFileset: PropTypes.object,
  /** Callback function executed when a thumbnail is clicked */
  onThumbClick: PropTypes.func,
  /** All tilesources for the image resource */
  tileSources: PropTypes.array,
};
