import React,{useContext} from 'react';
import {Chart} from 'react-chartjs-2'
import 'chart.js/auto'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import appContext from '../../context/AppContext';

const LineGraph = () => {
   
   const appcontext = useContext(appContext);
   const {data,country} = appcontext;
   const dailyData = country === 'Global' ? data.dailyData : data
  let graphData = {
labels: dailyData.map(data => data.confirmed),
     datasets: [{
       label: 'Patient Report',
       data : dailyData.map(data => data.date),
backgroundColor: ['red','cyan']

}]}

   return(
     
     <Paper bgcolor='red'>
     <Box sx={{
     width:'97%',mx: 'auto',mt:3,
     bgcolor:'white',borderRadius:3,
     py:2
       
     }}>
      <Chart type='line' data={graphData} />
     </Box>
     </Paper>
     
     )
  
}

export default LineGraph;