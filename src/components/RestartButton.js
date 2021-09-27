import React from "react";
import { BsArrowRepeat } from "react-icons/bs";

const RestartButton = (props) => {
  return (
    <div className="button-section">
      <button id="restart-btn" onClick={props.onClick}>
        <span id="restart-text">Restart Game</span>
        <BsArrowRepeat id="restart-icon" />
      </button>
    </div>
  );
};

export default RestartButton;
