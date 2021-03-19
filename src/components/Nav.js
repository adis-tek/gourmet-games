import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import arcade from "../img/arcade.svg";
import gameBoy from "../img/gameBoy.svg";
//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={arcade} alt="logo" />
        <h1>Gourmet Games</h1>
      </Logo>
      <Description>
        <h1>Find Hot New Titles Everyday</h1>
        <p>Finding new and exciting games can be hard. That's why Gourmet Games curates upcoming, new, and popular titles weekly from our special API.</p>
        <p>Check back every week and see what's new.</p>
      </Description>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 40px;
  cursor: pointer;
  img {
    margin-bottom: 20px;
    height: auto;
    width: 6rem;
  }
`;

const Description = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 4rem;
  background-color: white;
  min-height: 25vh;
  width: 90vw;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  h1 {
    max-width: 70%;
    padding-bottom: 1.5rem;
  }
  p {
    max-width: 80%;
    padding-bottom: 1.5rem;
  }

`;

export default Nav;
