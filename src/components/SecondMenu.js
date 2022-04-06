import React from 'react';
import { Card, Box } from '@mui/material';
import { CardContent, Typography } from '@material-ui/core';




function SecondMenu() {
  return (
    <Card >
        <Box sx={{mt:2, mb:-7, p:2, display: 'flex' }}>
        <CardContent>
            <Typography>
                <h3>Demo mode, 10 days Left <span>Launch Service</span></h3>
            </Typography>
        </CardContent>
        </Box>
    </Card>
  )
}

export default SecondMenu;