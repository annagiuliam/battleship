import React from "react";

const Board = (props) => {
  const { board, type, score, totalScore } = props;
  const canClick = type === "computer";

  return (
    <div className={`board ${type}`}>
      <h1>Player: {type}</h1>
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
                >
                  {square.coords}
                </div>
              );
            })}
          </div>
        );
      })}
      <div>
        Score: {score}/{totalScore}
      </div>
    </div>
  );
};

export default Board;
