import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { SVG } from "../../../features/SVG";
import { ReactComponent as Logo } from "../../../img/logo.svg";
import { UserOption } from "../UserOptionDropDown";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import LoginRegister from "../UserOptionDropDown/LoginRegister/LoginRegister";
const hoverNavLink = css`
  &:hover {
    color: #fff !important;
  }
`;
const NavBar = ({ isUserAuth = true }) => {
  const renderUserOrLogin = isUserAuth ? <UserOption /> : <LoginRegister />;

  return (
    <Navbar
      bg="dark"
      expand="md"
      variant="dark"
      css={css`
        box-shadow: 0 4px 2px -2px black;
      `}
    >
      <Container>
        <Navbar.Brand className="font-weight-bold text-white" as={Link} to="/">
          <SVG svg={Logo} size="2rem" /> FixMyCode
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-basic">
          <Nav className="ml-3">
            <Nav.Link as={NavLink} to="/" css={hoverNavLink} exact>
              HOME
            </Nav.Link>
            <Nav.Link as={NavLink} to="/explore" css={hoverNavLink} exact>
              EXPLORE
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {renderUserOrLogin}
      </Container>
    </Navbar>
  );
};

export default NavBar;
