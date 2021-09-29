import React from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import arcade from "../img/arcade.svg";
import gameBoy from "../img/gameBoy.svg";
import { fadeIn } from "../animations";

const Nav = () => {

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo>
        <img src={arcade} alt="logo" />
        <h1>Gourmet Games</h1>
      </Logo>
      <Description>
        <Text>
        <h1>Find Hot New Titles Everyday</h1>
        <p>Finding new, exciting games can be hard. That's why Gourmet Games curates upcoming, new, and popular titles weekly from our special API.</p>
        <p><b>Due to ongoing API changes you may experience invisible game titles.</b></p>
        </Text>
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
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 4rem;
  background-color: white;
  min-height: 25vh;
  max-width: 800px;
  width: 100%;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: left;
  border-radius: 1rem;
  overflow: hidden;
  @media (max-width: 1000px) {
    width: 90%;
  }

`;

const Text = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 750px) {
    width: 100%;
  }
  h1 {
    max-width: 100%;
    padding-bottom: 1.5rem;
    @media (max-width: 750px) {
      max-width: 100%;
      width: 100%;
      text-align: left;
    }
    @media (max-width: 425px) {
      font-size: 20px;
    }
    @media (max-width: 385px) {
      font-size: 15px;
    }
  }
  p {
    max-width: 100%;
    padding-bottom: 1.5rem;
    @media (max-width: 750px) {
      max-width: 100%;
      width: 100%;
      text-align: left;
    }
    @media (max-width: 425px) {
      font-size: 16px;
    }
    @media (max-width: 385px) {
      font-size: 11px;
    }
  }
`;

export default Nav;
