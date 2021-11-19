import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { setLocalStorageUser } from "../context/auth-2";
import { tetrisContext } from "../store/tetris-store";
import { observer } from "mobx-react";

import {
  StyledLoginWrapper,
  StyledLoginContainer,
  StyledFormControl,
  FormInput,
  FormButton,
  FormText,
} from "./styles/StyledForm";
import { StyledErrors } from "./styles/StyledErrors";
import { API_URL } from '../constants/index';
import { useAuthContext } from "../context/auth";
import { StyledLink } from "../components/styles/StyledMenuBar";

const EMAIL_FIELD = "emailField";
const PASSWORD_FIELD = "passwordField";
const loginUserEndpoint = `${API_URL}/users/login`;

const Login = observer((props) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errors, setErrors] = useState({});

  const context = useContext(tetrisContext);
  const { login, setActiveMenu } = useAuthContext();

  useEffect(() => {
    setActiveMenu('login');
  }, []);

  const onChange = (e, field) => {
    const { value } = e.target;
    if (field === EMAIL_FIELD) setEmailInput(value);
    else if (field === PASSWORD_FIELD) setPasswordInput(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: emailInput,
      password: passwordInput,
    };
    try {
      const { data } = await axios.post(loginUserEndpoint, payload);
      context.loginUser(data.user);
      login(data)
      setLocalStorageUser(data.user);
      const homeButton = document.querySelector('a[name="home"]');
      const leaderboardButton = document.querySelector('a[name="leaderboard"]');
      leaderboardButton.click();
      homeButton.click();
    } catch (e) {
      setLocalStorageUser(null);
      setErrors({
        error: "Wrong email or password!",
      });
    }
  };

  return (
    <StyledLoginWrapper className="centredLoginForm">
      <StyledLoginContainer>
        <h1>Log in to your account</h1>
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
              onChange={(e) => onChange(e, EMAIL_FIELD)}
              error={errors.username ? true : false}
            />
            <label htmlFor="username">Email</label>
          </StyledFormControl>
          <StyledFormControl>
            <FormInput
              name="password"
              value={passwordInput}
              type="password"
              autoComplete="none"
              required
              onChange={(e) => onChange(e, PASSWORD_FIELD)}
              error={errors.password ? true : false}
            />
            <label htmlFor="password">Password</label>
          </StyledFormControl>

          <FormButton type="submit">Login</FormButton>

          <FormText>
            Don't have an account? 
            <StyledLink
              name="home"
              className={"active"}
              onClick={() => setActiveMenu('register')}
              as={Link}
              to="/register"
            >
              Register
            </StyledLink>
          </FormText>
        </form>
      </StyledLoginContainer>
    </StyledLoginWrapper>
  );
});

export default Login;
