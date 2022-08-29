import React,{useState} from 'react';
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack'

const CountrySelector = () => {
  
const [country,setcountry]= useState("global")

const handleChange = (e) =>{
setcountry(e.target.value)
 
}

return(
  
<Stack mt={3}  direction='column' justifyContent="center">
<Typography variant='h6' sx={{textAlign:'center',mb:4,fontWeight:400}} > Selct country</Typography>
<FormControl sx={{width:'50%' ,alignSelf:'center'}}>
<InputLabel id="demo-simple-select-label" mb='5'>Select Country</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
value={country}
onChange={handleChange}
>
<MenuItem value={country}>Global</MenuItem>
<MenuItem value='india'>India</MenuItem>
<MenuItem value='pakistan'>pakistan</MenuItem>
<MenuItem value='japan'>japan</MenuItem>
</Select>
</FormControl>

</Stack>
)
}

export default CountrySelector;