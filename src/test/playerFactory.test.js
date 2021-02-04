const playerFactory = require("../factories/playerFactory");
const gameBoardFactory = require("../factories/gameBoardFactory");

test("attack", () => {
  const gameBoard = gameBoardFactory(10);
  const legalSquares = gameBoard.getLegalSquares();
  const computer = playerFactory("computer", legalSquares);

  expect(computer.name).toBe("computer");
  expect(computer.attack()).toEqual(expect.any(Array));
  expect(computer.attack().length).toBe(2);
});
