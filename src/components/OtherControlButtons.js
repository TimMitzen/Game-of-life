import React from "react";
import { AltGrid } from "./AltGrid";
import "./Home.css";
import Generation from "./Generation";

const OtherControlButtons = ({
  setGrid,
  setStart,
  start,
  startRef,
  generatedEmptyGrid,
  runningSim,
  select,
  generation
  
}) => {
  return (
    <div className="btn-group">
      <button
        className="start-stop"
        onClick={() => {
          setStart(!start);
          if (!start) {
            startRef.current = true;
            runningSim();
          }
        }}
      >
        {start ? "Stop" : "Start"}
      </button>
      <button
        className="clear"
        onClick={() => {
          setGrid(generatedEmptyGrid());
          generation.current = 0;
        }}
      >
        Clear
      </button>
      

      <select
        className="speed"
        onChange={(event) => {
          select(event);
        }}
      >
        <option hidden>Speed</option>
        <option value="2000">2 seconds</option>
        <option value="1000">1 seconds</option>
        <option value="1">100 milliseconds</option>
      </select>
      <select
        className="grids"
        onChange={(event) => {
          setGrid(AltGrid(event.target.value));
        }}
      >
        <option hidden>Modes</option>
        <option value="Default">Default</option>
        <option value="spaceship">SpaceShip</option>
        <option value="ten">Ten rows</option>
        <option value="explode">Explode</option>
      </select>
      <Generation generation={generation}/>
    </div>
  );
};
export default OtherControlButtons;
