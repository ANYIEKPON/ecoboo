import { Card, CardContent, Grid } from '@material-ui/core';
import React from 'react'
import './SvgCard.css'


function SvgCard() {
  return (
    <div >
    <Card>
      <CardContent className='dash'>
        Dashboard
      </CardContent>
    </Card>
    
      <Card className='card'>
        <CardContent className='content'>
        <div  className="box">
                <svg>
                    <circle cx="70" cy="70" r="60" className="color1"><h3>1</h3></circle>
                </svg> 
                <h4>Active</h4>
        </div>
       
        </CardContent>
        <CardContent className='content1'>
        <div  className="box">
                <svg>
                    <circle cx="70" cy="70" r="60" className="color1"><h3>1</h3></circle>
                </svg> 
                <h4>Invited</h4>
        </div>
        </CardContent>
        <CardContent className='content1'>
        <div  className="box">
                <svg>
                    <circle cx="70" cy="70" r="60" className="color1"><h3>1</h3></circle>
                </svg> 
                <h4>Incomplete registration</h4>
        </div>
        </CardContent>
        <CardContent className='content1'>
        <div  className="box">
                <svg>
                    <circle cx="70" cy="70" r="60" className="color1"><h3>1</h3></circle>
                </svg> 
                <h4>Waiting for activation</h4>
        </div>
        </CardContent>
        <CardContent className='content1'>
        <div  className="box">
                <svg>
                    <circle cx="70" cy="70" r="60" className="color1"><h3>1</h3></circle>
                </svg> 
                <h4>Suspended</h4>
        </div>
        </CardContent>
        </Card> 




    <Grid item xs={4}>
        <Card className='card1'>
        <CardContent className='side4'>
        <div  className="box-side">
                <svg>
                    <circle cx="70" cy="70" r="60" className="color1"><h3>1</h3></circle>
                </svg> 
                <h4 className='box-side4'>Active</h4>
        </div>
       
        </CardContent>
        <CardContent className='side5'>
        <div  className="box-side">
                <svg>
                    <circle cx="70" cy="70" r="60" className="color1"><h3>1</h3></circle>
                </svg> 
                <h4 className='box-side4'>Invited</h4>
        </div>
        </CardContent>
        <CardContent className='side6'>
        <div  className="box-side">
                <svg>
                    <circle cx="70" cy="70" r="60" className="color1"><h3>1</h3></circle>
                </svg> 
                <h5 className='box-side45'>Incomplete registration</h5>
        </div>
        </CardContent>
        </Card>
      </Grid>

    </div>
  )
}

export default SvgCard;