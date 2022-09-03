import React,{useState,useContext} from 'react';
import Stack from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import BarGraph from './BarGraph';
import PolarAreaGraph from './PolarAreaGraph'
import LineGraph from './LineGraph';
import GraphSelector from './GraphSelector'
import appContext  from '../../context/AppContext';

const GraphContainer = () => {
  
  const [graph,setGraph] = useState('bar')
  const appcontext = useContext(appContext);
  const {country,data} = appcontext;
  const {confirmed,recovered,deaths} = country === 'Global' ? data.global : data[data.length-1]
  let graphData = {
     labels: ['Confirmed','Recovered','Deaths'],
     datasets: [{
       label: 'Patients Report',
       data : [confirmed,recovered,deaths],
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
       {graph === 'bar' ? <BarGraph data={graphData} /> : <PolarAreaGraph data={graphData} /> }
       </Paper>
      </Stack>
     )
  
}

export default GraphContainer;