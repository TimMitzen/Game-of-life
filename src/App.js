import React, {useState, useCallback, useRef} from 'react';
import Home from './components/Home'
import Grid from './components/Grid'
import './App.css';
import {Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom'
import Routes from './routes/Routes'

function App(){
  return(
    <div>
    <Router>
    <Routes/>
    </Router>
    </div>
  )

}
export default App;