/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import CodeHighLighter from "../../../components/codeHighlighter";
import arrowDown from "../../../img/down-arrow.svg";
import money from "../../../img/money.svg";
import FixedSizeImage from "../../../components/UI/Avatar/FixedSizeImage";

const ArrowPointingMiddle = styled(Col)`
  background-image: url(${arrowDown});
  background-repeat: repeat-y;
  height: 20rem;
`;

const responsiveCol = css`
  position: relative;
  padding: 2rem 1rem;
  @media (min-width: 578px) {
    padding: 4rem 2rem;
  }
`;

const code = `const notifyTrackingObservers = (
    eventType: TrackedEvents | string,
    rpId?: string,
    trackingUids?: string[],
    additionalData?: AdditionalTrackingData
) => {
    if (!rpId || !existsInArray(trackedEvents, eventType)) {
        return;
    }

    observers.forEach((observer, index) => {
        if (!trackingUids || !trackingUids[index]) return;
        observer.eventHandlers[eventType as TrackedEvents](
            rpId,
            additionalData || {}
        );
    });
};
`;

const BackgroundPlate = styled.div`
  grid-column: 1 / span 6;
  grid-row: 2 / 3;
  background: #b3964d;
  width: 90%;
  margin: 0 auto;
  height: 100%;
  border-radius: 5rem;
  transform: rotate(-3deg);
`;

function ArrowPointing() {
  return (
    <Jumbotron className="bg-white">
      <Container
        css={css`
          display: grid;
          padding: 2rem 1rem;
          align-content: stretch;
          width: 80%;
          margin: 0 auto;
          grid-template-columns: 5% 10% 1fr 1fr 10% 5%;
          grid-template-rows: 10% 80% 10%;
          @media (min-width: 578px) {
            padding: 4rem 2rem;
          }
        `}
      >
        <BackgroundPlate />
        <div
          css={css`
            grid-row: 2/3;
            grid-column: 3;
            align-self: center;
            z-index: 2;
          `}
          className="text-light py-2"
        >
          <h3 className="display-5">Write you question</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quidem reiciendis in et, provident soluta modi reprehenderit illo
            consequuntur dicta. Officiis quos beatae quibusdam ratione
            dignissimos possimus, perspiciatis laboriosam dicta.
          </p>
        </div>
        <div
          css={css`
            position: relative;
            grid-column: 4;
            grid-row: 1 / 3;
          `}
        >
          <CodeHighLighter
            customStyle={{ marginTop: "0", height: "100%" }}
            code={code}
            language="javascript"
          />
          <div
            css={css`
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #b9a8a8;
              opacity: 0.6;
            `}
          ></div>
          <div
            css={css`
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <FixedSizeImage size="100px" src={money} alt="money sign" />
          </div>
        </div>
      </Container>
    </Jumbotron>
  );
}
export default ArrowPointing;
