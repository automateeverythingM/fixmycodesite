import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "@reach/router";

function NavLink({ children, ...rest }) {
  return (
    <Nav.Link
      getProps={({ isCurrent }) => {
        return (
          isCurrent && {
            style: { color: "white" },
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
