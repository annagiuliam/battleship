import React from "react";

const RestartButton = (props) => {
  return (
    <div className="button-section">
      <button onClick={props.onClick}>Restart Game</button>
    </div>
  );
};

export default RestartButton;
