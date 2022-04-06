import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'; 
import './Draw.css'

const drawerWidth = 240;

function Draw() {
  return (
    <div className='drawer'>
      <Drawer 
      variant="permanent"
      anchor='left'
        sx={{
          display: { xs: 'block', sm: 'none' },
             '& .MuiDrawer-paper': { width: drawerWidth },
        }}
        
        >
        <Toolbar />
        <Divider />
            <ul className='nav-links'>
              <li className='links'>Dashboard</li>
              <li className='links'> Company settings</li>
              <li className='links'>Company Management</li>
            </ul>
        
        </Drawer>
    </div>
  )
}

export default Draw;