import { css, Global } from "@emotion/react";
import React from "react";
import Layout from "./components/Layout";
import { Router } from "@reach/router";
import HomePage from "./pages/HomePage";
import { auth } from "./firebase";
import Login from "./pages/LoginRegister/Login";
import Register from "./pages/LoginRegister/Register";

function App() {
  auth.onAuthStateChanged((user) => {
    console.log(user);
  });

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

          *,
          ::after,
          ::before {
            box-sizing: border-box;
          }

          html {
            @media (max-width: 991.98px) {
              font-size: 14px;
            }
            @media (max-width: 767.98px) {
              font-size: 12px;
            }
            @media (max-width: 575.98px) {
              font-size: 10px;
            }
          }

          body {
            background: whitesmoke;
          }
        `}
      />
      <Router>
        <Layout path="/">
          <HomePage path="/" />
          <Login path="/login" />
          <Register path="/register" />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
