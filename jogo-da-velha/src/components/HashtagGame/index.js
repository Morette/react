import React from "react";
import Card from "../../objects/CardGame"
import PlayerGame from "../../objects/PlayerGame"

import "./styles.css"

const HashtagGame = () => (
  <Card>
    <ul className="hashtag-game">
      <li className="hashtag-item"><PlayerGame /></li>
      <li className="hashtag-item"><PlayerGame /></li>
      <li className="hashtag-item"><PlayerGame /></li>

      <li className="hashtag-item"><PlayerGame /></li>
      <li className="hashtag-item"><PlayerGame /></li>
      <li className="hashtag-item"><PlayerGame /></li>
      
      <li className="hashtag-item"><PlayerGame /></li>
      <li className="hashtag-item"><PlayerGame /></li>
      <li className="hashtag-item"><PlayerGame /></li>
    </ul>
  </Card>
)

export default HashtagGame;