import React,{Fragment} from 'react';
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'


const Cards = () => {
  return(
    <Fragment>
  <Card sx={{maxWidth:180}} >
  <CardContent >
  <Typography variant='p' >
    Confirmed Cases
  </Typography>
   <Typography variant='h5' mt={1}  >
   123,227,11
   </Typography>
   </CardContent>
  </Card>
  
  <Card sx={{maxWidth:180}}  >
  <CardContent >
  <Typography variant='p' color='green'>
    Recovered Cases
  </Typography>
   <Typography variant='h5' mt={2}  >
   123,227,11
   </Typography>
   </CardContent>
  </Card>
  
  <Card sx={{maxWidth:180}} bgcolor='red'  >
  <CardContent >
  <Typography variant='p' color='error'>
    Deaths Cases
  </Typography>
   <Typography variant='h5' mt={2}  >
   123,227,11
   </Typography>
   </CardContent>
  </Card>
  
 <Card sx={{maxWidth:180}} >
  <CardContent >
  <Typography variant='p' >
    Confirmed Cases
  </Typography>
   <Typography variant='h5' mt={1}  >
   123,227,11
   </Typography>
   </CardContent>
  </Card>
  </Fragment>
  )
}
export default Cards