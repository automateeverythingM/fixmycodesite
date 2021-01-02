import { useTheme } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";
import ButtonColor from "../../UI/Button/ButtonColor";

const LoginRegister = () => {
  const { colors } = useTheme();
  return (
    <div className="d-inline-block">
      <ButtonColor
        background={colors.secondary}
        color={colors.light}
        lighten
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
        lighten
        as={Link}
        to="/register"
      >
        Register
      </ButtonColor>
    </div>
  );
};

export default LoginRegister;
