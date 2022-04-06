import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Divider } from '@mui/material';
import { makeStyles } from '@mui/material';
import { CssBaseline } from '@mui/material';
import  Draw from './Draw.js';
import SecondMenu from './SecondMenu.js';
import { Stack } from '@mui/material';
import './Dashboard.css';
import Svg from './SvgCard.js';




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Dashboard({children}) {
 

  return (
    <div>
      <Box sx={{display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} className='appbar'>
        <Toolbar className='appbar'>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={3}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" fontSize={10} marginLeft={3} color="inherit" component="div">
            Playground Apps
          </Typography>
          <Typography variant="h6" fontSize={10} marginLeft={3} color="inherit" component="div">
            demo
          </Typography>
          <Typography variant="h6" fontSize={10} marginLeft={3} color="inherit" component="div">
            Uleval Technology
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Stack>
        </Toolbar>
      </AppBar>
      </Box>


      <Box >
      <SecondMenu />
      </Box>


      

    
      <div className='children'>
        {children}
      </div>
      

      
      
    </div>
  )
}

export default Dashboard;