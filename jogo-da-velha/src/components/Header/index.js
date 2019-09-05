import React from 'react';

import './styles.css'

import LogoCollab from '../../objects/LogoCollab'
import MenuAbout from "../../objects/MenuAbout";
import Menu from "../../objects/Menu"


const Header = ({ onClick }) => {
  return (
    <header className="header">
      <LogoCollab />
      <MenuAbout onClick={onClick} />
      <Menu onClick={onClick} />
    </header>
  )
}

export default Header;