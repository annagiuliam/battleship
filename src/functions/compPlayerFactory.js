const compPlayerFactory = () => {
  const prevHand = { adjSquares: [], prevAttack: null };

  function getAttackCoords(legalSquares, wasHumanHit) {
    let attackCoords;
    //console.log(prevHand);
    //console.log(legalSquares);
    if (wasHumanHit) {
      //get available adjacent squares
      const adjacentCoords = getAdjacentSquares(
        legalSquares,
        prevHand.prevAttack
      );
      console.log("human hit");
      console.log("adjcoords");
      console.log(adjacentCoords);

      if (adjacentCoords.length > 0) {
        attackCoords =
          adjacentCoords[Math.floor(Math.random() * adjacentCoords.length)];
        // remove attack coords from list of available adj coords
        console.log("adjcoords");
        console.log(adjacentCoords);
        console.log("attackcoords");
        console.log(attackCoords);
        // remove attack coords from adj coords fomr this hand and from previous hand
        //const newAdjCoords = updateAdjCoords(adjacentCoords, attackCoords);

        const allAdjCoords = [...prevHand.adjSquares, ...adjacentCoords];
        console.log("all adj coords");
        console.log(allAdjCoords);
        const updatedCoords = updateAdjCoords(allAdjCoords, attackCoords);
        console.log("updated adj coords");
        console.log(updatedCoords);
        prevHand.adjSquares = [...updatedCoords];
        console.log("new prev hand adj coords");
        console.log(prevHand.adjSquares);
      } else {
        attackCoords =
          legalSquares[Math.floor(Math.random() * legalSquares.length)].coords;
      }
    } else {
      if (prevHand.adjSquares.length > 0) {
        const adjacentCoords = prevHand.adjSquares;
        attackCoords =
          adjacentCoords[Math.floor(Math.random() * adjacentCoords.length)];
        console.log("adj sq");
        console.log(adjacentCoords);
        console.log(attackCoords);
        const updatedAdjCoords = updateAdjCoords(adjacentCoords, attackCoords);

        prevHand.adjSquares = [...updatedAdjCoords];
        console.log(prevHand.adjSquares);
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
    const adjCoords = [];

    for (let i = 0; i < legalSquares.length; i++) {
      if (
        (legalSquares[i].coords[0] === x - 1 &&
          legalSquares[i].coords[1] === y) ||
        (legalSquares[i].coords[0] === x + 1 &&
          legalSquares[i].coords[1] === y) ||
        (legalSquares[i].coords[0] === x &&
          legalSquares[i].coords[1] === y - 1) ||
        (legalSquares[i].coords[0] === x && legalSquares[i].coords[1] === y + 1)
      ) {
        adjCoords.push(legalSquares[i].coords);
      }
    }
    return adjCoords;
  }

  function updateAdjCoords(adjacentCoords, attackCoords) {
    let uniqCoords;
    if (adjacentCoords.length > 0) {
      uniqCoords = adjacentCoords
        .map(JSON.stringify)
        .reverse()
        .filter(function (e, i, a) {
          return a.indexOf(e, i + 1) === -1;
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
    //humanBoard,
    getAttackCoords,
    getAdjacentSquares,
    prevHand,
    updateAdjCoords,
  };
};

export default compPlayerFactory;
