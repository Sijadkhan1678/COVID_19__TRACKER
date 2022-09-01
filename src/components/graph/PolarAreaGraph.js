import React from 'react';
import {Chart} from 'react-chartjs-2'
import 'chart.js/auto'
import Box from '@mui/material/Box'

const PolarAreaGraph = ({data}) => {
  
   return(
     
       <Box sx={{
         width:'87%',
         mx:'auto' 
       }}>
       <Chart
        type= 'polarArea'
        data={data}
       />
       </Box>
       
     )
  
}

export default PolarAreaGraph;