import React from "react";

const Board = (props) => {
  const { board, type } = props;

  return (
    <div className={`board ${type}`}>
      {board.map((row) => {
        return (
          <div className="row">
            {row.map((square) => {
              return (
                <div
                  key={square.coords}
                  className={`square ${square.status}`}
                  onClick={() => props.onClick(square.coords)}
                >
                  {!square.status ? "" : square.status}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
