import React from "react";

const Board = (props) => {
  const { board, type, score, totalScore } = props;
  const canClick = type === "computer";

  return (
    <div className={`board ${type}`}>
      {board.map((row, index) => {
        return (
          <div key={index} className="row">
            {row.map((square) => {
              const [x, y] = square.coords;
              const id = x.toString() + y.toString();
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
