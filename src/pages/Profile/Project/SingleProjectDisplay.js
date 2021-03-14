/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import MarkdownEditor from "../../../components/MarkdownEditor";
import MarkdownView from "../../../components/MarkdownEditor/MarkdownView";
function SingleProjectDisplay({ id }) {
  const [state, setState] = useState();
  console.log(
    "🚀 ~ file: SingleProjectDisplay.js ~ line 10 ~ SingleProjectDisplay ~ state",
    state
  );
  useEffect(() => {
    fetch(`https://api.npoint.io/d60caf5e9bc01b22c55c`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        console.log(
          "🚀 ~ file: SingleProjectDisplay.js ~ line 13 ~ .then ~ response",
          response
        );
      })
      .then((json) => {
        setState(json);
      })
      .catch(console.error);
  }, []);
  return (
    <div>
      <MarkdownView text={state?.content} />
    </div>
  );
}

export default SingleProjectDisplay;
