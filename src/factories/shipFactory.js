const shipFactory = (length, name) => {
  let coords = [];
  let hitPos = [];

  function hit(coords) {
    hitPos.push(coords);
    return hitPos;
  }

  function isSunk() {
    return hitPos.length === length;
  }
  return { length, hitPos, hit, name, isSunk, coords };
};

module.exports = shipFactory;
