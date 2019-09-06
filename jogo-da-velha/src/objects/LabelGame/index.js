import React from "react";
import "./styles.css";

const LabelGame = ({ htmlFor, content, onClick }) => (
  <label
    htmlFor={htmlFor}
    className="label-game"
    onClick={onClick}>
    {content}
  </label>
)

export default LabelGame;