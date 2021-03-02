import React from 'react';
//Style and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Home from '../pages/Home';
//Redux
import { useDispatch } from 'react-redux';
import { loadDetails } from '../actions/detailAction';
import { Link } from 'react-router-dom';
import { smallImage } from '../util.js';

const Game = ({ name, released, image, id }) => {
    //Load Detail Handler
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetails(id));
    }
    return(
        <StyledGame onClick={loadDetailHandler}>
        <Link to={`/game/${id}`}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={smallImage(image, 640)} alt={name} />
        </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: point;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;