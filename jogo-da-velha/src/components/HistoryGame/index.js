import React from 'react';
import './style.css';

import TagGame from '../../objects/TagGame';

const HistoryGame = () => (
  <ol className="history-game">
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
      <TagGame content="adicionou O" />
    </li>
  </ol>
)

export default HistoryGame;