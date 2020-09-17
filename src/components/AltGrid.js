import React, { useState, useCallback, useRef } from "react";
import "../App.css";


const numRows = 40;
const numColumns = 40;
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
export const ten = () => {
  const rows = [];
  for (let row = 0; row < numRows; row++) {
    rows.push(Array(numColumns).fill(0));
    if (row === parseInt(numRows / 2)) {
      for (let col = 10; col < 21; col++) {
        rows[row][col] = 1;
      }
    }
  }
  return rows;
};

export const explode = () => {
  const rows = [];
  for (let row = 0; row < rowNum; row++) {
    rows.push(Array(numColumn).fill(0));
  }
  rows[13][13] = 1;
  rows[12][13] = 1;
  rows[11][13] = 1;
  rows[10][13] = 1;
  rows[9][13] = 1;
  rows[9][15] = 1;
  rows[13][17] = 1;
  rows[13][15] = 1;
  rows[12][17] = 1;
  rows[11][17] = 1;
  rows[10][17] = 1;
  rows[9][17] = 1;
  return rows;
};

export const spaceship = () =>{
   const rows = []
   for (let row = 0; row < rowNum; row++){
      rows.push(Array(numColumns).fill(0))
   }
  rows[13][13] = 1;
  rows[11][13] = 1;
  rows[13][16] = 1;
  rows[12][17] = 1;
  rows[11][17] = 1;
  rows[10][17] = 1;
  rows[10][16] = 1;
  rows[10][15] = 1;
  rows[10][14] = 1;
  return rows;
}

export const Default = () => {
   const rows = []
   for (let row = 0; row < rowNum; row++){
      rows.push(Array(numColumns).fill(0))
   }
   return rows
}
export const Grids = (value) =>{
   switch (value){
      case ten:
         return ten()
      case explode:
         return explode()
      case spaceship:
         return spaceship()
      default:
         return Grids()

   }
}
