import React from 'react';

import "./style.css";

import MenuAbout from "../../objects/MenuAbout";
import IconClose from "../../objects/IconClose";
import LogoCollab from "../../objects/LogoCollab";

const HeaderInternal = ({onClick}) => (
  <header className="header-internal">
    <LogoCollab light />
    <MenuAbout className="-light" onClick={onClick}/>
    <IconClose onClick={onClick}/>
  </header>
)

export default HeaderInternal;