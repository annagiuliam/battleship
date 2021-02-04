import playerFactory from "../components/playerFactory";
import gameBoardFactory from "../components/gameBoardFactory";

test("attack", () => {
  const gameBoard = gameBoardFactory(10);
  const legalSquares = gameBoard.getLegalSquares();
  const computer = playerFactory("computer");

  expect(computer.name).toBe("computer");
  expect(computer.attack(legalSquares)).toEqual(expect.any(Array));
  expect(computer.attack(legalSquares).length).toBe(2);
});
