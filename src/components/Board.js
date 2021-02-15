import React from "react";

const Board = (props) => {
  const { board, type } = props;
  const canClick = type === "computer";

  return (
    <div className={`board ${type}`}>
      {board.map((row, index) => {
        return (
          <div key={index} className="row">
            {row.map((square) => {
              const [r, c] = square.coords;
              const id = r.toString() + c.toString();
              return (
                <div
                  key={id}
                  className={`square ${square.status}`}
                  onClick={
                    canClick ? () => props.onClick(square.coords) : undefined
                  }
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
