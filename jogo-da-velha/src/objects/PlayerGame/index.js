import React, { useState } from 'react';
import './styles.css';
import playerX from '../../images/Player-X.png';
import playerO from '../../images/Player-Circle.png';

const PlayerGame = ({ player = false }) => {

  const [statePlayer, setStatePlayer] = useState("");
  
  const players = [];
  players['x'] = playerX;
  players['o'] = playerO;

  const handleClick = () => setStatePlayer(player);

  return (
    <button className="player-game" onClick={handleClick} >
      {statePlayer &&
        <img
          src={players[statePlayer]}
          alt={`Jogador ${statePlayer.toUpperCase()}`}
        >
        </img>}
    </button>
  )
}

export default PlayerGame;