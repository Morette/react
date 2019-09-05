import React from 'react';
import './style.css'

const handleClick = e => {
  e.preventDefault()
  console.log('clicou');
}

const MenuAbout = ({ className = "" }) => (
  <a href="to-do"
    className={`menu-about ${className}`}
    onClick={handleClick}
  >
    About
  </a>
);

export default MenuAbout;
