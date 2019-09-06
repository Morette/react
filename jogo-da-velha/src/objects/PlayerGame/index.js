import React from 'react';
import './styles.css';
import playerX from '../../images/Player-X.png';
import playerO from '../../images/Player-Circle.png';

const PlayerGame = ({player}) => {
  const players = [];
  players['x'] = playerX;
  players['o'] = playerO;

  return (
    <button className="player-game">
      <img 
        src={players[player]}
        alt={`Jogador ${player.toUpperCase()}`}>
      </img>
    </button>
  )
}

export default PlayerGame;