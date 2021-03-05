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

          html {
            @media (max-width: 767.98px) {
              font-size: 12px;
            }
            @media (max-width: 575.98px) {
              font-size: 10px;
            }
            h1 {
              font-size: 3rem;
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
