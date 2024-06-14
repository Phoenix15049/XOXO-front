import React from 'react';
import './App.css';
import Start from './Components/start/start'
import Login from './Components/Login/login'
import PlayeGame from './Components/Play/play';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Scores from './Components/scores/scores';

function App() {
  return (<>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Start/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/play' element={<PlayeGame/>} />
            <Route path='/scores' element={<Scores/>} />
        </Routes>
      </BrowserRouter>
  
  </>  
   
  );
}

export default App;