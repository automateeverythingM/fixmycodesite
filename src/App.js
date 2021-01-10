import { css, Global } from "@emotion/react";
import React from "react";
import NavBar from "./components/Layout/NavBar/NavBar";

function App() {
  return (
    <div>
      <Global
        styles={css`
          a.dropdown-item.border-top {
            color: #ffc107;
            &:hover &:focus {
              color: #ffc107;
              text-decoration: underline;
            }
          }
        `}
      />
      <NavBar />
    </div>
  );
}

export default App;
