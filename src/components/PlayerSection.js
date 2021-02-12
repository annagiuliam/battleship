import React from "react";

const PlayerSection = (props) => {
  return (
    <div className="player-header">
      <h1>Player: {props.type}</h1>
      <h2>
        Score: {props.score}/{props.totalScore}
      </h2>
    </div>
  );
};

export default PlayerSection;
