import "./App.css";
import boardFactory from "./factories/boardFactory";

function App() {
  const gameBoard = boardFactory(10);
  const board = gameBoard.board;
  console.log(board);
  return (
    <div className="board">
      {board.map((row) => {
        return (
          <div className="row">
            {row.map((square) => {
              return (
                <div className="board-square">
                  {!square.ship ? "X" : square.ship}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
