import shipFactory from "./shipFactory";

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

function createShipYard(shipLengths, board) {
  let shipYard = [];
  shipLengths.forEach((ship) => {
    const newShip = shipFactory(ship.length, ship.name);
    // valid coords are in range and not occupied by another ship
    const newCoords = generateValidCoords(board, newShip);
    newShip.coords = [...newCoords];
    // once checked the validity of the coords, the ship can be placed on the board
    placeShip(board, ship, newCoords);
    shipYard.push(newShip);
  });

  return shipYard;
}

function placeShip(board, ship, coords) {
  coords.forEach((pair) => {
    const [r, c] = pair;
    board[r][c].ship = ship.name;
    board[r][c].status = "ship";
  });
}

function coordsFree(coords, board) {
  return coords.every((pair) => {
    const [r, c] = pair;
    return !board[r][c].status;
  });
}

function generateValidCoords(board, ship) {
  let newCoords = generateShipCoords(board, ship);
  //if the coords on the board are no free, keep generating new coords
  while (!coordsFree(newCoords, board)) {
    newCoords = generateShipCoords(board, ship);
  }
  return newCoords;
}

function generateShipCoords(board, ship) {
  const startCoords = randomStart();
  const orientation = randomOrientation();
  const [r, c] = startCoords;

  let shipCoords;

  if (orientation === "horizontal") {
    shipCoords = generateHorCoords(r, c, ship);
  } else {
    shipCoords = generateVerCoords(r, c, ship);
  }

  return shipCoords;
}

function generateHorCoords(r, c, ship) {
  let endPos = null;
  let shipCoords = [];
  //if the end position is within the board, generate coords between start and end position, otherwise check in the other direction
  if (c + (ship.length - 1) < 10) {
    endPos = c + (ship.length - 1);
    for (let i = c; i <= endPos; i++) {
      shipCoords.push([r, i]);
    }
  } else {
    endPos = c - (ship.length - 1);
    for (let i = c; i >= endPos; i--) {
      shipCoords.push([r, i]);
    }
  }
  return shipCoords;
}

function generateVerCoords(r, c, ship) {
  let endPos = null;
  let shipCoords = [];

  if (r + (ship.length - 1) < 10) {
    endPos = r + (ship.length - 1);
    for (let i = r; i <= endPos; i++) {
      shipCoords.push([i, c]);
    }
  } else {
    endPos = r - (ship.length - 1);
    for (let i = r; i >= endPos; i--) {
      shipCoords.push([i, c]);
    }
  }

  return shipCoords;
}

function sumShipLengths(shipLengths) {
  return shipLengths.reduce((tot, cur) => tot + cur.length, 0);
}

export { randomStart, randomOrientation, createShipYard, sumShipLengths };
