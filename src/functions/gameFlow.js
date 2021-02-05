import gameBoardFactory from "./gameBoardFactory";

const gameFlow = () => {
  const computer = gameBoardFactory(10);
  const human = gameBoardFactory(10);

  return { computer, human };
};

export default gameFlow;
