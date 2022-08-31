import React from 'react';
import {Chart} from 'react-chartjs-2'
import 'chart.js/auto'
import Box from '@mui/material/Box';

const LineGraph = () => {

  let data = {
labels: [],
     datasets: [{
       label: 'Cases Report',
       data : [],
backgroundColor: ''

}]}

   return(
     <div>
     <Box sx={{
     width:'89%',mx: 'auto',mt:3,
     bgcolor:'white',borderRadius:2
       
     }}>
      <Chart type='line' data={data} />
     </Box>
     </div>
     )
  
}

export default LineGraph;