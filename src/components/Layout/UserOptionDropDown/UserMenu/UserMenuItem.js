/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import DropdownItemStyled from "../DropdownItemStyled";

const UserMenuItem = ({ icon: Icon, title, ...rest }) => {
  return (
    <DropdownItemStyled
      css={css`
        width: auto;
      `}
      className="text-white"
      as={Link}
      size="1rem"
      {...rest}
    >
      <span className="mx-3">{Icon}</span> {title}
    </DropdownItemStyled>
  );
};

export default UserMenuItem;
