/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { Badge } from "react-bootstrap";
import { FaBell } from "react-icons/fa";

const NotifyIcon = ({
  color = "#ffffff88",
  size = "1rem",
  notificationNumber = 2,
}) => {
  return (
    <span
      className="position-relative"
      css={css`
        color: #ffffffaa;
        &:hover {
          color: #fff;
        }
      `}
    >
      {notificationNumber && (
        <Badge
          css={css`
            top: -0.5rem;
            right: -0.2rem;
          `}
          className="text-white bg-danger position-absolute"
        >
          {notificationNumber}
        </Badge>
      )}
      <FaBell size={size} />
    </span>
  );
};

export default NotifyIcon;
