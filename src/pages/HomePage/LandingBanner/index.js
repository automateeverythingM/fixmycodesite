/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Col, Container, Jumbotron } from "react-bootstrap";
import codeIllustration from "../../../img/codeilustwithborder.svg";

const CustomContainer = styled(Container)`
  border-radius: 0;
  background-image: url(${codeIllustration});
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 500px 500px;
  height: 30rem;

  p {
    margin-bottom: 0;
    font-size: 0.6rem;
  }
`;

function LandingBanner() {
  return (
    <Jumbotron
      css={css`
        background: #be3232;
      `}
      className="rounded-0 text-light mb-0"
    >
      <CustomContainer className="d-flex align-items-center">
        <Col md={7}>
          <h1
            css={css`
              line-height: 1.2em;
            `}
            className="display-4"
          >
            Price your code get help that money pays.
          </h1>
          <h4 className="display-6">
            Let someone talk you trough your problem
          </h4>
          <p>Get more personal help for your particular problem</p>
          <p>Or you teach and collect your money</p>
        </Col>
      </CustomContainer>

      {/* <div>
      <CodeHighLighter language="javascript" code={codes} showLineNumbers />
    </div> */}
    </Jumbotron>
  );
}

export default LandingBanner;
