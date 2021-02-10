const compPlayerFactory = (humanBoard) => {
  const prevHand = { adjSquares: [], prevAttack: null };

  function getAttackCoords(legalSquares, wasHumanHit) {
    let attackCoords;

    if (wasHumanHit) {
      //get available adjacent squares
      const adjacentCoords = getAdjacentSquares(prevHand.prevAttack);

      if (adjacentCoords.length > 0) {
        attackCoords =
          adjacentCoords[Math.floor(Math.random() * adjacentCoords.length)];
        // remove attack coords from list of available adj coords
        const newAdjCoords = updateAdjCoords(adjacentCoords, attackCoords);
        if (newAdjCoords.length > 0) {
          prevHand.adjSquares = [...prevHand.adjSquares, ...newAdjCoords];
        }
      } else {
        attackCoords =
          legalSquares[Math.floor(Math.random() * legalSquares.length)];
      }
    } else {
      if (prevHand.adjSquares.length > 0) {
        const adjacentCoords = prevHand.adjSquares;
        attackCoords =
          adjacentCoords[Math.floor(Math.random() * adjacentCoords.length)];

        const newAdjCoords = updateAdjCoords(adjacentCoords, attackCoords);
        if (adjacentCoords.length > 0) {
          prevHand.adjSquares = [...newAdjCoords];
        }
      } else {
        attackCoords =
          legalSquares[Math.floor(Math.random() * legalSquares.length)];
      }
    }
    prevHand.prevAttack = [...attackCoords];

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

  function updateAdjCoords(adjacentCoords, attackCoords) {
    if (adjacentCoords.length > 0) {
      for (let i = 0; i < adjacentCoords.length; i++) {
        if (
          adjacentCoords[i][0] === attackCoords[0] &&
          adjacentCoords[i][1] === attackCoords[1]
        ) {
          adjacentCoords.splice(i, 1);
        }
      }
    }

    return adjacentCoords;
  }

  // function usePrevious(adjacentCoords) {
  //   const attackCoords =
  //     adjacentCoords[Math.floor(Math.random() * adjacentCoords.length)];
  //   const newAdjCoords = updateAdjCoords(adjacentCoords, attackCoords);
  //   prevHand.adjSquares = [...newAdjCoords];
  //   prevHand.prevAttack = [...attackCoords];
  //   return attackCoords;
  // }
  // function checkHit() {
  //   if (prevHand.prevAttack) {
  //     const [x, y] = prevHand.prevAttack;
  //     return humanBoard[x][y].status === "hit";
  //   } else {
  //     return false;
  //   }
  // }

  return {
    humanBoard,
    getAttackCoords,
    getAdjacentSquares,
    prevHand,
    updateAdjCoords,
  };
};

export default compPlayerFactory;
