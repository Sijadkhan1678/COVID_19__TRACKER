import React from 'react';
import {Chart} from 'react-chartjs-2'
import 'chart.js/auto'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
const LineGraph = () => {

  let data = {
labels: [],
     datasets: [{
       label: 'Cases Report',
       data : [],
backgroundColor: ['red','cyan']

}]}

   return(
     
     <Paper bgcolor='red'>
     <Box sx={{
     width:'97%',mx: 'auto',mt:3,
     bgcolor:'white',borderRadius:3,
     py:2
       
     }}>
      <Chart type='line' data={data} />
     </Box>
     </Paper>
     
     )
  
}

export default LineGraph;