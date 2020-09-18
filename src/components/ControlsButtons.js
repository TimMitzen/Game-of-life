import React, {useState} from 'react'
import Grid from './Grid'
import {Link} from 'react-router-dom'
import './Home.css'
const ControlButtons =({
setGrid,setStart,start,startRef,numColumns,numRows,generatedEmptyGrid,runningSim, select
})=>{
   
   const [controls, setControls] = useState(true)
   const [run, setRun] = useState(false)
  

   return(
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
      <Link to = '/rules'>
          <button className = 'rulesButton'>Click for rules and directions</button>
          </Link>
      <select className='speed' onChange = {event=>{
         select(event)}}>
         <option hidden>Speed</option>
         <option value='2000'>2 seconds</option>
         <option value='1000'>1 seconds</option>
         <option value ='1'>100 milliseconds</option>
         </select>
     
      </div>
   )
}
export default ControlButtons
