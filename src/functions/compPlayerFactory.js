const compPlayerFactory = (humanBoard) => {
  const prevHand = { adjSquares: null, prevAttack: null };

  function getAttackCoords(legalSquares, wasHumanHit) {
    let attackCoords;

    if (wasHumanHit && !prevHand.adjSquares) {
      const adjacentCoords = getAdjacentSquares(prevHand.prevAttack);
      attackCoords =
        adjacentCoords[Math.floor(Math.random() * adjacentCoords.length)];

      prevHand.prevAttack = [...attackCoords];
      prevHand.adjSquares = [...adjacentCoords];
    } else if (!prevHand.prevAttack || !wasHumanHit) {
      attackCoords =
        legalSquares[Math.floor(Math.random() * legalSquares.length)];
      prevHand.prevAttack = [...attackCoords];
    } else {
      //console.log(wasHumanHit());
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

  function checkHit() {
    if (prevHand.prevAttack) {
      const [x, y] = prevHand.prevAttack;
      return humanBoard[x][y].status === "hit";
    } else {
      return false;
    }
  }

  return { humanBoard, getAttackCoords, getAdjacentSquares, prevHand };
};

export default compPlayerFactory;
