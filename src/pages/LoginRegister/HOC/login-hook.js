import { navigate } from "@reach/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { auth, githubProvider, googleProvider } from "../../../firebase";
import { sleep } from "../../../utils/authRoute";
import md5 from "md5";
import { useDispatch } from "react-redux";
import { setUser } from "../../../app/reducers/userSlice";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit, errors, getValues } = useForm();
  const dispatch = useDispatch();

  const setStatus = (loading, error) => {
    setLoading(loading);
    setError(error);
  };

  const submit = async (data) => {
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

  const registerUser = (data) => {
    const { email, password, username } = data;
    setStatus("internal", false);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        const url = `http://www.gravatar.com/avatar/${md5(email)}?d=identicon`;
        user.user
          .updateProfile({
            displayName: username,
            photoURL: url,
          })
          .then(() => {
            dispatch(setUser(user.user));
            setLoading(false);
            navigate("/");
          });
      })
      .catch((error) => setStatus(false, error));
  };

  const passwordReset = async (data) => {
    setStatus("internal", false);
    const { email } = data;
    await auth.sendPasswordResetEmail(email);
    navigate("/login");
  };

  const LoginUser = handleSubmit(submit);
  const RegisterUser = handleSubmit(registerUser);
  const PasswordReset = handleSubmit(passwordReset);
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
    PasswordReset,
    errors,
    signInWithGithub,
    signInWithGoogle,
    getValues,
    loading,
    error,
  };
};
