import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from "@emotion/react";
import { NavDropdown } from "react-bootstrap";

export const CustomNavDropdown = ({ children, title, ...rest }) => {
  const { colors } = useTheme();

  return (
    <NavDropdown
      title={title}
      css={css`
        & > div {
          background: ${colors.dark};
        }
        & > a {
          padding: 0 0.6rem;
        }
        .dropdown-toggle::after {
          display: none;
        }
      `}
      className="bg-dark px-1"
      alignRight
      {...rest}
    >
      {children}
    </NavDropdown>
  );
};
