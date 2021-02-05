const compPlayerFactory = () => {
  let prevCoords = [];
  function attack(legalSquares, opponentBoard) {
    const attackCoords =
      legalSquares[Math.floor(Math.random() * legalSquares.length)];
    prevCoords.push(attackCoords[0]);
    prevCoords.push(attackCoords[1]);
    return attackCoords;
  }
  //RIPARTI DA LOGICA PC
  function checkIfHit(board) {
    const [x, y] = prevCoords;
    return board[x][y].status === "ship";
  }
  return { attack };
};

export default compPlayerFactory;
