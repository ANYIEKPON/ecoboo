import React from 'react'
import Header from './Header';
import Draw from './Draw';
import Dashboard from './Dashboard';
import { Grid } from '@material-ui/core';
import Svg from './Svg';
import './Layout';

function Layout() {
  return (
    <div>
        <Dashboard> 
  
            <Grid item xs={3}>
              <Box><Draw /></Box>
            </Grid>
          {/* <Grid item xs={9}>
              <Box>
              <Svg />
              </Box>
          </Grid> */}


        </Dashboard>
    </div>
  )
}

export default Layout;