const testBoard = [
  [
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
  ],
  [
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: "patrol boat" },
    { coords: [Array], hit: false, ship: "patrol boat" },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
  ],
  [
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: "submarine" },
    { coords: [Array], hit: false, ship: "submarine" },
    { coords: [Array], hit: false, ship: "submarine" },
  ],
  [
    { coords: [Array], hit: false, ship: "destroyer" },
    { coords: [Array], hit: false, ship: "destroyer" },
    { coords: [Array], hit: false, ship: "destroyer" },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
  ],
  [
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
  ],
  [
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
  ],
  [
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: "carrier" },
    { coords: [Array], hit: false, ship: "carrier" },
    { coords: [Array], hit: false, ship: "carrier" },
    { coords: [Array], hit: false, ship: "carrier" },
    { coords: [Array], hit: false, ship: "carrier" },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
  ],
  [
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
  ],
  [
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
  ],
  [
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: false },
    { coords: [Array], hit: false, ship: "battleship" },
    { coords: [Array], hit: false, ship: "battleship" },
    { coords: [Array], hit: false, ship: "battleship" },
    { coords: [Array], hit: false, ship: "battleship" },
    { coords: [Array], hit: false, ship: false },
  ],
];
const testShipYard = [
  {
    length: 5,
    hitPos: [],
    hit: [],
    name: "carrier",
    isSunk: [],
    coords: [[Array], [Array], [Array], [Array], [Array]],
  },
  {
    length: 4,
    hitPos: [],
    hit: [],
    name: "battleship",
    isSunk: [],
    coords: [[Array], [Array], [Array], [Array]],
  },
  {
    length: 3,
    hitPos: [],
    hit: [],
    name: "destroyer",
    isSunk: [],
    coords: [[Array], [Array], [Array]],
  },
  {
    length: 3,
    hitPos: [],
    hit: [],
    name: "submarine",
    isSunk: [],
    coords: [[Array], [Array], [Array]],
  },
  {
    length: 2,
    hitPos: [],
    hit: [],
    name: "patrol boat",
    isSunk: [],
    coords: [[Array], [Array]],
  },
];

export { testBoard, testShipYard };
