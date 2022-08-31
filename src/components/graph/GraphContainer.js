import React,{useState} from 'react';
import Stack from '@mui/material/Grid'
import BarGraph from './BarGraph';
import PolarAreaGraph from './PolarAreaGraph'
import LineGraph from './LineGraph';
import GraphSelector from './GraphSelector'

const GraphContainer = () => {
  const [graph,setGraph] = useState('bar')
  console.log('graph container',graph)
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
       
      <LineGraph /> 
       <GraphSelector graph={graph} 
       setGraph={setGraph}/>
       {graph === 'bar' ? <BarGraph data={data} /> : <PolarAreaGraph data={data} /> }
       
      </Stack>
     )
  
}

export default GraphContainer;