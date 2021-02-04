const boardGameFactory = require("../factories/boardFactory");
import { testBoard, testShipYard } from "./testObjects";

test("generate board", () => {
  const boardGame = boardGameFactory(10);

  expect(boardGame.board[0][1].coords).toStrictEqual([0, 1]);
  expect(boardGame.board.length).toBe(10);
  expect(boardGame.board.every((row) => row.length === 10)).toBe(true);
  expect(boardGame.shipYard.length).toBe(5);
});

test("board functions", () => {
  const boardGame = boardGameFactory(10);
  const shipsCoords = boardGame.getShipsCoords();
  const emptySquares = boardGame.getEmptySquares();

  boardGame.receiveAttack(emptySquares[0]);
  expect(boardGame.missedHits).toStrictEqual([emptySquares[0]]);
  expect(boardGame.getLegalSquares().length).toBe(99);

  boardGame.receiveAttack(emptySquares[1]);
  expect(boardGame.missedHits).toStrictEqual([
    emptySquares[0],
    emptySquares[1],
  ]);
  expect(boardGame.getLegalSquares().length).toBe(98);
  expect(boardGame.allSunk()).toBe(false);

  sinkAll(shipsCoords, boardGame);
  expect(boardGame.getLegalSquares().length).toBe(
    98 - boardGame.totalShipLengths
  );
  expect(boardGame.allSunk()).toBe(true);
});

function sinkAll(shipsCoords, boardGame) {
  for (let i = 0; i < shipsCoords.length; i++) {
    for (let j = 0; j < shipsCoords[i].length; j++) {
      boardGame.receiveAttack(shipsCoords[i][j]);
    }
  }
}
