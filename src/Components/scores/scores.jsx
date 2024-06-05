import React, { useState } from 'react';
import './scores.css';
import { Button, Container, Form ,Table} from 'react-bootstrap'; // Corrected import statement
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';// Corrected import statement

function Scores(){
    const [scores, setScores] = useState([]);

//   useEffect(() => {
//     // Fetch scores from your API
//     fetch('https://api.yourdomain.com/scores') // Replace with your actual API URL
//       .then(response => response.json())
//       .then(data => setScores(data))
//       .catch(error => console.error('Error fetching scores:', error));
//   }, []);

    return(
        <>
         <div className="d-flex flex-column align-items-center c2">
          <h1 className="text-white mt-5 fw-bold title">Tic-Tac-Toe</h1>
          <h2 className="text-white  fw-bold">SCORE TABLE (TOP 10)</h2>
          <Table className="text-white w-75">
        <thead>
          <tr>
            <th>ROW</th>
            <th>NAME</th>
            <th>SCORE</th>
          </tr>
        </thead>
        <tbody>
         
            <tr >
              <td>کفمپادث</td>
              <td>کمذتپخکذ</td>
              <td>منصذکهرسفقختذ</td>
            </tr>

        </tbody>
      </Table>



         </div>
        </>
    )
}

export default Scores