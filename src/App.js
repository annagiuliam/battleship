import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import gameBoardFactory from "./functions/gameBoardFactory";
import gameFlow from "./functions/gameFlow";
import Board from "./components/Board";

function App() {
  const [computer, setComputer] = useState(gameBoardFactory(10));
  const [compBoard, setCompBoard] = useState(computer.board);
  const [compTurn, setCompTurn] = useState(false);
  const [compScore, setCompScore] = useState(0);

  const [human, setHuman] = useState(gameBoardFactory(10));
  const [humanBoard, setHumanBoard] = useState(human.board);
  const [humanScore, setHumanScore] = useState(0);
  // const board = gameBoard.board;

  function handleClick(coords) {
    if (!compTurn && isMoveLegal(coords)) {
      const newBoard = computer.receiveAttack(coords);
      setCompBoard([...newBoard]);
      setCompTurn(true);
      setTimeout(makeCompMove, 3000);
    }
  }

  function isMoveLegal(coords) {
    const [x, y] = coords;
    return (
      compBoard[x][y].status !== "hit" && compBoard[x][y].status !== "missed"
    );
  }

  function makeCompMove() {
    const legalSquares = human.getLegalSquares();
    let compMove =
      legalSquares[Math.floor(Math.random() * legalSquares.length)];
    // console.log(legalSquares.length);
    // console.log(compMove);
    const newBoard = human.receiveAttack(compMove);
    // console.log(legalSquares.length);
    setHumanBoard(newBoard);
    setCompTurn(false);
  }

  useEffect(() => {
    //console.log(computer.receivedHits);
  });

  return (
    <div className="boards-container">
      <Board board={compBoard} type={"computer"} onClick={handleClick} />
      <Board board={humanBoard} type={"human"} />
    </div>
  );
}

export default App;
