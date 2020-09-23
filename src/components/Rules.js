import React from "react";
import {Link} from 'react-router-dom'
const Rules = () => {
  return (
     <div className ='rules'>
   
    
         <div className="rulesBox">
            <h2 className ='gameRules'>Conway Game of life Rules</h2>
        <ul>1.Any live cell with fewer than two live neighbors dies, as if by under
        population.</ul>
      
      
        
       <ul>2.Any live cell with two or three live neighbors lives on to the next
        generation.</ul> 
      
      
       <ul> 3.Any live cell with more than three live neighbors dies, as if by
        overpopulation.</ul>
     
      
       <ul>4.Any dead cell with exactly three live neighbors becomes a live cell, as
        if by reproduction.</ul> 
        <h3 className='btn-direction'>Buttons Directions</h3>
        <ul>Random button gives a random game</ul>
             <ul>Start Button, starts the game</ul>
             <ul>Start becomes the stop button</ul>
             <ul>Speed sets the speed of the game, default is 2 seconds</ul>
             <ul>Clear button clears the screen</ul>
             <ul>Modes gives you different games</ul>
        </div>
        <Link to = '/grid'>
         <button className='back-to-grid'>Back to game</button>
         </Link>
    
    </div>
  );
};
export default Rules;