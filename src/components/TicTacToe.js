import Board from "./Board";
import React, { useEffect } from 'react';
import Status from "./Status";
import Player from "./Player";
import useTicTacToe from './hooks/useTicTacToe';
import Turns from "./Turns";

export function TicTacToe()
{
  const {board, turn, winner, play, disabled, showTurn , reset, displayTurn, setTurn}=useTicTacToe();
  
    return(
        <>
        <div className="TicTacToe">
            <div className="main">
            <p>
                  <Status turn={turn} winner={winner} />
              </p>
                <Board board={board} onplay={play} disabled={turn===9 || winner !== null  }/>
                
                {disabled ? <button onClick={reset}>Reset</button> : <div></div>}
            </div>
        <Turns turn={turn} onSelect={showTurn} />
        

        </div>
        
        </>
    );
}

export default TicTacToe;

//<button hidden={turn >=0 && turn <9 && winner == null } onReset={reset} onClick={() => setTurn(0)}>Reset</button>