import React, { useState } from 'react';
import './scores.css';
import { Button, Container, Form ,Table} from 'react-bootstrap'; // Corrected import statement
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';// Corrected import statement

function Table(){
    return(
        <>
       
            <tr >
              <td>کفمپادث</td>
              <td>کمذتپخکذ</td>
              <td>منصذکهرسفقختذ</td>
            </tr>

       
        </>
    )
}

export default Table