import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Game = () => {
  return (
    <div>
      <Link to="/">
        <button className="homeButton">Home</button>
      </Link>
      <h5>This is a game</h5>
    </div>
  );
};

export default Game;
