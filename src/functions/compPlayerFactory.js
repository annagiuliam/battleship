const compPlayerFactory = (humanBoard) => {
  const prevHand = { adjSquares: [], prevAttack: null };

  function getAttackCoords(legalSquares, wasHumanHit) {
    let attackCoords;
    console.log(prevHand);

    if (wasHumanHit) {
      //get available adjacent squares
      const adjacentCoords = getAdjacentSquares(prevHand.prevAttack);
      console.log("adj coords");
      console.log(adjacentCoords);

      if (adjacentCoords.length > 0) {
        attackCoords =
          adjacentCoords[Math.floor(Math.random() * adjacentCoords.length)];
        // remove attack coords from list of available adj coords
        console.log(attackCoords);
        const newAdjCoords = updateAdjCoords(adjacentCoords, attackCoords);
        console.log("new adj coords");
        console.log(newAdjCoords);
        if (newAdjCoords.length > 0) {
          const newAdjSquares = [...prevHand.adjSquares, ...newAdjCoords];
          console.log(newAdjSquares);
          prevHand.adjSquares = [...newAdjSquares];
          console.log(prevHand.adjSquares);
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
        //TROVA BUG QUI, SI DUPLICA
        const newAdjCoords = updateAdjCoords(adjacentCoords, attackCoords);
        if (adjacentCoords.length > 0) {
          const newAdjSquares = [...prevHand.adjSquares, ...newAdjCoords];
          prevHand.adjSquares = [...newAdjSquares];
          console.log(prevHand.adjSquares);
        }
      } else {
        attackCoords =
          legalSquares[Math.floor(Math.random() * legalSquares.length)];
      }
    }
    prevHand.prevAttack = [...attackCoords];

    return attackCoords;
  }

  function updatePrevHand(newAdjCoords, prevHand) {
    if (newAdjCoords.length > 0) {
      prevHand.adjSquares = [...prevHand.adjSquares, ...newAdjCoords];
    }
    console.log(prevHand.adjSquares);
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
