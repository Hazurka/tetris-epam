import React, { useState, useEffect } from "react";
import { useAuthContext } from "../context/auth";
import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({ callback }) => {
  const [text, setText] = useState('');
  const { authState } = useAuthContext();
  
  useEffect(() => {
    if (authState.userData) {
      setText('Start Game');
    } else {
      setText('Register');
    }
  }, [authState]);

  return (
    <StyledStartButton onClick={callback}>{text}</StyledStartButton>
  )
};

export default StartButton;
