import compPlayerFactory from "../functions/compPlayerFactory";
import gameBoardFactory from "../functions/gameBoardFactory";

test("attack", () => {
  const gameBoard = gameBoardFactory(10);
  const legalSquares = gameBoard.getLegalSquares();
  const computer = compPlayerFactory();

  expect(computer.attack(legalSquares)).toEqual(expect.any(Array));
  expect(computer.attack(legalSquares).length).toBe(2);
  const attack = computer.attack(legalSquares);
  console.log(attack);
  console.log(computer.getAdjacentSquares(attack));
});
