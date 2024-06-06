import React, { useState, useEffect } from 'react';
import './scores.css';
import { Button, Container, Form, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Scores() {
    const [players, setPlayers] = useState(Array(9).fill(null));
    const [loading, setLoading] = useState(true); 
    
    const tops = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/top-users');
        console.log(response.data);

        if (Array.isArray(response.data)) {
          setPlayers(response.data);
        } else {
          console.error("Expected an array but got", typeof response.data);
        }
      } catch (error) {
        console.error("Error fetching top users:", error);
      } finally {
        setLoading(false); 
      }
    };

    useEffect(() => {
     tops();
    }, []);
  
    if (loading) {
      return <div className="text-center fs-3">Loading...</div>; 
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center c2">
                <h1 className="text-white mt-5 fw-bold title">Tic-Tac-Toe</h1>
                <h2 className="text-white fw-bold">SCORE TABLE (TOP 10)</h2>
                <table className="text-white w-75 player-table" style={{ backgroundColor: '#3b2a9f' }}>
                    <thead>
                        <tr>
                            <th className="text-center pb-4 fs-2">ROW</th>
                            <th className="text-center pb-4 fs-2">NAME</th>
                            <th className="text-center pb-4 fs-2">SCORE</th>
                        </tr>
                    </thead>
                    <tbody>
                    {players.map((scoreObj, index) => (
                      <tr key={index}>
                        <td className="text-center fs-2 pb-2 fw-bold">{index+1}</td>
                        <td className="text-center fs-2 pb-2  fw-bold">{scoreObj.name}</td>
                        <td className="text-center fs-2 pb-2  fw-bold">{scoreObj.score}</td>
                      </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Scores;
