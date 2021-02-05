import React from "react";

const Board = (props) => {
  const { board, type, score, totalScore } = props;
  const canClick = type === "computer";

  return (
    <div className={`board ${type}`}>
      <h1>Player: {type}</h1>
      {board.map((row) => {
        return (
          <div className="row">
            {row.map((square) => {
              return (
                <div
                  key={square.coords}
                  className={`square ${square.status}`}
                  onClick={
                    canClick ? () => props.onClick(square.coords) : undefined
                  }
                >
                  {/* {!square.status ? "" : square.status} */}
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
