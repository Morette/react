import React from 'react';
import './style.css';

import TagGame from '../../objects/TagGame';

const HistoryGame = ({ className = "" }) => (
  <ol className={`history-game ${className}`}>
    <li className="action">
      <TagGame content="adicionou O" />
    </li>
    <li className="action">
      <TagGame content="adicionou X" />
    </li>
    <li className="action">
      <TagGame content="adicionou O" />
    </li>
    <li className="action">
      <TagGame content="adicionou X" />
    </li>
    <li className="action">
      <TagGame content="adicionou X" />
    </li>
    <li className="action">
      <TagGame content="adicionou O" />
    </li>
    <li className="action">
      <TagGame content="adicionou O" />
    </li>
    <li className="action">
      <TagGame content="adicionou X" />
    </li>
    <li className="action">
      <TagGame content="adicionou X" />
    </li>
    <li className="action">
      <TagGame className="-end" content="Empate!" />
    </li>
  </ol>
)

export default HistoryGame;