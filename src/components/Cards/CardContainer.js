import React,{Fragment,Suspense} from 'react';
import {Box,styled,Typography} from '@mui/material'
import Cards from './Cards'
import Loading  from '../layout/Loading'

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
    <Suspense fallback={<Loading />}>
    <Cards />
    </Suspense>
    </BoxContainer>
    </Fragment>
   )
  
}

export default CardContainer
