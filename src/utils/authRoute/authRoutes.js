import React from "react";
import { useSelector } from "react-redux";
import { isUserSelector } from "../../app/reducers/userSlice";
import { Redirect } from "@reach/router";

function AuthRoute({
  component: Component,
  fallbackRoute = "/login",
  ...rest
}) {
  const isUserAuth = useSelector(isUserSelector);

  return isUserAuth ? (
    <Component {...rest} />
  ) : (
    <Redirect to={fallbackRoute} noThrow />
  );
}

export default AuthRoute;
