import React, {useState, useCallback, useRef} from 'react';

import '../App.css';
import produce from 'immer'
import { Router, Link } from 'react-router-dom';

const numRows = 40
const numColumns = 40
const operations = [
  [0,1],
  [0,-1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1,-1],
  [1,0],
  [-1,0],

]
const generatedEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++){
    rows.push(Array.from(Array(numColumns), ()=>0))
  }
  return rows
}

function Grid() {
  const [grid, setGrid ] = useState(()=>{
    return generatedEmptyGrid()
  })
  const [start, setStart] = useState(false)
  const startRef = useRef(start)
  startRef.current = start
  const runningSim = useCallback(() =>{
    if(!startRef.current){
      return
    }
    setGrid((grid)=>{
      return produce(grid,gridCopy=>{
        for (let r = 0; r < numRows; r++){
          for(let c = 0; c < numColumns; c++){
            let neighbors = 0;
            operations.forEach(( [x,y])=>{
              const newR = r + x
              const newC = c + y
              if (newR >= 0 && newR < numRows && newC >=0 && newC < numColumns){
                neighbors += grid[newR][newC]
              }
            } )
            if (neighbors < 2 || neighbors > 3){
              gridCopy[r][c] = 0
            } else if(grid[r][c]===0 && neighbors===3){
              gridCopy[r][c] = 1
            }
          }
        }
      })
    })
   

    setTimeout(runningSim,100)
  }, [])
  
  return (
   
    <div className="App">
      <header className="App-header">
      <div className='btn-group'>
      <button className ='start-stop' onClick={
        ()=>{
          setStart(!start)
          if(!start)
          {
            startRef.current = true
            runningSim()}
        }
      }>
      {start ? 'Stop' : 'Start'}</button>
      <button className='clear' onClick={()=>{
        setGrid(generatedEmptyGrid())

      }}>Clear</button>

      <button className='random' onClick={()=>{
        const rows = [];
        for (let i = 0; i < numRows; i++){
          rows.push(Array.from(Array(numColumns), () => Math.random() > 0.5 ? 1 : 0))
        }
        setGrid(rows)
      }}>Random</button>
      </div>
       <div style ={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numColumns}, 20px)`
       }}>
     
        {grid.map((rows,rIndex)=> rows.map((col, cIndex) => 
          <div key = {`${rIndex}-${cIndex}`} 
          onClick = {()=>{
          const newGrid = produce(grid,gridCopy =>{
            gridCopy[rIndex][cIndex] = grid[rIndex][cIndex] ? 0 :  1
          } )
          setGrid(newGrid)
          
          }}
          style={{
           
            width: '19px', height: '19px', 
            backgroundColor: grid[rIndex][cIndex] ? 'red':undefined, border: 'solid 1px green' }}/>
          ))}
          <Link to ='/'>
          <button className='homeButton'>Home</button>
          </Link>
          <Link to = '/rules'>
          <button className = 'rulesButton'>Click for rules</button>
          </Link>
      </div>
      
   
       
        
      
      </header>
    </div> 
  );
}

export default Grid;
