/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import FixedSizeImage from "../../../components/UI/Avatar/FixedSizeImage";
import codeIllustration from "../../../img/codeilustwithborder.svg";

function LandingBanner() {
  return (
    <Jumbotron
      css={css`
        background: #be3232;
      `}
      className="rounded-0 text-light mb-0"
    >
      <Container>
        <Row className="align-items-center">
          <Col
            md={7}
            css={css`
              @media (max-width: 765px) {
                order: 1;
              }
            `}
          >
            <h1>
              Lorem ipsum dolor.
              <br /> Lorem it consectetur adipis.
            </h1>
            <h3 className="font-weight-normal">
              Let someone talk you trough your problem
            </h3>
            <ul
              css={css`
                list-style: none;
                padding-inline-start: 0px;
              `}
            >
              <li>Get more personal help for your particular problem</li>
              <li>Or you teach and collect your money</li>
            </ul>
          </Col>
          <Col md={5}>
            <FixedSizeImage src={codeIllustration} />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default LandingBanner;
