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
  coords.forEach((coord) => {
    const x = coord[0];
    const y = coord[1];
    board[x][y].ship = ship.name;
  });
}

function coordsFree(coords, board) {
  return coords.every((coord) => {
    //console.log(board);
    const x = coord[0];
    const y = coord[1];
    return !board[x][y].ship;
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
  const x = startCoords[0];
  const y = startCoords[1];
  const row = board[x];
  let shipCoords;

  if (orientation === "horizontal") {
    shipCoords = generateHorCoords(x, y, row, ship);
  } else {
    shipCoords = generateVerCoords(x, y, board, row, ship);
  }

  return shipCoords;
}

function generateHorCoords(x, y, row, ship) {
  let endPos = null;
  let shipCoords = [];
  //if the end position is withing the board, generate coords between start and end position, otherwise check in the other direction
  if (y + (ship.length - 1) < 10) {
    endPos = y + (ship.length - 1);
    for (let i = y; i <= endPos; i++) {
      shipCoords.push([x, i]);
    }
  } else {
    endPos = y - (ship.length - 1);
    for (let i = y; i >= endPos; i--) {
      shipCoords.push([x, i]);
    }
  }
  return shipCoords;
}

function generateVerCoords(x, y, board, row, ship) {
  let endPos = null;
  let shipCoords = [];

  if (x + (ship.length - 1) < 10) {
    endPos = x + (ship.length - 1);
    for (let i = x; i <= endPos; i++) {
      shipCoords.push([i, y]);
    }
  } else {
    endPos = x - (ship.length - 1);
    for (let i = x; i >= endPos; i--) {
      shipCoords.push([i, y]);
    }
  }

  return shipCoords;
}

export { randomStart, randomOrientation, createShipYard };
