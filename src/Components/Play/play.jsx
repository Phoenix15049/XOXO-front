import {  useState,useEffect } from 'react'
import { Button, Container, Form } from 'react-bootstrap'; 
import { useLocation } from 'react-router-dom';
import './play.css';
import axios from 'axios'


function PlayeGame(){

  const [board, setBoard] = useState(Array(9).fill(null));
  // State to track the current player: true for 'O', false for 'X'
  const [isO, setIsO] = useState(true);
  const [winner, setWinner] = useState("");
  let location = useLocation();
  let { param1, param2 } = location.state;
  const [winValues, setwinValues] = useState({
    name: "",
    status: "",
  });
  const [loseValues, setloseValues] = useState({
    name: "",
    status: "",
  });
 

  const handleClick = async(index) => {
    if (board[index] || checkWinner(board)) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = isO ? 'O' : 'X';
    setBoard(newBoard);
    setIsO(!isO); // Switch player
    const result = checkWinner(newBoard);
    if (result === "X") {
      setwinValues(
        { 'name': param1 , 
          'status': "WIN"} );
      setloseValues(
          { 'name': param2 , 
            'status': "LOSE"} );

    }else if(result === "O"){
      setwinValues(
        { 'name': param2, 
          'status': "WIN"} );
      setloseValues(
          { 'name': param1 , 
            'status': "LOSE"} );
    }
    console.log(winValues);
    if (result !== null) {
      axios.post('http://127.0.0.1:8000/socrs/', winValues)
      .then(response => {
         console.log(response.data);
       })
      .catch(error => {
         console.log(error);
       });
    
      
    }
  };

  useEffect(() => {
    console.log(winValues); 
  }, [winValues]); 
  useEffect(() => {
    console.log(loseValues); 
  }, [loseValues]); 

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]            // diagonals
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        // console.log(board[a]);
        return board[a];
      }
    }
    return null;
  };

  const renderCell = (index) => {
    return (
      <div xs={4} className="p-2">
        <Button 
          style={{
            backgroundColor: '#1C140F',
            color: board[index] === 'O' ? '#FF0000' : '#3b2a9f',
            fontSize: '7rem',
            border: '2px solid #1C140F',
            borderRadius : '15px',
            width: '200px',
            height: '200px'

          }}
          onClick={() => handleClick(index)}
        >
          {board[index]}
        </Button>
      </div>
    );
  };

  return (
    <div className="vh-100 d-flex flex-column align-items-center " >
      <h1 className="text-white mt-5 mb-4 fw-bold title">Tic-Tac-Toe</h1>
      <div className="d-flex flex-row r mb-5">
        <span className="text-info game-info">{param1}: X</span> &nbsp;
        <span className="text-danger game-info ">{param2} : O</span>
      </div>

      <div className=" d-flex flex-column align-items-center justify-content-center board">
      <div className="d-flex">
        {Array.from({ length: 3}).map((_, i) => renderCell(i))}
      </div>
      <div className="d-flex">
        {Array.from({ length: 3}).map((_, i) => renderCell(i+3))}
      </div>
      <div className="d-flex">
        {Array.from({ length: 3}).map((_, i) => renderCell(i+6))}
      </div>
      </div>
     
    </div>
  );
}

export default PlayeGame