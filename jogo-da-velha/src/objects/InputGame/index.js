import React from "react";
import "./styles.css";

const InputGame = ({ id = "", value = "", type = "text" }) => (
  <input id={id} type={type} value={value} className="input-game" />
)

export default InputGame;