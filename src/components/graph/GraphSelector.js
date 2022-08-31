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
 <Stack mt={4} mb={4} direction='column' justifyContent="center">
  <Typography variant='h6' sx={{ml:3,mb:2,fontWeight:400}} > Select Graph</Typography>
  <FormControl sx={{width:'50%',alignSelf:'center'}}>
  <InputLabel id="demo-simple-select-label" mb='5'>Graph type</InputLabel>
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