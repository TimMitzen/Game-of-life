import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Rules from '../components/Rules'
import Home from '../components/Home'
import Grid from '../components/Grid'

const Routes = () =>{
   return(
      <Switch>
         <Route exact path ='/' component={Home}/>
         <Route path ='/grid' component={Grid}/>
         <Route path ='/rules' component={Rules}/>
      </Switch>
   )
}
export default Routes