import React from 'react';
import './start.css';
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate(); // Destructure useNavigate to get the navigate function

  return (
    <>
      <div className="d-flex flex-column align-items-center c">
        <h1 className="text-white mt-5 mb-4 fw-bold title">Tic-Tac-Toe</h1>
        <div className="d-flex flex-column align-items-center justify-content-center start">
          <button className="btn-lg start-button" onClick={() => navigate('/Login')}> {/* Correctly calling navigate function */}
            <span className='span'>START</span>
          </button>
          <a className="btn-lg texr-white" onClick={() => alert('View Scores')}>
            SCORES
          </a>
        </div>
        <p className='foot'>Proved By ELAHE FTL 2012</p>
      </div>
    </>
  );
}

export default Start;
