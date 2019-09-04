import React from "react";
import "./App.css"

import About from "./objects/About";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import Checkbox from "./objects/Checkbox";
import HeaderInternal from "./components/HeaderInternal";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" content="Mostrar Eventos" value="Mostrar Eventos" />

    <About>
      <HeaderInternal />
    </About>
  </main>
);

export default App;