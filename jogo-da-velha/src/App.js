import React from "react";
import "./App.css"

import About from "./objects/About";
import Checkbox from "./objects/Checkbox";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" content="Mostrar Eventos" value="Mostrar Eventos" />

    <About className="-active">
      <HeaderInternal />
      <ProfileUser />
    </About>
  </main>
);

export default App;