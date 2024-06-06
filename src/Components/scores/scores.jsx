import React, { useState } from 'react';
import './scores.css';
import { Button, Container, Form, Table } from 'react-bootstrap'; // Corrected import statement
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'; // Corrected import statement

function Scores() {
    const [scores, setScores] = useState([]);

    return (
        <>
            <div className="d-flex flex-column align-items-center c2">
                <h1 className="text-white mt-5 fw-bold title">Tic-Tac-Toe</h1>
                <h2 className="text-white fw-bold">SCORE TABLE (TOP 10)</h2>
                <Table className="text-white w-75">
                    <thead>
                        <tr>
                            <th className="text-center fs-3">ROW</th>
                            <th className="text-center fs-3">NAME</th>
                            <th className="text-center fs-3"> SCORE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Apply the text-center class to each td */}
                        <tr>
                            <td className="text-center fs-3">1</td>
                            <td className="text-center fs-3">XXXX</td>
                            <td className="text-center fs-3">10</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Scores;
