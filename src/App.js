import React, {useState, useCallback, useRef} from 'react';
import Game from './components/Game'
import './App.css';
import {Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom'
import Routes from './routes/Routes'
import Home from './components/Home'
import produce from 'immer'

const numRows = 50
const numColumns = 50
function App() {
  const [grid, setGrid ] = useState(()=>{
    const rows = [];
    for (let i = 0; i < numRows; i++){
      rows.push(Array.from(Array(numColumns), ()=>0))
    }
    return rows
  })
  const [start, setStart] = useState(false)
  const startRef = useRef(start)
  startRef.current = start
  const runningSim = useCallback(() =>{
    if(!startRef.current){
      return
    }

    setTimeout(runningSim,1000)
  }, [])
  
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <button onClick={
        ()=>{
          setStart(!start)
        }
      }>
      {start ? 'stop' : 'Start'}</button>
      <Routes/>
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
           
            width: 20, height: 20, 
            backgroundColor: grid[rIndex][cIndex] ? 'pink':undefined, border: 'solid 1px black' }}/>
          ))}
      </div>
   
       
        
      
      </header>
    </div>
    </Router>
  );
}

export default App;
