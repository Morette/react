import React, { useState } from "react";
import CardGame from "../../objects/CardGame"
import PlayerGame from "../../objects/PlayerGame"

import "./styles.css"

const HashtagGame = () => {
  const [nextPlayer, setNextPlayer] = useState("");
  const [players, setPlayers] = useState([
    { id: 1, content: "" },
    { id: 2, content: "" },
    { id: 3, content: "" },
    { id: 4, content: "" },
    { id: 5, content: "" },
    { id: 6, content: "" },
    { id: 7, content: "" },
    { id: 8, content: "" },
    { id: 9, content: "" },
  ]);

  const handleClick = id => {
    setNextPlayer(old => old === "X" ? "O" : "X");

    setPlayers(old => old.map(
      player => player.id === id ?
        { id, content: nextPlayer } : player));
  }

  return (
    <CardGame>
      <ul className="hashtag-game" >
        {players.map(({ content, id }) =>
          <li key={id}
            className="hashtag-item"
            onClick={() => content === "" && handleClick(id)} >
            <PlayerGame id={id} content={content} />
          </li>)}
      </ul> 
    </CardGame>
  )
}

export default HashtagGame;