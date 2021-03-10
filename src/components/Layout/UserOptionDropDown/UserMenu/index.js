/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { CustomNavDropdown } from "../CustomNavDropdown";
import FixedSizeImage from "../../../UI/Avatar/FixedSizeImage";
import UserMenuItem from "./UserMenuItem";
import mockOptions from "../../../../mocks/usermenuoptions";
import DropdownItemStyled from "../DropdownItemStyled";
import { Dropdown } from "react-bootstrap";
import { FaReply } from "react-icons/fa";
import { auth } from "../../../../firebase";
import { photoUrlSelector } from "../../../../app/reducers/userSlice";
import { useSelector } from "react-redux";
import { navigate } from "@reach/router";

export const UserDropdown = () => {
  const photoURL = useSelector(photoUrlSelector);
  return (
    <CustomNavDropdown
      id="user-menu"
      title={
        <FixedSizeImage
          src={photoURL}
          size="1.5rem"
          alt="avatar"
          className=""
          css={css`
            border: 2px solid #ffffff99;
            &:hover {
              border-color: white;
            }
          `}
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
      <Dropdown.Divider />
      <DropdownItemStyled
        css={css`
          width: auto;
        `}
        className="text-white"
        size="1rem"
        onClick={async () => {
          await auth.signOut();
          navigate("/");
        }}
      >
        <span className="mx-3">
          <FaReply />
        </span>{" "}
        Logout
      </DropdownItemStyled>
    </CustomNavDropdown>
  );
};
