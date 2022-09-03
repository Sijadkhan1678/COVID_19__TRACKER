import React,{Fragment,useContext} from 'react';
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import appContext from '../../context/AppContext'


const Cards = () => {
  
  const appcontext = useContext(appContext);
  const {data,country,countryData,getData} = appcontext
  country === 'Global' ? getData() : countryData()
  const summaryData = country === 'Global' ? data.global: data[data.length-1]
  
  return (
    
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
   { summaryData.confirmed }
   </Typography>
   <Typography variant='h6' mt={1} fontWeight='400' fontSize='0.8em'>
   Last Update on { summaryData.date }
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
   { summaryData.recovered }
   </Typography>
   <Typography variant='h6' mt={1} fontWeight='400' fontSize='0.8em'>
   Last Update on {summaryData.date}
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
    { summaryData.deaths }
   </Typography>
   <Typography variant='h6' mt={1} fontWeight='400' fontSize='0.8em'>
   Last Update on { summaryData.date }
   </Typography>
   </CardContent>
  </Card>
  </Fragment>
  )
}
export default Cards