/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from "@emotion/react";
import React from "react";
import Avatar from "../../UI/Avatar/Avatar";
import CustomDropdownItem from "./CustomDropdownItem";
import { CustomNavDropdown } from "./CustomNavDropdown";
import NotifyIcon from "./NotifyIcon";

const UserOption = () => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <CustomNavDropdown title={<NotifyIcon size="1.5rem" />}>
        <CustomDropdownItem></CustomDropdownItem>
      </CustomNavDropdown>

      <CustomNavDropdown
        title={
          <Avatar
            src="https://picsum.photos/40"
            size="1.5rem"
            alt="avatar"
            className="border"
          />
        }
      ></CustomNavDropdown>

      {/* <NavDropdown
        title={
          <Avatar src="https://picsum.photos/40" size="1.5rem" alt="avatar" />
        }
        css={css`
          .dropdown-toggle::after {
            display: none;
          }
        `}
        id="user-menu"
        className="text-white"
        alignRight
      >
        <Dropdown.Item></Dropdown.Item>
      </NavDropdown> */}
    </div>
  );
};

export default UserOption;
