const shipFactory = require("../components/shipFactory");

test("verify hit", () => {
  const ship = shipFactory(2, ["A1", "B1"]);
  expect(ship.hit("B2")).toStrictEqual(["B2"]);
  expect(ship.isSunk()).toBe(false);
});

test("verify hit 2", () => {
  const ship = shipFactory(3, ["A1", "B1", "C1"]);
  expect(ship.hit("C1")).toStrictEqual(["C1"]);
  expect(ship.hit("A1")).toStrictEqual(["C1", "A1"]);
  expect(ship.hit("B1")).toStrictEqual(["C1", "A1", "B1"]);
  expect(ship.isSunk()).toBe(true);
});
