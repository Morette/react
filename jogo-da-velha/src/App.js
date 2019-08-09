import React from "react";
import "./App.css"

import Checkbox from "./objects/Checkbox";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" content="Mostrar Eventos" value="Mostrar Eventos"/>
  </main>
);

export default App;