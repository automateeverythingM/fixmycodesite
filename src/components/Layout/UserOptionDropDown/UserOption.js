/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";
import { FiMail } from "react-icons/fi";
import NotifyIcon from "./NotifyIcon";
const UserOption = () => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <NavDropdown
        title={<NotifyIcon size="2rem" />}
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
      </NavDropdown>

      <NavDropdown
        title={
          <img
            className="rounded-circle"
            src="https://picsum.photos/40"
            alt="avatar"
          />
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
      </NavDropdown>
    </div>
  );
};

export default UserOption;
