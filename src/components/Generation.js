import React from 'react'
import './Home.css'
const Generation = ({generation}) => {
   return(
      <div>
        <div className='generation'>Generation: {generation.current}</div> 
      </div>
   )
}

export default Generation;