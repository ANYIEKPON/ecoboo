import React from 'react'
import Dashboard from './Dashboard';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import Draw from './Draw';
import SvgCard from './SvgCard';
import { ThemeProvider } from 'styled-components';




function Module() {
  return (
    <div>
        <Dashboard> 
  
            <Grid item xs={2}>
                <Box><Draw /></Box>
            </Grid> 
             <Grid item xs={10}>
                <SvgCard />
            </Grid>


        </Dashboard>
    </div>
  )
}

export default Module;