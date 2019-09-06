import React, { useState } from 'react';
import './styles.css';
import playerX from '../../images/Player-X.png';
import playerO from '../../images/Player-Circle.png';

const PlayerGame = ({ player }) => {

  const [statePlayer, setStatePlayer] = useState(player);

  const handleClick = () => setStatePlayer(
    statePlayer ? "x" : "o"
    );

  const players = [];
  players['x'] = playerX;
  players['o'] = playerO;

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