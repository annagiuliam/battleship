import React from "react";

const Board = (props) => {
  const { board, type } = props;

  return (
    <board className={`board ${type}`}>
      {board.map((row) => {
        return (
          <div className="row">
            {row.map((square) => {
              return (
                <div key={square.coords} className={`square ${square.status}`}>
                  {!square.status ? "" : square.status}
                </div>
              );
            })}
          </div>
        );
      })}
    </board>
  );
};

export default Board;
