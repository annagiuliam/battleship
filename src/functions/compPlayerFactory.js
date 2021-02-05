const compPlayerFactory = () => {
  let prevCoords = [];
  function attack(legalSquares) {
    const attackCoords =
      legalSquares[Math.floor(Math.random() * legalSquares.length)];
    prevCoords.push(attackCoords[0]);
    prevCoords.push(attackCoords[1]);
    return attackCoords;
  }
  function getAdjacentSquares(coords, board) {
    // const [x, y] = coords;
    // const adjacentSquares = [
    //   [x - 1, y],
    //   [x + 1, y],
    //   [x, y + 1],
    //   [x, y - 1],
    // ];
    // const possibleAdj = adjacentSquares.filter((square) => {
    //   console.log(square);
    //   const [x, y] = square;
    //   return (
    //     board[x][y].status != "hit" &&
    //     board[x][y].status != "missed" &&
    //     x >= 0 &&
    //     x <= 9 &&
    //     y >= 0 &&
    //     y <= 9
    //   );
    // });
    // return possibleAdj;
    // LOGICA SMART MOVE
  }
  return { attack, getAdjacentSquares };
};

export default compPlayerFactory;
