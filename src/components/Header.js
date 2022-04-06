import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import './Header.css'
import Box from '@mui/material/Box';
import { AppBar } from '@material-ui/core';
import { Card } from '@material-ui/core';

function Header() {
  return (
        <section className='top'>
            
            <Box className='Header'>
            <AppBar className='Header'> 
                <div className='h-icon'>
                <HomeIcon />
                </div>
                <ul className='links'>
                    <li className='list'>Playground Apps</li>
                    <li className='list'>demo</li>
                    <li className='list'>Uleval Technology</li>
                </ul>
            </AppBar>
            </Box>
           

                    <Box className='second-header'>
                    <AppBar>
                        <p>Demo mode, 10 days Left <span className='lanch'>Launch Service</span></p>
                    </AppBar>
                    </Box>
        </section>
            
        
  )
}

export default Header;