import React from "react";

const Modal = (props) => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  let winner;
  if (props.humanScore === props.totalScore) {
    winner = "Human";
  } else {
    winner = "Computer";
  }
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-text">{winner} wins!</div>
        <button className="round-btn modal-btn" onClick={props.onClick}>
          OK
        </button>
      </section>
    </div>
  );
};

export default Modal;
