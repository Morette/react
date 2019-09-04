import React from "react";
import "./App.css"

import Avatar from './images/avatar.png';

import About from "./objects/About";
import AvatarProfile from "./objects/AvatarProfile";
import Checkbox from "./objects/Checkbox";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import HeaderInternal from "./components/HeaderInternal";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" content="Mostrar Eventos" value="Mostrar Eventos" />

    <About>
      <HeaderInternal />
      <AvatarProfile src={Avatar} alt={"Avatar Image"} width={120}/>
    </About>
  </main>
);

export default App;