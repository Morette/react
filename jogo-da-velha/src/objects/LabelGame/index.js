import React from "react";
import "./styles.css";

const LabelGame = ({ htmlFor, content }) => (
  <label htmlFor={htmlFor} className="label-game">{content}</label>
)

export default LabelGame;