/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Fragment } from "react";

function Content({ icon, text, height = "2.5rem" }) {
  return (
    <Fragment>
      <span>{icon}</span>
      <div
        css={css`
          height: ${height};
          border-left: 2px solid whitesmoke;
        `}
        className="mx-3"
      ></div>
      <div className="w-100">{text}</div>
    </Fragment>
  );
}

export default Content;
