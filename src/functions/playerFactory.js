const playerFactory = (name) => {
  function attack(legalSquares, coords = null) {
    let attackCoords;
    if (name === "computer") {
      attackCoords =
        legalSquares[Math.floor(Math.random() * legalSquares.length)];
    } else {
      attackCoords = coords;
    }
    return attackCoords;
  }

  return { name, attack };
};

export default playerFactory;
