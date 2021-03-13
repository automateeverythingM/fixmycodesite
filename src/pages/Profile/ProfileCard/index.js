/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import {
  photoUrlSelector,
  userSelector,
} from "../../../app/reducers/userSlice";
import FixedSizeImage from "../../../components/UI/Avatar/FixedSizeImage";

function ProfileCard() {
  const { photoURL, displayName } = useSelector(userSelector);

  return (
    <div className="pt-5">
      <FixedSizeImage rounded size="250px" src={photoURL} />
      <div className="mt-3">
        <h2>{displayName}</h2>
        <h2
          css={css`
            font-weight: 100;
          `}
        >
          automateeverythingM
        </h2>
      </div>
    </div>
  );
}

export default ProfileCard;
