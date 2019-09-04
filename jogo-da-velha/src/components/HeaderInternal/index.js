import React from 'react';

import "./style.css";

import MenuAbout from "../../objects/MenuAbout";
import IconClose from "../../objects/IconClose";
import LogoCollab from "../../objects/LogoCollab";

const HeaderInternal = () => (
  <header className="header-internal">
    <LogoCollab light />
    <MenuAbout className="-light" />
    <IconClose />
  </header>
)

export default HeaderInternal;