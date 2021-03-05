/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Container, Jumbotron } from "react-bootstrap";
import ProfileCard from "./Cards/ProfileCard";

function ProfileBanner() {
  return (
    <Jumbotron
      css={css`
        height: 100vh;
        background: #c7e2f3;
      `}
      className=" d-flex align-items-center"
    >
      <Container
        className="bg-primary p-5"
        css={css`
          border-radius: 2rem;
        `}
      >
        <ProfileCard />
      </Container>
    </Jumbotron>
  );
}

export default ProfileBanner;
