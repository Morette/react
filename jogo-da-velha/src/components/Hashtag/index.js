import React from "react";
import Card from "../../objects/Card"
import Player from "../../objects/Player"

import "./styles.css"

const Hashtag = () => (
  <Card>
    <ul className="hashtag">
      <li className="hashtag-item"><Player player="o"/></li>
      <li className="hashtag-item"><Player player="o"/></li>
      <li className="hashtag-item"><Player player="x"/></li>

      <li className="hashtag-item"><Player player="o"/></li>
      <li className="hashtag-item"><Player player="x"/></li>
      <li className="hashtag-item"><Player player="o"/></li>
      
      <li className="hashtag-item"><Player player="x"/></li>
      <li className="hashtag-item"><Player player="o"/></li>
      <li className="hashtag-item"><Player player="x"/></li>
    </ul>
  </Card>
)

export default Hashtag;