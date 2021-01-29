const shipFactory = (length, positions) => {
  let hitPos = [];

  function hit(tile) {
    hitPos.push(tile);
    return hitPos;
  }

  function isSunk() {
    return positions.every((pos) => hitPos.includes(pos));
  }
  return { length, hitPos, hit, positions, isSunk };
};

module.exports = shipFactory;
