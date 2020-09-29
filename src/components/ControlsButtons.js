import React from "react";

import "./Home.css";
import Generation from "./Generation";

const ControlButtons = ({
  setGrid,
  setStart,
  start,
  startRef,
  numColumns,
  numRows,
  generatedEmptyGrid,
  runningSim,
  select,
  selectColumns,
  selectRows,
  generation
}) => {
  return (
    <>
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
          generation.current = 0
        }}
      >
        Clear
      </button>
      <button
        className="random"
        onClick={() => {
          const rows = [];
          for (let i = 0; i < numRows; i++) {
            rows.push(
              Array.from(Array(numColumns), () => (Math.random() > 0.5 ? 1 : 0))
              );
            }
            setGrid(rows);
          }}
      >
        Random
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
        className="gridSize"
        onChange={(event) => {
          selectColumns(event);
        }}
      >
        <option hidden>Grid Size</option>
        <option value="40">Default</option>
        <option value="30">30</option>
        <option value="50">50</option>
        <option value="60">60</option>
      </select>
      <Generation generation ={generation}/>
    </div>
    </>
  );
};
export default ControlButtons;
