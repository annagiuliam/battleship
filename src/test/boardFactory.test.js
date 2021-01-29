const boardFactory = require("../components/boardFactory");

test("generate board", () => {
  const board = boardFactory(1);
  expect(board).toStrictEqual([[{ coords: [0, 0], hit: false, ship: false }]]);
});
test("generate board 2", () => {
  const board = boardFactory(2);
  expect(board).toStrictEqual([
    [
      { coords: [0, 0], hit: false, ship: false },
      { coords: [0, 1], hit: false, ship: false },
    ],
    [
      { coords: [1, 0], hit: false, ship: false },
      { coords: [1, 1], hit: false, ship: false },
    ],
  ]);
});

test("check board length", () => {
  const board = boardFactory(10);
  expect(board.length).toBe(10);
});
