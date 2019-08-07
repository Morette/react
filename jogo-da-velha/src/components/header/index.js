import React from 'react';
import Logo from '../../objects/logo'
import MenuAbout from "../../objects/MenuAbout";
import Menu from "../../objects/Menu"

import './styles.css'

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <MenuAbout />
      <Menu />
    </header>
  )
}

export default Header;