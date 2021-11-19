import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  StyledLoginWrapper,
  StyledLoginContainer,
  StyledFormControl,
  FormInput,
  FormButton,
  FormText,
} from "./styles/StyledForm";
import { removeLocalStorageUser, setLocalStorageUser } from "../context/auth-2";
import { StyledErrors } from "./styles/StyledErrors";
import { API_URL } from '../constants/index';
import { tetrisContext } from "../store/tetris-store";
import { useAuthContext } from "../context/auth";
import { StyledLink } from "../components/styles/StyledMenuBar";
import { Link } from "react-router-dom";

const EMAIL_INPUT = "emailInput";
const PASSWORD_INPUT = "passwordInput";
const CONFIRM_PASSWORD_INPUT = "confirmPasswordInput";

const registerUserEndpoint = `${API_URL}/users/create`;
const EMAIL_REGEX = /^[^\s@.]+(\.[^\s@.]+)*@[A-Za-z\d]([\w-]*([A-Za-z0-9]\.[A-Za-z0-9])*)*([A-Za-z0-9]\.[A-Za-z]{2,})$/;

const Register = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const context = useContext(tetrisContext);
  const { login, setActiveMenu } = useAuthContext();

  useEffect(() => {
    setActiveMenu('register');
  }, []);

  const onChange = (e, field) => {
    e.stopPropagation();
    const { value } = e.target;
    if (field === EMAIL_INPUT) {
      setEmailInput(value)
    } else if (field === PASSWORD_INPUT) {
      setPasswordInput(value);
    } else if (field === CONFIRM_PASSWORD_INPUT) {
      setConfirmPasswordInput(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (passwordInput !== confirmPasswordInput) {
      return setErrors({
        error: "Passwords don't match!",
      });
    }
    if (!EMAIL_REGEX.test(emailInput)) {
      return setErrors({
        error: "Please provide a valid email!",
      });
    }
    const payload = {
      email: emailInput,
      password: passwordInput,
      points: 0,
    };
    try {
      const result = await axios.post(registerUserEndpoint, payload);
      login(result.data)
      context.loginUser(result.data.user);
      setLocalStorageUser(result.data.user);
      history.push("/");
    } catch (e) {
      removeLocalStorageUser();
      setErrors({
        error: "User with such email already exists!",
      });
    }
  };

  return (
    <StyledLoginWrapper>
      <StyledLoginContainer>
        <h1>Register an account</h1>
        {Object.keys(errors).length > 0 && (
          <StyledErrors>
            <ul>
              {Object.values(errors).map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </StyledErrors>
        )}
        <form onSubmit={(e) => onSubmit(e)} autoComplete="off" noValidate>
          <StyledFormControl>
            <FormInput
              name="email"
              value={emailInput}
              type="email"
              required
              autoComplete="none"
              onChange={(e) => onChange(e, EMAIL_INPUT)}
              error={errors.email ? true : false}
            />
            <label htmlFor="email">Email</label>
          </StyledFormControl>
          <StyledFormControl>
            <FormInput
              name="password"
              value={passwordInput}
              type="password"
              autoComplete="none"
              required
              onChange={(e) => onChange(e, PASSWORD_INPUT)}
              error={errors.password ? true : false}
            />
            <label htmlFor="password">Password</label>
          </StyledFormControl>
          <StyledFormControl>
            <FormInput
              name="confirmPassword"
              value={confirmPasswordInput}
              type="password"
              autoComplete="none"
              required
              onChange={(e) => onChange(e, CONFIRM_PASSWORD_INPUT)}
              error={errors.confirmPassword ? true : false}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </StyledFormControl>

          <FormButton type="submit">Register</FormButton>

          <FormText>
            Already have an account? 
            <StyledLink
              name="home"
              className={"active"}
              onClick={() => setActiveMenu('login')}
              as={Link}
              to="/login"
            >
              Login
            </StyledLink>
          </FormText>
        </form>
      </StyledLoginContainer>
    </StyledLoginWrapper>
  );
};

export default Register;
