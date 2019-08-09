import React from "react";
import "./App.css"

import Header from "./components/Header";
import Hashtag from "./components/Hashtag";

import Label from "./objects/Label";
import Input from "./objects/Input";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Label content="Mostrar Evento" />
    <Input />
  </main>
);

export default App;