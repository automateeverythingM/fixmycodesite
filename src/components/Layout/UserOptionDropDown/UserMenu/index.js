/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { CustomNavDropdown } from "../CustomNavDropdown";
import FixedSizeImage from "../../../UI/Avatar/FixedSizeImage";
import UserMenuItem from "./UserMenuItem";
import mockOptions from "../../../../mocks/usermenuoptions";

export const UserDropdown = () => {
  return (
    <CustomNavDropdown
      id="user-menu"
      title={
        <FixedSizeImage
          src="https://picsum.photos/40"
          size="1.5rem"
          alt="avatar"
          className="border"
          rounded
        />
      }
      css={css`
        padding: 0;
      `}
    >
      {mockOptions.map((item) => (
        <UserMenuItem
          className="font-weight-bold text-white"
          title={item.title}
          key={item.id}
          icon={item.icon}
          to={item.to}
        />
      ))}
    </CustomNavDropdown>
  );
};
