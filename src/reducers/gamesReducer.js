import axios from 'axios';

const initState = {
    popular : [],
    newGames : [],
    upcoming : [],
    searched: [],
}

const gameReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state}
            default:
                return {...state}
    }
};

//Action
{
    type: "FETCH_GAMES";
}
dispatch({ type: "FETCH_GAMES" });

export default gameReducer;