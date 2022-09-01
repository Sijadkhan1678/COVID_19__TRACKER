import React  from 'react';
import {Chart} from 'react-chartjs-2';
import 'chart.js/auto'
import Box from '@mui/material/Box'
const BarGraph = ({data}) => {
  
   return(
     
       <Box width='90%' mx='auto'>
       <Chart
        type= 'bar'
        data ={data}
      
       
       />
       </Box>
       
     )
  
}

export default BarGraph;