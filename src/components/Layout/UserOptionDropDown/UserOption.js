/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from "@emotion/react";
import React from "react";
import FixedSizeImage from "../../UI/Avatar/FixedSizeImage";
import CustomDropdownItem from "./CustomDropdownItem";
import { CustomNavDropdown } from "./CustomNavDropdown";
import NotificationUI from "./NotificationUI";
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
        <NotificationUI
          imgSrc="https://picsum.photos/60"
          title="Code Fix"
          message="Your response was accepted and you got reword 2 euro"
          time="2 hour ago"
          isNew
        />
        <NotificationUI
          imgSrc="https://picsum.photos/50"
          title="Comment of code"
          message="I missed explanation of saving file"
          time="5 days ago"
          isNew
        />
        <NotificationUI
          imgSrc="https://picsum.photos/65"
          title="Setting policy changes"
          message="Please update you agreement"
          time="2 weeks ago"
        />
        <NotificationUI
          imgSrc="https://picsum.photos/70"
          title="Friend request"
          message="Marko has sent you a friend request"
          time="long time ago"
        />
      </CustomNavDropdown>

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
