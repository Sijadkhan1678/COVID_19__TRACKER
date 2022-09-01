import React,{Fragment} from 'react';
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'



const Cards = () => {
  return(
    <Fragment>
 
  <Card sx={{
  maxWidth:300,
  width:{xs:'88%',s:'60%',sm:'28%'}
    
  }} >
  <CardContent >
  <Typography variant='p' color='tomato' >
    Confirmed Cases
  </Typography>
   <Typography variant='h5' mt={1.5}  >
   123,227,112
   </Typography>
   <Typography variant='h6' mt={1} fontWeight='400' fontSize='0.8em'>
   Last Update on 2 aug 2022
   </Typography>
   </CardContent>
  </Card>
  
  <Card sx={{
  maxWidth:300,
  width:{xs:'88%',s:'60%',sm:'28%'}
    
  }}>
  <CardContent >
  <Typography variant='p' color='green'>
    Recovered Cases
  </Typography>
   <Typography variant='h5' mt={1.5}  >
   123,227,111
   </Typography>
   <Typography variant='h6' mt={1} fontWeight='400' fontSize='0.8em'>
   Last Update on 2 aug 2022
   </Typography>
   </CardContent>
  </Card>
  
  <Card sx={{
  maxWidth:300,
  width:{xs:'88%',s:'60%',sm:'28%'}
    
  }} bgcolor='red'  >
  <CardContent >
  <Typography variant='p' color='error' >
    Deaths Cases
  </Typography>
   <Typography variant='h5' mt={1.5}  >
   123,227,111
   </Typography>
   <Typography variant='h6' mt={1} fontWeight='400' fontSize='0.8em'>
   Last Update on 2 aug 2022
   </Typography>
   </CardContent>
  </Card>
  

  </Fragment>
  )
}
export default Cards