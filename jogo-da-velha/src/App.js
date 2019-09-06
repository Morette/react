import React, { useState } from "react";
import "./App.css"

import LayerDark from "./objects/LayerDark";
import InputCheckBox from "./objects/InputCheckBox";
import HeaderGame from "./components/HeaderGame";
import HashtagGame from "./components/HashtagGame";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";
import HistoryGame from "./components/HistoryGame";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");

  const handleClickRemove = () => setActiveAbout("");

  const handleClickShowHistory = () => console.log('consegui!!');

  return (
    <main className="app">
      <HeaderGame onClick={handleClickAdd} />
      <HashtagGame />
      <InputCheckBox
        id="show"
        content="Mostrar Eventos"
        value="Mostrar Eventos"
        onClick={handleClickShowHistory}
      />
      <HistoryGame />

      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
}

export default App;