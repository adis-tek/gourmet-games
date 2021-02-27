import React from 'react';
import {useDispatch} from 'react-redux';
import { loadGames } from './actions/gamesActions';
//Components and pages
import Home from './pages/Home';
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <div className="App">
      <h1>GG</h1>
      <Home />
    </div>
  );
}

export default App;
