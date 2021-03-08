import ButtonWithIcon from "./Button";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import { VscGlobe } from "react-icons/vsc";
import Content from "./Button/content";
import { useMemo } from "react";

function GroupOfButtons({ isSignUp }) {
  const { google, github, internal } = useMemo(
    () =>
      isSignUp
        ? {
            google: "Sign up with Google",
            github: "Sign up with Github",
            internal: "Register",
          }
        : {
            google: "Login with Google",
            github: "Login with Github",
            internal: "Login",
          },
    [isSignUp]
  );

  return (
    <div className="mt-1">
      <ButtonWithIcon
        className="mt-2 py-0 border"
        background="teal"
        color="whitesmoke"
        block
      >
        <Content icon={<VscGlobe size="2rem" />} text={internal} />
      </ButtonWithIcon>
      <ButtonWithIcon
        className="mt-2 py-0 border"
        background="#24292E"
        color="whitesmoke"
        block
        variant="danger"
        grayOut
      >
        <Content icon={<AiFillGithub size="2rem" />} text={github} />
      </ButtonWithIcon>
      <ButtonWithIcon
        className="mt-2 py-0 border"
        background="#DD4B39"
        color="whitesmoke"
        block
        variant="dark"
        grayOut
      >
        <Content icon={<AiOutlineGoogle size="2rem" />} text={google} />
      </ButtonWithIcon>
    </div>
  );
}

export default GroupOfButtons;
