import React from "react";
import "./styles.css";

const Input = ({value="Mostrar eventos"}) => (
  <input type="checkbox" value={value} className="input"/>
)

export default Input;