import React from 'react';
import LogoCollab from '../../objects/LogoCollab'
import MenuAbout from "../../objects/MenuAbout";
import Menu from "../../objects/Menu"

import './styles.css'

const Header = () => {
  return (
    <header className="header">
      <LogoCollab />
      <MenuAbout />
      <Menu />
    </header>
  )
}

export default Header;