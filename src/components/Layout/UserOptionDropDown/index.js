/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { NotificationsDropdown } from "./NotificationMenu";
import { UserDropdown } from "./UserMenu";

export const UserOption = () => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <NotificationsDropdown />
      <UserDropdown />
    </div>
  );
};
