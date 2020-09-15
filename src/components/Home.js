import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
const Home = () => {
   return(
      <div>
         <h1>Tim's Conway Game of Life</h1>
         
         <Link to = '/game'>
         <button className='enter'>Click to Enter</button>
         </Link>
      </div>
   )
}

export default Home