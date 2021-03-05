/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Col, Row } from "react-bootstrap";
import ProfileCardWithComments from "./ProfileCardWithComments";
const ProfileCard = () => {
  return (
    <Row className="d-flex align-items-center ">
      <Col md={8}>
        <ProfileCardWithComments />
      </Col>
      <Col
        md={4}
        className="text-light p-4"
        css={css`
          align-self: start;
        `}
      >
        <h3>True comment on profile, unedited.</h3>
        <h3>Rating system</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia fugiat,
          minus neque impedit voluptas atque ut, ipsum blanditiis quas similique
          officiis. Dolorum impedit quia culpa rem eaque dolore officia in?
        </p>
      </Col>
    </Row>
  );
};

export default ProfileCard;
