import gameBoardFactory from "./gameBoardFactory";

const gameFlow = () => {
  const compGameBoard = gameBoardFactory(10);
  const humanGameBoard = gameBoardFactory(10);

  return { compGameBoard, humanGameBoard };
};

export default gameFlow;
