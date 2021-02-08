const compPlayerFactory = (humanBoard) => {
  let prevAttack = null;
  function attack(legalSquares) {
    let attackCoords;
    // console.log(prevAttack);
    // first attack or previous attack did not hit
    if (!prevAttack || !wasHumanHit()) {
      //console.log(wasHumanHit());
      attackCoords =
        legalSquares[Math.floor(Math.random() * legalSquares.length)];
      prevAttack = attackCoords;
      console.log(prevAttack);
      // following attacks
    } else {
      //console.log(wasHumanHit());
      const adjacentCoords = getAdjacentSquares(prevAttack);
      attackCoords =
        adjacentCoords[Math.floor(Math.random() * adjacentCoords.length)];
      prevAttack = attackCoords;
    }

    return attackCoords;
  }
  function getAdjacentSquares(coords) {
    const [x, y] = coords;
    let adjacentCoords = [];
    if (x + 1 < humanBoard[0].length) {
      adjacentCoords.push([x + 1, y]);
    }
    if (x - 1 >= 0) {
      adjacentCoords.push([x - 1, y]);
    }
    if (y + 1 < humanBoard[0].length) {
      adjacentCoords.push([x, y + 1]);
    }
    if (y - 1 >= 0) {
      adjacentCoords.push([x, y - 1]);
    }

    return adjacentCoords.filter((pair) => {
      const [x, y] = pair;
      return (
        humanBoard[x][y].status !== "hit" &&
        humanBoard[x][y].status !== "missed"
      );
    });
  }

  function wasHumanHit() {
    if (prevAttack) {
      const [x, y] = prevAttack;
      return humanBoard[x][y].status === "hit";
    }
  }

  return { humanBoard, attack, prevAttack, getAdjacentSquares };
};

export default compPlayerFactory;
