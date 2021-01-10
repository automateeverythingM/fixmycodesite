/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
const dropdownItemCss = css`
  display: flex;
  align-items: center;
  max-width: 350px;
  width: 350px;
  white-space: normal;
  padding: 0.5rem 0.5rem;
  font-size: ${(props) => props.size || "0.7rem"};
  &:hover {
    background: #54595f;
  }
`;

const DropdownItemStyled = ({ children, size, ...rest }) => {
  return (
    <DropdownItem
      css={css`
        display: flex;
        align-items: center;
        max-width: 350px;
        width: 350px;
        white-space: normal;
        padding: 0.5rem 0.5rem;
        font-size: ${size || "0.7rem"};
        &:hover {
          background: #54595f;
        }
      `}
      {...rest}
    >
      {children}
    </DropdownItem>
  );
};

export default DropdownItemStyled;
