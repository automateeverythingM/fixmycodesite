/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Nav } from "react-bootstrap";
import { Link } from "@reach/router";
import NavLink from "../../../components/Layout/NavBar/NavLink";
const active = {
  color: "white",
  borderBottom: "1px solid white",
  background: "#00000044",
};
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
      <NavLink activeStyle={active} as={Link} to="/profile">
        Profile
      </NavLink>

      <NavLink activeStyle={active} as={Link} to="/profile/projects">
        Projects
      </NavLink>

      <NavLink activeStyle={active} as={Link} to="/profile/status">
        Status
      </NavLink>
    </Nav>
  );
}

export default ProfileNav;
