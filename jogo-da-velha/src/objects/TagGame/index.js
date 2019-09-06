import React from 'react';
import './style.css';

const TagGame = ({ content, className = "" }) => (
  <output className={`tag-game ${ className }`}>{ content }</output>

)

export default TagGame;