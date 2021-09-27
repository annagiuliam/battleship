import React from "react";

const PlayerSection = (props) => {
  return (
    <div className="player-header">
      <h1 className="player-text">Player: {props.type}</h1>
      <h2 className="player-text">
        Score: {props.score}/{props.totalScore}
      </h2>
    </div>
  );
};

export default PlayerSection;
