import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import gameBoardFactory from "./functions/gameBoardFactory";
import gameFlow from "./functions/gameFlow";
import Board from "./components/Board";

function App() {
<<<<<<< HEAD
  const [computer, setComputer] = useState(gameBoardFactory(10));
  const [compBoard, setCompBoard] = useState(computer.board);
  const [compTurn, setCompTurn] = useState(false);

  const [human, setHuman] = useState(gameBoardFactory(10));
  const [humanBoard, setHumanBoard] = useState(human.board);
  const [humanScore, setHumanScore] = useState(0);
  // const board = gameBoard.board;

  function handleClick(coords) {
    const newBoard = computer.receiveAttack(coords);
    setCompBoard([...newBoard]);
    const [x, y] = coords;
    console.log(coords);
    console.log(computer.shipYard);
    console.log(compBoard[x][y]);
    console.log(computer);
    setCompTurn(true);
  }

  useEffect(() => {
    //console.log(computer.receivedHits);
=======
  const [computer, setComputer] = useState(gameFlow().computer);
  const [human, setHuman] = useState(gameFlow().human);
  // const board = gameBoard.board;

  function handleClick(coords) {
    //  RIPRENDI DA QUI
  }

  useEffect(() => {
    console.log(computer.receivedHits);
>>>>>>> c7bd3b02b762e1c8ee07d6b0b71e103a5b748b63
  });

  return (
    <div className="boards-container">
<<<<<<< HEAD
      <Board board={compBoard} type={"computer"} onClick={handleClick} />
      <Board board={humanBoard} type={"human"} />
=======
      <Board board={computer.board} type={"computer"} onClick={handleClick} />
      <Board board={human.board} type={"human"} />
>>>>>>> c7bd3b02b762e1c8ee07d6b0b71e103a5b748b63
    </div>
  );
}

export default App;
