import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Game from '../components/Game'
import Home from '../components/Home'
import Grid from '../components/Grid'

const Routes = () =>{
   return(
      <Switch>
         <Route exact path ='/' component={Home}/>
         <Route path ='/grid' component={Grid}/>
      </Switch>
   )
}
export default Routes