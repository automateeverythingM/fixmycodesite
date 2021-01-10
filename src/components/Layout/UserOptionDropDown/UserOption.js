/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import FixedSizeImage from "../../UI/Avatar/FixedSizeImage";
import { CustomNavDropdown } from "./CustomNavDropdown";
import NotificationUI from "./NotificationUI";
import NotifyIcon from "./NotifyIcon";
import notificationMock from "../../../mocks/notification";
import SeeAllNotify from "./SeeAllNotify";

const UserOption = () => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <CustomNavDropdown title={<NotifyIcon size="1.5rem" />}>
        {notificationMock.map((n) => (
          <NotificationUI
            imgSrc={n.imgSrc}
            title={n.title}
            message={n.message}
            time={n.time}
            isNew={n.isNew}
          />
        ))}

        <SeeAllNotify to="/notifications" />
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
    </div>
  );
};

export default UserOption;
