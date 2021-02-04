import shipFactory from "../functions/shipFactory";

test("verify hit", () => {
  const ship = shipFactory(2, "name");
  expect(ship.hit([0, 0])).toStrictEqual([[0, 0]]);
  expect(ship.isSunk()).toBe(false);
});

test("verify hit 2", () => {
  const ship = shipFactory(3, "name");
  expect(ship.hit([0, 0])).toStrictEqual([[0, 0]]);
  expect(ship.hit([0, 2])).toStrictEqual([
    [0, 0],
    [0, 2],
  ]);
  expect(ship.hit([0, 1])).toStrictEqual([
    [0, 0],
    [0, 2],
    [0, 1],
  ]);
  expect(ship.isSunk()).toBe(true);
});
