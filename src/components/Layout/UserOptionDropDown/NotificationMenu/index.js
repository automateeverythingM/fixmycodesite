import { CustomNavDropdown } from "../CustomNavDropdown";
import SeeAllNotify from "./SeeAllNotify";
import notificationMock from "../../../../mocks/notification";
import NotifyIcon from "./NotifyIcon";
import NotificationItem from "./NotificationItem";
export const NotificationsDropdown = () => {
  return (
    <CustomNavDropdown
      id="notify-menu"
      className="p-0"
      title={<NotifyIcon size="1.5rem" />}
    >
      {notificationMock.map((n) => (
        <NotificationItem
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
