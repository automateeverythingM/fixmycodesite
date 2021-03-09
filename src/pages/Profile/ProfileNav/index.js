/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Nav, Row, Tab } from "react-bootstrap";
import { Link } from "@reach/router";
import NavLink from "../../../components/Layout/NavBar/NavLink";

function ProfileNav() {
  return (
    <Nav
      activeKey="/home"
      className="py-1"
      css={css`
        a {
          color: #f5f5f599;
        }
      `}
    >
      <NavLink as={Link} to="/profile">
        Profile
      </NavLink>

      <NavLink as={Link} to="/profile/projects">
        Projects
      </NavLink>

      <NavLink as={Link} to="/profile/status">
        Status
      </NavLink>
    </Nav>
  );
}

export default ProfileNav;
