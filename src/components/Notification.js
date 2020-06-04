import React from "react";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const notification = css`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 1.25rem 2.5rem 1.25rem 1.5rem;
  position: relative;
  text-align: center;
`;
const danger = css`
  background-color: #f14668;
  color: #fff;
`;

const Notification = ({
  error = "An error occurred with no data passed to the notification",
}) => {
  return <div css={[notification, danger]}>{error}</div>;
};

export default Notification;
