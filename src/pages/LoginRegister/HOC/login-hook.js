import { navigate } from "@reach/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { auth, githubProvider, googleProvider } from "../../../firebase";
import { sleep } from "../../../utils/auth";
import md5 from "md5";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit, errors, getValues } = useForm();

  const setStatus = (loading, error) => {
    setLoading(loading);
    setError(error);
  };

  const Submit = async (data) => {
    const { email, password } = data;
    setStatus("internal", false);
    await sleep(3000);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setStatus(false, error);
      });
  };

  const Register = (data) => {
    const { email, password, username } = data;
    setStatus("internal", false);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        const url = `http://www.gravatar.com/avatar/${md5(email)}?d=identicon`;
        user.user.updateProfile({
          displayName: username,
          photoURL: url,
        });
        setLoading(false);
        navigate("/");
      })
      .catch((error) => setStatus(false, error));
  };

  const LoginUser = handleSubmit(Submit);
  const RegisterUser = handleSubmit(Register);
  const signInWithGithub = () => {
    setStatus("github", false);
    auth
      .signInWithPopup(githubProvider)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => setStatus(false, error));
  };
  const signInWithGoogle = () => {
    setStatus("google", false);
    auth
      .signInWithPopup(googleProvider)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => setStatus(false, error));
  };

  return {
    register,
    LoginUser,
    RegisterUser,
    errors,
    signInWithGithub,
    signInWithGoogle,
    getValues,
    loading,
    error,
  };
};
