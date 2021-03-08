/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase";
import PreInput from "./PreInput";
import { Link } from "@reach/router";
import { FormContainer, Wrapper } from "./Register";
import GroupOfButtons from "./GroupOfButtons";
import { useLogin } from "./HOC/Login";

const validation = {
  email: { required: "Please enter a valid email" },
  password: { required: "Please enter your password" },
};

function Login() {
  const { register, onSubmit, errors } = useLogin();

  return (
    <Container>
      <FormContainer>
        <h1>Login</h1>
        <Wrapper>
          <Form className="w-100" onSubmit={onSubmit}>
            <PreInput
              label="Email"
              name="email"
              placeholder="Enter email"
              errorMessage={errors?.email?.message}
              ref={register(validation.email)}
              isInvalid={errors?.email?.message}
            />
            <PreInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
              errorMessage={errors?.password?.message}
              ref={register(validation.password)}
              isInvalid={errors?.password?.message}
              mb="mb-0"
            />
            <Link
              css={css`
                font-size: 0.8em;
              `}
              className="text-warning font-weight-bold"
              to="/resetpassword"
            >
              Forgot your password?
            </Link>
            <GroupOfButtons />
            <div className="text-center mt-4">
              Don`t have account?{" "}
              <b>
                <Link className="text-warning" to="/signup">
                  Register
                </Link>
              </b>
            </div>
          </Form>
        </Wrapper>
      </FormContainer>
    </Container>
  );
}

export default Login;
