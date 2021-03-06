/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const DropdownItemStyled = ({ children, size, ...rest }) => {
  return (
    <DropdownItem
      css={css`
        display: flex;
        align-items: center;
        max-width: 350px;
        width: 300px;
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
