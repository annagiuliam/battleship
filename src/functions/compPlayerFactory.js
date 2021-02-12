const compPlayerFactory = () => {
  const prevHand = { adjSquares: [], prevAttack: null };

  function getAttackCoords(legalSquares, wasHumanHit) {
    let attackCoords;

    if (wasHumanHit) {
      //get available adjacent squares
      const adjacentCoords = getAdjacentSquares(
        legalSquares,
        prevHand.prevAttack
      );
      if (adjacentCoords.length > 0) {
        attackCoords =
          adjacentCoords[Math.floor(Math.random() * adjacentCoords.length)];
        // merge present adj coords with adj coords from previous turns
        const allAdjCoords = [...prevHand.adjSquares, ...adjacentCoords];
        // remove current attack and possible duplicates coords
        const updatedCoords = updateAdjCoords(allAdjCoords, attackCoords);
        //store all possible adj coords
        prevHand.adjSquares = [...updatedCoords];
      } else {
        attackCoords =
          legalSquares[Math.floor(Math.random() * legalSquares.length)].coords;
      }
    } else {
      // if human was not hit in the previous turn, check if there are adj coords to try
      if (prevHand.adjSquares.length > 0) {
        const adjacentCoords = prevHand.adjSquares;
        attackCoords =
          adjacentCoords[Math.floor(Math.random() * adjacentCoords.length)];
        const updatedAdjCoords = updateAdjCoords(adjacentCoords, attackCoords);
        prevHand.adjSquares = [...updatedAdjCoords];
      } else {
        attackCoords =
          legalSquares[Math.floor(Math.random() * legalSquares.length)].coords;
      }
    }
    prevHand.prevAttack = [...attackCoords];

    return attackCoords;
  }

  function getAdjacentSquares(legalSquares, coords) {
    const [x, y] = coords;
    return legalSquares
      .filter((square) => {
        return (
          (square.coords[0] === x - 1 && square.coords[1] === y) ||
          (square.coords[0] === x + 1 && square.coords[1] === y) ||
          (square.coords[0] === x && square.coords[1] === y - 1) ||
          (square.coords[0] === x && square.coords[1] === y + 1)
        );
      })
      .map((square) => square.coords);
  }

  function updateAdjCoords(adjacentCoords, attackCoords) {
    let uniqCoords;
    if (adjacentCoords.length > 0) {
      uniqCoords = adjacentCoords
        .map(JSON.stringify)
        .reverse()
        .filter(function (e, i, a) {
          return a.indexOf(e, i + 1) === -1; // check if there is any occurence of the item in whole array
        })
        .reverse()
        .map(JSON.parse);
      for (let i = 0; i < uniqCoords.length; i++) {
        if (
          uniqCoords[i][0] === attackCoords[0] &&
          uniqCoords[i][1] === attackCoords[1]
        ) {
          uniqCoords.splice(i, 1);
        }
      }
    }
    return uniqCoords;
  }

  return {
    getAttackCoords,
    getAdjacentSquares,
    prevHand,
    updateAdjCoords,
  };
};

export default compPlayerFactory;
