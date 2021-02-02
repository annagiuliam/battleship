const boardGameFactory = require("../factories/boardFactory");

test("generate board", () => {
  const boardGame = boardGameFactory(10);
  expect(boardGame.board[0][0]).toStrictEqual({
    coords: [0, 0],
    hit: false,
    ship: false,
  });
  expect(boardGame.board.length).toBe(10);
  expect(boardGame.board.every((row) => row.length === 10)).toBe(true);
  expect(boardGame.shipYard.length).toBe(5);
});
