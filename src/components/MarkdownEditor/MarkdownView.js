import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/material-dark";

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={dark} language={language} children={value} />
    );
  },
};

function MarkdownView({ text }) {
  return (
    <ReactMarkdown allowDangerousHtml source={text} renderers={renderers} />
  );
}

export default MarkdownView;
