import React,{Fragment} from 'react';
import {Box,styled,Typography} from '@mui/material'
import Cards from './Cards'


const BoxContainer = styled(Box) ((theme)=>(
  {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '30px',
    flexGrow: '1',
    textAlign: 'center',
    gap: '13px'
    
  }))
  
const CardContainer = () => {

 return(
   <Fragment>
  <Typography variant='h4' sx={{
                   mt:4, 
                   py:1,               
                   fontWeight:'400',
                   fontSize: '1.3em'
                     }}>
   Covid Global Summary
   </Typography>
   <BoxContainer >
    
    <Cards />
  
    </BoxContainer>
    </Fragment>
   )
  
}

export default CardContainer
