import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { setLocalStorageUser } from "../context/auth-2";
import Spinner from "../components/Spinner";
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

const EMAIL_FIELD = "emailField";
const PASSWORD_FIELD = "passwordField";
const loginUserEndpoint = `${API_URL}/users/login`;

const Login = observer((props) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const context = useContext(tetrisContext);

  const onChange = (e, field) => {
    const { value } = e.target;
    if (field == EMAIL_FIELD) setEmailInput(value);
    else if (field == PASSWORD_FIELD) setPasswordInput(value);
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

  if (loading) return <Spinner />;

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
            Don't have an account? <a href="/register">Register</a>
          </FormText>
        </form>
      </StyledLoginContainer>
    </StyledLoginWrapper>
  );
});

export default Login;
