import React from 'react';
import {Box,styled} from '@mui/material'
import Cards from './Cards'

const BoxContainer = styled(Box) ((theme)=>(
  {
    display: 'flex',
   /* flexDirection: 'column', */
    gap: '15px',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginTop: '28px',
    flexGrow: '1',
    textAlign: 'center',
    
    
    

  }))
  
const CardContainer = () => {

 return(
   <BoxContainer >
    <Cards />
    </BoxContainer>
   )
  
}

export default CardContainer
