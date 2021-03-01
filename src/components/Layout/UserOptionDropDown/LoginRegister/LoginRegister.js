import { useTheme } from "@emotion/react";
import React from "react";
import { Link } from "@reach/router";
import ButtonColor from "../../../UI/Button/ButtonColor";

const LoginRegister = () => {
  const { colors } = useTheme();
  return (
    <div className="d-inline-flex align-items-center">
      <ButtonColor
        background={colors.secondary}
        color={colors.light}
        lighten="true"
        as={Link}
        to="/login"
        className="mr-2 text-decoration-none"
      >
        Login
      </ButtonColor>
      <ButtonColor
        className="text-decoration-none"
        background={colors.danger}
        color={colors.light}
        lighten="true"
        as={Link}
        to="/register"
      >
        Register
      </ButtonColor>
    </div>
  );
};

export default LoginRegister;
