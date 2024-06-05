import React, { useState } from 'react';
import './login.css';
import { Button, Container, Form } from 'react-bootstrap'; // Corrected import statement
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import PlayeGame from '../Play/play'

function Login() {
  const navigate=useNavigate();
  const [name1, setname1] = useState('');
  const [name2, setname2] = useState('');
  const [gamestarted,setgamestarted]=useState(0);
  // const myProps = { name1: "value1", name2: "value2" };
  const [values, setValues] = useState({
    name1: "",
    name2: "",
  });
 

  const handleStartGame = async(e) => {
    e.preventDefault();
    setgamestarted(1)
    setValues(
        { 'name1': name1 , 
          'name2': name2} );
          navigate('/play', { 
            state: { 
              param1: name1 ,
              param2: name2
            } 
          });
    console.log(name1);
try {
    const response = await axios.post('http://127.0.0.1:8000/users/', values);
    console.log(response);
  } catch (error) {
    console.log(error);
  }};


  useEffect(() => {
    console.log(values);
   }, [values]);


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
                  name='name1'
                  value={name1}
                  onChange={e => setname1(e.target.value)}
                  className='input-l text-white'
                />
              </Form.Group>
              
              <Form.Group className="mb-4 ">
                <Form.Control
                  type="text"
                  placeholder="Enter Player Two"
                  name='name2'
                  value={name2}
                  onChange={e => setname2(e.target.value)}
                  className='input-l'
                />
              </Form.Group>
            </Form>
          <button className="btn-lg start-button" onClick={handleStartGame}>
                    <span className='span'>START</span>
              </button>
        </div>
        <p className='foot'>Proved By ELAHE FTL 2012</p>
      </div>
      {gamestarted===1 && <PlayeGame name1={name1}  name2={name2}/>}
 
    </>
  );
}

export default Login;
