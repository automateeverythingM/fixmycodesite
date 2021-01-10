/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Link } from "react-router-dom";
import DropdownItemStyled from "./DropdownItemStyled";

const dropdownItemCss = css`
  display: flex;
  align-items: center;
  max-width: 350px;
  width: 350px;
  white-space: normal;
  padding: 0.5rem 0.5rem;
  font-size: 0.7rem;
  justify-content: center;
  &:hover {
    background: #54595f;
  }
`;

const SeeAllNotify = () => {
  return (
    <DropdownItemStyled
      as={Link}
      to="/notifications"
      className="border-top justify-content-center"
    >
      See All Notifications
    </DropdownItemStyled>
  );
};

export default SeeAllNotify;
