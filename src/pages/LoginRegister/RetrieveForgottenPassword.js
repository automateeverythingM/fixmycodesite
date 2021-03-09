/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Container, Form } from "react-bootstrap";
import PreInput from "./PreInput";
import { Link } from "@reach/router";
import { FormContainer, Wrapper } from "./Register";
import { useLogin } from "./HOC/login-hook";
import ButtonWithIcon from "./Button";

const validation = {
  email: { required: "Please enter a valid email" },
};

function Login() {
  const { register, errors, error, loading, PasswordReset } = useLogin();

  return (
    <Container>
      <FormContainer>
        <h1>Reset Password</h1>
        <Wrapper>
          <Form className="w-100" onSubmit={PasswordReset}>
            <PreInput
              label="Email"
              name="email"
              placeholder="Enter email"
              errorMessage={errors?.email?.message}
              ref={register(validation.email)}
              isInvalid={errors?.email?.message}
            />

            <ButtonWithIcon
              background="teal"
              color="whitesmoke"
              block
              loading={loading}
              disabled={loading}
            >
              Retrieve password
            </ButtonWithIcon>
            <div className="text-center mt-4">
              Go back to login?{" "}
              <b>
                <Link className="text-warning" to="/login">
                  Login
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
