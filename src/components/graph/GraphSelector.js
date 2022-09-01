import React from 'react';
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack'

const GraphSelector = ({graph,setGraph}) => {
  


const handleChange = (e) =>{
setGraph(e.target.value)
console.log('in selector',e.target.value)
 
}

return(
 <Stack mt={4} mb={3} direction='row' justifyContent="space-around" alignItems="center">
  <Typography variant='h6' sx={{
  fontWeight:300,
  textAlign:'center'
    
  }} > Select Graph</Typography>
  <FormControl sx={{width:'44%',mt:2}}>
  <InputLabel id="demo-simple-select-label">Graph type</InputLabel>
  <Select
    
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={graph}
    onChange={handleChange}
>
  <MenuItem value='bar'>Bar Graph</MenuItem>
  <MenuItem value='PolarArea'>PolarArea Graph </MenuItem>

  </Select>
</FormControl>

 </Stack>
)
}

export default GraphSelector;