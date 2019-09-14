import React from 'react';
import './styles.css';
import playerX from '../../images/Player-X.png';
import playerO from '../../images/Player-Circle.png';

const PlayerGame = ({ content = "", onClick }) => {
  const players = [];
  players['X'] = playerX;
  players['O'] = playerO;


  return (
    <button className="player-game">
      {players[content] &&
      <img src={players[content]} alt={`Jogador ${content}`} onClick={onClick} />}
    </button>
  )
}

export default PlayerGame;