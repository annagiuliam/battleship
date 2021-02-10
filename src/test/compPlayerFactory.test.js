import compPlayerFactory from "../functions/compPlayerFactory";
import gameBoardFactory from "../functions/gameBoardFactory";

test("get attack coords", () => {
  const computer = gameBoardFactory(10);
  const human = gameBoardFactory(10);
  const legalSquares = human.getLegalSquares();
  const computerPlayer = compPlayerFactory(human.board);

  expect(computerPlayer.getAttackCoords(legalSquares, false)).toEqual(
    expect.any(Array)
  );

  expect(computerPlayer.getAttackCoords(legalSquares).length).toBe(2);
  const attack = computerPlayer.getAttackCoords(legalSquares, false);

  expect(computerPlayer.getAdjacentSquares([2, 9])).toStrictEqual([
    [3, 9],
    [1, 9],
    [2, 8],
  ]);
  expect(computerPlayer.getAdjacentSquares([0, 0])).toStrictEqual([
    [1, 0],
    [0, 1],
  ]);
  expect(
    computerPlayer.updateAdjCoords(
      [
        [0, 1],
        [0, 2],
        [0, 3],
      ],
      [0, 2]
    )
  ).toStrictEqual([
    [0, 1],
    [0, 3],
  ]);

  const humanShipsCoords = human.getShipsCoords();
  const mockLegalSquares = [humanShipsCoords[0], humanShipsCoords[0]];

  expect(computerPlayer.getAttackCoords(mockLegalSquares, false)).toStrictEqual(
    humanShipsCoords[0]
  );

  human.receiveAttack(humanShipsCoords[0]);
  // const [x, y] = humanShipsCoords[0];
  // console.log(human.board[x][y]);
  expect(computerPlayer.prevHand.prevAttack).toStrictEqual(humanShipsCoords[0]);
  expect(computerPlayer.getAttackCoords(mockLegalSquares, true)).toEqual(
    expect.any(Array)
  );
  expect(computerPlayer.prevHand.adjSquares).toEqual(expect.any(Array));
  //expect(computerPlayer.prevHand.wasHumanHit).toBe(true);
  //expect(computerPlayer.prevHand.adjSquares).toEqual(expect.any(Array));
  // console.log(humanShipsCoords[0]);

  // console.log(human.board[1][1]);
  // console.log(computerPlayer.prevAttack); //  RIPRENDI DA QUI

  // expect(computerPlayer.getAdjacentSquares([0, 1])).toStrictEqual([
  //   [0, 2],
  //   [0, 0],
  // ]);
  // human.receiveAttack(humanShipsCoords[0]);
});
