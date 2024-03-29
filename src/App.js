import { css, Global } from "@emotion/react";
import React, { useEffect } from "react";
import Layout from "./components/Layout";
import { Router } from "@reach/router";
import HomePage from "./pages/HomePage";
import { auth } from "./firebase";
import Login from "./pages/LoginRegister/Login";
import Register from "./pages/LoginRegister/Register";
import RetrieveForgottenPassword from "./pages/LoginRegister/RetrieveForgottenPassword";
import { connect } from "react-redux";
import { setUser, setUserToNull } from "./app/reducers/userSlice";
import Profile from "./pages/Profile";
import AuthRoute from "./utils/authRoute/authRoutes";
import RestrictedRoute from "./utils/authRoute/restrictedRoute";
function App({ dispatch }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUserToNull());
      }
    });

    return () => unsubscribe();
  }, []);

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
            scroll-behavior: smooth;
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
            background: #e6e4e4;
          }
        `}
      />
      <Router>
        <Layout path="/">
          <HomePage path="/" />
          <RestrictedRoute path="/register" component={Register} />
          <RestrictedRoute path="/login" component={Login} />
          <AuthRoute
            path="/profile/*"
            fallbackRoute="/login"
            component={Profile}
          />
          {/* <Profile path="/profile/*" /> */}
          <RestrictedRoute
            path="/resetpassword"
            component={RetrieveForgottenPassword}
          />
        </Layout>
      </Router>
    </div>
  );
}

export default connect()(App);
