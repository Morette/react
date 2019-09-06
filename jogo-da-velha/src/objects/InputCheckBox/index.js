import React from "react";
import "./styles.css";

import LabelGame from "../LabelGame";
import InputGame from "../InputGame";

const InputCheckBox = ({ id = "", value = "", content = "", onClick }) => (
  <>
    <InputGame id={id} content={content} value={value} type="checkbox" />
    <LabelGame htmlFor={id} content={content} onClick={onClick} />
  </>
)

export default InputCheckBox;