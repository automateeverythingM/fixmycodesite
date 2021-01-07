/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Avatar from "../../UI/Avatar/Avatar";

const CustomDropdownItem = ({ size = "1.5rem" }) => {
  return (
    <DropdownItem
      css={css`
        display: flex;
        max-width: 350px;
      `}
      className="px-2 text-white"
    >
      <Avatar src="https://picsum.photos/40" size="40px" />
      <div>
        <div className="font-weight-bold">Code Accepted</div>
        <div
          css={css`
            font-size: 0.8rem;
          `}
        >
          Lorem ipsum dolor sit amet
          <span className="text-warning font-weight-bold">Marko</span>
          consectetur adipisicing elt
        </div>
      </div>
    </DropdownItem>
  );
};

export default CustomDropdownItem;
