import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "@reach/router";
import NavLink from "./NavLink";
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

const mediaBrand = css`
  @media (max-width: 767.98px) {
    order: 1;
  }
`;

const mediaNav = css`
  @media (max-width: 767.98px) {
    order: 3;
    text-align: center;
  }
`;
const mediaNavDrop = css`
  @media (max-width: 767.98px) {
    order: 2;
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
        <Navbar.Brand
          css={mediaBrand}
          className="font-weight-bold text-white"
          as={Link}
          to="/"
        >
          <SVG svg={Logo} size="2rem" /> FixMyCode
        </Navbar.Brand>
        <Navbar.Toggle css={mediaNavDrop} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse css={mediaNav} id="navbar-basic">
          <Nav aria-controls="" className="ml-3">
            <NavLink as={Link} to="/" css={hoverNavLink}>
              HOME
            </NavLink>
            <NavLink as={Link} to="/explore" css={hoverNavLink}>
              EXPLORE
            </NavLink>
          </Nav>
        </Navbar.Collapse>

        {renderUserOrLogin}
      </Container>
    </Navbar>
  );
};

export default NavBar;
