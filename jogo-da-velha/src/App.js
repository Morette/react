import React from "react";
import "./App.css"

import Header from "./components/Header";
import Hashtag from "./components/Hashtag";

import Input from "./objects/Input";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Input id="show" content="Mostrar Eventos" value="Mostrar Eventos" />
  </main>
);

export default App;