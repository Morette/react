import React from 'react';
import Logo from '../../objects/logo'
import MenuAbout from "../../objects/MenuAbout";
import Menu from "../../objects/Menu"

const Header = () => {
  return (
    <>
      <Logo />
      <MenuAbout />
      <Menu />
    </>
  )
}

export default Header;