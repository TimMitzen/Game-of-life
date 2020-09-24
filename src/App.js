import React from 'react';

import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes/Routes'

function App(){
  return(
    <div style={{backgroundColor: "lightblue"}}>
    <Router>
    <Routes/>
    </Router>
    <div>
      hello
    </div>
    </div>
  )

}
export default App;