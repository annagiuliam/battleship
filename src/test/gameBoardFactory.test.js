import gameBoardFactory from "../functions/gameBoardFactory";

test("generate board", () => {
  const gameBoard = gameBoardFactory(10);

  expect(gameBoard.board[0][1].coords).toStrictEqual([0, 1]);
  expect(gameBoard.board.length).toBe(10);
  expect(gameBoard.board.every((row) => row.length === 10)).toBe(true);
  expect(gameBoard.shipYard.length).toBe(5);
});

test("board functions", () => {
  const gameBoard = gameBoardFactory(10);
  const shipsCoords = gameBoard.getShipsCoords();
  const emptySquares = gameBoard.getEmptySquares();

  gameBoard.receiveAttack(emptySquares[0]);
  // expect(gameBoard.missedHits).toStrictEqual([emptySquares[0]]);
  expect(gameBoard.getLegalSquares().length).toBe(99);

  gameBoard.receiveAttack(emptySquares[1]);
  // expect(gameBoard.missedHits).toStrictEqual([
  //   emptySquares[0],
  //   emptySquares[1],
  // ]);

  expect(gameBoard.getLegalSquares().length).toBe(98);
  expect(gameBoard.allSunk()).toBe(false);

  sinkAll(shipsCoords, gameBoard);
  expect(gameBoard.getLegalSquares().length).toBe(
    98 - gameBoard.totalShipLengths
  );
  expect(gameBoard.allSunk()).toBe(true);
});

function sinkAll(shipsCoords, gameBoard) {
  for (let i = 0; i < shipsCoords.length; i++) {
    gameBoard.receiveAttack(shipsCoords[i]);
  }
}
