import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import gameBoardFactory from "./functions/gameBoardFactory";
import gameFlow from "./functions/gameFlow";
import Board from "./components/Board";

function App() {
  const [compBoard, setCompBoard] = useState(gameFlow().compGameBoard.board);
  const [humanBoard, setHumanBoard] = useState(gameFlow().humanGameBoard.board);
  // const board = gameBoard.board;

  useEffect(() => {
    //console.log(gameBoard.receiveAttack([0, 1]));
    //console.log(gameBoard.board);
    //console.table(gameBoard.board);
  });

  return (
    <div className="boards-container">
      <Board board={compBoard} type={"computer"} />
      <Board board={humanBoard} type={"human"} />
    </div>
  );
}

export default App;
