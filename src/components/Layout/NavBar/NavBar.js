import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SVG } from "../../../features/SVG";
import { ReactComponent as Logo } from "../../../img/logo.svg";
import LoginRegister from "../UserOptionDropDown/LoginRegister";
import UserOption from "../UserOptionDropDown/UserOption";
const NavBar = ({ isUserAuth = true }) => {
  const renderUserOrLogin = isUserAuth ? <UserOption /> : <LoginRegister />;

  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Navbar.Brand className="font-weight-bold text-white" as={Link} to="/">
        <SVG svg={Logo} size="2rem" /> FixMyCode
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbar-basic">
        <Nav className="ml-3">
          <Nav.Link as={Link} to="/">
            HOME
          </Nav.Link>
          <Nav.Link as={Link} to="/explore">
            EXPLORE
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {renderUserOrLogin}
    </Navbar>
  );
};

export default NavBar;
