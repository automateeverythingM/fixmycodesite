/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Col, Row } from "react-bootstrap";
import FixedSizeImage from "../../../../components/UI/Avatar/FixedSizeImage";
import user from "../../../../img/man.svg";
import userCommented from "../../../../img/manglasses.svg";
import rating from "../../../../img/5star.svg";
import { Fragment } from "react";

function ProfileCardWithComments() {
  return (
    <Fragment>
      <Row
        className="bg-dark p-4"
        css={css`
          border-radius: 2rem;
          border-bottom: 2px solid #131313;
          box-shadow: 0 2px 2px 0px #2c2c2c;
          z-index: 40;

          @media (max-width: 768.98px) {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
        `}
      >
        <Col md={4}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <FixedSizeImage
              size="150px"
              className="rounded-circle bg-light"
              src={user}
            />
            <div className="d-flex align-items-end">
              <FixedSizeImage src={rating} size="3rem" />
              <span className="pl-1 text-light">(87)</span>
            </div>
          </div>
        </Col>
        <Col md={8} className="d-flex align-items-start">
          <div
            className="bg-light p-4"
            css={css`
              border-radius: 2rem;
            `}
          >
            <h3>Bio</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto repudiandae dolorum facere ipsa sequi eius, voluptatum
              quaerat autem vitae, nulla, sit incidunt. Dolor illum asperiores
              sequi expedita iste incidunt nobis?
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          className="bg-warning"
          css={css`
            box-shadow: 0 2px 2px 0px #333333;
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
          `}
          md={{ offset: 1, span: 10 }}
        >
          <div className="d-flex align-items-start p-2">
            <FixedSizeImage
              src={userCommented}
              size="3rem"
              className="rounded-circle bg-light mr-2 mt-1"
            />
            <div
              className="bg-light p-4"
              css={css`
                border-radius: 2rem;
              `}
            >
              <h5>Great communication</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus adipisci necessitatibus cumque earum corrupti amet
                consequatur explicabo architecto dolorem enim pariatur.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}

export default ProfileCardWithComments;
