import React, { useState, useEffect, useContext } from "react";
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

const ContactsUl = ({ activeItem, handleItemClick }) => {
  return (
    <li>
      <StyledLink
        name="Contacts"
        className={activeItem === "contacts" ? "active" : ""}
        onClick={handleItemClick}
        as={Link}
        to="/contacts"
      >
        Contacts
      </StyledLink>
    </li>
  )
}

const MenuBar = observer(() => {
  const tetrisStore = useContext(tetrisContext);
  const user = tetrisStore.getUser();
  const [activeItem, setActiveItem] = useState("home");
  const [stateUser, setStateUser] = useState(user);
  const history = useHistory();

  useEffect(() => {
    // location.reload();
    setStateUser(user);
  }, [user]);

  const logout = () => {
    tetrisStore.logoutUser();
    setStateUser(null);
    history.push("/login");
  };

  const handleItemClick = (e) => setActiveItem(e.target.name);
  const menuBar = stateUser ? (
    <StyledNav>
      <StyledMenuBarContainer>
        <h1>
          <StyledLink
            name="home"
            className={activeItem === "home" ? "active" : ""}
            onClick={handleItemClick}
            as={Link}
            to="/"
          >
            {stateUser.email}
          </StyledLink>
        </h1>
        <StyledMenuBarUl>
          <PlaySound />
          <li>
            <StyledLink
              name="leaderboard"
              className={activeItem === "leaderboard" ? "active" : ""}
              onClick={handleItemClick}
              as={Link}
              to="/leaderboard"
            >
              Leaderboard
            </StyledLink>
          </li>
          <ContactsUl activeItem={activeItem} handleItemClick={handleItemClick} />
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
            className={activeItem === "home" ? "active" : ""}
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
              className={activeItem === "leaderboard" ? "active" : ""}
              onClick={handleItemClick}
              as={Link}
              to="/leaderboard"
            >
              Leaderboard
            </StyledLink>
          </li>
          <ContactsUl activeItem={activeItem} handleItemClick={handleItemClick} />
          <li>
            <StyledLink
              name="login"
              className={activeItem === "login" ? "active" : ""}
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
              className={activeItem === "register" ? "active" : ""}
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
});

export default MenuBar;
