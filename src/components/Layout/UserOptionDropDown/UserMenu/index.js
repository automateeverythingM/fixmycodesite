import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { CustomNavDropdown } from "../CustomNavDropdown";
import FixedSizeImage from "../../../UI/Avatar/FixedSizeImage";

export const UserDropdown = () => {
  return (
    <CustomNavDropdown
      title={
        <FixedSizeImage
          src="https://picsum.photos/40"
          size="1.5rem"
          alt="avatar"
          className="border"
          rounded
        />
      }
    ></CustomNavDropdown>
  );
};
