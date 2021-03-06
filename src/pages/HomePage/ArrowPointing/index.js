/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";
import CodeHighLighter from "../../../components/codeHighlighter";
import money from "../../../img/money.svg";
import FixedSizeImage from "../../../components/UI/Avatar/FixedSizeImage";
import { useState } from "react";
import { motion } from "framer-motion";

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
  background: #b2675e;
  height: 100%;
  border-radius: 5rem;
`;
// transform: rotate(-3deg);

const variants = {
  hide: { opacity: 0.8 },
  show: { opacity: 0 },
};

const AnimFixedImage = motion(FixedSizeImage);

function ArrowPointing() {
  const [showCode, setShowCode] = useState(false);
  const [hideOpacity, setHideOpacity] = useState(false);
  return (
    <Jumbotron
      css={css`
        @media (max-width: 767.98px) {
          background: #b2675e !important;
          border-radius: 0;
        }
      `}
      className="bg-light mb-0"
    >
      <Container
        css={css`
          @media (max-width: 767.98px) {
            background: #b2675e;
          }
        `}
      >
        <BackgroundPlate>
          <Row>
            <Col
              md={{ offset: 1, span: 4 }}
              lg={{ offset: 1, span: 5 }}
              className="d-flex flex-column justify-content-center pt-3 py-4"
            >
              <div
                css={css`
                  height: 80%;

                  @media (max-width: 991.98px) {
                    padding-right: 1rem;
                    p {
                      font-size: 12px;
                    }
                  }

                  @media (max-width: 767.98px) {
                    padding-right: 5rem;
                    padding-left: 5rem;
                  }
                `}
                className="text-light "
              >
                <h3 className="display-5">Write you question</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci quidem reiciendis in et, provident soluta modi
                  reprehenderit illo consequuntur dicta. Officiis quos beatae
                  quibusdam ratione dignissimos possimus, perspiciatis
                  laboriosam dicta.
                </p>
                <div className="text-right mt-4">
                  <Button variant="warning">Place code</Button>
                </div>
              </div>
            </Col>

            <Col
              md={{ span: 6 }}
              lg={5}
              className="d-flex align-items-center justify-content-center"
            >
              <div
                css={css`
                  position: relative;
                  border-radius: 1rem;
                  height: 80%;
                  width: 90%;
                  overflow: hidden;
                `}
                onMouseLeave={() => {
                  setShowCode(false);
                  setHideOpacity(false);
                }}
              >
                <CodeHighLighter
                  customStyle={{ marginTop: "0" }}
                  code={code}
                  language="javascript"
                />
                {!hideOpacity && (
                  <motion.div
                    animate={showCode ? "show" : "hide"}
                    variants={variants}
                    css={css`
                      position: absolute;
                      top: 0;
                      left: 0;
                      right: 0;
                      bottom: 0;
                      background: #000000;
                      border-radius: 1rem;
                    `}
                    onAnimationComplete={() => {
                      if (showCode) {
                        setHideOpacity(true);
                      }
                    }}
                  ></motion.div>
                )}

                {!showCode && (
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    css={css`
                      position: absolute;
                      top: -2px;
                      left: -2px;
                      right: -2px;
                      bottom: -2px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      cursor: pointer;
                      user-select: none;
                    `}
                    onClick={() => setShowCode(true)}
                  >
                    <AnimFixedImage
                      animate={{ rotate: !showCode && -180 }}
                      size="100px"
                      src={money}
                      alt="money sign"
                    />
                  </motion.div>
                )}
              </div>
            </Col>
          </Row>
        </BackgroundPlate>
      </Container>
    </Jumbotron>
  );
}
export default ArrowPointing;
