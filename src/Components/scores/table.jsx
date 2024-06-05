import React, { useState } from 'react';
import './scores.css';
import { Button, Container, Form ,Table} from 'react-bootstrap'; // Corrected import statement
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';// Corrected import statement

function Table(){
    return(
        <>
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

        </>
    )
}

export default Table