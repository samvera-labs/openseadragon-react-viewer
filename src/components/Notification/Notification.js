import React from "react";
import PropTypes from "prop-types";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const notification = css`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 1.25rem 2.5rem 1.25rem 1.5rem;
  position: relative;
  text-align: center;
  font-size: 1rem;
`;
const danger = css`
  background-color: #f14668;
  color: #fff;
`;

export default function Notification({
  error = "An error occurred with no data passed to the notification",
}) {
  return (
    <div className="osrv-error-message" css={[notification, danger]}>
      {error}
    </div>
  );
}

Notification.propTypes = {
  /** Error message to display */
  error: PropTypes.string,
};
