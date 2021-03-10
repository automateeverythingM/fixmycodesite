import { Redirect } from "@reach/router";
import React from "react";
import { useSelector } from "react-redux";
import { isUserSelector } from "../../app/reducers/userSlice";

function RestrictedRoute({ component: Component, ...rest }) {
  const isUserAuth = useSelector(isUserSelector);

  return isUserAuth ? <Redirect to="/" noThrow /> : <Component {...rest} />;
}

export default RestrictedRoute;
