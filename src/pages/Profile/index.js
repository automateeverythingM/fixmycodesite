import { Router } from "@reach/router";
import { Col, Container, Row } from "react-bootstrap";
import ProfileNav from "./ProfileNav";
import Projects from "./Project";
import keyboard from "../../assets/img/profile/keyboard1.svg";
import Status from "./Status";
import styled from "@emotion/styled";
import Landing from "./Landing";
import SingleProjectDisplay from "./Project/SingleProjectDisplay";
import AddProject from "./Project/AddProject";
import ProfileCard from "./ProfileCard";
const BackgroundImg = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 150px;
  color: whitesmoke;
  background: #333;
  background-image: url(${keyboard});
  box-shadow: 2px 0 3px 2px #666;
  background-repeat: no-repeat;
  background-position: 70% 50%;
  background-size: 350px;
`;

function Profile() {
  return (
    <div>
      <BackgroundImg>
        <Container>
          <Row className="w-100">
            <Col md={{ offset: "4", span: 8 }}>
              <ProfileNav />
            </Col>
          </Row>
        </Container>
      </BackgroundImg>

      <Container>
        <Row>
          <Col md={4} className="d-flex justify-content-center">
            <ProfileCard />
          </Col>
          <Col className="pt-5" md={8}>
            <Router>
              <Landing path="/" />
              <Projects path="/projects" />
              <SingleProjectDisplay path="/projects/:id" />
              <AddProject path="/addproject" />
              <Status path="/status" />
            </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
