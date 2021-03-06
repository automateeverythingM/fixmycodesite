/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Container, Jumbotron } from "react-bootstrap";
import ProfileCard from "./Cards/ProfileCard";

function ProfileBanner() {
  return (
    <Jumbotron
      css={css`
        @media (max-width: 768.98px) {
          background: #007bff;
        }
      `}
      className=" d-flex align-items-center"
    >
      <Container
        className="bg-primary p-5"
        css={css`
          border-radius: 2em;
        `}
      >
        <ProfileCard />
      </Container>
    </Jumbotron>
  );
}

export default ProfileBanner;
