import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { tetrisContext } from "../store/tetris-store";
import { observer } from "mobx-react";

import PlaySound from "./Sound";
import {
  StyledNav,
  StyledMenuBarContainer,
  StyledMenuBarUl,
  StyledLink,
} from "./styles/StyledMenuBar";
import { removeLocalStorageUser } from "../context/auth-2";
import { useAuthContext } from "../context/auth";

const ContactsUl = ({ activeMenu, handleItemClick }) => {
  return (
    <li>
      <StyledLink
        name="Contacts"
        className={activeMenu === "contacts" ? "active" : ""}
        onClick={handleItemClick}
        as={Link}
        to="/contacts"
      >
        Meet Us
      </StyledLink>
    </li>
  )
}

const MenuBar = observer(() => {
  const tetrisStore = useContext(tetrisContext);
  const { authState, logout: authContextLogout, setActiveMenu } = useAuthContext();
  const { userData } = authState;
  const history = useHistory();

  const logout = () => {
    removeLocalStorageUser()
    tetrisStore.logoutUser();
    authContextLogout();
    history.push("/login");
  };

  const handleItemClick = (e) => setActiveMenu(e.target.name);
  const menuBar = userData ? (
    <StyledNav>
      <StyledMenuBarContainer>
        <h1>
          <StyledLink
            name="home"
            className={authState.activeMenu === "home" ? "active" : ""}
            onClick={handleItemClick}
            as={Link}
            to="/"
          >
            Play Game
          </StyledLink>
        </h1>
        <StyledMenuBarUl>
          <PlaySound />
          <li>
            <StyledLink
              name="leaderboard"
              className={authState.activeMenu === "leaderboard" ? "active" : ""}
              onClick={handleItemClick}
              as={Link}
              to="/leaderboard"
            >
              Leaderboard
            </StyledLink>
          </li>
          <ContactsUl activeMenu={authState.activeMenu} handleItemClick={handleItemClick} />
          {/* <li>
            <StyledLink
              name="myscores"
              className={activeItem === "myscores" ? "active" : ""}
              onClick={handleItemClick}
              as={Link}
              to="/myscores"
            >
              My scores
            </StyledLink>
          </li> */}
          <li>
            <StyledLink name="logout" onClick={logout}>
              Log Out
            </StyledLink>
          </li>
        </StyledMenuBarUl>
      </StyledMenuBarContainer>
    </StyledNav>
  ) : (
    <StyledNav>
      <StyledMenuBarContainer>
        <h1>
          <StyledLink
            name="home"
            className={authState.activeMenu === "home" ? "active" : ""}
            onClick={handleItemClick}
            as={Link}
            to="/"
          >
            Play Game
          </StyledLink>
        </h1>
        <StyledMenuBarUl>
          <PlaySound />
          <li>
            <StyledLink
              name="leaderboard"
              className={authState.activeMenu === "leaderboard" ? "active" : ""}
              onClick={handleItemClick}
              as={Link}
              to="/leaderboard"
            >
              Leaderboard
            </StyledLink>
          </li>
          <ContactsUl activeMenu={authState.activeMenu} handleItemClick={handleItemClick} />
          <li>
            <StyledLink
              name="login"
              className={authState.activeMenu === "login" ? "active" : ""}
              onClick={handleItemClick}
              as={Link}
              to="/login"
            >
              Log In
            </StyledLink>
          </li>
          <li>
            <StyledLink
              name="register"
              className={authState.activeMenu === "register" ? "active" : ""}
              onClick={handleItemClick}
              as={Link}
              to="/register"
            >
              Register
            </StyledLink>
          </li>
        </StyledMenuBarUl>
      </StyledMenuBarContainer>
    </StyledNav>
  );

  return menuBar;
}, );

export default MenuBar;
