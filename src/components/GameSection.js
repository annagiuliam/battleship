import React from "react";

import { useState, useEffect } from "react";

import gameBoardFactory from "../functions/gameBoardFactory";
import compPlayerFactory from "../functions/compPlayerFactory";

import Board from "./Board";
import PlayerSection from "./PlayerSection";
import RestartButton from "./RestartButton";

function GameSection() {
  const [computer, setComputer] = useState(gameBoardFactory(10));
  const [compBoard, setCompBoard] = useState(computer.board);
  const [compTurn, setCompTurn] = useState(false);
  const [compScore, setCompScore] = useState(0);
  const [wasHumanHit, setWashumanHit] = useState(false);

  const [human, setHuman] = useState(gameBoardFactory(10));
  const [humanBoard, setHumanBoard] = useState(human.board);
  const [humanScore, setHumanScore] = useState(0);

  const [compPlayer, setCompPlayer] = useState(compPlayerFactory());

  const totalScore = computer.totalShipLengths;

  useEffect(() => {
    if (humanScore === 17) {
      setCompTurn(false);
      alert("human wins!");
    }
    if (compScore === 17) {
      alert("computer wins!");
    }
  }, [compScore, humanScore]);

  function handleClick(coords) {
    if (
      !compTurn &&
      isMoveLegal(coords) &&
      humanScore < totalScore &&
      compScore < totalScore
    ) {
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
    let compMove = compPlayer.getAttackCoords(legalSquares, wasHumanHit);

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

  function restartGame() {
    const newHuman = gameBoardFactory(10);
    const newComputer = gameBoardFactory(10);

    const newCompPlayer = compPlayerFactory();
    setCompPlayer(newCompPlayer);

    setHuman(newHuman);
    setHumanBoard(newHuman.board);
    setHumanScore(0);
    setWashumanHit(false);

    setComputer(newComputer);
    setCompBoard(newComputer.board);
    setCompScore(0);
    setCompTurn(false);
  }

  return (
    <div className="game-container">
      <div className="boards-container">
        <div className="human-container">
          <PlayerSection
            type={"human"}
            score={humanScore}
            totalScore={totalScore}
          />
          <Board board={humanBoard} type={"human"} />
        </div>
        <RestartButton onClick={restartGame} />
        <div className="computer-container">
          <PlayerSection
            type={"computer"}
            score={compScore}
            totalScore={totalScore}
          />
          <Board board={compBoard} type={"computer"} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default GameSection;
