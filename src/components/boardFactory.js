import shipFactory from "./shipFactory";

const boardFactory = (size) => {
  const board = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      let cell = { coords: [i, j], hit: false, ship: false };
      row.push(cell);
    }
    board.push(row);
  }
  return board;
};

function random0to9() {
  return Math.floor(Math.random() * (10 - 0)) + 0;
}

function randomStart() {
  const coords = [random0to9(), random0to9()];
  return coords;
}

function randomOrientation() {
  return random0to9() > 5 ? "vertical" : "horizontal";
}
function placeShip(a, b) {
  return board[a].indexOf(board[a][b]) + 3;
}

function generateShipCoords() {
  const startCoords = randomStart();
  const orientation = randomOrientation();
  const x = startCoords[0];
  const y = startCoords[1];
  const row = board[x];
  let shipCoords;
  if (orientation === "horizontal") {
    shipCoords = generateHorCoords(x, y, row);
  } else {
    shipCoords = "to be defined";
  }

  return shipCoords;
}

function generateHorCoords(x, y, row) {
  let endPos = null;
  let endCoords = null;
  let shipCoords = [];
  if (row.indexOf(row[y]) + (ship.length - 1) < 10) {
    endPos = row.indexOf(row[y]) + (ship.length - 1);
    endCoords = [x, endPos];

    for (let i = y; i <= endPos; i++) {
      shipCoords.push([x, i]);
    }
  } else if (row.indexOf(row[y]) - (ship.length - 1) > 0) {
    endPos = row.indexOf(row[y]) - (ship.length - 1);
    endCoords = [x, endPos];

    for (let i = y; i >= endPos; i--) {
      shipCoords.push([x, i]);
    }
  }

  return shipCoords;
}
console.log(generateShipCoords());

module.exports = boardFactory;
