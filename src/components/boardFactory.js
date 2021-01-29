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

//   function freeTiles() {}
//   const shipsSizes = [2, 3];
//   const ships = [];
//   const freeTiles = [...tiles];
//   function generateShips(sizes) {
//     shipsSizes.forEach((size) => {
//       const newShip = shipFactory(size);
//     });
//   }

//return { tiles };

module.exports = boardFactory;
