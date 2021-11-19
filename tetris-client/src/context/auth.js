import React, { useReducer, createContext, useContext } from "react";
import jwtDecode from "jwt-decode";
import { getLocalStorageUser, removeLocalStorageUser } from "./auth-2";

let initialState = {
  userData: null,
  activeMenu: 'home'
}

const isTokenValid = (token) => token.exp * 1000 < Date.now();
const hasCredentials = (token, user) => token && user;

if (localStorage.getItem("jwtToken")) {
  const decodedToken = jwtDecode(localStorage.getItem("jwtToken"));
  const user = getLocalStorageUser();
  

  if (!isTokenValid(decodedToken) && !hasCredentials(decodedToken, user)) {
    localStorage.removeItem("jwtToken");
    removeLocalStorageUser();
  } else {
    initialState = {
      token: decodedToken,
      userData: user 
    };
  }
}

const AuthContext = createContext({
  authState: initialState,
  login: () => {},
  logout: () => {},
  setActiveMenu: () => {}
});

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.payload
        }
      }
    case 'LOGOUT':
      return {
        ...state,
        userData: null
      }
    // TODO: MOVE! this is the wrong place for this
    case 'SET_ACTIVE_MENU':
      return {
        ...state,
        activeMenu: action.payload
      }

    default:
      return state;
  }
};

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function login(userData) {
    localStorage.setItem("jwtToken", userData.token);
    dispatch({
      type: 'LOGIN',
      payload: userData
    })
  }

  function logout() {
    localStorage.removeItem("jwtToken");
    dispatch({
      type: 'LOGOUT'
    })
  }

  function setActiveMenu(activeMenu) {
    dispatch({
      type: 'SET_ACTIVE_MENU',
      payload: activeMenu
    })
  }

  return (
    <AuthContext.Provider
      value={{ authState: state, login, logout, setActiveMenu }}
      {...props}
    />
  )
};

export const useAuthContext = () => {
  return useContext(AuthContext);
}

export { AuthContext, AuthProvider };
