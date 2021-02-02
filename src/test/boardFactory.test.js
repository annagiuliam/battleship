const boardGameFactory = require("../factories/boardFactory");

test("generate board", () => {
  const boardGame = boardGameFactory(10);
  //console.log(boardGame.receiveAttack([0, 1]));
  expect(boardGame.board[0][1].coords).toStrictEqual([0, 1]);
  expect(boardGame.board.length).toBe(10);
  expect(boardGame.board.every((row) => row.length === 10)).toBe(true);
  expect(boardGame.shipYard.length).toBe(5);
  // boardGame.receiveAttack([0, 1]);
  // console.log(boardGame.board[0][1].ship);
  // if (!boardGame.board[0][1].ship) {
  //   expect(boardGame.missedHits).toStrictEqual([[0, 1]]);
  // }
});
