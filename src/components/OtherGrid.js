import React, { useState, useCallback, useRef } from "react";
import "./Home.css";
import "../App.css";
import produce from "immer";
import { Link } from "react-router-dom";
import OtherControlButtons from "./OtherControlButtons";

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

function OtherGrid() {
  const generatedEmptyGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numColumns), () => 0));
    }
    return rows;
  };
  const [numRows] = useState(30);
  const [numColumns] = useState(40);
  const [speed, setSpeed] = useState(1000);
  const [grid, setGrid] = useState(() => {
    return generatedEmptyGrid();
  });
  const select = (event) => {
    setSpeed(parseInt(event.target.value));
  };

  const [start, setStart] = useState(false);
  const startRef = useRef(start);
  startRef.current = start;
  const runningSim = useCallback(() => {
    if (!startRef.current) {
      return;
    }
    setGrid((grid) => {
      return produce(grid, (gridCopy) => {
        for (let r = 0; r < numRows; r++) {
          for (let c = 0; c < numColumns; c++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newR = r + x;
              const newC = c + y;
              if (
                newR >= 0 &&
                newR < numRows &&
                newC >= 0 &&
                newC < numColumns
              ) {
                neighbors += grid[newR][newC];
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[r][c] = 0;
            } else if (grid[r][c] === 0 && neighbors === 3) {
              gridCopy[r][c] = 1;
            }
          }
        }
      });
    });

    setTimeout(runningSim, speed);
  }, [speed, numRows, numColumns]);

  return (
    <div className="App">
      <header className="App-header">
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${numColumns}, 20px)`,
          }}
        >
          {grid.map((rows, rIndex) =>
            rows.map((col, cIndex) => (
              <div
                key={`${rIndex}-${cIndex}`}
                onClick={() => {
                  const newGrid = produce(grid, (gridCopy) => {
                    gridCopy[rIndex][cIndex] = grid[rIndex][cIndex] ? 0 : 1;
                  });
                  setGrid(newGrid);
                }}
                style={{
                  width: "19px",
                  height: "19px",
                  backgroundColor: grid[rIndex][cIndex] ? "red" : undefined,
                  border: "solid 1px green",
                }}
              />
            ))
          )}

          <div className="gridButtons">
            <Link to="/Game-of-life">
              <button className="homeButton">Home</button>
            </Link>

            <Link to="/rules">
              <button className="rulesButton">
                Click for rules and directions
              </button>
            </Link>
            <Link to="/grid">
              <button className="backToGrid">Back to Main Grid</button>
            </Link>
          </div>

          <OtherControlButtons
            setGrid={setGrid}
            runningSim={runningSim}
            start={start}
            noStart={!start}
            numRows={numRows}
            numColumns={numColumns}
            generatedEmptyGrid={generatedEmptyGrid}
            setStart={setStart}
            startRef={startRef}
            speed={speed}
            select={select}
          />
        </div>
      </header>
    </div>
  );
}

export default OtherGrid;
