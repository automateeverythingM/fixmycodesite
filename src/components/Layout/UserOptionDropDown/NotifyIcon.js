/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { Badge } from "react-bootstrap";
import { FaBell } from "react-icons/fa";

const NotifyIcon = ({
  color = "white",
  size = "1rem",
  notificationNumber = 2,
}) => {
  return (
    <span className="text-white position-relative">
      {notificationNumber && (
        <Badge
          css={css`
            top: -0.5rem;
            right: -0.2rem;
          `}
          className="bg-danger position-absolute"
        >
          {notificationNumber}
        </Badge>
      )}
      <FaBell size={size} color={color} />
    </span>
  );
};

export default NotifyIcon;
