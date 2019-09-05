import React from 'react';
import './styles.css';

const handleClick = () => (
  console.log('clicou Menu Object')
);

const Menu = () => {
  return (
    <a href="#menu"
      className="menu"
      onClick={handleClick}
    >
      <span className="center">Menu</span>
    </a>
  )
}

export default Menu;