const playerFactory = (name, legalSquares) => {
  function attack() {
    let attackCoords;
    if (name === "computer") {
      attackCoords =
        legalSquares[Math.floor(Math.random() * legalSquares.length)];
    }
    return attackCoords;
  }

  return { name, attack };
};

module.exports = playerFactory;
