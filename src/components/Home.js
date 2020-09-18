import React from 'react'
import {Link} from 'react-router-dom'
import Grid from './Grid'
import '../App.css'
const Home = () => {
   return(
      <div className = "App">
         <h1 className ='App-header'>Tim's Conway Game of Life</h1>
         
         <Link to = '/grid'>
         <button className='enter'>Click to Enter</button>
         </Link>
      </div>
   )
}

export default Home