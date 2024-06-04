import React, { useState } from 'react';
import './login.css';
import { Button, Container, Form } from 'react-bootstrap'; // Corrected import statement

function Login() {
  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');

  const handleStartGame = () => {
    // Placeholder function to handle starting the game
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center c">
        <h1 className="text-white mt-5 mb-4 fw-bold title">Tic-Tac-Toe</h1>
        <div className="text-white d-flex flex-column align-items-center justify-content-center log">
        
            <Form>
              <Form.Group className="mb-4 text-white">
                <Form.Control
                  type="text"
                  placeholder="Enter Player One"
                  value={playerOne}
                  onChange={e => setPlayerOne(e.target.value)}
                  className='input-l text-white'
                />
              </Form.Group>
              
              <Form.Group className="mb-4 ">
                <Form.Control
                  type="text"
                  placeholder="Enter Player Two"
                  value={playerTwo}
                  onChange={e => setPlayerTwo(e.target.value)}
                  className='input-l'
                />
              </Form.Group>
            </Form>
          <button className="btn-lg start-button" onClick={() => navigate('/Login')}> {/* Correctly calling navigate function */}
                    <span className='span'>START</span>
              </button>
        </div>
        <p className='foot'>Proved By ELAHE FTL 2012</p>
      </div>
    </>
  );
}

export default Login;
