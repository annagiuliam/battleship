import compPlayerFactory from "../functions/compPlayerFactory";
import gameBoardFactory from "../functions/gameBoardFactory";

test("attack", () => {
  const computer = gameBoardFactory(10);
  const human = gameBoardFactory(10);
  const legalSquares = human.getLegalSquares();
  const computerPlayer = compPlayerFactory(human.board);

  expect(computerPlayer.attack(legalSquares)).toEqual(expect.any(Array));

  expect(computerPlayer.attack(legalSquares).length).toBe(2);
  const attack = computerPlayer.attack(legalSquares);

  expect(computerPlayer.getAdjacentSquares([2, 9])).toStrictEqual([
    [3, 9],
    [1, 9],
    [2, 8],
  ]);
  const humanShipsCoords = human.getShipsCoords();
  computerPlayer.attack([1, 1]);
  human.receiveAttack([1, 1]);
  console.log(human.board[1][1]);
  console.log(computerPlayer.prevAttack); //  RIPRENDI DA QUI

  expect(computerPlayer.getAdjacentSquares([0, 1])).toStrictEqual([
    [0, 2],
    [0, 0],
  ]);
  human.receiveAttack(humanShipsCoords[0]);
});
