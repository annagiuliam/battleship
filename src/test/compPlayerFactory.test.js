import compPlayerFactory from "../functions/compPlayerFactory";
import gameBoardFactory from "../functions/gameBoardFactory";

const human = gameBoardFactory(10);
const legalSquares = human.getLegalSquares();
const computerPlayer = compPlayerFactory();

test("get adjacent squares", () => {
  expect(computerPlayer.getAdjacentSquares(legalSquares, [2, 9])).toStrictEqual(
    [
      [1, 9],
      [2, 8],
      [3, 9],
    ]
  );
  expect(computerPlayer.getAdjacentSquares(legalSquares, [0, 0])).toStrictEqual(
    [
      [0, 1],
      [1, 0],
    ]
  );
});

test("update adj coords", () => {
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
});

test("remove duplicates from adj coords", () => {
  const mockCoords = [
    [0, 9],
    [0, 2],
    [0, 3],
    [0, 3],
    [1, 6],
    [1, 6],
  ];

  expect(computerPlayer.updateAdjCoords(mockCoords, [1, 6])).toStrictEqual([
    [0, 9],
    [0, 2],
    [0, 3],
  ]);
});

test("get attack coords", () => {
  expect(computerPlayer.getAttackCoords(legalSquares, false)).toEqual(
    expect.any(Array)
  );
  expect(computerPlayer.getAttackCoords(legalSquares).length).toBe(2);

  const mockLegalSquares = [legalSquares[0], legalSquares[0]];
  expect(computerPlayer.getAttackCoords(mockLegalSquares, false)).toStrictEqual(
    legalSquares[0].coords
  );
  expect(computerPlayer.prevHand.prevAttack).toStrictEqual(
    legalSquares[0].coords
  );
  expect(computerPlayer.getAttackCoords(human.getLegalSquares(), true)).toEqual(
    expect.any(Array)
  );
  expect(computerPlayer.prevHand.adjSquares).toEqual(expect.any(Array));
});
