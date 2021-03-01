/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Jumbotron } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import draculaStyle from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";
import CodeHighLighter from "../../components/codeHighlither";
import FixedSizeImage from "../../components/UI/Avatar/FixedSizeImage";

const HomePage = () => {
  const codeString = `
  import { FaUser } from "react-icons/fa";
  import { MdEmail, MdHelp } from "react-icons/md";
  
  const dropdown = [
    { id: 1, title: "Profile", icon: <FaUser />, to: "/profile" },
    { id: 2, title: "Messages", icon: <MdEmail />, to: "/messages" },
    { id: 3, title: "Help", icon: <MdHelp />, to: "/help" },
  ];
  
  export default dropdown;
  <Jumbotron className="d-flex flex-column align-items-center justify-content-center bg-dark rounded-0 text-light">
      <div>
        <SyntaxHighlighter language="javascript" style={draculaStyle}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </Jumbotron>
  `;
  return (
    <Jumbotron className="d-flex flex-column align-items-center justify-content-center bg-dark rounded-0 text-light">
      <div>
        <CodeHighLighter code={codeString} language="javascript" />
      </div>
    </Jumbotron>
  );
};

export default HomePage;
