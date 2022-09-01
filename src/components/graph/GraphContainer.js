import React,{useState} from 'react';
import Stack from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import BarGraph from './BarGraph';
import PolarAreaGraph from './PolarAreaGraph'
import LineGraph from './LineGraph';
import GraphSelector from './GraphSelector'

const GraphContainer = () => {
  const [graph,setGraph] = useState('bar')
  
  let data = {
     labels: ['Confirmed','Recovered','Deaths'],
     datasets: [{
       label: 'Cases Report',
       data : [300,500,100],
       backgroundColor: ['#69FFF1','#F75C03','#D90368']
      } ]
  } 
  
  
   return(
      <Stack >
      <Paper elevation={5}>
      <LineGraph /> 
      </Paper>
      <Paper elevation={6} width='100%'>
       <GraphSelector graph={graph} 
       setGraph={setGraph}/>
       {graph === 'bar' ? <BarGraph data={data} /> : <PolarAreaGraph data={data} /> }
       </Paper>
      </Stack>
     )
  
}

export default GraphContainer;