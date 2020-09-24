import React from "react";
import { AltGrid } from "./AltGrid";
import "./Home.css";

const OtherControlButtons = ({
  setGrid,
  setStart,
  start,
  startRef,
  generatedEmptyGrid,
  runningSim,
  select,
  
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
        }}
      >
        Clear
      </button>
      {/* <button className='random' onClick={()=>{
        const rows = [];
        for (let i = 0; i < numRows; i++){
          rows.push(Array.from(Array(numColumns), () => Math.random() > 0.5 ? 1 : 0))
        }
        setGrid(rows)
      }}>Random</button> */}

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
    </div>
  );
};
export default OtherControlButtons;
