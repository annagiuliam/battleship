import { createShipYard } from "./helpers";

const boardGameFactory = (size) => {
  const board = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      let cell = { coords: [i, j], hit: false, ship: false };
      row.push(cell);
    }
    board.push(row);
  }

  const shipLengths = [
    { name: "carrier", length: 5 },
    { name: "battleship", length: 4 },
    { name: "destroyer", length: 3 },
    { name: "submarine", length: 3 },
    { name: "patrol boat", length: 2 },
  ];
  const shipYard = createShipYard(shipLengths, board);

  return { board, shipYard };
};

module.exports = boardGameFactory;

//export default boardGameFactory;
