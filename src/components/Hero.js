import React from 'react';
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia'
import hero from './images/Hero.jpg'
const Hero = () => {
  return(
    <Grid  container mt={4} >
    <CardMedia component='img'
     
     height='250'
     width='100%'
     image={hero} />
    </Grid>
    )
  
}
export default Hero