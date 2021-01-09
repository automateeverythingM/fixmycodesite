/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import FixedSizeImage from "../../UI/Avatar/FixedSizeImage";
import { FiMail } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";

const CustomDropdownItem = ({ size = "1.5rem" }) => {
  return (
    <DropdownItem
      css={css`
        display: flex;
        align-items: center;
        max-width: 350px;
        width: 350px;
        white-space: normal;
        &:hover {
          background: #54595f;
        }
      `}
      className="px-2 text-white"
    >
      <div className="w-100 d-flex">
        <div className="mr-auto">
          <div className="d-flex w-100 align-items-center">
            <FiMail size="0.8rem" className="text-primary" />
            <span className="ml-1 text-primary">Message</span>
            <span
              css={css`
                font-size: 0.8rem;
              `}
              className="text-white-50"
            >
              <AiOutlineClockCircle size="1rem" className="ml-1" /> one hour ago
            </span>
          </div>
          <div className="d-block">
            <div className="text-warning font-weight-bold">Title</div>
            <div
              css={css`
                font-size: 0.8rem;
              `}
            >
              Brojger le opslasd odgovor na vas code
            </div>
          </div>
        </div>
        <div className="d-flex align-items-end">
          <FixedSizeImage src="https://picsum.photos/40" size="40px" />
        </div>
      </div>
    </DropdownItem>
  );
};

export default CustomDropdownItem;
