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
      <FixedSizeImage rounded size="200px" src={photoURL} />
      <div className="mt-3">
        <h2>{displayName}</h2>
        <h3
          css={css`
            font-weight: 100;
          `}
        >
          automateeverythingM
        </h3>

        <div className="mt-5">
          <h5>Bio</h5>
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. aspernatur
            nihil corrupti cupiditate fugiat provident, officia illo
            perspiciatis. Corrupti, illo maiores necessitatibus natus ducimus
            omnis nihil nemo et voluptatibus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
