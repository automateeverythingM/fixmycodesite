/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Router } from "@reach/router";
import { Col, Container, Row } from "react-bootstrap";
import ProfileNav from "./ProfileNav";
import Projects from "./Projects";
import ProfileCard from "./ProfileCard";
import keyboard from "../../assets/img/profile/keyboard1.svg";
import Status from "./Status";
function Profile() {
  return (
    <div>
      <div
        css={css`
          height: 150px;
          color: whitesmoke;
          background: #333;
          background-image: url(${keyboard});
          box-shadow: 2px 0 3px 2px #666;
          background-repeat: no-repeat;
          background-position: right;
          background-size: 300px;
        `}
        className="d-flex align-items-end justify-content-start"
      >
        <Container>
          <Row className="w-100">
            <Col md={{ offset: "4", span: 8 }}>
              <ProfileNav />
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col md={4} className="d-flex justify-content-center">
            <ProfileCard />
          </Col>
          <Col md={8}>
            <Router>
              <Projects path="/projects" />
              <Status path="/status" />
            </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
