import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Game from '../components/Game'
import Home from '../components/Home'

const Routes = () =>{
   return(
      <Switch>
         <Route exact path ='/' component={Home}/>
         <Route path ='/game' component={Game}/>
      </Switch>
   )
}
export default Routes