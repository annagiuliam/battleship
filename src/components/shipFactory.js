const shipFactory = (length, positions) => {
  let hitPos = [];

  function hit(coords) {
    hitPos.push(coords);
    return hitPos;
  }

  function isSunk() {
    return hitPos.length === length;
  }
  return { length, hitPos, hit, positions, isSunk };
};

module.exports = shipFactory;
