import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard.js';


import Svg from './components/SvgCard.js';
import { Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Module from './components/Module';


function App() {
  return (
    <div className="App">
      <Module />
    </div>
  );
}

export default App;
