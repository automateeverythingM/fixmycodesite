/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
import { useMemo } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import GroupOfButtons from "./GroupOfButtons";
import PreInput from "./PreInput";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  margin-top: 3rem;
  height: 100%;
`;

export const Wrapper = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  color: white;
  background: #323333;
  width: 500px;
`;

function Register() {
  const { register, handleSubmit, errors, getValues } = useForm();
  const validation = useMemo(
    () => ({
      username: {
        required: "Username is required",
        minLength: {
          value: 5,
          message: "Minimum length is 5 characters",
        },
        pattern: {
          value: /^[a-zA-Z0-9]{4,10}$/,
          message: "no special charters allowed",
        },
      },
      email: {
        required: "Email is required",
        pattern: {
          value: /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/,
          message: "Please enter a valid email",
        },
      },
      password: {
        required: "Password is required",
        pattern: {
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
          message: "Password must contains capital letter and number",
        },
      },
      confirmPassword: {
        required: "Please confirm password",
        validate: (value) => {
          return (
            value === getValues().password || "Confirm password don`t match"
          );
        },
      },
    }),
    []
  );

  const onSubmit = (data) => {
    console.log("🚀 ~ file: Register.js ~ line 11 ~ onSubmit ~ data", data);
  };

  return (
    <Container>
      <FormContainer>
        <h1 className="mb-3">Register</h1>
        <Wrapper>
          <Form className="w-100" onSubmit={handleSubmit(onSubmit)}>
            <PreInput
              label="Username"
              name="username"
              placeholder="Enter username"
              ref={register(validation.username)}
              errorMessage={errors?.username?.message}
              isInvalid={errors?.username?.message}
              autoComplete="off"
            />
            <PreInput
              label="Email"
              name="email"
              placeholder="Enter email"
              ref={register(validation.email)}
              errorMessage={errors?.email?.message}
              isInvalid={errors?.email?.message}
              autoComplete="off"
            />
            <PreInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
              ref={register(validation.password)}
              errorMessage={errors?.password?.message}
              isInvalid={errors?.password?.message}
            />
            <PreInput
              label="Confirm password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              ref={register(validation.confirmPassword)}
              errorMessage={errors?.confirmPassword?.message}
              isInvalid={errors?.confirmPassword?.message}
            />
            <GroupOfButtons isSignUp />
            <div className="text-center mt-3">
              Already registered?{" "}
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

export default Register;
