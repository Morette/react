import React from "react";
import Header from './components/header'

import Card from './objects/Card';
import Player from './objects/Player'

function App() {
  return (
    <>
      <Header />
      <Card>
        <Player player="o"/>
      </Card>
      
    </>
  );
}

export default App;