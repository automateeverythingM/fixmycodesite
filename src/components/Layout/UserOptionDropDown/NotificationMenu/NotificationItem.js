/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Badge } from "react-bootstrap";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "@reach/router";
import FixedSizeImage from "../../../UI/Avatar/FixedSizeImage";
import DropdownItemStyled from "../DropdownItemStyled";
import { truncate } from "loadsh";

const NotificationItem = ({ title, message, isNew, time, imgSrc, jumpTo }) => {
  const truncateMessage = truncate(message, { length: "70" });

  return (
    <DropdownItemStyled size="0.8rem">
      <div className="d-flex text-white w-100 align-items-center">
        <FixedSizeImage src={imgSrc} size="40px" />
        <div className="ml-2 w-100">
          <div className="text-warning font-weight-bold">
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
          <div>{truncateMessage}</div>
          <div className="text-white-50 d-flex align-items-center">
            <AiOutlineClockCircle className="mr-1" /> {time}
          </div>
        </div>
      </div>
    </DropdownItemStyled>
  );
};

export default NotificationItem;
