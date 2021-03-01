import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import draculaStyle from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";

function CodeHighLighter({ code, language }) {
  return (
    <SyntaxHighlighter language={language} style={draculaStyle}>
      {code}
    </SyntaxHighlighter>
  );
}

export default CodeHighLighter;
