import React from "react";
import "./App.css"

import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import Checkbox from "./objects/Checkbox";
import About from "./objects/About";
import MenuAbout from "./objects/MenuAbout";
import IconClose from "./objects/IconClose";
import LogoCollab from "./objects/LogoCollab";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" content="Mostrar Eventos" value="Mostrar Eventos" />

    <About>
      <LogoCollab light />
      <MenuAbout className="-light" />
      <IconClose />
    </About>
  </main>
);

export default App;