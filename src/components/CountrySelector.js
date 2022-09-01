import React,{useState} from 'react';
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper'

const CountrySelector = () => {
  
const [country,setcountry]= useState("Global")

const handleChange = (e) =>{
setcountry(e.target.value)
 
}

return(
<Paper elevation={6} sx={{width:'100%',py:2,mt:5}}>  
<Stack   direction='row' justifyContent="space-around" alignItems='center'>
<Typography variant='h6' sx={{
            textAlign:'center',
            fontWeight:300
  
}} > Selct Country</Typography>
<FormControl sx={{width:'35%'}}>
<InputLabel id="demo-simple-select-label" >Select Country</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
value={country}
onChange={handleChange}
>
<MenuItem value='Global'>Global</MenuItem>
<MenuItem value='india'>India</MenuItem>
<MenuItem value='pakistan'>pakistan</MenuItem>
<MenuItem value='japan'>japan</MenuItem>
</Select>
</FormControl>

</Stack>
</Paper>
)
}

export default CountrySelector;