/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SVG } from "../../../features/SVG";
import { ReactComponent as Logo } from "../../../img/logo.svg";
const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand className="font-weight-bold text-white" as={Link} to="/">
        <SVG svg={Logo} size="2rem" /> FixMyCode
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbar-basic">
        <Nav className="ml-3">
          <Nav.Link as={Link} to="/home">
            HOME
          </Nav.Link>
          <Nav.Link as={Link} to="/explore">
            EXPLORE
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
