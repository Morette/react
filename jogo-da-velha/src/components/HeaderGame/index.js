import React from 'react';

import './styles.css'

import LogoCollab from '../../objects/LogoCollab'
import MenuAbout from "../../objects/MenuAbout";
import MenuGame from "../../objects/MenuGame"


const HeaderGame = ({ onClick }) => {
  return (
    <header className="header-game">
      <LogoCollab />
      <MenuAbout onClick={onClick} />
      <MenuGame onClick={onClick} />
    </header>
  )
}

export default HeaderGame;