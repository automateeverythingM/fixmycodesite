import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "@reach/router";

function NavLink({ children, activeStyle = { color: "white" }, ...rest }) {
  return (
    <Nav.Link
      getProps={({ isCurrent, isPartiallyCurrent, ...rest }) => {
        return (
          isCurrent && {
            style: activeStyle,
          }
        );
      }}
      as={Link}
      {...rest}
    >
      {children}
    </Nav.Link>
  );
}

export default NavLink;
