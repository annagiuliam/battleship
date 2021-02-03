import { createShipYard } from "./helpers";

const boardGameFactory = (size) => {
  const board = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      let cell = { coords: [i, j], status: null, ship: null };
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
  const missedHits = [];

  function receiveAttack(coords) {
    const [x, y] = coords;
    if (board[x][y].ship) {
      const hitShip = shipYard.find((ship) => ship.name === board[x][y].ship);
      board[x][y].status = "hit";
      hitShip.hit(coords);
    } else {
      missedHits.push(coords);
      board[x][y].status = "missed";
    }
  }

  function getShipsCoords() {
    let coords = [];
    shipYard.forEach((ship) => {
      coords.push(ship.coords);
    });
    return coords;
  }

  function getEmptySquares() {
    const emptySquares = [];
    board.forEach((row) => {
      for (let i = 0; i < row.length; i++) {
        if (row[i].status === null) {
          emptySquares.push(row[i].coords);
        }
      }
      return emptySquares;
    });
    return emptySquares;
  }

  function allSunk() {
    return shipYard.every((ship) => ship.isSunk());
  }

  return {
    board,
    shipYard,
    missedHits,
    receiveAttack,
    getShipsCoords,
    getEmptySquares,
    allSunk,
  };
};

module.exports = boardGameFactory;

//export default boardGameFactory;
