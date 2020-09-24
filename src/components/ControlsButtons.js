import React from "react";

import "./Home.css";

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
    </div>
  );
};
export default ControlButtons;