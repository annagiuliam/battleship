import React from "react";

import { useState, useEffect } from "react";

import gameBoardFactory from "../functions/gameBoardFactory";
import compPlayerFactory from "../functions/compPlayerFactory";

import Board from "./Board";
import PlayerSection from "./PlayerSection";
import RestartButton from "./RestartButton";
import Modal from "./Modal";

function GameSection() {
  // call gameBoardFactory in function so it doesn't recreate the board on every render
  const [computer, setComputer] = useState(() => gameBoardFactory(10));
  const [compBoard, setCompBoard] = useState(computer.board);
  const [compTurn, setCompTurn] = useState(false);
  const [compScore, setCompScore] = useState(0);
  const [wasHumanHit, setWashumanHit] = useState(false);

  const [human, setHuman] = useState(gameBoardFactory(10));
  const [humanBoard, setHumanBoard] = useState(human.board);
  const [humanScore, setHumanScore] = useState(0);

  const [compPlayer, setCompPlayer] = useState(compPlayerFactory());

  const [displayWin, setDisplayWin] = useState(false);

  const totalScore = computer.totalShipLengths;

  useEffect(() => {
    if (humanScore === totalScore) {
      setCompTurn(false);
      setDisplayWin(true);
    }
    if (compScore === totalScore) {
      setDisplayWin(true);
    }
  }, [humanScore, totalScore, compScore]);

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
    const [r, c] = coords;
    if (compBoard[r][c].status === "hit") {
      setHumanScore(humanScore + 1);
    }
    setCompBoard([...newBoard]);
    setCompTurn(true);
    setTimeout(makeCompMove, 1000);
  }

  function isMoveLegal(coords) {
    const [r, c] = coords;
    return (
      compBoard[r][c].status !== "hit" && compBoard[r][c].status !== "missed"
    );
  }

  function makeCompMove() {
    const legalSquares = human.getLegalSquares();
    let compMove = compPlayer.getAttackCoords(legalSquares, wasHumanHit);

    const newBoard = human.receiveAttack(compMove);
    const [r, c] = compMove;
    if (humanBoard[r][c].status === "hit") {
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
    setHuman(newHuman);
    setHumanBoard(newHuman.board);
    setHumanScore(0);
    setWashumanHit(false);

    const newComputer = gameBoardFactory(10);
    setComputer(newComputer);
    setCompBoard(newComputer.board);
    setCompScore(0);
    setCompTurn(false);

    const newCompPlayer = compPlayerFactory();
    setCompPlayer(newCompPlayer);
  }

  function closeModal() {
    setDisplayWin(false);
    restartGame();
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
      {displayWin && (
        <Modal
          show={displayWin}
          humanScore={humanScore}
          compScore={compScore}
          totalScore={totalScore}
          onClick={() => closeModal()}
        />
      )}
    </div>
  );
}

export default GameSection;
