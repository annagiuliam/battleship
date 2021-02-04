import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import gameBoardFactory from "./functions/gameBoardFactory";
import gameFlow from "./functions/gameFlow";
import Board from "./components/Board";

function App() {
  const [computer, setComputer] = useState(gameFlow().computer);
  const [human, setHuman] = useState(gameFlow().human);
  // const board = gameBoard.board;

  function handleClick(coords) {
    //  RIPRENDI DA QUI
  }

  useEffect(() => {
    console.log(computer.receivedHits);
  });

  return (
    <div className="boards-container">
      <Board board={computer.board} type={"computer"} onClick={handleClick} />
      <Board board={human.board} type={"human"} />
    </div>
  );
}

export default App;
