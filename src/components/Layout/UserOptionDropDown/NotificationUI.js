/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { Badge } from "react-bootstrap";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import FixedSizeImage from "../../UI/Avatar/FixedSizeImage";
import DropdownItemStyled from "./DropdownItemStyled";

const dropdownItemCss = css`
  display: flex;
  align-items: center;
  max-width: 350px;
  width: 350px;
  white-space: normal;
  padding: 0.5rem 0.5rem;
  font-size: 0.7rem;
  &:hover {
    background: #54595f;
  }
`;

const NotificationUI = ({ title, message, isNew, time, imgSrc, jumpTo }) => {
  return (
    <DropdownItemStyled as={Link}>
      <div className="d-flex text-white w-100 align-items-center">
        <FixedSizeImage src={imgSrc} size="40px" />
        <div className="ml-2 w-100">
          <div
            className="text-warning font-weight-bold"
            css={css`
              font-size: 0.8rem;
            `}
          >
            {title}
            {isNew && (
              <Badge
                variant="danger"
                css={css`
                  font-size: 0.5rem;
                `}
                className="ml-2"
              >
                New
              </Badge>
            )}
          </div>
          <div>{message}</div>
          <div className="text-white-50 d-flex align-items-center">
            <AiOutlineClockCircle className="mr-1" /> {time}
          </div>
        </div>
      </div>
    </DropdownItemStyled>
  );
};

export default NotificationUI;
