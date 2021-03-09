import ButtonWithIcon from "./Button";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import { VscGlobe } from "react-icons/vsc";
import Content from "./Button/content";
import { useMemo } from "react";

function GroupOfButtons({ isSignUp, google, github, loading }) {
  const { googleText, githubText, internal } = useMemo(
    () =>
      isSignUp
        ? {
            googleText: "Sign up with Google",
            githubText: "Sign up with Github",
            internal: "Register",
          }
        : {
            googleText: "Login with Google",
            githubText: "Login with Github",
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
        type="submit"
        grayOut
        disabled={!!loading}
        loading={loading === "internal"}
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
        onClick={github}
        disabled={!!loading}
        loading={loading === "github"}
      >
        <Content icon={<AiFillGithub size="2rem" />} text={githubText} />
      </ButtonWithIcon>
      <ButtonWithIcon
        className="mt-2 py-0 border"
        background="#DD4B39"
        color="whitesmoke"
        block
        variant="dark"
        grayOut
        onClick={google}
        disabled={!!loading}
        loading={loading === "google"}
      >
        <Content icon={<AiOutlineGoogle size="2rem" />} text={googleText} />
      </ButtonWithIcon>
    </div>
  );
}

export default GroupOfButtons;
