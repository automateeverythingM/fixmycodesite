import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from "@emotion/react";
import { NavDropdown, Dropdown } from "react-bootstrap";
import NotifyIcon from "./NotifyIcon";

export const CustomNavDropdown = ({ children, title, ...rest }) => {
  const { colors } = useTheme();

  return (
    <NavDropdown
      title={title}
      css={css`
        & > div {
          background: ${colors.dark};
        }
        .dropdown-toggle::after {
          display: none;
        }
      `}
      id="user-menu"
      className="bg-dark px-1"
      alignRight
    >
      {children}
    </NavDropdown>
  );
};
