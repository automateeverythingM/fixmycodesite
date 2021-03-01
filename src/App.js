import { css, Global } from "@emotion/react";
import React from "react";
import Layout from "./components/Layout";
import { Router } from "@reach/router";
import HomePage from "./pages/HomePage";

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
      <Router>
        <Layout path="/">
          <HomePage path="/" />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
