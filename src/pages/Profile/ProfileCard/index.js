/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { photoUrlSelector } from "../../../app/reducers/userSlice";
import FixedSizeImage from "../../../components/UI/Avatar/FixedSizeImage";

function ProfileCard() {
  const photoUrl = useSelector(photoUrlSelector);
  return (
    <div css={css``}>
      <FixedSizeImage rounded size="250px" src={photoUrl} />
    </div>
  );
}

export default ProfileCard;
