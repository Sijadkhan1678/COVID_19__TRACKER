import React,{Fragment,useContext,useEffect} from 'react';
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import appContext from '../../context/AppContext'
import Loading from '../layout/Loading'

const Cards = () => {
  
  const appcontext = useContext(appContext);
  const {data,country,countryData,getData} = appcontext;


useEffect(()=>{
 // if country property has Global value then call getData other wise countryData 
country === 'Global' ? getData() : countryData(country)
// eslint-disable-next-line
  },[country])
// if country has country name then assign data which is array and pick its last obj other wise exract global array 
  const summaryData = country === 'Global' ? data.global: data[data.length-1]

if (!summaryData)  return <Loading />
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
   { summaryData.confirmed  }
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
   { summaryData.recovered  }
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
   Last Update on { summaryData.date  }
   </Typography>
   </CardContent>
  </Card>
  </Fragment>
  )
}
export default Cards