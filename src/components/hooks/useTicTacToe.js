
import React, { useState, useEffect } from 'react';
export function useTicTacToe()
{
    const[turn, setTurn]= useState(0);
    const [board, setBoard] = useState(Array(9).fill(null));
    const [winner, setWinner]=useState(null); 
    const [displayTurn , setDisplayTurn]=useState(null);
    
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
  ];
function getWinner(board) {
for (let i=0; i<lines.length; i++) {
  const [v1, v2, v3] = lines[i].map(n => board[n] && board[n]%2);
  if (v1!==null && v1 === v2 && v1 === v3) {
    return v1;
  }
}
return null;
}

useEffect(() => {
  setWinner(getWinner(board));
    }, [board]
    );



function showTurn(turnNb)
{
  if(turnNb =>0 && turnNb<turn)
  {
    setDisplayTurn(turnNb)
  }
  else
  {
    setDisplayTurn(null);
  }
  
}
function reset() {
  setBoard(Array(9).fill(null));
  setTurn(0);
  setDisplayTurn(null);
}

    const play = (i) => {
        /*
                const boardCopy = [...board];
                boardCopy[i] = xIsNext ? "X" : "O";
                setBoard(boardCopy);
        */
                const boardCopy = [...board];
                boardCopy[i] = turn;
                setBoard(boardCopy);
                setTurn(turn + 1);
        
                //setBoard(board);
                /*
                // If click an square or if game win, return
                if (winner || boardCopy[i]) return;
                // Put an X or an O in the clicked square
                boardCopy[i] = xIsNext ? "X" : "O";
                setBoard(boardCopy);
                setXisNext(!xIsNext);
                */
            };
    return({
        turn: turn, 
        board:displayTurn === null ? board : board.map((v)=> v<displayTurn ? v : null), 
        winner: winner,
        disabled: (turn===9 || winner !== null || displayTurn !== null),
        showTurn,
        reset,
        play
    });
}

export default useTicTacToe;