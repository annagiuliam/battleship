import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import gameBoardFactory from "./functions/gameBoardFactory";
import compPlayerFactory from "./functions/compPlayerFactory";
import gameFlow from "./functions/gameFlow";
import Board from "./components/Board";

function App() {
  const [computer] = useState(gameBoardFactory(10));
  const [compBoard, setCompBoard] = useState(computer.board);
  const [compTurn, setCompTurn] = useState(false);
  const [compScore, setCompScore] = useState(0);
  const [wasHumanHit, setWashumanHit] = useState(false);
  // const [prevCompAttack, setPrevCompAttack] = useState(null);

  const [human] = useState(gameBoardFactory(10));
  const [humanBoard, setHumanBoard] = useState(human.board);
  const [humanScore, setHumanScore] = useState(0);

  const [compPlayer] = useState(compPlayerFactory());

  const totalScore = computer.totalShipLengths;

  useEffect(() => {
    //console.log(computer.receivedHits);
  });
  function handleClick(coords) {
    if (!compTurn && isMoveLegal(coords)) {
      makeHumanMove(coords);
    }
  }

  function makeHumanMove(coords) {
    const newBoard = computer.receiveAttack(coords);
    const [x, y] = coords;
    if (compBoard[x][y].status === "hit") {
      setHumanScore(humanScore + 1);
    }
    setCompBoard([...newBoard]);
    setCompTurn(true);
    setTimeout(makeCompMove, 1000);
  }

  function isMoveLegal(coords) {
    const [x, y] = coords;
    return (
      compBoard[x][y].status !== "hit" && compBoard[x][y].status !== "missed"
    );
  }

  function makeCompMove() {
    const legalSquares = human.getLegalSquares();
    let compMove = compPlayer.getAttackCoords(
      legalSquares,
      wasHumanHit
      // prevCompAttack
    );
    //setPrevCompAttack(compMove);
    const newBoard = human.receiveAttack(compMove);
    const [x, y] = compMove;
    if (humanBoard[x][y].status === "hit") {
      setCompScore(compScore + 1);
      setWashumanHit(true);
    } else {
      setWashumanHit(false);
    }
    setHumanBoard(newBoard);
    setCompTurn(false);
  }

  return (
    <div className="boards-container">
      <Board
        board={humanBoard}
        type={"human"}
        score={humanScore}
        totalScore={totalScore}
      />
      <Board
        board={compBoard}
        type={"computer"}
        onClick={handleClick}
        score={compScore}
        totalScore={totalScore}
      />
    </div>
  );
}

export default App;
