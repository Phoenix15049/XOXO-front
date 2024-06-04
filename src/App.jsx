import React from 'react';
import './App.css';
import Start from './Components/start/start'
import Login from './Components/Login/login'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (<>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Start/>} />
            <Route path='/Login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
  
  </>  
   
  );
}

export default App;