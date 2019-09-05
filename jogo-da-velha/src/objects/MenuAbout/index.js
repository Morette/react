import React from 'react';
import './style.css'

const MenuAbout = ({ className = "", onClick }) => (
  <a href="#to-do"
    className={`menu-about ${className}`}
    onClick={onClick}
  >
    About
  </a>
);

export default MenuAbout;
