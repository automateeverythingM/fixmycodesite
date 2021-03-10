import React from "react";
import { useSelector } from "react-redux";
import { isUserSelector } from "../../app/reducers/userSlice";
import { Redirect } from "@reach/router";

function AuthRoute({
  type,
  component: Component,
  fallbackRoute = "/login",
  restricted,
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
