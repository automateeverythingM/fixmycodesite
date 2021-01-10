import React from "react";
import { CustomNavDropdown } from "../CustomNavDropdown";
import NotificationUI from "./NotificationUI";
import SeeAllNotify from "./SeeAllNotify";
import notificationMock from "../../../../mocks/notification";
import NotifyIcon from "./NotifyIcon";

export const NotificationsDropdown = () => {
  return (
    <CustomNavDropdown title={<NotifyIcon size="1.5rem" />}>
      {notificationMock.map((n) => (
        <NotificationUI
          key={n.id}
          imgSrc={n.imgSrc}
          title={n.title}
          message={n.message}
          time={n.time}
          isNew={n.isNew}
        />
      ))}

      <SeeAllNotify to="/notifications" />
    </CustomNavDropdown>
  );
};
