/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Container, Jumbotron } from "react-bootstrap";
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
  grid-column: 1 / span 6;
  grid-row: 2 / 3;
  background: #b2675e;
  width: 90%;
  margin: 0 auto;
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
    <Jumbotron className="bg-light mb-0">
      <Container
        css={css`
          display: grid;
          padding: 2rem 1rem;
          align-content: stretch;
          margin: 0 auto;
          grid-template-columns: 5% 5% 1fr 1fr 5% 5%;
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
          <p>
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
            grid-row: 1 / 4;
            border-radius: 1rem;
          `}
          onMouseLeave={() => {
            setShowCode(false);
            setHideOpacity(false);
          }}
        >
          <CodeHighLighter
            customStyle={{ marginTop: "0", height: "100%" }}
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
      </Container>
    </Jumbotron>
  );
}
export default ArrowPointing;