import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import gameBoardFactory from "./components/gameBoardFactory";

function App() {
  const [gameBoard, setGameBoard] = useState(gameBoardFactory(10));
  const [board, setBoard] = useState(gameBoard.board);
  // const board = gameBoard.board;

  useEffect(() => {
    //console.log(gameBoard.receiveAttack([0, 1]));
    //console.log(gameBoard.board);
    console.table(gameBoard.board);
  });

  return (
    <div className="board">
      {board.map((row) => {
        return (
          <div className="row">
            {row.map((square) => {
              return (
                <div className="board-square">
                  {!square.status ? "O" : square.status}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
