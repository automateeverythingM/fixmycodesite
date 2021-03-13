/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import SimpleMDEEditor from "react-simplemde-editor";
import ReactDOMServer from "react-dom/server";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import "easymde/dist/easymde.min.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/material-dark";

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={dark} language={language} children={value} />
    );
  },
};

var editor = {
  autofocus: true,
  // autosave: {
  //   enabled: true,
  //   uniqueId: "MyUniqueID",
  //   delay: 1000,
  //   submit_delay: 5000,
  //   timeFormat: {
  //     locale: "en-US",
  //     format: {
  //       year: "numeric",
  //       month: "long",
  //       day: "2-digit",
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     },
  //   },
  //   text: "Autosaved: ",
  // },
  //   blockStyles: {
  //     bold: "__",
  //     italic: "_",
  //   },
  //   element: document.getElementById("MyID"),
  //   forceSync: true,
  //   hideIcons: ["guide", "heading"],
  //   indentWithTabs: false,
  //   //   initialValue: "Hello world!",
  //   insertTexts: {
  //     horizontalRule: ["", "\n\n-----\n\n"],
  //     image: ["![](https://", ")"],
  //     link: ["[", "](https://)"],
  //     table: [
  //       "",
  //       "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n",
  //     ],
  //   },
  //   lineWrapping: false,
  minHeight: "500px",
  maxHeight: "100%",
  //   parsingConfig: {
  //     allowAtxHeaderWithoutSpace: true,
  //     strikethrough: false,
  //     underscoresBreakWords: true,
  //   },
  placeholder: "Type here...",

  //   previewClass: "my-custom-styling",
  //   previewClass: ["my-custom-styling", "more-custom-styling"],

  previewRender(text) {
    return ReactDOMServer.renderToString(
      <ReactMarkdown allowDangerousHtml source={text} renderers={renderers} />
    );
  },
  //   promptURLs: true,
  //   promptTexts: {
  //     image: "Custom prompt for URL:",
  //     link: "Custom prompt for URL:",
  //   },
  //   renderingConfig: {
  //     singleLineBreaks: false,
  //     codeSyntaxHighlighting: true,
  //   },
  //   shortcuts: {
  //     drawTable: "Cmd-Alt-T",
  //   },
  showIcons: ["code"],
  spellChecker: false,
  //   status: false,
  status: ["autosave", "lines", "words", "cursor"], // Optional usage
  status: [
    "autosave",
    "lines",
    "words",
    "cursor",
    {
      className: "keystrokes",
      defaultValue: function (el) {
        this.keystrokes = 0;
        el.innerHTML = "0 Keystrokes";
      },
      onUpdate: function (el) {
        el.innerHTML = ++this.keystrokes + " Keystrokes";
      },
    },
  ], // Another optional usage, with a custom status bar item that counts keystrokes
  //   styleSelectedText: false,
  //   sideBySideFullscreen: false,
  //   syncSideBySidePreviewScroll: false,
  tabSize: 4,
  //   toolbar: false,
  //   toolbarTips: false,
};

function MarkdownEditor() {
  const [value, setValue] = useState();

  return (
    <div>
      <SimpleMDEEditor value={value} onChange={setValue} options={editor} />
    </div>
  );
}

export default MarkdownEditor;
