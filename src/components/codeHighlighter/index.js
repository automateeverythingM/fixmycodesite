import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import draculaStyle from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

const Circle = styled.span`
  display: inline-block;
  border-style: solid;
  border-color: ${(props) => props.color || "white"};
  border-width: 2px;
  border-radius: 9999px;
  width: 10px;
  height: 10px;
  margin-right: 5px;
`;

function CodeHighLighter({ code, language, ...rest }) {
  return (
    <div
      className="position-relative h-100 overflow-hidden"
      css={css`
        border-radius: 1rem;
      `}
    >
      <div
        css={css`
          height: 30px;
          background: #333;
          display: flex;
          align-items: center;
          padding: 0 10px;
        `}
      >
        <Circle color="#eb4c4c"></Circle>
        <Circle color="#2762c2"></Circle>
        <Circle color="#4ceb84"></Circle>
      </div>
      <CopyToClipboard text={code}>
        <button
          css={css`
            background: transparent;
            position: absolute;
            right: 5px;
            top: 35px;
            border: none;
            color: #ffffff88;
            &:hover {
              color: white;
            }
          `}
        >
          <FiCopy />
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter
        customStyle={{ margin: "0", height: "100%" }}
        language={language}
        style={draculaStyle}
        {...rest}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeHighLighter;
