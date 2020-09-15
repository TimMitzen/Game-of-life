import React from 'react'
import Game from './Game'
import{ Link }from 'react-router-dom'
import Home from './Home'

const Links = ()=>{
   return(
      <>
      <Link to ='/' component={Home}/>
      <Link to = '/game' component={Game}/>
      </>
   )
}

export default Links