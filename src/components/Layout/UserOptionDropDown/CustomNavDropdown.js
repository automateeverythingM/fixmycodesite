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
          top: 130%;
          right: 30%;
          left: auto;
          background: ${colors.dark};
          @media (max-width: 767.98px) {
            left: 0;
            right: auto;
          }
        }
        & > a {
          padding: 0 0.6rem;
        }
        .dropdown-toggle::after {
          display: none;
        }
      `}
      className="bg-dark px-1"
      menuAlign={{ lg: "right", md: "left" }}
      {...rest}
    >
      {children}
    </NavDropdown>
  );
};
