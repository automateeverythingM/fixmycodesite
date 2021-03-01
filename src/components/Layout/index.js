import React from "react";
import NavBar from "./NavBar/NavBar";

function Layout({ children, ...rest }) {
  return (
    <>
      <NavBar {...rest} />
      {children}
    </>
  );
}

export default Layout;
