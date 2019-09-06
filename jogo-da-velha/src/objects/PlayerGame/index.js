import React from 'react';
import './styles.css';
import playerX from '../../images/Player-X.png';
import playerO from '../../images/Player-Circle.png';

const handleClick = () => {
  console.log('clicou');
}

const PlayerGame = ({ player }) => {
  const players = [];
  players['x'] = playerX;
  players['o'] = playerO;

  return (
    <button className="player-game" onClick={handleClick} >
      {player &&
        <img
          src={players[player]}
          alt={`Jogador ${player.toUpperCase()}`}
        >
        </img>}
    </button>
  )
}

export default PlayerGame;