import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setError } from "../../../app/reducers/errorSlice";
import { auth } from "../../../firebase";

export const useLogin = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const Submit = (data) => {
    const { email, password } = data;
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      dispatch(setError(error));
    });
  };

  const onSubmit = handleSubmit(Submit);

  return { register, onSubmit, errors };
};
