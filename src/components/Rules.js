import React from "react";

const Rules = () => {
  return (
     <div className ='rules'>
   
    
         <div>
        <ul>1.Any live cell with fewer than two live neighbors dies, as if by under
        population.</ul>
      
      
        
       <ul>2.Any live cell with two or three live neighbors lives on to the next
        generation.</ul> 
      
      
       <ul> 3.Any live cell with more than three live neighbors dies, as if by
        overpopulation.</ul>
     
      
       <ul>4.Any dead cell with exactly three live neighbors becomes a live cell, as
        if by reproduction.</ul> 
        </div>
    
    </div>
  );
};
export default Rules;